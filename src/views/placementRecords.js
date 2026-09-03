import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderPlacementRecords(container) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2;

  function refreshPlacementRecords() {
    const placements = db.getTable('PLACEMENT_RECORD');
    const students = db.getStudentFullProfiles();
    const companies = db.getTable('COMPANY');
    const jobs = db.getTable('JOB_POSTING');

    const fullList = placements.map(p => {
      const student = students.find(s => s.student_id === p.student_id) || {};
      const company = companies.find(c => c.company_id === p.company_id) || {};
      const job = jobs.find(j => j.job_id === p.job_id) || {};
      return {
        ...p,
        student_name: student.name || 'Unknown Student',
        roll_number: student.roll_number || '',
        branch: student.branch || '',
        company_name: company.company_name || 'N/A',
        job_title: job.job_title || 'N/A'
      };
    });

    const tbody = container.querySelector('#placements-tbody');
    if (!tbody) return;

    if (fullList.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No placement records recorded yet.</td></tr>';
      return;
    }

    tbody.innerHTML = fullList.map(p => `
      <tr>
        <td>
          <div class="fw-bold text-dark">${p.student_name}</div>
          <small class="text-muted">${p.roll_number} • ${p.branch}</small>
        </td>
        <td>
          <div class="fw-bold text-dark">${p.company_name}</div>
          <small class="text-muted"><i class="bi bi-briefcase me-1"></i>${p.job_title}</small>
        </td>
        <td class="fw-extrabold text-teal fs-6">${p.ctc_offered.toFixed(2)} LPA</td>
        <td class="text-muted text-sm"><i class="bi bi-calendar-check me-1 text-primary"></i>${p.offer_date}</td>
        <td class="text-muted text-sm"><i class="bi bi-box-arrow-in-right me-1 text-success"></i>${p.joining_date}</td>
        <td>
          <span class="badge badge-status badge-placed"><i class="bi bi-check-circle-fill me-1"></i>Official Offer</span>
        </td>
      </tr>
    `).join('');
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Final Placement Records</h4>
          <p class="text-muted text-sm mb-0">Official job offers, package CTCs, and joining dates for TRCAC graduates</p>
        </div>
        ${isTPOOrAdmin ? `
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-placement-btn">
            <i class="bi bi-award-fill me-1"></i> Record Final Placement Offer
          </button>
        ` : ''}
      </div>

      <div class="card custom-table-card">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Placed Student</th>
                <th>Company & Offer Role</th>
                <th>Package Offered (CTC)</th>
                <th>Offer Letter Date</th>
                <th>Expected Joining Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody id="placements-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  refreshPlacementRecords();

  if (isTPOOrAdmin) {
    container.querySelector('#add-placement-btn')?.addEventListener('click', () => {
      openAddPlacementModal();
    });
  }

  function openAddPlacementModal() {
    const students = db.getStudentFullProfiles().filter(s => s.placement_status !== 'Placed');
    const companies = db.getTable('COMPANY');
    const jobs = db.getTable('JOB_POSTING');

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Record Final Student Placement Offer';
    modalBody.innerHTML = `
      <form id="add-placement-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Student Candidate</label>
          <select id="pl-student-id" class="form-select" required>
            ${students.length === 0 ? '<option value="">No unplaced students available</option>' :
              students.map(s => `<option value="${s.student_id}">${s.name} (${s.roll_number} • ${s.branch})</option>`).join('')}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Offering Company</label>
          <select id="pl-company-id" class="form-select" required>
            ${companies.map(c => `<option value="${c.company_id}">${c.company_name}</option>`).join('')}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Associated Job Drive</label>
          <select id="pl-job-id" class="form-select" required>
            ${jobs.map(j => `<option value="${j.job_id}">${j.job_title} (${j.ctc} LPA)</option>`).join('')}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Final CTC Offered (in LPA)</label>
          <input type="number" step="0.25" id="pl-ctc" class="form-control" value="8.0" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Offer Date</label>
            <input type="date" id="pl-offer-date" class="form-control" value="2026-08-08" required>
          </div>
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Joining Date</label>
            <input type="date" id="pl-joining-date" class="form-control" value="2027-06-15" required>
          </div>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-placement-record">Confirm Placement Offer</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-placement-record').onclick = () => {
      const studentId = parseInt(document.getElementById('pl-student-id').value);
      const companyId = parseInt(document.getElementById('pl-company-id').value);
      const jobId = parseInt(document.getElementById('pl-job-id').value);
      const ctc = parseFloat(document.getElementById('pl-ctc').value);
      const offerDate = document.getElementById('pl-offer-date').value;
      const joiningDate = document.getElementById('pl-joining-date').value;

      if (!studentId || !companyId || !jobId) return;

      db.insertRow('PLACEMENT_RECORD', {
        student_id: studentId,
        company_id: companyId,
        job_id: jobId,
        ctc_offered: ctc,
        offer_date: offerDate,
        joining_date: joiningDate
      });

      // Automatically update student status to Placed per SRS Section 4.7 Requirement 2
      db.updateRow('STUDENT', studentId, { placement_status: 'Placed' });

      bsModal.hide();
      refreshPlacementRecords();
    };
  }
}
