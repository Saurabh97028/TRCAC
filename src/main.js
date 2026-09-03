import { auth } from './services/auth.js';
import { db } from './services/db.js';
import { renderLogin } from './views/login.js';
import { renderDashboard } from './views/dashboard.js';
import { renderUserManagement } from './views/userManagement.js';
import { renderStudentManagement } from './views/studentManagement.js';
import { renderCompanyManagement } from './views/companyManagement.js';
import { renderJobPostings } from './views/jobPostings.js';
import { renderApplications } from './views/applications.js';
import { renderInterviewSchedule } from './views/interviewSchedule.js';
import { renderTrainingPrograms } from './views/trainingPrograms.js';
import { renderPlacementRecords } from './views/placementRecords.js';
import { renderReports } from './views/reports.js';
import { renderProfileSettings } from './views/profileSettings.js';

// Page Routing Table per SRS 7.2
const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: 'bi-grid-1x2', roles: [1, 2, 3, 4], render: renderDashboard },
  { id: 'users', label: 'User Management', icon: 'bi-shield-person', roles: [1], render: renderUserManagement },
  { id: 'students', label: 'Student Management', icon: 'bi-mortarboard', roles: [1, 2], render: renderStudentManagement },
  { id: 'companies', label: 'Company Management', icon: 'bi-building', roles: [1, 2], render: renderCompanyManagement },
  { id: 'jobs', label: 'Job Postings', icon: 'bi-briefcase', roles: [1, 2, 3, 4], render: renderJobPostings },
  { id: 'applications', label: 'Applications', icon: 'bi-file-earmark-check', roles: [1, 2, 3, 4], render: renderApplications },
  { id: 'interviews', label: 'Interview Schedule', icon: 'bi-calendar-event', roles: [1, 2, 3, 4], render: renderInterviewSchedule },
  { id: 'trainings', label: 'Training Programs', icon: 'bi-award', roles: [1, 2, 3, 4], render: renderTrainingPrograms },
  { id: 'placements', label: 'Placement Records', icon: 'bi-journal-check', roles: [1, 2], render: renderPlacementRecords },
  { id: 'reports', label: 'Reports & Analytics', icon: 'bi-bar-chart-line', roles: [1, 2], render: renderReports },
  { id: 'profile', label: 'Profile & Settings', icon: 'bi-person-gear', roles: [1, 2, 3, 4], render: renderProfileSettings }
];

class App {
  constructor() {
    this.loginContainer = document.getElementById('login-view-container');
    this.appShell = document.getElementById('authenticated-shell');
    this.mainViewport = document.getElementById('main-viewport');
    this.sidebarNav = document.getElementById('sidebar-nav');
    this.sidebar = document.getElementById('sidebar');

    this.currentPage = 'dashboard';
    this.setupEventListeners();
    this.init();
  }

  init() {
    if (auth.isAuthenticated()) {
      this.showAppShell();
    } else {
      this.showLogin();
    }
  }

  showLogin() {
    this.appShell.classList.add('d-none');
    this.loginContainer.classList.remove('d-none');
    renderLogin(this.loginContainer, () => this.showAppShell());
  }

  showAppShell() {
    this.loginContainer.classList.add('d-none');
    this.appShell.classList.remove('d-none');
    this.updateUserHeader();
    this.buildSidebar();
    
    // Check URL hash or default to dashboard
    const hashPage = window.location.hash.replace('#', '');
    const validPage = NAV_ITEMS.find(item => item.id === hashPage);
    this.navigateTo(validPage ? hashPage : 'dashboard');
  }

  updateUserHeader() {
    const user = auth.getCurrentUser();
    if (!user) return;

    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-role-badge').textContent = user.role_name;
    document.getElementById('user-avatar').textContent = user.name.charAt(0).toUpperCase();

    // Update active role switcher buttons
    document.querySelectorAll('.active-role-btn').forEach(btn => {
      const rId = parseInt(btn.getAttribute('data-switch-role'));
      if (rId === user.role_id) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  buildSidebar() {
    const user = auth.getCurrentUser();
    if (!user) return;

    const allowedItems = NAV_ITEMS.filter(item => item.roles.includes(user.role_id));

    this.sidebarNav.innerHTML = allowedItems.map(item => `
      <a class="nav-link ${this.currentPage === item.id ? 'active' : ''}" href="#${item.id}" data-page="${item.id}">
        <i class="bi ${item.icon}"></i>
        <span>${item.label}</span>
      </a>
    `).join('');

    this.sidebarNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.getAttribute('data-page');
        this.navigateTo(pageId);
      });
    });
  }

  navigateTo(pageId) {
    const user = auth.getCurrentUser();
    const navItem = NAV_ITEMS.find(item => item.id === pageId);

    if (!navItem || !navItem.roles.includes(user.role_id)) {
      this.navigateTo('dashboard');
      return;
    }

    this.currentPage = pageId;
    window.location.hash = pageId;

    // Update Sidebar active styling
    this.sidebarNav.querySelectorAll('.nav-link').forEach(link => {
      if (link.getAttribute('data-page') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Render Page
    this.mainViewport.scrollTop = 0;
    navItem.render(this.mainViewport, (targetPage) => this.navigateTo(targetPage));

    // Auto-collapse sidebar on mobile screens after selecting a menu item
    if (window.innerWidth <= 768) {
      this.sidebar.classList.add('collapsed');
    }
  }

  setupEventListeners() {
    // Sidebar toggle
    document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
      this.sidebar.classList.toggle('collapsed');
    });

    // Logout
    document.getElementById('logout-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      auth.logout();
      this.showLogin();
    });

    // Quick Persona Role Switcher
    document.querySelectorAll('.active-role-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const rId = parseInt(btn.getAttribute('data-switch-role'));
        auth.switchRole(rId);
        this.showAppShell();
      });
    });

    // Security Log Viewer Modal
    document.getElementById('view-security-log-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      this.openSecurityLogModal();
    });

    // Window Hash Change
    window.addEventListener('hashchange', () => {
      const hashPage = window.location.hash.replace('#', '');
      if (hashPage && hashPage !== this.currentPage) {
        this.navigateTo(hashPage);
      }
    });
  }

  openSecurityLogModal() {
    const logs = db.getTable('SECURITY_LOG');
    const users = db.getTable('USER');

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Session Security Audit Log (SRS Section 5.1 & 8.10)';
    modalBody.innerHTML = `
      <div class="table-responsive" style="max-height: 400px;">
        <table class="table table-sm table-hover align-middle">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>User Name</th>
              <th>Entry Timestamp</th>
              <th>Exit Timestamp</th>
              <th>Event Type</th>
            </tr>
          </thead>
          <tbody>
            ${logs.slice().reverse().map(l => {
              const u = users.find(x => x.user_id === l.user_id) || {};
              return `
                <tr>
                  <td>#${l.log_id}</td>
                  <td class="fw-bold">${u.name || 'User #' + l.user_id}</td>
                  <td class="text-muted text-xs">${l.entry_time}</td>
                  <td class="text-muted text-xs">${l.exit_time || '<span class="badge bg-success-subtle text-success">Active Session</span>'}</td>
                  <td><span class="badge bg-primary-subtle text-primary">${l.status_event}</span></td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close Audit Log</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new App();
});
