import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderTrainingPrograms(container) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2;
  const isStudent = user.role_id === 3;
  const studentProfile = isStudent ? db.getTable('STUDENT').find(s => s.user_id === user.user_id) : null;

  function refreshTrainings() {
    const trainings = db.getTable('TRAINING');

    const grid = container.querySelector('#trainings-grid');
    if (!grid) return;

    grid.innerHTML = trainings.map(t => {
      const isEnrolled = studentProfile && (t.attendance || []).includes(studentProfile.student_id);
      const isCompleted = studentProfile && (t.completed_students || []).includes(studentProfile.student_id);

      return `
        <div class="col-md-6 col-lg-6">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-teal-subtle text-teal rounded-pill text-xs fw-semibold"><i class="bi bi-person-workspace me-1"></i>${t.trainer_name}</span>
              <span class="text-muted text-xs"><i class="bi bi-calendar-range me-1"></i>${t.start_date} to ${t.end_date}</span>
            </div>

            <h5 class="fw-bold text-navy mb-2">${t.title}</h5>
            <p class="text-muted text-sm mb-3">${t.description}</p>

            <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-auto">
              <div class="text-xs text-muted">
                <i class="bi bi-people me-1"></i>${(t.attendance || []).length} Students Enrolled
              </div>
              
              <div>
                ${isStudent ? `
                  ${isCompleted ? `
                    <button class="btn btn-sm btn-success rounded-pill px-3 download-cert-btn" data-title="${t.title}" data-student="${studentProfile.name}">
                      <i class="bi bi-award-fill me-1"></i> Download Certificate
                    </button>
                  ` : isEnrolled ? `
                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                      <i class="bi bi-check-circle me-1"></i> Enrolled
                    </span>
                  ` : `
                    <button class="btn btn-sm btn-outline-primary rounded-pill px-3 enroll-btn" data-id="${t.training_id}">
                      Enroll Now
                    </button>
                  `}
                ` : ''}

                ${isTPOOrAdmin ? `
                  <button class="btn btn-xs btn-outline-primary rounded-pill manage-attendance-btn me-1" data-id="${t.training_id}">
                    Attendance (${(t.attendance || []).length})
                  </button>
                  <button class="btn btn-xs btn-outline-success rounded-pill issue-cert-btn" data-id="${t.training_id}">
                    Certify Students
                  </button>
                ` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.enroll-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = parseInt(btn.getAttribute('data-id'));
        const tr = trainings.find(t => t.training_id === tid);
        if (tr && studentProfile) {
          if (!tr.attendance) tr.attendance = [];
          if (!tr.attendance.includes(studentProfile.student_id)) {
            tr.attendance.push(studentProfile.student_id);
            db.updateRow('TRAINING', tid, { attendance: tr.attendance });
            alert('Successfully enrolled in training program!');
            refreshTrainings();
          }
        }
      });
    });

    container.querySelectorAll('.download-cert-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-title');
        const sname = btn.getAttribute('data-student');
        alert(`Simulated Certificate Downloaded for ${sname}\nProgram: ${title}\nIssued by TRCAC Placement Cell`);
      });
    });

    container.querySelectorAll('.manage-attendance-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = parseInt(btn.getAttribute('data-id'));
        openAttendanceModal(tid);
      });
    });

    container.querySelectorAll('.issue-cert-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tid = parseInt(btn.getAttribute('data-id'));
        openIssueCertModal(tid);
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Training & Skill Development Programs</h4>
          <p class="text-muted text-sm mb-0">Pre-placement boot camps, technical workshops, and soft skills certifications</p>
        </div>
        ${isTPOOrAdmin ? `
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-training-btn">
            <i class="bi bi-plus-circle me-1"></i> Add Training Program
          </button>
        ` : ''}
      </div>

      <div class="row g-4" id="trainings-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `;

  refreshTrainings();

  if (isTPOOrAdmin) {
    container.querySelector('#add-training-btn')?.addEventListener('click', () => {
      openAddTrainingModal();
    });
  }

  function openAddTrainingModal() {
    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Create Skill Training Program';
    modalBody.innerHTML = `
      <form id="add-training-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Program Title</label>
          <input type="text" id="tr-title" class="form-control" placeholder="e.g. AWS Cloud Practitioner Bootcamp" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Trainer / Partner Institute</label>
          <input type="text" id="tr-trainer" class="form-control" placeholder="e.g. TechSkill Academy" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Start Date</label>
            <input type="date" id="tr-start" class="form-control" value="2026-09-01" required>
          </div>
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">End Date</label>
            <input type="date" id="tr-end" class="form-control" value="2026-09-20" required>
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Program Description & Syllabus</label>
          <textarea id="tr-desc" class="form-control" rows="3" placeholder="Syllabus topics, prerequisites..." required></textarea>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-training">Publish Training</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-new-training').onclick = () => {
      const title = document.getElementById('tr-title').value;
      const trainer = document.getElementById('tr-trainer').value;
      const start = document.getElementById('tr-start').value;
      const end = document.getElementById('tr-end').value;
      const desc = document.getElementById('tr-desc').value;

      if (!title || !trainer) return;

      db.insertRow('TRAINING', {
        title,
        trainer_name: trainer,
        start_date: start,
        end_date: end,
        description: desc,
        attendance: [],
        completed_students: []
      });

      bsModal.hide();
      refreshTrainings();
    };
  }

  function openAttendanceModal(trainingId) {
    const tr = db.getTable('TRAINING').find(t => t.training_id === trainingId);
    const students = db.getStudentFullProfiles();
    if (!tr) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Attendance List: ${tr.title}`;
    modalBody.innerHTML = `
      <div class="table-responsive">
        <table class="table table-sm table-hover align-middle">
          <thead>
            <tr>
              <th>Student</th>
              <th>Roll Number</th>
              <th>Enrolled</th>
            </tr>
          </thead>
          <tbody>
            ${students.map(s => {
              const enrolled = (tr.attendance || []).includes(s.student_id);
              return `
                <tr>
                  <td>${s.name}</td>
                  <td>${s.roll_number}</td>
                  <td>
                    <input type="checkbox" class="form-check-input att-check" data-sid="${s.student_id}" ${enrolled ? 'checked' : ''}>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
      </div>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-attendance">Save Attendance</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-attendance').onclick = () => {
      const checks = document.querySelectorAll('.att-check');
      const newAtt = [];
      checks.forEach(c => {
        if (c.checked) {
          newAtt.push(parseInt(c.getAttribute('data-sid')));
        }
      });
      db.updateRow('TRAINING', trainingId, { attendance: newAtt });
      bsModal.hide();
      refreshTrainings();
    };
  }

  function openIssueCertModal(trainingId) {
    const tr = db.getTable('TRAINING').find(t => t.training_id === trainingId);
    const students = db.getStudentFullProfiles().filter(s => (tr.attendance || []).includes(s.student_id));
    if (!tr) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Issue Completion Certificates: ${tr.title}`;
    modalBody.innerHTML = `
      <p class="text-muted text-xs">Select enrolled students who completed all attendance requirements to issue digital certificates:</p>
      <div class="table-responsive">
        <table class="table table-sm table-hover align-middle">
          <thead>
            <tr>
              <th>Enrolled Student</th>
              <th>Roll Number</th>
              <th>Grant Certification</th>
            </tr>
          </thead>
          <tbody>
            ${students.length === 0 ? '<tr><td colspan="3" class="text-center py-3 text-muted">No enrolled students in this training yet.</td></tr>' :
              students.map(s => {
                const certified = (tr.completed_students || []).includes(s.student_id);
                return `
                  <tr>
                    <td>${s.name}</td>
                    <td>${s.roll_number}</td>
                    <td>
                      <input type="checkbox" class="form-check-input cert-check" data-sid="${s.student_id}" ${certified ? 'checked' : ''}>
                    </td>
                  </tr>
                `;
              }).join('')}
          </tbody>
        </table>
      </div>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-certs">Issue Certificates</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-certs').onclick = () => {
      const checks = document.querySelectorAll('.cert-check');
      const newCerts = [];
      checks.forEach(c => {
        if (c.checked) {
          newCerts.push(parseInt(c.getAttribute('data-sid')));
        }
      });
      db.updateRow('TRAINING', trainingId, { completed_students: newCerts });
      bsModal.hide();
      refreshTrainings();
    };
  }
}
