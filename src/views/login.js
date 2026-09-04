import { auth } from '../services/auth.js';

export function renderLogin(container, onLoginSuccess) {
  container.innerHTML = `
    <div class="login-bg fade-in p-2 p-sm-3 p-md-4">
      <div class="card login-card p-3 p-sm-4 p-md-5">
        <div class="text-center mb-4">
          <div class="brand-logo bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center fw-bold fs-3 px-3 py-2 mb-3 shadow-sm">
            CTPMS
          </div>
          <h3 class="fw-bold text-navy mb-1 fs-4 fs-sm-3 text-wrap">College Placement System</h3>
          <p class="text-muted text-sm mb-0 text-wrap">Thakur Ramnarayan College of Arts & Commerce</p>
        </div>

        <div id="login-alert" class="alert alert-danger d-none text-xs rounded-3" role="alert"></div>

        <form id="login-form">
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address</label>
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0 text-muted"><i class="bi bi-envelope"></i></span>
              <input type="email" id="login-email" class="form-control border-start-0 ps-0" placeholder="example@gmail.com" required>
            </div>
          </div>

          <div class="mb-4">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Password</label>
            <div class="input-group">
              <span class="input-group-text bg-light border-end-0 text-muted"><i class="bi bi-lock"></i></span>
              <input type="password" id="login-password" class="form-control border-start-0 border-end-0 ps-0" placeholder="password" required>
              <button class="btn btn-light border border-start-0 text-muted" type="button" id="toggle-password" title="Toggle password visibility">
                <i class="bi bi-eye" id="toggle-password-icon"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2.5 fw-semibold rounded-3 shadow-sm mb-3">
            Sign In to Portal <i class="bi bi-arrow-right ms-2"></i>
          </button>
        </form>

        <div class="text-center mt-3 pt-3 border-top w-100">
          <span class="badge bg-light text-secondary border text-xs px-3 py-2 rounded-pill mb-2 text-wrap lh-base d-inline-block mw-100" style="white-space: normal; word-break: break-word;">
            <i class="bi bi-shield-check text-success me-1"></i> Connected to Google Firebase Auth & Firestore DB
          </span>
          <div class="text-muted text-xs mt-1 text-wrap">Academic Year 2026–2027 • TRCAC Placement Cell</div>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#login-form');
  const alertBox = container.querySelector('#login-alert');
  const passInput = container.querySelector('#login-password');
  const toggleBtn = container.querySelector('#toggle-password');
  const toggleIcon = container.querySelector('#toggle-password-icon');

  toggleBtn.addEventListener('click', () => {
    const isPassword = passInput.getAttribute('type') === 'password';
    passInput.setAttribute('type', isPassword ? 'text' : 'password');
    toggleIcon.className = isPassword ? 'bi bi-eye-slash' : 'bi bi-eye';
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = container.querySelector('#login-email').value;
    const pass = container.querySelector('#login-password').value;

    const res = auth.login(email, pass);
    if (res.success) {
      onLoginSuccess();
    } else {
      alertBox.textContent = res.message;
      alertBox.classList.remove('d-none');
    }
  });
}
