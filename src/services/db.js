// CTPMS Relational Database Engine with Google Firebase Firestore Realtime Sync

import { isFirebaseConnected, syncCollectionToFirestore, fetchCollectionFromFirestore } from './firebase.js';

const DB_KEY = 'CTPMS_RELATIONAL_DATABASE_V1';

const DEFAULT_SEED_DATA = {
  ROLE: [
    { role_id: 1, role_name: 'Administrator' },
    { role_id: 2, role_name: 'TPO' },
    { role_id: 3, role_name: 'Student' },
    { role_id: 4, role_name: 'Company HR' }
  ],
  USER: [
    { user_id: 1, name: 'Admin Administrator', email: 'admin@trcac.edu.in', password: 'adminpassword123', role_id: 1, is_active: true },
    { user_id: 2, name: 'Prof. Saurabh Vishwakarma (TPO)', email: 'tpo@trcac.edu.in', password: 'tpopassword123', role_id: 2, is_active: true },
    { user_id: 3, name: 'Rahul Sharma', email: 'rahul.sharma@trcac.edu.in', password: 'studentpassword123', role_id: 3, is_active: true },
    { user_id: 4, name: 'Ananya Patel', email: 'ananya.patel@trcac.edu.in', password: 'studentpassword123', role_id: 3, is_active: true },
    { user_id: 5, name: 'Siddharth Verma', email: 'siddharth.v@trcac.edu.in', password: 'studentpassword123', role_id: 3, is_active: true },
    { user_id: 6, name: 'Neha Gupta', email: 'neha.gupta@trcac.edu.in', password: 'studentpassword123', role_id: 3, is_active: true },
    { user_id: 7, name: 'Vikram Singh', email: 'vikram.singh@trcac.edu.in', password: 'studentpassword123', role_id: 3, is_active: true },
    { user_id: 8, name: 'Priya Iyer (TCS HR)', email: 'priya.hr@tcs.com', password: 'hrpassword123', role_id: 4, is_active: true },
    { user_id: 9, name: 'Amitabh Joshi (Google HR)', email: 'ajoshi@google.com', password: 'hrpassword123', role_id: 4, is_active: true },
    { user_id: 10, name: 'Saurabh Vishwakarma (Admin)', email: 'cs63saurabh@gmail.com', password: 'S1a2u3r4', role_id: 1, is_active: true }
  ],
  STUDENT: [
    { student_id: 101, user_id: 3, roll_number: 'TRCAC2024CS001', branch: 'B.Sc. CS', cgpa: 8.90, skills: 'Python, Java, SQL, React, AWS', resume_url: 'resumes/rahul_sharma_cv.pdf', placement_status: 'Placed' },
    { student_id: 102, user_id: 4, roll_number: 'TRCAC2024CS002', branch: 'B.Sc. CS', cgpa: 9.45, skills: 'C++, Data Structures, System Design, Node.js', resume_url: 'resumes/ananya_patel_cv.pdf', placement_status: 'Unplaced' },
    { student_id: 103, user_id: 5, roll_number: 'TRCAC2024IT015', branch: 'B.Sc. IT', cgpa: 7.80, skills: 'HTML, CSS, JavaScript, PHP, MySQL', resume_url: 'resumes/siddharth_v_cv.pdf', placement_status: 'Unplaced' },
    { student_id: 104, user_id: 6, roll_number: 'TRCAC2024DS008', branch: 'B.Sc. Data Science', cgpa: 8.65, skills: 'Python, R, PowerBI, Machine Learning, SQL', resume_url: 'resumes/neha_gupta_cv.pdf', placement_status: 'Unplaced' },
    { student_id: 105, user_id: 7, roll_number: 'TRCAC2024CS045', branch: 'B.Sc. CS', cgpa: 6.75, skills: 'HTML, Java, SQL Basics', resume_url: 'resumes/vikram_s_cv.pdf', placement_status: 'Unplaced' }
  ],
  COMPANY: [
    { company_id: 201, company_name: 'Tata Consultancy Services (TCS)', sector: 'IT Services', location: 'Mumbai, MH', contact_email: 'priya.hr@tcs.com', website: 'https://www.tcs.com' },
    { company_id: 202, company_name: 'Infosys Limited', sector: 'IT & Cloud Services', location: 'Bengaluru / Mumbai', contact_email: 'campus@infosys.com', website: 'https://www.infosys.com' },
    { company_id: 203, company_name: 'Google India', sector: 'Software & Technology', location: 'Hyderabad / Bengaluru', contact_email: 'ajoshi@google.com', website: 'https://careers.google.com' },
    { company_id: 204, company_name: 'Deloitte India', sector: 'Consulting & Financial Advisory', location: 'Mumbai, MH', contact_email: 'hr@deloitte.com', website: 'https://www.deloitte.com' }
  ],
  JOB_POSTING: [
    { job_id: 301, company_id: 201, job_title: 'Software Engineer - TCS Ninja / Digital', description: 'Development and maintenance of enterprise cloud applications. Requires strong problem solving and programming skills.', min_cgpa: 7.00, eligible_branches: 'B.Sc. CS, B.Sc. IT, B.Sc. Data Science', ctc: 7.50, deadline: '2026-09-15', status: 'Open' },
    { job_id: 302, company_id: 203, job_title: 'Associate Software Engineer', description: 'Build scalable software services powering global Google Infrastructure. High algorithmic proficiency required.', min_cgpa: 8.50, eligible_branches: 'B.Sc. CS, B.Sc. IT', ctc: 18.00, deadline: '2026-09-30', status: 'Open' },
    { job_id: 303, company_id: 204, job_title: 'Risk & Analytics Associate', description: 'Perform technical risk modeling, data analytics, and audit compliance for enterprise clients.', min_cgpa: 7.50, eligible_branches: 'B.Sc. CS, B.Sc. IT, B.Sc. Data Science', ctc: 8.75, deadline: '2026-08-30', status: 'Open' },
    { job_id: 304, company_id: 202, job_title: 'Specialist Programmer', description: 'Design enterprise software architectures and full-stack solutions.', min_cgpa: 8.00, eligible_branches: 'B.Sc. CS, B.Sc. IT', ctc: 9.50, deadline: '2026-08-10', status: 'Closed' }
  ],
  APPLICATION: [
    { application_id: 401, student_id: 101, job_id: 301, applied_date: '2026-08-01 10:30:00', status: 'Selected' },
    { application_id: 402, student_id: 102, job_id: 301, applied_date: '2026-08-02 11:15:00', status: 'Shortlisted' },
    { application_id: 403, student_id: 102, job_id: 302, applied_date: '2026-08-03 14:20:00', status: 'Shortlisted' },
    { application_id: 404, student_id: 103, job_id: 301, applied_date: '2026-08-02 16:45:00', status: 'Applied' },
    { application_id: 405, student_id: 104, job_id: 303, applied_date: '2026-08-04 09:00:00', status: 'Shortlisted' }
  ],
  INTERVIEW: [
    { interview_id: 501, application_id: 401, round_number: 1, round_type: 'Aptitude & Coding Test', scheduled_date: '2026-08-04 10:00:00', venue: 'Online Assessment Portal', result: 'Pass' },
    { interview_id: 502, application_id: 401, round_number: 2, round_type: 'Technical Interview', scheduled_date: '2026-08-05 14:00:00', venue: 'TRCAC Seminar Hall 1', result: 'Pass' },
    { interview_id: 503, application_id: 401, round_number: 3, round_type: 'HR Interview', scheduled_date: '2026-08-06 11:30:00', venue: 'TPO Conference Room', result: 'Pass' },
    { interview_id: 504, application_id: 402, round_number: 1, round_type: 'Aptitude & Coding Test', scheduled_date: '2026-08-10 10:00:00', venue: 'TRCAC Computer Lab 3', result: 'Pending' },
    { interview_id: 505, application_id: 403, round_number: 1, round_type: 'Technical Screening', scheduled_date: '2026-08-12 15:00:00', venue: 'Google Meet (Virtual)', result: 'Pending' },
    { interview_id: 506, application_id: 405, round_number: 1, round_type: 'Data Case Study', scheduled_date: '2026-08-11 11:00:00', venue: 'TRCAC Lab 2', result: 'Pending' }
  ],
  TRAINING: [
    { training_id: 601, title: 'Full-Stack Web & Cloud Boot Camp', trainer_name: 'TechSkill Academy', start_date: '2026-07-01', end_date: '2026-07-25', description: 'Comprehensive training on React, Node.js, REST APIs, Docker, and AWS deployment.', attendance: [101, 102, 103], completed_students: [101, 102] },
    { training_id: 602, title: 'Corporate Communication & Mock HR Interviews', trainer_name: 'Prof. Anjali Mehta', start_date: '2026-08-01', end_date: '2026-08-15', description: 'Interview body language, group discussion tactics, resume polishing, and aptitude shortcuts.', attendance: [101, 102, 103, 104, 105], completed_students: [101] }
  ],
  PLACEMENT_RECORD: [
    { placement_id: 701, student_id: 101, company_id: 201, job_id: 301, ctc_offered: 7.50, offer_date: '2026-08-07', joining_date: '2027-06-15' }
  ],
  SECURITY_LOG: [
    { log_id: 801, user_id: 2, entry_time: '2026-08-08 09:00:00', exit_time: '2026-08-08 17:30:00', status_event: 'Success Login' },
    { log_id: 802, user_id: 3, entry_time: '2026-08-08 11:14:00', exit_time: '2026-08-08 12:00:00', status_event: 'Success Login' },
    { log_id: 803, user_id: 1, entry_time: '2026-08-08 14:22:00', exit_time: null, status_event: 'Success Login' }
  ]
};

