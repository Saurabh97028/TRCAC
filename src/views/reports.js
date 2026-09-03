import { db } from '../services/db.js';
import { auth } from '../services/auth.js';

export function renderReports(container) {
  const user = auth.getCurrentUser();
  const isTPOOrAdmin = user.role_id === 1 || user.role_id === 2;

  if (!isTPOOrAdmin) {
    container.innerHTML = `
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">Placement analytics and CSV exports are restricted to TPO Officers and Administrators.</p>
      </div>
    `;
    return;
  }

  const students = db.getStudentFullProfiles();
  const placements = db.getTable('PLACEMENT_RECORD');
  const companies = db.getTable('COMPANY');

  const totalStudents = students.length;
  const placedStudents = students.filter(s => s.placement_status === 'Placed');
  const unplacedStudents = students.filter(s => s.placement_status === 'Unplaced');

  const highestCTC = placements.reduce((max, p) => p.ctc_offered > max ? p.ctc_offered : max, 0);
  const avgCTC = placements.length > 0 ? (placements.reduce((sum, p) => sum + p.ctc_offered, 0) / placements.length).toFixed(2) : '0.00';

  // Branch-wise Breakdown calculation
  const branches = ['B.Sc. CS', 'B.Sc. IT', 'B.Sc. Data Science'];
  const branchBreakdown = branches.map(b => {
    const branchStudents = students.filter(s => s.branch === b);
    const branchPlaced = branchStudents.filter(s => s.placement_status === 'Placed');
    const rate = branchStudents.length > 0 ? ((branchPlaced.length / branchStudents.length) * 100).toFixed(1) : '0.0';
    return {
      branch: b,
      total: branchStudents.length,
      placed: branchPlaced.length,
      unplaced: branchStudents.length - branchPlaced.length,
      rate: rate
    };
  });

  // Company-wise Breakdown calculation
  const companyBreakdown = companies.map(c => {
    const cPlacements = placements.filter(p => p.company_id === c.company_id);
    const maxOffer = cPlacements.reduce((max, p) => p.ctc_offered > max ? p.ctc_offered : max, 0);
    return {
      company: c.company_name,
      hires: cPlacements.length,
      ctc: maxOffer > 0 ? `${maxOffer.toFixed(2)} LPA` : 'N/A'
    };
  });

  container.innerHTML = `
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Placement Analytics & Compliance Reports</h4>
          <p class="text-muted text-sm mb-0">Executive placement metrics, branch breakdown, and CSV data export</p>
        </div>
        <button class="btn btn-teal text-white rounded-pill px-3 py-2 fw-semibold" id="export-csv-btn">
          <i class="bi bi-file-earmark-spreadsheet me-1"></i> Export Reports to CSV
        </button>
      </div>

      <!-- Stat Summary Cards -->
      <div class="row g-4 mb-4">
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Total Students</small>
            <h3 class="fw-bold text-navy mb-0 mt-1">${totalStudents}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Placed Students</small>
            <h3 class="fw-bold text-teal mb-0 mt-1">${placedStudents.length}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Unplaced Students</small>
            <h3 class="fw-bold text-danger mb-0 mt-1">${unplacedStudents.length}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Average Package</small>
            <h3 class="fw-bold text-primary mb-0 mt-1">${avgCTC} LPA</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Highest Package</small>
            <h3 class="fw-bold text-success mb-0 mt-1">${highestCTC} LPA</h3>
          </div>
        </div>
      </div>

      <!-- Branch-wise Table & Company-wise Table -->
      <div class="row g-4">
        <div class="col-lg-7">
          <div class="card custom-table-card">
            <div class="card-header bg-white py-3 border-bottom">
              <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-diagram-3 me-2 text-primary"></i>Branch-Wise Placement Breakdown</h6>
            </div>
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Degree Branch</th>
                    <th>Total Registered</th>
                    <th>Placed</th>
                    <th>Unplaced</th>
                    <th>Placement Rate</th>
                  </tr>
                </thead>
                <tbody>
                  ${branchBreakdown.map(b => `
                    <tr>
                      <td class="fw-bold text-dark">${b.branch}</td>
                      <td>${b.total}</td>
                      <td class="fw-bold text-success">${b.placed}</td>
                      <td class="text-muted">${b.unplaced}</td>
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          <div class="progress flex-grow-1" style="height: 6px;">
                            <div class="progress-bar bg-teal" role="progressbar" style="width: ${b.rate}%;"></div>
                          </div>
                          <span class="fw-bold text-xs">${b.rate}%</span>
                        </div>
                      </td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-5">
          <div class="card custom-table-card">
            <div class="card-header bg-white py-3 border-bottom">
              <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-building me-2 text-teal"></i>Company Recruiting Summary</h6>
            </div>
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Company Name</th>
                    <th>Offers Recorded</th>
                    <th>Top Package Offered</th>
                  </tr>
                </thead>
                <tbody>
                  ${companyBreakdown.map(c => `
                    <tr>
                      <td class="fw-semibold text-dark">${c.company}</td>
                      <td><span class="badge bg-primary-subtle text-primary rounded-pill">${c.hires} Offers</span></td>
                      <td class="fw-bold text-success">${c.ctc}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // CSV Export Trigger
  container.querySelector('#export-csv-btn').addEventListener('click', () => {
    const exportData = students.map(s => ({
      'Roll Number': s.roll_number,
      'Student Name': s.name,
      'Degree Branch': s.branch,
      'CGPA Score': s.cgpa,
      'Email Contact': s.email,
      'Skills': s.skills,
      'Placement Status': s.placement_status,
      'Company Placed': s.placement_details ? s.placement_details.company_name : 'N/A',
      'CTC Offered (LPA)': s.placement_details ? s.placement_details.ctc_offered : 'N/A'
    }));

    if (window.Papa) {
      const csvStr = window.Papa.unparse(exportData);
      const blob = new Blob([csvStr], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.setAttribute('download', `TRCAC_Placement_Report_${new Date().toISOString().substring(0, 10)}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('CSV export engine ready. Triggered export download.');
    }
  });
}
