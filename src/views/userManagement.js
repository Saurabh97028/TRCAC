import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderUserManagement(container) {
  const currentUser = auth.getCurrentUser();
  if (currentUser.role_id !== 1) {
    container.innerHTML = `
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">User Management is restricted to System Administrator accounts only.</p>
      </div>
    `;
    return;
  }

  function refreshTable() {
    const users = db.getTable('USER');
    const roles = db.getTable('ROLE');

    const tbody = container.querySelector('#users-tbody');
    if (!tbody) return;

    tbody.innerHTML = users.map(u => {
      const roleObj = roles.find(r => r.role_id === u.role_id) || {};
      return `
        <tr>
          <td>
            <div class="fw-bold text-dark">${u.name}</div>
            <small class="text-muted">User ID: #${u.user_id}</small>
          </td>
          <td class="text-muted text-sm">${u.email}</td>
          <td>
            <span class="badge bg-primary-subtle text-primary rounded-pill fw-semibold">${roleObj.role_name || 'N/A'}</span>
          </td>
          <td>
            ${u.is_active ? '<span class="badge bg-success-subtle text-success rounded-pill"><i class="bi bi-check-circle me-1"></i>Active</span>' : '<span class="badge bg-danger-subtle text-danger rounded-pill"><i class="bi bi-x-circle me-1"></i>Deactivated</span>'}
          </td>
          <td>
            <button class="btn btn-xs btn-outline-primary rounded-pill edit-user-btn me-1" data-id="${u.user_id}">Edit</button>
            <button class="btn btn-xs btn-outline-${u.is_active ? 'danger' : 'success'} rounded-pill toggle-active-btn" data-id="${u.user_id}">
              ${u.is_active ? 'Deactivate' : 'Activate'}
            </button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach Event Listeners
    container.querySelectorAll('.toggle-active-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = parseInt(btn.getAttribute('data-id'));
        const targetUser = users.find(u => u.user_id === uid);
        if (targetUser) {
          db.updateRow('USER', uid, { is_active: !targetUser.is_active });
          refreshTable();
        }
      });
    });

    container.querySelectorAll('.edit-user-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const uid = parseInt(btn.getAttribute('data-id'));
        openEditUserModal(uid);
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">User Management</h4>
          <p class="text-muted text-sm mb-0">System Administrator Control Panel • RBAC Authorization</p>
        </div>
        <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-user-btn">
          <i class="bi bi-person-plus-fill me-1"></i> Add New User Account
        </button>
      </div>

      <div class="card custom-table-card">
        <div class="card-header bg-white py-3 border-bottom d-flex justify-content-between align-items-center">
          <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-people-fill me-2 text-primary"></i>System User Directory</h6>
          <span class="text-muted text-xs">Total Users Registered: ${db.getTable('USER').length}</span>
        </div>
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>User Name & ID</th>
                <th>Email Address</th>
                <th>Assigned Role</th>
                <th>Account Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="users-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  refreshTable();

  // Add User Modal Handler
  container.querySelector('#add-user-btn').addEventListener('click', () => {
    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Create New User Account';
    modalBody.innerHTML = `
      <form id="add-user-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Name</label>
          <input type="text" id="new-user-name" class="form-control" placeholder="e.g. Dr. Ramesh Kumar" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address</label>
          <input type="email" id="new-user-email" class="form-control" placeholder="user@trcac.edu.in" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Initial Password</label>
          <input type="password" id="new-user-pass" class="form-control" placeholder="••••••••" required value="defaultpass123">
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Assign Role</label>
          <select id="new-user-role" class="form-select" required>
            <option value="1">Administrator</option>
            <option value="2">TPO (Training & Placement Officer)</option>
            <option value="3" selected>Student</option>
            <option value="4">Company HR</option>
          </select>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="submit-new-user">Create Account</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('submit-new-user').onclick = () => {
      const name = document.getElementById('new-user-name').value;
      const email = document.getElementById('new-user-email').value;
      const pass = document.getElementById('new-user-pass').value;
      const roleId = parseInt(document.getElementById('new-user-role').value);

      if (!name || !email || !pass) return;

      const newUser = db.insertRow('USER', {
        name,
        email,
        password: pass,
        role_id: roleId,
        is_active: true
      });

      if (roleId === 3) {
        db.insertRow('STUDENT', {
          user_id: newUser.user_id,
          roll_number: `TRCAC2026CS${Math.floor(100 + Math.random() * 900)}`,
          branch: 'B.Sc. CS',
          cgpa: 7.50,
          skills: 'HTML, CSS, JavaScript',
          resume_url: `resumes/student_${newUser.user_id}.pdf`,
          placement_status: 'Unplaced'
        });
      }

      bsModal.hide();
      refreshTable();
    };
  });

  function openEditUserModal(userId) {
    const users = db.getTable('USER');
    const user = users.find(u => u.user_id === userId);
    if (!user) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Edit User: ${user.name}`;
    modalBody.innerHTML = `
      <form id="edit-user-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Name</label>
          <input type="text" id="edit-user-name" class="form-control" value="${user.name}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address</label>
          <input type="email" id="edit-user-email" class="form-control" value="${user.email}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Reassign Role</label>
          <select id="edit-user-role" class="form-select" required>
            <option value="1" ${user.role_id === 1 ? 'selected' : ''}>Administrator</option>
            <option value="2" ${user.role_id === 2 ? 'selected' : ''}>TPO (Training & Placement Officer)</option>
            <option value="3" ${user.role_id === 3 ? 'selected' : ''}>Student</option>
            <option value="4" ${user.role_id === 4 ? 'selected' : ''}>Company HR</option>
          </select>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-edit-user">Save Changes</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-edit-user').onclick = () => {
      const name = document.getElementById('edit-user-name').value;
      const email = document.getElementById('edit-user-email').value;
      const roleId = parseInt(document.getElementById('edit-user-role').value);

      db.updateRow('USER', userId, { name, email, role_id: roleId });
      bsModal.hide();
      refreshTable();
    };
  }
}
