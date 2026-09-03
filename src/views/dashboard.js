import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderDashboard(container, navigateTo) {
  const user = auth.getCurrentUser();
  const students = db.getStudentFullProfiles();
  const companies = db.getTable('COMPANY');
  const drives = db.getJobPostingsDetailed();
  const applications = db.getApplicationsDetailed();
  const placements = db.getTable('PLACEMENT_RECORD');

  const totalStudents = students.length;
  const placedCount = students.filter(s => s.placement_status === 'Placed').length;
  const placementRate = totalStudents > 0 ? ((placedCount / totalStudents) * 100).toFixed(1) : 0;
  const activeDrivesCount = drives.filter(d => d.status === 'Open').length;
  
  const highestCTC = placements.reduce((max, p) => p.ctc_offered > max ? p.ctc_offered : max, 0);
  const avgCTC = placements.length > 0 ? (placements.reduce((sum, p) => sum + p.ctc_offered, 0) / placements.length).toFixed(2) : '0.00';

  let roleSpecificContent = '';

  if (user.role_id === 3) {
    // Student Dashboard View
    const myStudentProfile = students.find(s => s.user_id === user.user_id) || {};
    const myApps = applications.filter(a => a.student_id === myStudentProfile.student_id);

    roleSpecificContent = `
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">My Profile Status</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${myStudentProfile.placement_status || 'Unplaced'}</h4>
                <div class="text-white-50 text-xs mt-1">Roll No: ${myStudentProfile.roll_number || 'N/A'} • CGPA: ${myStudentProfile.cgpa ? myStudentProfile.cgpa.toFixed(2) : '0.00'}</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-mortarboard fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-teal text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">My Drives Applied</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${myApps.length}</h4>
                <div class="text-white-50 text-xs mt-1">Active drives tracked</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-file-earmark-check fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-navy text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Shortlisted Drives</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${myApps.filter(a => a.status === 'Shortlisted' || a.status === 'Selected').length}</h4>
                <div class="text-white-50 text-xs mt-1">Next interview rounds ready</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-award fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card custom-table-card mb-4">
        <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
          <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-journal-text me-2 text-primary"></i>My Drive Applications</h6>
          <button class="btn btn-sm btn-primary rounded-pill navigate-btn" data-page="jobs"><i class="bi bi-search me-1"></i> Browse Open Job Drives</button>
        </div>
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Drive / Company</th>
                <th>Applied Date</th>
                <th>Package (CTC)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${myApps.length === 0 ? '<tr><td colspan="5" class="text-center py-4 text-muted">You have not applied to any job drives yet.</td></tr>' : 
                myApps.map(app => `
                  <tr>
                    <td>
                      <div class="fw-bold text-dark">${app.job_title}</div>
                      <small class="text-muted"><i class="bi bi-building me-1"></i>${app.company_name}</small>
                    </td>
                    <td class="text-muted text-sm">${app.applied_date}</td>
                    <td class="fw-semibold text-dark">${app.ctc} LPA</td>
                    <td>
                      <span class="badge badge-status badge-${app.status.toLowerCase()}">${app.status}</span>
                    </td>
                    <td>
                      <button class="btn btn-xs btn-outline-secondary rounded-pill navigate-btn" data-page="applications">View Detail</button>
                    </td>
                  </tr>
                `).join('')
              }
            </tbody>
          </table>
        </div>
      </div>
    `;
  } else if (user.role_id === 4) {
    // Company HR Dashboard View
    const hrUser = db.getTable('USER').find(u => u.user_id === user.user_id);
    const hrCompany = companies.find(c => c.contact_email === hrUser.email) || companies[0];
    const myCompanyDrives = drives.filter(d => d.company_id === hrCompany.company_id);
    const myCompanyApps = applications.filter(a => myCompanyDrives.some(d => d.job_id === a.job_id));

    roleSpecificContent = `
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-navy text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Company Profile</small>
                <h5 class="fw-bold mb-0 text-white mt-1">${hrCompany.company_name}</h5>
                <div class="text-white-50 text-xs mt-1">${hrCompany.sector} • ${hrCompany.location}</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-building fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Active Drives Posted</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${myCompanyDrives.length}</h4>
                <div class="text-white-50 text-xs mt-1">Open recruitment drives</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-briefcase fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-teal text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Total Applicants Received</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${myCompanyApps.length}</h4>
                <div class="text-white-50 text-xs mt-1">Student submissions</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-people fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  } else {
    // TPO / Admin Overview Dashboard
    roleSpecificContent = `
      <div class="row g-4 mb-4">
        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Total Registered Students</small>
                <h3 class="fw-bold text-navy mb-0 mt-1">${totalStudents}</h3>
                <small class="text-success fw-semibold text-xs"><i class="bi bi-graph-up me-1"></i>${placementRate}% Placement Rate</small>
              </div>
              <div class="icon-box bg-primary-subtle text-primary">
                <i class="bi bi-people"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Placed Students</small>
                <h3 class="fw-bold text-teal mb-0 mt-1">${placedCount}</h3>
                <small class="text-muted text-xs">${totalStudents - placedCount} unplaced students</small>
              </div>
              <div class="icon-box bg-teal bg-opacity-10 text-teal">
                <i class="bi bi-check-circle"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Active Recruitment Drives</small>
                <h3 class="fw-bold text-dark mb-0 mt-1">${activeDrivesCount}</h3>
                <small class="text-muted text-xs">${companies.length} hiring companies</small>
              </div>
              <div class="icon-box bg-warning-subtle text-warning">
                <i class="bi bi-briefcase"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Highest / Avg CTC Offered</small>
                <h3 class="fw-bold text-primary mb-0 mt-1">${highestCTC} LPA</h3>
                <small class="text-muted text-xs">Average: ${avgCTC} LPA</small>
              </div>
              <div class="icon-box bg-success-subtle text-success">
                <i class="bi bi-currency-dollar"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action Cards for TPO & Admin -->
      <div class="row g-4 mb-4">
        <div class="col-lg-8">
          <div class="card custom-table-card">
            <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
              <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-activity me-2 text-primary"></i>Recent Drive Applications & Status Updates</h6>
              <button class="btn btn-sm btn-outline-primary rounded-pill navigate-btn" data-page="applications">View All Applications</button>
            </div>
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Branch</th>
                    <th>Job Drive</th>
                    <th>Company</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${applications.slice(0, 5).map(app => `
                    <tr>
                      <td>
                        <div class="fw-semibold text-dark">${app.student_name}</div>
                        <small class="text-muted">${app.roll_number}</small>
                      </td>
                      <td class="text-muted text-sm">${app.branch}</td>
                      <td class="fw-semibold text-dark text-sm">${app.job_title}</td>
                      <td class="text-muted text-sm">${app.company_name}</td>
                      <td><span class="badge badge-status badge-${app.status.toLowerCase()}">${app.status}</span></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card custom-table-card p-3">
            <h6 class="fw-bold text-navy border-bottom pb-2 mb-3"><i class="bi bi-lightning-charge text-warning me-2"></i>Quick Operations</h6>
            <div class="d-grid gap-2">
              <button class="btn btn-primary text-start rounded-3 py-2 navigate-btn" data-page="jobs">
                <i class="bi bi-plus-circle me-2"></i> Post New Job Drive
              </button>
              <button class="btn btn-teal text-white text-start rounded-3 py-2 navigate-btn" data-page="students">
                <i class="bi bi-person-check me-2"></i> Verify Student Profiles
              </button>
              <button class="btn btn-outline-dark text-start rounded-3 py-2 navigate-btn" data-page="interviews">
                <i class="bi bi-calendar-event me-2"></i> Schedule Interview Round
              </button>
              <button class="btn btn-outline-secondary text-start rounded-3 py-2 navigate-btn" data-page="reports">
                <i class="bi bi-file-earmark-bar-graph me-2"></i> Export Placement Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Welcome back, ${user.name}!</h4>
          <p class="text-muted text-sm mb-0">Role: <span class="badge bg-primary-subtle text-primary rounded-pill">${user.role_name}</span> • TRCAC Placement Portal</p>
        </div>
        <div>
          <button class="btn btn-sm btn-white border shadow-sm rounded-pill me-2 text-dark" id="refresh-dashboard">
            <i class="bi bi-arrow-clockwise me-1"></i> Refresh Data
          </button>
        </div>
      </div>

      ${roleSpecificContent}
    </div>
  `;

  container.querySelectorAll('.navigate-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.getAttribute('data-page');
      navigateTo(page);
    });
  });

  container.querySelector('#refresh-dashboard')?.addEventListener('click', () => {
    renderDashboard(container, navigateTo);
  });
}
