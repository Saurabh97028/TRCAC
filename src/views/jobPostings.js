import { db } from '../services/db.js';
import { auth } from '../services/auth.js';
import { validateStudentEligibility } from '../services/eligibility.js';

export function renderJobPostings(container, navigateTo) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2 || user.role_id === 4;
  const isStudent = user.role_id === 3;

  const studentProfile = isStudent ? db.getTable('STUDENT').find(s => s.user_id === user.user_id) : null;
  const myApplications = isStudent && studentProfile ? db.getTable('APPLICATION').filter(a => a.student_id === studentProfile.student_id) : [];

  function refreshJobs() {
    const drives = db.getJobPostingsDetailed();
    const grid = container.querySelector('#jobs-grid');
    if (!grid) return;

    grid.innerHTML = drives.map(job => {
      let studentEligibilityStatus = null;
      let alreadyApplied = false;

      if (isStudent && studentProfile) {
        alreadyApplied = myApplications.some(a => a.job_id === job.job_id);
        studentEligibilityStatus = validateStudentEligibility(studentProfile.student_id, job.job_id);
      }

      return `
        <div class="col-md-6 col-xl-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white position-relative">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="badge bg-primary-subtle text-primary rounded-pill text-xs fw-semibold mb-2">${job.company_name}</span>
                <h5 class="fw-bold text-navy mb-1">${job.job_title}</h5>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${job.location}</small>
              </div>
              <div class="text-end">
                <div class="fw-extrabold text-teal fs-5">${job.ctc} LPA</div>
                <small class="text-muted text-xs">Annual Package</small>
              </div>
            </div>

            <p class="text-muted text-sm line-clamp-2 mb-3">${job.description}</p>

            <div class="bg-light p-2.5 rounded-3 mb-3 text-xs">
              <div class="d-flex justify-content-between mb-1">
                <span class="text-muted"><i class="bi bi-mortarboard me-1"></i>Min CGPA Required:</span>
                <span class="fw-bold ${studentProfile && studentProfile.cgpa >= job.min_cgpa ? 'text-success' : 'text-dark'}">${job.min_cgpa.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted"><i class="bi bi-layers me-1"></i>Eligible Branches:</span>
                <span class="fw-semibold text-dark">${job.eligible_branches}</span>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-auto text-xs">
              <div>
                <span class="badge badge-status badge-${job.status.toLowerCase()}">${job.status} Drive</span>
                <span class="text-muted ms-2"><i class="bi bi-people me-1"></i>${job.application_count} Applicants</span>
              </div>
              
              <div>
                ${isStudent ? `
                  ${alreadyApplied ? `
                    <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2 fw-semibold">
                      <i class="bi bi-check-circle-fill me-1"></i> Applied
                    </span>
                  ` : `
                    <button class="btn btn-sm btn-primary rounded-pill px-3 apply-job-btn" 
                      data-id="${job.job_id}" 
                      ${!studentEligibilityStatus?.eligible ? `disabled title="${studentEligibilityStatus?.reason}"` : ''}>
                      Apply Now
                    </button>
                  `}
                ` : ''}

                ${isTPOOrAdmin ? `
                  ${job.status === 'Open' ? `
                    <button class="btn btn-xs btn-outline-danger rounded-pill close-drive-btn me-1" data-id="${job.job_id}">Close Drive</button>
                  ` : `
                    <button class="btn btn-xs btn-outline-success rounded-pill open-drive-btn me-1" data-id="${job.job_id}">Reopen</button>
                  `}
                  <button class="btn btn-xs btn-outline-primary rounded-pill view-apps-btn" data-id="${job.job_id}">Applicants (${job.application_count})</button>
                ` : ''}
              </div>
            </div>

            ${isStudent && !alreadyApplied && !studentEligibilityStatus?.eligible ? `
              <small class="text-danger text-xs mt-2 d-block"><i class="bi bi-exclamation-triangle-fill me-1"></i>${studentEligibilityStatus?.reason}</small>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.apply-job-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jid = parseInt(btn.getAttribute('data-id'));
        if (studentProfile) {
          db.insertRow('APPLICATION', {
            student_id: studentProfile.student_id,
            job_id: jid,
            applied_date: new Date().toISOString().replace('T', ' ').substring(0, 19),
            status: 'Applied'
          });
          alert('Application submitted successfully!');
          refreshJobs();
        }
      });
    });

    container.querySelectorAll('.close-drive-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jid = parseInt(btn.getAttribute('data-id'));
        db.updateRow('JOB_POSTING', jid, { status: 'Closed' });
        refreshJobs();
      });
    });

    container.querySelectorAll('.open-drive-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const jid = parseInt(btn.getAttribute('data-id'));
        db.updateRow('JOB_POSTING', jid, { status: 'Open' });
        refreshJobs();
      });
    });

    container.querySelectorAll('.view-apps-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo('applications');
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Campus Placement Job Drives</h4>
          <p class="text-muted text-sm mb-0">Active campus recruitment drives, minimum CGPA eligibility, and CTC packages</p>
        </div>
        ${isTPOOrAdmin ? `
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="post-drive-btn">
            <i class="bi bi-plus-circle me-1"></i> Post New Job Drive
          </button>
        ` : ''}
      </div>

      <div class="row g-4" id="jobs-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `;

  refreshJobs();

  if (isTPOOrAdmin) {
    container.querySelector('#post-drive-btn')?.addEventListener('click', () => {
      openPostDriveModal();
    });
  }

  function openPostDriveModal() {
    const companies = db.getTable('COMPANY');
    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Post New Campus Job Drive';
    modalBody.innerHTML = `
      <form id="post-drive-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Company</label>
          <select id="drive-company" class="form-select" required>
            ${companies.map(c => `<option value="${c.company_id}">${c.company_name} (${c.sector})</option>`).join('')}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Job Title / Role</label>
          <input type="text" id="drive-title" class="form-control" placeholder="e.g. Full-Stack Developer" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Minimum Required CGPA</label>
            <input type="number" step="0.1" max="10.0" id="drive-cgpa" class="form-control" placeholder="7.5" required value="7.0">
          </div>
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Annual CTC Package (in LPA)</label>
            <input type="number" step="0.25" id="drive-ctc" class="form-control" placeholder="8.50" required value="8.0">
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Eligible Academic Branches</label>
          <input type="text" id="drive-branches" class="form-control" placeholder="e.g. B.Sc. CS, B.Sc. IT, B.Sc. Data Science" value="B.Sc. CS, B.Sc. IT" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Application Deadline</label>
          <input type="date" id="drive-deadline" class="form-control" required value="2026-09-30">
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Job Description & Criteria</label>
          <textarea id="drive-desc" class="form-control" rows="3" placeholder="Specify technical skills, interview rounds, and job requirements..." required></textarea>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-drive">Publish Job Drive</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-new-drive').onclick = () => {
      const companyId = parseInt(document.getElementById('drive-company').value);
      const title = document.getElementById('drive-title').value;
      const minCgpa = parseFloat(document.getElementById('drive-cgpa').value);
      const ctc = parseFloat(document.getElementById('drive-ctc').value);
      const branches = document.getElementById('drive-branches').value;
      const deadline = document.getElementById('drive-deadline').value;
      const desc = document.getElementById('drive-desc').value;

      if (!title || !desc) return;

      db.insertRow('JOB_POSTING', {
        company_id: companyId,
        job_title: title,
        description: desc,
        min_cgpa: minCgpa,
        eligible_branches: branches,
        ctc: ctc,
        deadline: deadline,
        status: 'Open'
      });

      bsModal.hide();
      refreshJobs();
    };
  }
}
