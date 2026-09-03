import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderStudentManagement(container) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2;

  function refreshStudentList() {
    const students = db.getStudentFullProfiles();
    const branchFilter = container.querySelector('#filter-branch').value;
    const statusFilter = container.querySelector('#filter-status').value;
    const minCgpaFilter = parseFloat(container.querySelector('#filter-cgpa').value) || 0;
    const searchVal = container.querySelector('#search-student').value.toLowerCase();

    const filtered = students.filter(s => {
      const matchBranch = !branchFilter || s.branch === branchFilter;
      const matchStatus = !statusFilter || s.placement_status === statusFilter;
      const matchCgpa = s.cgpa >= minCgpaFilter;
      const matchSearch = !searchVal || s.name.toLowerCase().includes(searchVal) || s.roll_number.toLowerCase().includes(searchVal) || s.skills.toLowerCase().includes(searchVal);
      return matchBranch && matchStatus && matchCgpa && matchSearch;
    });

    const tbody = container.querySelector('#students-tbody');
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = '<tr><td colspan="7" class="text-center py-4 text-muted">No students matching the filter criteria.</td></tr>';
      return;
    }

    tbody.innerHTML = filtered.map(s => `
      <tr>
        <td>
          <div class="fw-bold text-dark">${s.name}</div>
          <small class="text-muted"><i class="bi bi-person-vcard me-1"></i>${s.roll_number}</small>
        </td>
        <td><span class="badge bg-light text-dark border">${s.branch}</span></td>
        <td class="fw-bold ${s.cgpa >= 8.0 ? 'text-success' : 'text-dark'}">${s.cgpa.toFixed(2)}</td>
        <td>
          <div class="text-truncate text-sm" style="max-width: 220px;" title="${s.skills}">
            ${s.skills.split(',').map(tag => `<span class="badge bg-secondary-subtle text-secondary me-1 text-xs">${tag.trim()}</span>`).join('')}
          </div>
        </td>
        <td class="text-muted text-xs">${s.email}</td>
        <td>
          <span class="badge badge-status badge-${s.placement_status.toLowerCase().replace(/\s+/g, '')}">
            ${s.placement_status}
          </span>
        </td>
        <td>
          <button class="btn btn-xs btn-outline-primary rounded-pill view-student-btn me-1" data-id="${s.student_id}">View Profile</button>
          ${isTPOOrAdmin ? `<button class="btn btn-xs btn-outline-dark rounded-pill edit-student-btn" data-id="${s.student_id}">Edit Status</button>` : ''}
        </td>
      </tr>
    `).join('');

    // Attach Event Handlers
    container.querySelectorAll('.view-student-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = parseInt(btn.getAttribute('data-id'));
        openStudentDetailModal(sid);
      });
    });

    container.querySelectorAll('.edit-student-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = parseInt(btn.getAttribute('data-id'));
        openEditStudentModal(sid);
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Student Management & Verification</h4>
          <p class="text-muted text-sm mb-0">Student profiles, CGPA scores, skill badges, and placement readiness</p>
        </div>
      </div>

      <!-- Filters & Search Bar -->
      <div class="card p-3 mb-4 border-0 shadow-sm rounded-4 bg-white">
        <div class="row g-3 align-items-center">
          <div class="col-md-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted mb-1">Search Student</label>
            <input type="text" id="search-student" class="form-control form-control-sm" placeholder="Name, Roll No, Skill...">
          </div>
          <div class="col-md-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted mb-1">Engineering / Degree Branch</label>
            <select id="filter-branch" class="form-select form-select-sm">
              <option value="">All Branches</option>
              <option value="B.Sc. CS">B.Sc. Computer Science</option>
              <option value="B.Sc. IT">B.Sc. Information Tech</option>
              <option value="B.Sc. Data Science">B.Sc. Data Science</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted mb-1">Min CGPA Filter</label>
            <select id="filter-cgpa" class="form-select form-select-sm">
              <option value="0">All CGPAs</option>
              <option value="6.0">6.0 & above</option>
              <option value="7.0">7.0 & above</option>
              <option value="8.0">8.0 & above (Distinction)</option>
              <option value="9.0">9.0 & above (Top Tier)</option>
            </select>
          </div>
          <div class="col-md-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted mb-1">Placement Status</label>
            <select id="filter-status" class="form-select form-select-sm">
              <option value="">All Statuses</option>
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
              <option value="Opted Out">Opted Out</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Student Directory Table -->
      <div class="card custom-table-card">
        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-mortarboard-fill me-2 text-primary"></i>Student Directory</h6>
        </div>
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Student Name & Roll</th>
                <th>Branch</th>
                <th>CGPA</th>
                <th>Skills & Competencies</th>
                <th>Email Contact</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="students-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  container.querySelector('#search-student').addEventListener('input', refreshStudentList);
  container.querySelector('#filter-branch').addEventListener('change', refreshStudentList);
  container.querySelector('#filter-cgpa').addEventListener('change', refreshStudentList);
  container.querySelector('#filter-status').addEventListener('change', refreshStudentList);

  refreshStudentList();

  function openStudentDetailModal(studentId) {
    const students = db.getStudentFullProfiles();
    const student = students.find(s => s.student_id === studentId);
    if (!student) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Student Profile: ${student.name}`;
    modalBody.innerHTML = `
      <div class="row g-4">
        <div class="col-md-4 text-center border-end">
          <div class="avatar bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3 fs-3" style="width: 80px; height: 80px;">
            ${student.name.charAt(0)}
          </div>
          <h5 class="fw-bold mb-1">${student.name}</h5>
          <small class="text-muted d-block mb-2">${student.roll_number}</small>
          <span class="badge badge-status badge-${student.placement_status.toLowerCase().replace(/\s+/g, '')}">${student.placement_status}</span>
        </div>
        <div class="col-md-8">
          <table class="table table-sm border-0">
            <tbody>
              <tr><td class="text-muted fw-semibold">Academic Branch:</td><td class="fw-bold">${student.branch}</td></tr>
              <tr><td class="text-muted fw-semibold">Cumulative CGPA:</td><td class="fw-bold text-success fs-6">${student.cgpa.toFixed(2)} / 10.0</td></tr>
              <tr><td class="text-muted fw-semibold">Email Address:</td><td>${student.email}</td></tr>
              <tr><td class="text-muted fw-semibold">Skills Tagged:</td><td>${student.skills}</td></tr>
              <tr><td class="text-muted fw-semibold">Uploaded Resume:</td><td><a href="#" onclick="alert('Simulated PDF Resume preview for ${student.name}')" class="text-primary text-decoration-none"><i class="bi bi-file-pdf me-1"></i>${student.resume_url}</a></td></tr>
              ${student.placement_details ? `
                <tr class="table-success"><td class="fw-semibold">Offer Package:</td><td class="fw-bold">${student.placement_details.company_name} (${student.placement_details.ctc_offered} LPA)</td></tr>
              ` : ''}
            </tbody>
          </table>
        </div>
      </div>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();
  }

  function openEditStudentModal(studentId) {
    const students = db.getStudentFullProfiles();
    const student = students.find(s => s.student_id === studentId);
    if (!student) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Update Student Eligibility: ${student.name}`;
    modalBody.innerHTML = `
      <form id="edit-student-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Academic CGPA Score</label>
          <input type="number" step="0.01" max="10.0" id="edit-student-cgpa" class="form-control" value="${student.cgpa}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Placement Status</label>
          <select id="edit-student-status" class="form-select" required>
            <option value="Unplaced" ${student.placement_status === 'Unplaced' ? 'selected' : ''}>Unplaced</option>
            <option value="Placed" ${student.placement_status === 'Placed' ? 'selected' : ''}>Placed</option>
            <option value="Opted Out" ${student.placement_status === 'Opted Out' ? 'selected' : ''}>Opted Out</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Skills (Comma-separated)</label>
          <textarea id="edit-student-skills" class="form-control" rows="2">${student.skills}</textarea>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-student-changes">Save Updates</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-student-changes').onclick = () => {
      const cgpa = parseFloat(document.getElementById('edit-student-cgpa').value);
      const status = document.getElementById('edit-student-status').value;
      const skills = document.getElementById('edit-student-skills').value;

      db.updateRow('STUDENT', studentId, { cgpa, placement_status: status, skills });
      bsModal.hide();
      refreshStudentList();
    };
  }
}
