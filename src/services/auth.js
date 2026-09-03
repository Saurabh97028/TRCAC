import { db } from './db.js';

const SESSION_KEY = 'CTPMS_ACTIVE_SESSION';

class AuthService {
  constructor() {
    this.currentUser = this.loadSession();
  }

  loadSession() {
    try {
      const stored = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch (e) {
      return null;
    }
  }

  login(email, password) {
    const users = db.getTable('USER');
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email credentials or password.' };
    }

    if (!user.is_active) {
      return { success: false, message: 'Account is deactivated. Please contact Administrator.' };
    }

    const roles = db.getTable('ROLE');
    const roleObj = roles.find(r => r.role_id === user.role_id) || {};

    let studentProfile = null;
    if (user.role_id === 3) {
      studentProfile = db.getTable('STUDENT').find(s => s.user_id === user.user_id) || null;
    }

    const sessionUser = {
      user_id: user.user_id,
      name: user.name,
      email: user.email,
      role_id: user.role_id,
      role_name: roleObj.role_name || 'User',
      student_id: studentProfile ? studentProfile.student_id : null,
      login_time: new Date().toISOString()
    };

    // Record Security Log
    const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
    const logEntry = db.insertRow('SECURITY_LOG', {
      user_id: user.user_id,
      entry_time: nowStr,
      exit_time: null,
      status_event: 'Success Login'
    });

    const logId = logEntry.security_log_id || logEntry.log_id || logEntry.id;
    sessionUser.current_log_id = logId;
    this.currentUser = sessionUser;
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));

    return { success: true, user: sessionUser };
  }

  logout() {
    if (this.currentUser) {
      const nowStr = new Date().toISOString().replace('T', ' ').substring(0, 19);
      let logId = this.currentUser.current_log_id;

      if (!logId) {
        const logs = db.getTable('SECURITY_LOG');
        const openLog = [...logs].reverse().find(l => l.user_id === this.currentUser.user_id && !l.exit_time);
        if (openLog) {
          logId = openLog.security_log_id || openLog.log_id;
        }
      }

      if (logId) {
        db.updateRow('SECURITY_LOG', logId, {
          exit_time: nowStr,
          status_event: 'Logout'
        });
      }
    }

    this.currentUser = null;
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }

  switchRole(roleId) {
    const users = db.getTable('USER');
    const user = users.find(u => u.role_id === roleId);
    if (user) {
      return this.login(user.email, user.password);
    }
    return { success: false, message: 'User for selected role not found.' };
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}

export const auth = new AuthService();
