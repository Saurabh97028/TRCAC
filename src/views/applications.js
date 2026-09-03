import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderApplications(container, navigateTo) {
  const user = auth.getCurrentUser();
  const isStudent = user.role_id === 3;
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2 || user.role_id === 4;

  const studentProfile = isStudent ? db.getTable('STUDENT').find(s => s.user_id === user.user_id) : null;

  function refreshApplications() {
    let apps = db.getApplicationsDetailed();

    if (isStudent && studentProfile) {
      apps = apps.filter(a => a.student_id === studentProfile.student_id);
    }

    const statusFilter = container.querySelector('#filter-app-status')?.value || '';
    const searchVal = container.querySelector('#search-app')?.value.toLowerCase() || '';

    const filtered = apps.filter(a => {
      const matchStatus = !statusFilter || a.status === statusFilter;
      const matchSearch = !searchVal || a.student_name.toLowerCase().includes(searchVal) || a.job_title.toLowerCase().includes(searchVal) || a.company_name.toLowerCase().includes(searchVal);
      return matchStatus && matchSearch;
    });

    const tbody = container.querySelector('#applications-tbody');
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No drive applications found matching your criteria.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map(a => `
      <tr>
        <td>
          <div class="fw-bold text-dark">${a.student_name}</div>
          <small class="text-muted">${a.roll_number} • ${a.branch}</small>
        </td>
        <td>
          <div class="fw-semibold text-dark">${a.job_title}</div>
          <small class="text-muted"><i class="bi bi-building me-1"></i>${a.company_name}</small>
        </td>
        <td class="fw-bold text-teal">${a.ctc} LPA</td>
        <td class="text-muted text-xs">${a.applied_date}</td>
        <td>
          <span class="badge badge-status badge-${a.status.toLowerCase()}">${a.status}</span>
        </td>
        <td>
          ${a.interviews && a.interviews.length > 0 ? `
            <span class="badge bg-light text-dark border text-xs" title="Scheduled Interview Rounds">
              <i class="bi bi-calendar-check me-1 text-primary"></i>Round ${a.interviews[a.interviews.length - 1].round_number} (${a.interviews[a.interviews.length - 1].result})
            </span>
          ` : '<span class="text-muted text-xs">No rounds yet</span>'}
        </td>
        <td>
          ${isTPOOrAdmin ? `
            <div class="dropdown">
              <button class="btn btn-xs btn-outline-secondary rounded-pill dropdown-toggle" data-bs-toggle="dropdown">
                Update Status
              </button>
              <ul class="dropdown-menu shadow-sm border-0">
                <li><a class="dropdown-item update-status-btn" href="#" data-id="${a.application_id}" data-status="Applied">Set: Applied</a></li>
                <li><a class="dropdown-item update-status-btn text-warning" href="#" data-id="${a.application_id}" data-status="Shortlisted">Shortlist for Interviews</a></li>
                <li><a class="dropdown-item update-status-btn text-success fw-bold" href="#" data-id="${a.application_id}" data-status="Selected">Mark Selected (Offer)</a></li>
                <li><a class="dropdown-item update-status-btn text-danger" href="#" data-id="${a.application_id}" data-status="Rejected">Mark Rejected</a></li>
              </ul>
            </div>
          ` : `
            <span class="text-muted text-xs">View Only</span>
          `}
        </td>
      </tr>
    `).join('');

    container.querySelectorAll('.update-status-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const aid = parseInt(btn.getAttribute('data-id'));
        const newStatus = btn.getAttribute('data-status');

        db.updateRow('APPLICATION', aid, { status: newStatus });

        // If selected, automatically offer placement details modal option or prompt TPO
        if (newStatus === 'Selected' && isTPOOrAdmin) {
          const appObj = db.getApplicationsDetailed().find(x => x.application_id === aid);
          if (confirm(`Student ${appObj.student_name} is marked Selected! Would you like to create a Final Placement Record now?`)) {
            navigateTo('placements');
          }
        }
        refreshApplications();
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Drive Applications & Shortlist Tracker</h4>
          <p class="text-muted text-sm mb-0">Track application statuses, shortlisting, and candidate progression</p>
        </div>
      </div>

      <!-- Filters -->
      <div class="card p-3 mb-4 border-0 shadow-sm rounded-4 bg-white">
        <div class="row g-3 align-items-center">
          <div class="col-md-6">
            <input type="text" id="search-app" class="form-control form-control-sm" placeholder="Search by student name, company, or job title...">
          </div>
          <div class="col-md-6">
            <select id="filter-app-status" class="form-select form-select-sm">
              <option value="">All Application Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div class="card custom-table-card">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Student Candidate</th>
                <th>Job Drive & Company</th>
                <th>Package</th>
                <th>Applied Date</th>
                <th>Status Badge</th>
                <th>Latest Interview</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="applications-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#search-app').addEventListener('input', refreshApplications);
  container.querySelector('#filter-app-status').addEventListener('change', refreshApplications);

  refreshApplications();
}