class RelationalDB {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(DB_KEY)) {
      this.saveAll(DEFAULT_SEED_DATA);
    } else {
      const data = this.getAll();
      if (!data.USER.some(u => u.email === 'cs63saurabh@gmail.com')) {
        data.USER.push({ user_id: 10, name: 'Saurabh Vishwakarma (Admin)', email: 'cs63saurabh@gmail.com', password: 'S1a2u3r4', role_id: 1, is_active: true });
        this.saveAll(data);
      }
    }
    this.syncAllToFirestore();
  }

  async syncAllToFirestore() {
    try {
      const data = this.getAll();
      for (const [tableName, items] of Object.entries(data)) {
        if (Array.isArray(items) && items.length > 0) {
          await syncCollectionToFirestore(tableName, items);
        }
      }
    } catch (e) {
      console.warn('Initial Firestore sync error:', e);
    }
  }

  getAll() {
    try {
      const data = localStorage.getItem(DB_KEY);
      return data ? JSON.parse(data) : DEFAULT_SEED_DATA;
    } catch (e) {
      console.error('Error loading DB from LocalStorage', e);
      return DEFAULT_SEED_DATA;
    }
  }

  saveAll(data) {
    try {
      localStorage.setItem(DB_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving DB to LocalStorage', e);
    }
  }

  resetToDefault() {
    this.saveAll(DEFAULT_SEED_DATA);
    return DEFAULT_SEED_DATA;
  }

  getTable(tableName) {
    const db = this.getAll();
    return db[tableName] || [];
  }

  insertRow(tableName, row) {
    const db = this.getAll();
    if (!db[tableName]) db[tableName] = [];
    
    const pkName = `${tableName.toLowerCase()}_id`;
    if (!row[pkName]) {
      const maxId = db[tableName].reduce((max, item) => item[pkName] > max ? item[pkName] : max, 100);
      row[pkName] = maxId + 1;
    }

    db[tableName].push(row);
    this.saveAll(db);

    // Background Firebase Sync
    syncCollectionToFirestore(tableName, [row]);

    return row;
  }

  updateRow(tableName, pkValue, updatedFields) {
    const db = this.getAll();
    const pkName = `${tableName.toLowerCase()}_id`;
    const list = db[tableName] || [];
    const index = list.findIndex(item => item[pkName] === pkValue);
    
    if (index !== -1) {
      list[index] = { ...list[index], ...updatedFields };
      db[tableName] = list;
      this.saveAll(db);

      // Background Firebase Sync
      syncCollectionToFirestore(tableName, [list[index]]);

      return list[index];
    }
    return null;
  }

  deleteRow(tableName, pkValue) {
    const db = this.getAll();
    const pkName = `${tableName.toLowerCase()}_id`;
    if (db[tableName]) {
      db[tableName] = db[tableName].filter(item => item[pkName] !== pkValue);
      this.saveAll(db);
      return true;
    }
    return false;
  }

  getStudentFullProfiles() {
    const db = this.getAll();
    return db.STUDENT.map(student => {
      const user = db.USER.find(u => u.user_id === student.user_id) || {};
      const placement = db.PLACEMENT_RECORD.find(p => p.student_id === student.student_id);
      let company = null;
      if (placement) {
        company = db.COMPANY.find(c => c.company_id === placement.company_id);
      }
      return {
        ...student,
        name: user.name || 'Unknown',
        email: user.email || '',
        is_active: user.is_active,
        placement_details: placement ? { ...placement, company_name: company?.company_name } : null
      };
    });
  }

  getJobPostingsDetailed() {
    const db = this.getAll();
    return db.JOB_POSTING.map(job => {
      const company = db.COMPANY.find(c => c.company_id === job.company_id) || {};
      const applications = db.APPLICATION.filter(a => a.job_id === job.job_id);
      return {
        ...job,
        company_name: company.company_name || 'N/A',
        sector: company.sector || 'N/A',
        location: company.location || 'N/A',
        application_count: applications.length
      };
    });
  }

  getApplicationsDetailed() {
    const db = this.getAll();
    return db.APPLICATION.map(app => {
      const student = db.STUDENT.find(s => s.student_id === app.student_id) || {};
      const user = db.USER.find(u => u.user_id === student.user_id) || {};
      const job = db.JOB_POSTING.find(j => j.job_id === app.job_id) || {};
      const company = db.COMPANY.find(c => c.company_id === job.company_id) || {};
      const interviews = db.INTERVIEW.filter(i => i.application_id === app.application_id);

      return {
        ...app,
        student_name: user.name || 'Unknown Student',
        roll_number: student.roll_number || '',
        branch: student.branch || '',
        cgpa: student.cgpa || 0,
        job_title: job.job_title || 'N/A',
        company_name: company.company_name || 'N/A',
        ctc: job.ctc || 0,
        interviews: interviews
      };
    });
  }
}

export const db = new RelationalDB();
