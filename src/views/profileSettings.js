import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderProfileSettings(container) {
  const user = auth.getCurrentUser();
  const dbUser = db.getTable('USER').find(u => u.user_id === user.user_id) || {};

  container.innerHTML = `
    <div class="fade-in max-w-700">
      <div class="mb-4">
        <h4 class="fw-bold text-navy mb-1">Profile & Account Settings</h4>
        <p class="text-muted text-sm mb-0">Self-service account management, security password updates, and assigned role info</p>
      </div>

      <div id="profile-alert" class="alert d-none rounded-3 text-xs mb-3"></div>

      <div class="card border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <h6 class="fw-bold text-navy border-bottom pb-2 mb-3"><i class="bi bi-person-gear me-2 text-primary"></i>Personal Profile Information</h6>
        
        <form id="profile-info-form">
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Display Name</label>
            <input type="text" id="prof-name" class="form-control" value="${dbUser.name || user.name}" required>
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address (Login Credential)</label>
            <input type="email" id="prof-email" class="form-control bg-light" value="${dbUser.email || user.email}" readonly disabled>
            <small class="text-muted text-xs">Email address changes must be processed by System Administrator.</small>
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Assigned System Role (Read-Only)</label>
            <input type="text" class="form-control bg-light" value="${user.role_name}" readonly disabled>
          </div>
          <button type="submit" class="btn btn-primary rounded-pill px-4 fw-semibold">Save Profile Details</button>
        </form>
      </div>

      <div class="card border-0 shadow-sm rounded-4 p-4 bg-white">
        <h6 class="fw-bold text-navy border-bottom pb-2 mb-3"><i class="bi bi-shield-lock me-2 text-danger"></i>Change Account Password</h6>
        
        <form id="password-change-form">
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Current Password</label>
            <input type="password" id="curr-pass" class="form-control" placeholder="••••••••" required>
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">New Password</label>
            <input type="password" id="new-pass" class="form-control" placeholder="••••••••" required minlength="6">
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Confirm New Password</label>
            <input type="password" id="confirm-pass" class="form-control" placeholder="••••••••" required minlength="6">
          </div>
          <button type="submit" class="btn btn-outline-dark rounded-pill px-4 fw-semibold">Update Password</button>
        </form>
      </div>
    </div>
  `;

  const alertBox = container.querySelector('#profile-alert');

  function showAlert(msg, type = 'success') {
    alertBox.className = `alert alert-${type} rounded-3 text-xs mb-3 fade-in`;
    alertBox.textContent = msg;
    alertBox.classList.remove('d-none');
    setTimeout(() => {
      alertBox.classList.add('d-none');
    }, 4000);
  }

  container.querySelector('#profile-info-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const newName = container.querySelector('#prof-name').value;
    db.updateRow('USER', user.user_id, { name: newName });
    user.name = newName;
    document.getElementById('user-name').textContent = newName;
    showAlert('Profile name updated successfully!', 'success');
  });

  container.querySelector('#password-change-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const currPass = container.querySelector('#curr-pass').value;
    const newPass = container.querySelector('#new-pass').value;
    const confirmPass = container.querySelector('#confirm-pass').value;

    if (currPass !== dbUser.password) {
      showAlert('Current password entered is incorrect.', 'danger');
      return;
    }

    if (newPass !== confirmPass) {
      showAlert('New password and confirmation do not match.', 'danger');
      return;
    }

    db.updateRow('USER', user.user_id, { password: newPass });
    container.querySelector('#curr-pass').value = '';
    container.querySelector('#new-pass').value = '';
    container.querySelector('#confirm-pass').value = '';
    showAlert('Account password changed successfully!', 'success');
  });
}
