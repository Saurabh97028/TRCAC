import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderCompanyManagement(container, navigateTo) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2;

  function refreshCompanies() {
    const companies = db.getTable('COMPANY');
    const drives = db.getTable('JOB_POSTING');

    const grid = container.querySelector('#companies-grid');
    if (!grid) return;

    grid.innerHTML = companies.map(c => {
      const activeCount = drives.filter(d => d.company_id === c.company_id && d.status === 'Open').length;
      return `
        <div class="col-md-6 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="avatar bg-navy text-white rounded-3 d-flex align-items-center justify-content-center fw-bold fs-4" style="width: 52px; height: 52px;">
                ${c.company_name.charAt(0)}
              </div>
              <div>
                <h6 class="fw-bold mb-0 text-navy">${c.company_name}</h6>
                <span class="badge bg-light text-secondary border text-xs mt-1">${c.sector}</span>
              </div>
            </div>
            <div class="border-top pt-2.5 mb-3 fs-7">
              <div class="text-muted mb-1"><i class="bi bi-geo-alt me-1 text-danger"></i>${c.location}</div>
              <div class="text-muted mb-1"><i class="bi bi-envelope me-1 text-primary"></i>${c.contact_email}</div>
              <div class="text-muted"><i class="bi bi-globe me-1 text-teal"></i><a href="${c.website}" target="_blank" class="text-decoration-none text-muted">${c.website}</a></div>
            </div>
            <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-auto">
              <span class="badge bg-primary-subtle text-primary rounded-pill text-xs fw-semibold">
                ${activeCount} Active Drives
              </span>
              ${isTPOOrAdmin ? `
                <div>
                  <button class="btn btn-xs btn-outline-primary rounded-pill edit-company-btn me-1" data-id="${c.company_id}">Edit</button>
                  <button class="btn btn-xs btn-outline-dark rounded-pill view-drives-btn" data-id="${c.company_id}">View Drives</button>
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('.edit-company-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const cid = parseInt(btn.getAttribute('data-id'));
        openEditCompanyModal(cid);
      });
    });

    container.querySelectorAll('.view-drives-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        navigateTo('jobs');
      });
    });
  }

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Company Management</h4>
          <p class="text-muted text-sm mb-0">Corporate recruitment partners & hiring organization profiles</p>
        </div>
        ${isTPOOrAdmin ? `
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-company-btn">
            <i class="bi bi-plus-circle me-1"></i> Register New Company
          </button>
        ` : ''}
      </div>

      <div class="row g-4" id="companies-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `;

  refreshCompanies();

  if (isTPOOrAdmin) {
    container.querySelector('#add-company-btn')?.addEventListener('click', () => {
      openAddCompanyModal();
    });
  }

  function openAddCompanyModal() {
    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = 'Register New Recruiting Company';
    modalBody.innerHTML = `
      <form id="add-company-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Company Official Name</label>
          <input type="text" id="comp-name" class="form-control" placeholder="e.g. Wipro Limited" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Industry Sector</label>
          <input type="text" id="comp-sector" class="form-control" placeholder="IT Services, Financial Consulting, Core Hardware..." required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Headquarters / Location</label>
          <input type="text" id="comp-location" class="form-control" placeholder="Mumbai, MH" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">HR Contact Email</label>
          <input type="email" id="comp-email" class="form-control" placeholder="hr@company.com" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Company Website</label>
          <input type="url" id="comp-website" class="form-control" placeholder="https://www.company.com" required>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-company">Save Company</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-new-company').onclick = () => {
      const name = document.getElementById('comp-name').value;
      const sector = document.getElementById('comp-sector').value;
      const location = document.getElementById('comp-location').value;
      const email = document.getElementById('comp-email').value;
      const website = document.getElementById('comp-website').value;

      if (!name || !email) return;

      db.insertRow('COMPANY', {
        company_name: name,
        sector,
        location,
        contact_email: email,
        website
      });

      bsModal.hide();
      refreshCompanies();
    };
  }

  function openEditCompanyModal(companyId) {
    const companies = db.getTable('COMPANY');
    const comp = companies.find(c => c.company_id === companyId);
    if (!comp) return;

    const modalTitle = document.getElementById('ctpmsModalTitle');
    const modalBody = document.getElementById('ctpmsModalBody');
    const modalFooter = document.getElementById('ctpmsModalFooter');

    modalTitle.textContent = `Edit Company: ${comp.company_name}`;
    modalBody.innerHTML = `
      <form id="edit-company-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Company Official Name</label>
          <input type="text" id="edit-comp-name" class="form-control" value="${comp.company_name}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Industry Sector</label>
          <input type="text" id="edit-comp-sector" class="form-control" value="${comp.sector}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Location</label>
          <input type="text" id="edit-comp-location" class="form-control" value="${comp.location}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">HR Contact Email</label>
          <input type="email" id="edit-comp-email" class="form-control" value="${comp.contact_email}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Website</label>
          <input type="url" id="edit-comp-website" class="form-control" value="${comp.website}" required>
        </div>
      </form>
    `;

    modalFooter.innerHTML = `
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-edit-company">Save Changes</button>
    `;

    const bsModal = new bootstrap.Modal(document.getElementById('ctpmsModal'));
    bsModal.show();

    document.getElementById('save-edit-company').onclick = () => {
      const name = document.getElementById('edit-comp-name').value;
      const sector = document.getElementById('edit-comp-sector').value;
      const location = document.getElementById('edit-comp-location').value;
      const email = document.getElementById('edit-comp-email').value;
      const website = document.getElementById('edit-comp-website').value;

      db.updateRow('COMPANY', companyId, { company_name: name, sector, location, contact_email: email, website });
      bsModal.hide();
      refreshCompanies();
    };
  }
}
