import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderInterviewSchedule(container) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2 || user.role_id === 4;
  const isStudent = user.role_id === 3;

  const studentProfile = isStudent ? db.getTable('STUDENT').find(s => s.user_id === user.user_id) : null;

  function refreshInterviews() {
    const interviews = db.getTable('INTERVIEW');
    const apps = db.getApplicationsDetailed();

    let fullList = interviews.map(i => {
      const app = apps.find(a => a.application_id === i.application_id) || {};
      return {
        ...i,
        student_name: app.student_name || 'N/A',
        student_id: app.student_id,
        roll_number: app.roll_number || '',
        job_title: app.job_title || 'N/A',
        company_name: app.company_name || 'N/A'
      };
    });

    if (isStudent && studentProfile) {
      fullList = fullList.filter(i => i.student_id === studentProfile.student_id);
    }

    const tbody = container.querySelector('#interviews-tbody');
    if (!tbody) return;

    if (fullList.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No scheduled interview rounds found.</td></tr>';
      return;
    }

    tbody.innerHTML = fullList.map(i => `
      <tr>
        <td>
          <span class="badge bg-primary text-white rounded-circle me-2 px-2.5 py-1">R${i.round_number}</span>
          <span class="fw-bold text-dark">${i.round_type}</span>
        </td>
        <td>
          <div class="fw-bold text-dark">${i.student_name}</div>
          <small class="text-muted">${i.roll_number}</small>
        </td>
        <td>
          <div class="fw-semibold text-dark text-sm">${i.job_title}</div>
          <small class="text-muted">${i.company_name}</small>
        </td>
        <td class="text-muted text-sm fw-semibold"><i class="bi bi-calendar-event me-1 text-primary"></i>${i.scheduled_date}</td>
        <td class="text-muted text-sm"><i class="bi bi-geo-alt me-1 text-danger"></i>${i.venue}</td>
        <td>
          <span class="badge bg-${i.result === 'Pass' ? 'success' : i.result === 'Fail' ? 'danger' : 'warning'}-subtle text-${i.result === 'Pass' ? 'success' : i.result === 'Fail' ? 'danger' : 'warning'} rounded-pill">
            ${i.result}
          </span>
        </td>
        <td>
          ${isTPOOrAdmin ? `
            <button class="btn btn-xs btn-outline-primary rounded-pill update-result-btn me-1" data-id="${i.interview_id}">Result</button>
          ` : `
            <span class="text-muted text-xs">Scheduled</span>
          `}
        </td>
      </tr>
    `).join('');

    container.querySelectorAll('.update-result-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const iid = parseInt(btn.getAttribute('data-id'));
        openUpdateResultModal(iid);
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Interview Scheduling & Round Results</h4>
          <p class="text-muted text-sm mb-0">Manage multi-stage technical, aptitude, and HR evaluation rounds</p>
        </div>
        ${isTPOOrAdmin ? `
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="schedule-interview-btn">
            <i class="bi bi-calendar-plus me-1"></i> Schedule Interview Round
          </button>
        ` : ''}
      </div>

      <div class="card custom-table-card">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Round Stage</th>
                <th>Candidate Student</th>
                <th>Job Drive & Company</th>
                <th>Scheduled Date & Time</th>
                <th>Venue / Online Link</th>
                <th>Round Result</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="interviews-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  refreshInterviews();

  if (isTPOOrAdmin) {
    container.querySelector('#schedule-interview-btn')?.addEventListener('click', () => {
      openScheduleInterviewModal();
    });
  }

  function openScheduleInterviewModal() {
    const apps = db.getApplicationsDetailed().filter(a => a.status === 'Shortlisted' || a.status === 'Applied');
    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Schedule Interview Round';
    modalBody.innerHTML = `
      <form id="schedule-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Shortlisted Candidate & Drive</label>
          <select id="int-app-id" class="form-select" required>
            ${apps.map(a => `<option value="${a.application_id}">${a.student_name} (${a.roll_number}) — ${a.job_title} @ ${a.company_name}</option>`).join('')}
          </select>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Round Number</label>
            <input type="number" min="1" max="5" id="int-round-num" class="form-control" value="1" required>
          </div>
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Round Evaluation Type</label>
            <select id="int-round-type" class="form-select" required>
              <option value="Aptitude & Online Test">Aptitude & Online Test</option>
              <option value="Technical Screening">Technical Screening</option>
              <option value="System Design & Coding">System Design & Coding</option>
              <option value="Group Discussion">Group Discussion</option>
              <option value="HR & Managerial Interview">HR & Managerial Interview</option>
            </select>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Date & Time</label>
          <input type="datetime-local" id="int-date" class="form-control" required value="2026-08-20T10:00">
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Venue Location or Online Video Link</label>
          <input type="text" id="int-venue" class="form-control" placeholder="e.g. TRCAC Computer Lab 3 or Google Meet Link" value="TRCAC Seminar Hall 1" required>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-interview">Confirm Schedule</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-new-interview').onclick = () => {
      const appId = parseInt(document.getElementById('int-app-id').value);
      const rNum = parseInt(document.getElementById('int-round-num').value);
      const rType = document.getElementById('int-round-type').value;
      const rDate = document.getElementById('int-date').value.replace('T', ' ');
      const rVenue = document.getElementById('int-venue').value;

      if (!appId || !rVenue) return;

      db.insertRow('INTERVIEW', {
        application_id: appId,
        round_number: rNum,
        round_type: rType,
        scheduled_date: rDate,
        venue: rVenue,
        result: 'Pending'
      });

      bsModal.hide();
      refreshInterviews();
    };
  }

  function openUpdateResultModal(interviewId) {
    const intItem = db.getTable('INTERVIEW').find(i => i.interview_id === interviewId);
    if (!intItem) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Update Round ${intItem.round_number} Result`;
    modalBody.innerHTML = `
      <form id="update-result-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Evaluation Result</label>
          <select id="int-result" class="form-select" required>
            <option value="Pending" ${intItem.result === 'Pending' ? 'selected' : ''}>Pending</option>
            <option value="Pass" ${intItem.result === 'Pass' ? 'selected' : ''}>Pass (Cleared Round)</option>
            <option value="Fail" ${intItem.result === 'Fail' ? 'selected' : ''}>Fail (Did Not Clear)</option>
          </select>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-int-result">Save Result</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-int-result').onclick = () => {
      const resVal = document.getElementById('int-result').value;
      db.updateRow('INTERVIEW', interviewId, { result: resVal });
      bsModal.hide();
      refreshInterviews();
    };
  }
}
