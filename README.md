# College Training & Placement Management System (CTPMS)

A comprehensive, role-based, enterprise web application built for **Thakur Ramnarayan College of Arts & Commerce (TRCAC)** following the Software Requirements Specification (SRS) for Academic Year 2026–2027.

![CTPMS Architecture](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript%20ES6%20%7C%20Bootstrap%205-blue)
![Firebase](https://img.shields.io/badge/Database-Google%20Firebase%20Firestore-orange)
![Deployment](https://img.shields.io/badge/Deployment-GitHub%20Pages-green)

---

## 🌟 Key Features

1. **Role-Based Access Control (RBAC)**:
   - **Administrator**: User account creation, role management, security audit logs.
   - **TPO (Training & Placement Officer)**: Registered companies, campus job drives, interview scheduling, placement records, CSV report exports.
   - **Student**: Academic profile, CGPA eligibility checks, job drive applications, interview schedule tracker, skill certificates.
   - **Company HR**: Posted job requirements, applicant tracking.

2. **Google Firebase Integration**:
   - Real-time cloud sync with **Firebase Firestore Database** (`users`, `students`, `companies`, `job_postings`, `applications`, `interviews`, `trainings`, `placement_records`, `security_logs`).
   - Secure Firebase Authentication support.

3. **Placement Rules & Validation**:
   - **Placement Lock**: Automatically prevents students marked **Placed** from submitting further applications per SRS Section 4.7.
   - **CGPA & Branch Matching**: Real-time evaluation of minimum required CGPA score and eligible degree branches.

4. **Analytics & Compliance Reporting**:
   - Branch-wise placement rate progress bars.
   - One-click **CSV Data Export** using PapaParse.
   - Session Security Audit Logging (`SECURITY_LOG`).

---

## 💻 Tech Stack

- **Frontend**: Vanilla JavaScript (ES Modules), Bootstrap 5.3, Bootstrap Icons
- **Cloud Backend**: Google Firebase (Firestore & Auth)
- **Tooling**: Vite 5.x
- **Deployment**: GitHub Pages / Static Hosting

---

## 🛠️ Local Setup & Running

```bash
# 1. Clone the repository
git clone https://github.com/your-username/ctpms.git
cd ctpms

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build
```

---

## 🔑 Firebase Configuration

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 📜 SRS Compliance

Developed strictly according to the **College Training & Placement Management System SRS Version 1.0** (Thakur Ramnarayan College of Arts & Commerce, Dept. of B.Sc. Computer Science).
