import{initializeApp as L}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";import{getFirestore as M,doc as R,setDoc as k}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";import{getAuth as O}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function d(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(t){if(t.ep)return;t.ep=!0;const o=d(t);fetch(t.href,o)}})();const D={apiKey:"AIzaSyAAFXLtkLf55eMIeeTGHpu7KVu-WE9-Zeg",authDomain:"tpms-6e8d8.firebaseapp.com",projectId:"tpms-6e8d8",storageBucket:"tpms-6e8d8.firebasestorage.app",messagingSenderId:"480678660528",appId:"1:480678660528:web:c6e35266d4eb5159d6ee75",measurementId:"G-Z54H1Y13Q0"};let T=null,P=null,N=null,j=!1;try{T=L(D),P=M(T),N=O(T),j=!0,console.log("🔥 Live connected to user Firebase project: TPMS (tpms-6e8d8)!")}catch(n){console.warn("Firebase initialization note:",n)}async function E(n,a){if(P)try{for(const d of a){const i=`${n.toLowerCase()}_id`,t=d[i]?String(d[i]):String(Date.now()),o=R(P,n,t);await k(o,d,{merge:!0})}console.log(`Synced ${a.length} records to Firestore collection: ${n}`)}catch(d){console.warn(`Firestore sync note for ${n}:`,d)}}const I="CTPMS_RELATIONAL_DATABASE_V1",S={ROLE:[{role_id:1,role_name:"Administrator"},{role_id:2,role_name:"TPO"},{role_id:3,role_name:"Student"},{role_id:4,role_name:"Company HR"}],USER:[{user_id:1,name:"Admin Administrator",email:"admin@trcac.edu.in",password:"adminpassword123",role_id:1,is_active:!0},{user_id:2,name:"Prof. Saurabh Vishwakarma (TPO)",email:"tpo@trcac.edu.in",password:"tpopassword123",role_id:2,is_active:!0},{user_id:3,name:"Rahul Sharma",email:"rahul.sharma@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:4,name:"Ananya Patel",email:"ananya.patel@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:5,name:"Siddharth Verma",email:"siddharth.v@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:6,name:"Neha Gupta",email:"neha.gupta@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:7,name:"Vikram Singh",email:"vikram.singh@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:8,name:"Priya Iyer (TCS HR)",email:"priya.hr@tcs.com",password:"hrpassword123",role_id:4,is_active:!0},{user_id:9,name:"Amitabh Joshi (Google HR)",email:"ajoshi@google.com",password:"hrpassword123",role_id:4,is_active:!0},{user_id:10,name:"Saurabh Vishwakarma (Admin)",email:"cs63saurabh@gmail.com",password:"S1a2u3r4",role_id:1,is_active:!0}],STUDENT:[{student_id:101,user_id:3,roll_number:"TRCAC2024CS001",branch:"B.Sc. CS",cgpa:8.9,skills:"Python, Java, SQL, React, AWS",resume_url:"resumes/rahul_sharma_cv.pdf",placement_status:"Placed"},{student_id:102,user_id:4,roll_number:"TRCAC2024CS002",branch:"B.Sc. CS",cgpa:9.45,skills:"C++, Data Structures, System Design, Node.js",resume_url:"resumes/ananya_patel_cv.pdf",placement_status:"Unplaced"},{student_id:103,user_id:5,roll_number:"TRCAC2024IT015",branch:"B.Sc. IT",cgpa:7.8,skills:"HTML, CSS, JavaScript, PHP, MySQL",resume_url:"resumes/siddharth_v_cv.pdf",placement_status:"Unplaced"},{student_id:104,user_id:6,roll_number:"TRCAC2024DS008",branch:"B.Sc. Data Science",cgpa:8.65,skills:"Python, R, PowerBI, Machine Learning, SQL",resume_url:"resumes/neha_gupta_cv.pdf",placement_status:"Unplaced"},{student_id:105,user_id:7,roll_number:"TRCAC2024CS045",branch:"B.Sc. CS",cgpa:6.75,skills:"HTML, Java, SQL Basics",resume_url:"resumes/vikram_s_cv.pdf",placement_status:"Unplaced"}],COMPANY:[{company_id:201,company_name:"Tata Consultancy Services (TCS)",sector:"IT Services",location:"Mumbai, MH",contact_email:"priya.hr@tcs.com",website:"https://www.tcs.com"},{company_id:202,company_name:"Infosys Limited",sector:"IT & Cloud Services",location:"Bengaluru / Mumbai",contact_email:"campus@infosys.com",website:"https://www.infosys.com"},{company_id:203,company_name:"Google India",sector:"Software & Technology",location:"Hyderabad / Bengaluru",contact_email:"ajoshi@google.com",website:"https://careers.google.com"},{company_id:204,company_name:"Deloitte India",sector:"Consulting & Financial Advisory",location:"Mumbai, MH",contact_email:"hr@deloitte.com",website:"https://www.deloitte.com"}],JOB_POSTING:[{job_id:301,company_id:201,job_title:"Software Engineer - TCS Ninja / Digital",description:"Development and maintenance of enterprise cloud applications. Requires strong problem solving and programming skills.",min_cgpa:7,eligible_branches:"B.Sc. CS, B.Sc. IT, B.Sc. Data Science",ctc:7.5,deadline:"2026-09-15",status:"Open"},{job_id:302,company_id:203,job_title:"Associate Software Engineer",description:"Build scalable software services powering global Google Infrastructure. High algorithmic proficiency required.",min_cgpa:8.5,eligible_branches:"B.Sc. CS, B.Sc. IT",ctc:18,deadline:"2026-09-30",status:"Open"},{job_id:303,company_id:204,job_title:"Risk & Analytics Associate",description:"Perform technical risk modeling, data analytics, and audit compliance for enterprise clients.",min_cgpa:7.5,eligible_branches:"B.Sc. CS, B.Sc. IT, B.Sc. Data Science",ctc:8.75,deadline:"2026-08-30",status:"Open"},{job_id:304,company_id:202,job_title:"Specialist Programmer",description:"Design enterprise software architectures and full-stack solutions.",min_cgpa:8,eligible_branches:"B.Sc. CS, B.Sc. IT",ctc:9.5,deadline:"2026-08-10",status:"Closed"}],APPLICATION:[{application_id:401,student_id:101,job_id:301,applied_date:"2026-08-01 10:30:00",status:"Selected"},{application_id:402,student_id:102,job_id:301,applied_date:"2026-08-02 11:15:00",status:"Shortlisted"},{application_id:403,student_id:102,job_id:302,applied_date:"2026-08-03 14:20:00",status:"Shortlisted"},{application_id:404,student_id:103,job_id:301,applied_date:"2026-08-02 16:45:00",status:"Applied"},{application_id:405,student_id:104,job_id:303,applied_date:"2026-08-04 09:00:00",status:"Shortlisted"}],INTERVIEW:[{interview_id:501,application_id:401,round_number:1,round_type:"Aptitude & Coding Test",scheduled_date:"2026-08-04 10:00:00",venue:"Online Assessment Portal",result:"Pass"},{interview_id:502,application_id:401,round_number:2,round_type:"Technical Interview",scheduled_date:"2026-08-05 14:00:00",venue:"TRCAC Seminar Hall 1",result:"Pass"},{interview_id:503,application_id:401,round_number:3,round_type:"HR Interview",scheduled_date:"2026-08-06 11:30:00",venue:"TPO Conference Room",result:"Pass"},{interview_id:504,application_id:402,round_number:1,round_type:"Aptitude & Coding Test",scheduled_date:"2026-08-10 10:00:00",venue:"TRCAC Computer Lab 3",result:"Pending"},{interview_id:505,application_id:403,round_number:1,round_type:"Technical Screening",scheduled_date:"2026-08-12 15:00:00",venue:"Google Meet (Virtual)",result:"Pending"},{interview_id:506,application_id:405,round_number:1,round_type:"Data Case Study",scheduled_date:"2026-08-11 11:00:00",venue:"TRCAC Lab 2",result:"Pending"}],TRAINING:[{training_id:601,title:"Full-Stack Web & Cloud Boot Camp",trainer_name:"TechSkill Academy",start_date:"2026-07-01",end_date:"2026-07-25",description:"Comprehensive training on React, Node.js, REST APIs, Docker, and AWS deployment.",attendance:[101,102,103],completed_students:[101,102]},{training_id:602,title:"Corporate Communication & Mock HR Interviews",trainer_name:"Prof. Anjali Mehta",start_date:"2026-08-01",end_date:"2026-08-15",description:"Interview body language, group discussion tactics, resume polishing, and aptitude shortcuts.",attendance:[101,102,103,104,105],completed_students:[101]}],PLACEMENT_RECORD:[{placement_id:701,student_id:101,company_id:201,job_id:301,ctc_offered:7.5,offer_date:"2026-08-07",joining_date:"2027-06-15"}],SECURITY_LOG:[{log_id:801,user_id:2,entry_time:"2026-08-08 09:00:00",exit_time:"2026-08-08 17:30:00",status_event:"Success Login"},{log_id:802,user_id:3,entry_time:"2026-08-08 11:14:00",exit_time:"2026-08-08 12:00:00",status_event:"Success Login"},{log_id:803,user_id:1,entry_time:"2026-08-08 14:22:00",exit_time:null,status_event:"Success Login"}]};class q{constructor(){this.init()}init(){if(!localStorage.getItem(I))this.saveAll(S);else{const a=this.getAll();a.USER.some(d=>d.email==="cs63saurabh@gmail.com")||(a.USER.push({user_id:10,name:"Saurabh Vishwakarma (Admin)",email:"cs63saurabh@gmail.com",password:"S1a2u3r4",role_id:1,is_active:!0}),this.saveAll(a))}this.syncAllToFirestore()}async syncAllToFirestore(){try{const a=this.getAll();for(const[d,i]of Object.entries(a))Array.isArray(i)&&i.length>0&&await E(d,i)}catch(a){console.warn("Initial Firestore sync error:",a)}}getAll(){try{const a=localStorage.getItem(I);return a?JSON.parse(a):S}catch(a){return console.error("Error loading DB from LocalStorage",a),S}}saveAll(a){try{localStorage.setItem(I,JSON.stringify(a))}catch(d){console.error("Error saving DB to LocalStorage",d)}}resetToDefault(){return this.saveAll(S),S}getTable(a){return this.getAll()[a]||[]}insertRow(a,d){const i=this.getAll();i[a]||(i[a]=[]);const t=`${a.toLowerCase()}_id`;if(!d[t]){const o=i[a].reduce((u,c)=>c[t]>u?c[t]:u,100);d[t]=o+1}return i[a].push(d),this.saveAll(i),E(a,[d]),d}updateRow(a,d,i){const t=this.getAll(),o=`${a.toLowerCase()}_id`,u=t[a]||[],c=u.findIndex(r=>r[o]===d);return c!==-1?(u[c]={...u[c],...i},t[a]=u,this.saveAll(t),E(a,[u[c]]),u[c]):null}deleteRow(a,d){const i=this.getAll(),t=`${a.toLowerCase()}_id`;return i[a]?(i[a]=i[a].filter(o=>o[t]!==d),this.saveAll(i),!0):!1}getStudentFullProfiles(){const a=this.getAll();return a.STUDENT.map(d=>{const i=a.USER.find(u=>u.user_id===d.user_id)||{},t=a.PLACEMENT_RECORD.find(u=>u.student_id===d.student_id);let o=null;return t&&(o=a.COMPANY.find(u=>u.company_id===t.company_id)),{...d,name:i.name||"Unknown",email:i.email||"",is_active:i.is_active,placement_details:t?{...t,company_name:o==null?void 0:o.company_name}:null}})}getJobPostingsDetailed(){const a=this.getAll();return a.JOB_POSTING.map(d=>{const i=a.COMPANY.find(o=>o.company_id===d.company_id)||{},t=a.APPLICATION.filter(o=>o.job_id===d.job_id);return{...d,company_name:i.company_name||"N/A",sector:i.sector||"N/A",location:i.location||"N/A",application_count:t.length}})}getApplicationsDetailed(){const a=this.getAll();return a.APPLICATION.map(d=>{const i=a.STUDENT.find(r=>r.student_id===d.student_id)||{},t=a.USER.find(r=>r.user_id===i.user_id)||{},o=a.JOB_POSTING.find(r=>r.job_id===d.job_id)||{},u=a.COMPANY.find(r=>r.company_id===o.company_id)||{},c=a.INTERVIEW.filter(r=>r.application_id===d.application_id);return{...d,student_name:t.name||"Unknown Student",roll_number:i.roll_number||"",branch:i.branch||"",cgpa:i.cgpa||0,job_title:o.job_title||"N/A",company_name:u.company_name||"N/A",ctc:o.ctc||0,interviews:c}})}}const p=new q,A="CTPMS_ACTIVE_SESSION";class U{constructor(){this.currentUser=this.loadSession()}loadSession(){try{const a=sessionStorage.getItem(A)||localStorage.getItem(A);return a?JSON.parse(a):null}catch{return null}}login(a,d){const t=p.getTable("USER").find(m=>m.email.toLowerCase()===a.toLowerCase()&&m.password===d);if(!t)return{success:!1,message:"Invalid email credentials or password."};if(!t.is_active)return{success:!1,message:"Account is deactivated. Please contact Administrator."};const u=p.getTable("ROLE").find(m=>m.role_id===t.role_id)||{};let c=null;t.role_id===3&&(c=p.getTable("STUDENT").find(m=>m.user_id===t.user_id)||null);const r={user_id:t.user_id,name:t.name,email:t.email,role_id:t.role_id,role_name:u.role_name||"User",student_id:c?c.student_id:null,login_time:new Date().toISOString()},h=new Date().toISOString().replace("T"," ").substring(0,19),v=p.insertRow("SECURITY_LOG",{user_id:t.user_id,entry_time:h,exit_time:null,status_event:"Success Login"});return r.current_log_id=v.log_id,this.currentUser=r,sessionStorage.setItem(A,JSON.stringify(r)),{success:!0,user:r}}logout(){if(this.currentUser&&this.currentUser.current_log_id){const a=new Date().toISOString().replace("T"," ").substring(0,19);p.updateRow("SECURITY_LOG",this.currentUser.current_log_id,{exit_time:a,status_event:"Logout"})}this.currentUser=null,sessionStorage.removeItem(A),localStorage.removeItem(A)}switchRole(a){const i=p.getTable("USER").find(t=>t.role_id===a);return i?this.login(i.email,i.password):{success:!1,message:"User for selected role not found."}}getCurrentUser(){return this.currentUser}isAuthenticated(){return!!this.currentUser}}const y=new U;function F(n,a){n.innerHTML=`
    <div class="login-bg fade-in">
      <div class="card login-card p-4 p-md-5">
        <div class="text-center mb-4">
          <div class="brand-logo bg-primary text-white rounded-3 d-inline-flex align-items-center justify-content-center fw-bold fs-3 px-3 py-2 mb-3 shadow-sm">
            CTPMS
          </div>
          <h3 class="fw-bold text-navy mb-1">College Placement System</h3>
          <p class="text-muted text-sm mb-0">Thakur Ramnarayan College of Arts & Commerce</p>
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
              <input type="password" id="login-password" class="form-control border-start-0 ps-0" placeholder="password" required>
            </div>
          </div>

          <button type="submit" class="btn btn-primary w-100 py-2.5 fw-semibold rounded-3 shadow-sm mb-3">
            Sign In to Portal <i class="bi bi-arrow-right ms-2"></i>
          </button>
        </form>

        <div class="text-center mt-3 pt-3 border-top">
          <span class="badge bg-light text-secondary border text-xs px-3 py-1.5 rounded-pill mb-2">
            <i class="bi bi-shield-check text-success me-1"></i> Connected to Google Firebase Auth & Firestore DB
          </span>
          <div class="text-muted text-xs mt-1">Academic Year 2026–2027 • TRCAC Placement Cell</div>
        </div>
      </div>
    </div>
  `;const d=n.querySelector("#login-form"),i=n.querySelector("#login-alert");d.addEventListener("submit",t=>{t.preventDefault();const o=n.querySelector("#login-email").value,u=n.querySelector("#login-password").value,c=y.login(o,u);c.success?a():(i.textContent=c.message,i.classList.remove("d-none"))})}function B(n,a){var b;const d=y.getCurrentUser(),i=p.getStudentFullProfiles(),t=p.getTable("COMPANY"),o=p.getJobPostingsDetailed(),u=p.getApplicationsDetailed(),c=p.getTable("PLACEMENT_RECORD"),r=i.length,h=i.filter(f=>f.placement_status==="Placed").length,v=r>0?(h/r*100).toFixed(1):0,m=o.filter(f=>f.status==="Open").length,l=c.reduce((f,g)=>g.ctc_offered>f?g.ctc_offered:f,0),e=c.length>0?(c.reduce((f,g)=>f+g.ctc_offered,0)/c.length).toFixed(2):"0.00";let s="";if(d.role_id===3){const f=i.find(x=>x.user_id===d.user_id)||{},g=u.filter(x=>x.student_id===f.student_id);s=`
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">My Profile Status</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${f.placement_status||"Unplaced"}</h4>
                <div class="text-white-50 text-xs mt-1">Roll No: ${f.roll_number||"N/A"} • CGPA: ${f.cgpa?f.cgpa.toFixed(2):"0.00"}</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-mortarboard fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-teal text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">My Drives Applied</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${g.length}</h4>
                <div class="text-white-50 text-xs mt-1">Active drives tracked</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-file-earmark-check fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-navy text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Shortlisted Drives</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${g.filter(x=>x.status==="Shortlisted"||x.status==="Selected").length}</h4>
                <div class="text-white-50 text-xs mt-1">Next interview rounds ready</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-award fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card custom-table-card mb-4">
        <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
          <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-journal-text me-2 text-primary"></i>My Drive Applications</h6>
          <button class="btn btn-sm btn-primary rounded-pill navigate-btn" data-page="jobs"><i class="bi bi-search me-1"></i> Browse Open Job Drives</button>
        </div>
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Drive / Company</th>
                <th>Applied Date</th>
                <th>Package (CTC)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${g.length===0?'<tr><td colspan="5" class="text-center py-4 text-muted">You have not applied to any job drives yet.</td></tr>':g.map(x=>`
                  <tr>
                    <td>
                      <div class="fw-bold text-dark">${x.job_title}</div>
                      <small class="text-muted"><i class="bi bi-building me-1"></i>${x.company_name}</small>
                    </td>
                    <td class="text-muted text-sm">${x.applied_date}</td>
                    <td class="fw-semibold text-dark">${x.ctc} LPA</td>
                    <td>
                      <span class="badge badge-status badge-${x.status.toLowerCase()}">${x.status}</span>
                    </td>
                    <td>
                      <button class="btn btn-xs btn-outline-secondary rounded-pill navigate-btn" data-page="applications">View Detail</button>
                    </td>
                  </tr>
                `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `}else if(d.role_id===4){const f=p.getTable("USER").find(_=>_.user_id===d.user_id),g=t.find(_=>_.contact_email===f.email)||t[0],x=o.filter(_=>_.company_id===g.company_id),w=u.filter(_=>x.some(C=>C.job_id===_.job_id));s=`
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-navy text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Company Profile</small>
                <h5 class="fw-bold mb-0 text-white mt-1">${g.company_name}</h5>
                <div class="text-white-50 text-xs mt-1">${g.sector} • ${g.location}</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-building fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Active Drives Posted</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${x.length}</h4>
                <div class="text-white-50 text-xs mt-1">Open recruitment drives</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-briefcase fs-3"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-teal text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Total Applicants Received</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${w.length}</h4>
                <div class="text-white-50 text-xs mt-1">Student submissions</div>
              </div>
              <div class="icon-box bg-white bg-opacity-20 text-white">
                <i class="bi bi-people fs-3"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}else s=`
      <div class="row g-4 mb-4">
        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Total Registered Students</small>
                <h3 class="fw-bold text-navy mb-0 mt-1">${r}</h3>
                <small class="text-success fw-semibold text-xs"><i class="bi bi-graph-up me-1"></i>${v}% Placement Rate</small>
              </div>
              <div class="icon-box bg-primary-subtle text-primary">
                <i class="bi bi-people"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Placed Students</small>
                <h3 class="fw-bold text-teal mb-0 mt-1">${h}</h3>
                <small class="text-muted text-xs">${r-h} unplaced students</small>
              </div>
              <div class="icon-box bg-teal bg-opacity-10 text-teal">
                <i class="bi bi-check-circle"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Active Recruitment Drives</small>
                <h3 class="fw-bold text-dark mb-0 mt-1">${m}</h3>
                <small class="text-muted text-xs">${t.length} hiring companies</small>
              </div>
              <div class="icon-box bg-warning-subtle text-warning">
                <i class="bi bi-briefcase"></i>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-md-6">
          <div class="card card-stat p-3">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-muted text-uppercase fw-bold text-xs">Highest / Avg CTC Offered</small>
                <h3 class="fw-bold text-primary mb-0 mt-1">${l} LPA</h3>
                <small class="text-muted text-xs">Average: ${e} LPA</small>
              </div>
              <div class="icon-box bg-success-subtle text-success">
                <i class="bi bi-currency-dollar"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Quick Action Cards for TPO & Admin -->
      <div class="row g-4 mb-4">
        <div class="col-lg-8">
          <div class="card custom-table-card">
            <div class="card-header bg-white py-3 d-flex justify-content-between align-items-center border-bottom">
              <h6 class="fw-bold mb-0 text-navy"><i class="bi bi-activity me-2 text-primary"></i>Recent Drive Applications & Status Updates</h6>
              <button class="btn btn-sm btn-outline-primary rounded-pill navigate-btn" data-page="applications">View All Applications</button>
            </div>
            <div class="table-responsive">
              <table class="table table-hover align-middle mb-0">
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Branch</th>
                    <th>Job Drive</th>
                    <th>Company</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  ${u.slice(0,5).map(f=>`
                    <tr>
                      <td>
                        <div class="fw-semibold text-dark">${f.student_name}</div>
                        <small class="text-muted">${f.roll_number}</small>
                      </td>
                      <td class="text-muted text-sm">${f.branch}</td>
                      <td class="fw-semibold text-dark text-sm">${f.job_title}</td>
                      <td class="text-muted text-sm">${f.company_name}</td>
                      <td><span class="badge badge-status badge-${f.status.toLowerCase()}">${f.status}</span></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="card custom-table-card p-3">
            <h6 class="fw-bold text-navy border-bottom pb-2 mb-3"><i class="bi bi-lightning-charge text-warning me-2"></i>Quick Operations</h6>
            <div class="d-grid gap-2">
              <button class="btn btn-primary text-start rounded-3 py-2 navigate-btn" data-page="jobs">
                <i class="bi bi-plus-circle me-2"></i> Post New Job Drive
              </button>
              <button class="btn btn-teal text-white text-start rounded-3 py-2 navigate-btn" data-page="students">
                <i class="bi bi-person-check me-2"></i> Verify Student Profiles
              </button>
              <button class="btn btn-outline-dark text-start rounded-3 py-2 navigate-btn" data-page="interviews">
                <i class="bi bi-calendar-event me-2"></i> Schedule Interview Round
              </button>
              <button class="btn btn-outline-secondary text-start rounded-3 py-2 navigate-btn" data-page="reports">
                <i class="bi bi-file-earmark-bar-graph me-2"></i> Export Placement Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    `;n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Welcome back, ${d.name}!</h4>
          <p class="text-muted text-sm mb-0">Role: <span class="badge bg-primary-subtle text-primary rounded-pill">${d.role_name}</span> • TRCAC Placement Portal</p>
        </div>
        <div>
          <button class="btn btn-sm btn-white border shadow-sm rounded-pill me-2 text-dark" id="refresh-dashboard">
            <i class="bi bi-arrow-clockwise me-1"></i> Refresh Data
          </button>
        </div>
      </div>

      ${s}
    </div>
  `,n.querySelectorAll(".navigate-btn").forEach(f=>{f.addEventListener("click",()=>{const g=f.getAttribute("data-page");a(g)})}),(b=n.querySelector("#refresh-dashboard"))==null||b.addEventListener("click",()=>{B(n,a)})}function H(n){if(y.getCurrentUser().role_id!==1){n.innerHTML=`
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">User Management is restricted to System Administrator accounts only.</p>
      </div>
    `;return}function d(){const t=p.getTable("USER"),o=p.getTable("ROLE"),u=n.querySelector("#users-tbody");u&&(u.innerHTML=t.map(c=>{const r=o.find(h=>h.role_id===c.role_id)||{};return`
        <tr>
          <td>
            <div class="fw-bold text-dark">${c.name}</div>
            <small class="text-muted">User ID: #${c.user_id}</small>
          </td>
          <td class="text-muted text-sm">${c.email}</td>
          <td>
            <span class="badge bg-primary-subtle text-primary rounded-pill fw-semibold">${r.role_name||"N/A"}</span>
          </td>
          <td>
            ${c.is_active?'<span class="badge bg-success-subtle text-success rounded-pill"><i class="bi bi-check-circle me-1"></i>Active</span>':'<span class="badge bg-danger-subtle text-danger rounded-pill"><i class="bi bi-x-circle me-1"></i>Deactivated</span>'}
          </td>
          <td>
            <button class="btn btn-xs btn-outline-primary rounded-pill edit-user-btn me-1" data-id="${c.user_id}">Edit</button>
            <button class="btn btn-xs btn-outline-${c.is_active?"danger":"success"} rounded-pill toggle-active-btn" data-id="${c.user_id}">
              ${c.is_active?"Deactivate":"Activate"}
            </button>
          </td>
        </tr>
      `}).join(""),n.querySelectorAll(".toggle-active-btn").forEach(c=>{c.addEventListener("click",()=>{const r=parseInt(c.getAttribute("data-id")),h=t.find(v=>v.user_id===r);h&&(p.updateRow("USER",r,{is_active:!h.is_active}),d())})}),n.querySelectorAll(".edit-user-btn").forEach(c=>{c.addEventListener("click",()=>{const r=parseInt(c.getAttribute("data-id"));i(r)})}))}n.innerHTML=`
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
          <span class="text-muted text-xs">Total Users Registered: ${p.getTable("USER").length}</span>
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
  `,d(),n.querySelector("#add-user-btn").addEventListener("click",()=>{const t=document.getElementById("ctpmsModalTitle"),o=document.getElementById("ctpmsModalBody"),u=document.getElementById("ctpmsModalFooter");t.textContent="Create New User Account",o.innerHTML=`
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
    `,u.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="submit-new-user">Create Account</button>
    `;const c=new bootstrap.Modal(document.getElementById("ctpmsModal"));c.show(),document.getElementById("submit-new-user").onclick=()=>{const r=document.getElementById("new-user-name").value,h=document.getElementById("new-user-email").value,v=document.getElementById("new-user-pass").value,m=parseInt(document.getElementById("new-user-role").value);if(!r||!h||!v)return;const l=p.insertRow("USER",{name:r,email:h,password:v,role_id:m,is_active:!0});m===3&&p.insertRow("STUDENT",{user_id:l.user_id,roll_number:`TRCAC2026CS${Math.floor(100+Math.random()*900)}`,branch:"B.Sc. CS",cgpa:7.5,skills:"HTML, CSS, JavaScript",resume_url:`resumes/student_${l.user_id}.pdf`,placement_status:"Unplaced"}),c.hide(),d()}});function i(t){const u=p.getTable("USER").find(m=>m.user_id===t);if(!u)return;const c=document.getElementById("ctpmsModalTitle"),r=document.getElementById("ctpmsModalBody"),h=document.getElementById("ctpmsModalFooter");c.textContent=`Edit User: ${u.name}`,r.innerHTML=`
      <form id="edit-user-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Name</label>
          <input type="text" id="edit-user-name" class="form-control" value="${u.name}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address</label>
          <input type="email" id="edit-user-email" class="form-control" value="${u.email}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Reassign Role</label>
          <select id="edit-user-role" class="form-select" required>
            <option value="1" ${u.role_id===1?"selected":""}>Administrator</option>
            <option value="2" ${u.role_id===2?"selected":""}>TPO (Training & Placement Officer)</option>
            <option value="3" ${u.role_id===3?"selected":""}>Student</option>
            <option value="4" ${u.role_id===4?"selected":""}>Company HR</option>
          </select>
        </div>
      </form>
    `,h.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-edit-user">Save Changes</button>
    `;const v=new bootstrap.Modal(document.getElementById("ctpmsModal"));v.show(),document.getElementById("save-edit-user").onclick=()=>{const m=document.getElementById("edit-user-name").value,l=document.getElementById("edit-user-email").value,e=parseInt(document.getElementById("edit-user-role").value);p.updateRow("USER",t,{name:m,email:l,role_id:e}),v.hide(),d()}}}function G(n){const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2;function i(){const u=p.getStudentFullProfiles(),c=n.querySelector("#filter-branch").value,r=n.querySelector("#filter-status").value,h=parseFloat(n.querySelector("#filter-cgpa").value)||0,v=n.querySelector("#search-student").value.toLowerCase(),m=u.filter(e=>{const s=!c||e.branch===c,b=!r||e.placement_status===r,f=e.cgpa>=h,g=!v||e.name.toLowerCase().includes(v)||e.roll_number.toLowerCase().includes(v)||e.skills.toLowerCase().includes(v);return s&&b&&f&&g}),l=n.querySelector("#students-tbody");if(l){if(m.length===0){l.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No students matching the filter criteria.</td></tr>';return}l.innerHTML=m.map(e=>`
      <tr>
        <td>
          <div class="fw-bold text-dark">${e.name}</div>
          <small class="text-muted"><i class="bi bi-person-vcard me-1"></i>${e.roll_number}</small>
        </td>
        <td><span class="badge bg-light text-dark border">${e.branch}</span></td>
        <td class="fw-bold ${e.cgpa>=8?"text-success":"text-dark"}">${e.cgpa.toFixed(2)}</td>
        <td>
          <div class="text-truncate text-sm" style="max-width: 220px;" title="${e.skills}">
            ${e.skills.split(",").map(s=>`<span class="badge bg-secondary-subtle text-secondary me-1 text-xs">${s.trim()}</span>`).join("")}
          </div>
        </td>
        <td class="text-muted text-xs">${e.email}</td>
        <td>
          <span class="badge badge-status badge-${e.placement_status.toLowerCase().replace(/\s+/g,"")}">
            ${e.placement_status}
          </span>
        </td>
        <td>
          <button class="btn btn-xs btn-outline-primary rounded-pill view-student-btn me-1" data-id="${e.student_id}">View Profile</button>
          ${d?`<button class="btn btn-xs btn-outline-dark rounded-pill edit-student-btn" data-id="${e.student_id}">Edit Status</button>`:""}
        </td>
      </tr>
    `).join(""),n.querySelectorAll(".view-student-btn").forEach(e=>{e.addEventListener("click",()=>{const s=parseInt(e.getAttribute("data-id"));t(s)})}),n.querySelectorAll(".edit-student-btn").forEach(e=>{e.addEventListener("click",()=>{const s=parseInt(e.getAttribute("data-id"));o(s)})})}}n.innerHTML=`
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
  `,n.querySelector("#search-student").addEventListener("input",i),n.querySelector("#filter-branch").addEventListener("change",i),n.querySelector("#filter-cgpa").addEventListener("change",i),n.querySelector("#filter-status").addEventListener("change",i),i();function t(u){const r=p.getStudentFullProfiles().find(e=>e.student_id===u);if(!r)return;const h=document.getElementById("ctpmsModalTitle"),v=document.getElementById("ctpmsModalBody"),m=document.getElementById("ctpmsModalFooter");h.textContent=`Student Profile: ${r.name}`,v.innerHTML=`
      <div class="row g-4">
        <div class="col-md-4 text-center border-end">
          <div class="avatar bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center fw-bold mb-3 fs-3" style="width: 80px; height: 80px;">
            ${r.name.charAt(0)}
          </div>
          <h5 class="fw-bold mb-1">${r.name}</h5>
          <small class="text-muted d-block mb-2">${r.roll_number}</small>
          <span class="badge badge-status badge-${r.placement_status.toLowerCase().replace(/\s+/g,"")}">${r.placement_status}</span>
        </div>
        <div class="col-md-8">
          <table class="table table-sm border-0">
            <tbody>
              <tr><td class="text-muted fw-semibold">Academic Branch:</td><td class="fw-bold">${r.branch}</td></tr>
              <tr><td class="text-muted fw-semibold">Cumulative CGPA:</td><td class="fw-bold text-success fs-6">${r.cgpa.toFixed(2)} / 10.0</td></tr>
              <tr><td class="text-muted fw-semibold">Email Address:</td><td>${r.email}</td></tr>
              <tr><td class="text-muted fw-semibold">Skills Tagged:</td><td>${r.skills}</td></tr>
              <tr><td class="text-muted fw-semibold">Uploaded Resume:</td><td><a href="#" onclick="alert('Simulated PDF Resume preview for ${r.name}')" class="text-primary text-decoration-none"><i class="bi bi-file-pdf me-1"></i>${r.resume_url}</a></td></tr>
              ${r.placement_details?`
                <tr class="table-success"><td class="fw-semibold">Offer Package:</td><td class="fw-bold">${r.placement_details.company_name} (${r.placement_details.ctc_offered} LPA)</td></tr>
              `:""}
            </tbody>
          </table>
        </div>
      </div>
    `,m.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
    `,new bootstrap.Modal(document.getElementById("ctpmsModal")).show()}function o(u){const r=p.getStudentFullProfiles().find(e=>e.student_id===u);if(!r)return;const h=document.getElementById("ctpmsModalTitle"),v=document.getElementById("ctpmsModalBody"),m=document.getElementById("ctpmsModalFooter");h.textContent=`Update Student Eligibility: ${r.name}`,v.innerHTML=`
      <form id="edit-student-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Academic CGPA Score</label>
          <input type="number" step="0.01" max="10.0" id="edit-student-cgpa" class="form-control" value="${r.cgpa}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Placement Status</label>
          <select id="edit-student-status" class="form-select" required>
            <option value="Unplaced" ${r.placement_status==="Unplaced"?"selected":""}>Unplaced</option>
            <option value="Placed" ${r.placement_status==="Placed"?"selected":""}>Placed</option>
            <option value="Opted Out" ${r.placement_status==="Opted Out"?"selected":""}>Opted Out</option>
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Skills (Comma-separated)</label>
          <textarea id="edit-student-skills" class="form-control" rows="2">${r.skills}</textarea>
        </div>
      </form>
    `,m.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-student-changes">Save Updates</button>
    `;const l=new bootstrap.Modal(document.getElementById("ctpmsModal"));l.show(),document.getElementById("save-student-changes").onclick=()=>{const e=parseFloat(document.getElementById("edit-student-cgpa").value),s=document.getElementById("edit-student-status").value,b=document.getElementById("edit-student-skills").value;p.updateRow("STUDENT",u,{cgpa:e,placement_status:s,skills:b}),l.hide(),i()}}}function J(n,a){var c;const d=y.getCurrentUser(),i=d.role_id===1||d.role_id===2;function t(){const r=p.getTable("COMPANY"),h=p.getTable("JOB_POSTING"),v=n.querySelector("#companies-grid");v&&(v.innerHTML=r.map(m=>{const l=h.filter(e=>e.company_id===m.company_id&&e.status==="Open").length;return`
        <div class="col-md-6 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="avatar bg-navy text-white rounded-3 d-flex align-items-center justify-content-center fw-bold fs-4" style="width: 52px; height: 52px;">
                ${m.company_name.charAt(0)}
              </div>
              <div>
                <h6 class="fw-bold mb-0 text-navy">${m.company_name}</h6>
                <span class="badge bg-light text-secondary border text-xs mt-1">${m.sector}</span>
              </div>
            </div>
            <div class="border-top pt-2.5 mb-3 fs-7">
              <div class="text-muted mb-1"><i class="bi bi-geo-alt me-1 text-danger"></i>${m.location}</div>
              <div class="text-muted mb-1"><i class="bi bi-envelope me-1 text-primary"></i>${m.contact_email}</div>
              <div class="text-muted"><i class="bi bi-globe me-1 text-teal"></i><a href="${m.website}" target="_blank" class="text-decoration-none text-muted">${m.website}</a></div>
            </div>
            <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-auto">
              <span class="badge bg-primary-subtle text-primary rounded-pill text-xs fw-semibold">
                ${l} Active Drives
              </span>
              ${i?`
                <div>
                  <button class="btn btn-xs btn-outline-primary rounded-pill edit-company-btn me-1" data-id="${m.company_id}">Edit</button>
                  <button class="btn btn-xs btn-outline-dark rounded-pill view-drives-btn" data-id="${m.company_id}">View Drives</button>
                </div>
              `:""}
            </div>
          </div>
        </div>
      `}).join(""),n.querySelectorAll(".edit-company-btn").forEach(m=>{m.addEventListener("click",()=>{const l=parseInt(m.getAttribute("data-id"));u(l)})}),n.querySelectorAll(".view-drives-btn").forEach(m=>{m.addEventListener("click",()=>{a("jobs")})}))}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Company Management</h4>
          <p class="text-muted text-sm mb-0">Corporate recruitment partners & hiring organization profiles</p>
        </div>
        ${i?`
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-company-btn">
            <i class="bi bi-plus-circle me-1"></i> Register New Company
          </button>
        `:""}
      </div>

      <div class="row g-4" id="companies-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `,t(),i&&((c=n.querySelector("#add-company-btn"))==null||c.addEventListener("click",()=>{o()}));function o(){const r=document.getElementById("ctpmsModalTitle"),h=document.getElementById("ctpmsModalBody"),v=document.getElementById("ctpmsModalFooter");r.textContent="Register New Recruiting Company",h.innerHTML=`
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
    `,v.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-company">Save Company</button>
    `;const m=new bootstrap.Modal(document.getElementById("ctpmsModal"));m.show(),document.getElementById("save-new-company").onclick=()=>{const l=document.getElementById("comp-name").value,e=document.getElementById("comp-sector").value,s=document.getElementById("comp-location").value,b=document.getElementById("comp-email").value,f=document.getElementById("comp-website").value;!l||!b||(p.insertRow("COMPANY",{company_name:l,sector:e,location:s,contact_email:b,website:f}),m.hide(),t())}}function u(r){const v=p.getTable("COMPANY").find(b=>b.company_id===r);if(!v)return;const m=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),e=document.getElementById("ctpmsModalFooter");m.textContent=`Edit Company: ${v.company_name}`,l.innerHTML=`
      <form id="edit-company-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Company Official Name</label>
          <input type="text" id="edit-comp-name" class="form-control" value="${v.company_name}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Industry Sector</label>
          <input type="text" id="edit-comp-sector" class="form-control" value="${v.sector}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Location</label>
          <input type="text" id="edit-comp-location" class="form-control" value="${v.location}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">HR Contact Email</label>
          <input type="email" id="edit-comp-email" class="form-control" value="${v.contact_email}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Website</label>
          <input type="url" id="edit-comp-website" class="form-control" value="${v.website}" required>
        </div>
      </form>
    `,e.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-edit-company">Save Changes</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-edit-company").onclick=()=>{const b=document.getElementById("edit-comp-name").value,f=document.getElementById("edit-comp-sector").value,g=document.getElementById("edit-comp-location").value,x=document.getElementById("edit-comp-email").value,w=document.getElementById("edit-comp-website").value;p.updateRow("COMPANY",r,{company_name:b,sector:f,location:g,contact_email:x,website:w}),s.hide(),t()}}}function V(n,a){const d=p.getStudentFullProfiles(),i=p.getJobPostingsDetailed(),t=d.find(u=>u.student_id===n),o=i.find(u=>u.job_id===a);if(!t)return{eligible:!1,reason:"Student profile not found."};if(!o)return{eligible:!1,reason:"Job drive not found."};if(o.status!=="Open")return{eligible:!1,reason:`Job drive is currently ${o.status.toLowerCase()}.`};if(t.placement_status==="Placed")return{eligible:!1,reason:"You have already accepted a final placement offer and are ineligible for further drives."};if(t.placement_status==="Opted Out")return{eligible:!1,reason:"Your status is currently set to Opted Out."};if(t.cgpa<o.min_cgpa)return{eligible:!1,reason:`Your CGPA (${t.cgpa.toFixed(2)}) is below the required threshold of ${o.min_cgpa.toFixed(2)}.`};if(o.eligible_branches){const u=o.eligible_branches.split(",").map(h=>h.trim().toLowerCase()),c=t.branch.trim().toLowerCase();if(!u.some(h=>c.includes(h)||h.includes(c)))return{eligible:!1,reason:`Your branch (${t.branch}) is not eligible for this drive. Eligible branches: ${o.eligible_branches}.`}}return{eligible:!0,reason:"Eligible to apply."}}function Y(n,a){var h;const d=y.getCurrentUser(),i=d.role_id===1||d.role_id===2||d.role_id===4,t=d.role_id===3,o=t?p.getTable("STUDENT").find(v=>v.user_id===d.user_id):null,u=t&&o?p.getTable("APPLICATION").filter(v=>v.student_id===o.student_id):[];function c(){const v=p.getJobPostingsDetailed(),m=n.querySelector("#jobs-grid");m&&(m.innerHTML=v.map(l=>{let e=null,s=!1;return t&&o&&(s=u.some(b=>b.job_id===l.job_id),e=V(o.student_id,l.job_id)),`
        <div class="col-md-6 col-xl-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white position-relative">
            <div class="d-flex justify-content-between align-items-start mb-3">
              <div>
                <span class="badge bg-primary-subtle text-primary rounded-pill text-xs fw-semibold mb-2">${l.company_name}</span>
                <h5 class="fw-bold text-navy mb-1">${l.job_title}</h5>
                <small class="text-muted"><i class="bi bi-geo-alt me-1"></i>${l.location}</small>
              </div>
              <div class="text-end">
                <div class="fw-extrabold text-teal fs-5">${l.ctc} LPA</div>
                <small class="text-muted text-xs">Annual Package</small>
              </div>
            </div>

            <p class="text-muted text-sm line-clamp-2 mb-3">${l.description}</p>

            <div class="bg-light p-2.5 rounded-3 mb-3 text-xs">
              <div class="d-flex justify-content-between mb-1">
                <span class="text-muted"><i class="bi bi-mortarboard me-1"></i>Min CGPA Required:</span>
                <span class="fw-bold ${o&&o.cgpa>=l.min_cgpa?"text-success":"text-dark"}">${l.min_cgpa.toFixed(2)}</span>
              </div>
              <div class="d-flex justify-content-between">
                <span class="text-muted"><i class="bi bi-layers me-1"></i>Eligible Branches:</span>
                <span class="fw-semibold text-dark">${l.eligible_branches}</span>
              </div>
            </div>

            <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-auto text-xs">
              <div>
                <span class="badge badge-status badge-${l.status.toLowerCase()}">${l.status} Drive</span>
                <span class="text-muted ms-2"><i class="bi bi-people me-1"></i>${l.application_count} Applicants</span>
              </div>
              
              <div>
                ${t?`
                  ${s?`
                    <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2 fw-semibold">
                      <i class="bi bi-check-circle-fill me-1"></i> Applied
                    </span>
                  `:`
                    <button class="btn btn-sm btn-primary rounded-pill px-3 apply-job-btn" 
                      data-id="${l.job_id}" 
                      ${e!=null&&e.eligible?"":`disabled title="${e==null?void 0:e.reason}"`}>
                      Apply Now
                    </button>
                  `}
                `:""}

                ${i?`
                  ${l.status==="Open"?`
                    <button class="btn btn-xs btn-outline-danger rounded-pill close-drive-btn me-1" data-id="${l.job_id}">Close Drive</button>
                  `:`
                    <button class="btn btn-xs btn-outline-success rounded-pill open-drive-btn me-1" data-id="${l.job_id}">Reopen</button>
                  `}
                  <button class="btn btn-xs btn-outline-primary rounded-pill view-apps-btn" data-id="${l.job_id}">Applicants (${l.application_count})</button>
                `:""}
              </div>
            </div>

            ${t&&!s&&!(e!=null&&e.eligible)?`
              <small class="text-danger text-xs mt-2 d-block"><i class="bi bi-exclamation-triangle-fill me-1"></i>${e==null?void 0:e.reason}</small>
            `:""}
          </div>
        </div>
      `}).join(""),n.querySelectorAll(".apply-job-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id"));o&&(p.insertRow("APPLICATION",{student_id:o.student_id,job_id:e,applied_date:new Date().toISOString().replace("T"," ").substring(0,19),status:"Applied"}),alert("Application submitted successfully!"),c())})}),n.querySelectorAll(".close-drive-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id"));p.updateRow("JOB_POSTING",e,{status:"Closed"}),c()})}),n.querySelectorAll(".open-drive-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id"));p.updateRow("JOB_POSTING",e,{status:"Open"}),c()})}),n.querySelectorAll(".view-apps-btn").forEach(l=>{l.addEventListener("click",()=>{a("applications")})}))}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Campus Placement Job Drives</h4>
          <p class="text-muted text-sm mb-0">Active campus recruitment drives, minimum CGPA eligibility, and CTC packages</p>
        </div>
        ${i?`
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="post-drive-btn">
            <i class="bi bi-plus-circle me-1"></i> Post New Job Drive
          </button>
        `:""}
      </div>

      <div class="row g-4" id="jobs-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `,c(),i&&((h=n.querySelector("#post-drive-btn"))==null||h.addEventListener("click",()=>{r()}));function r(){const v=p.getTable("COMPANY"),m=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),e=document.getElementById("ctpmsModalFooter");m.textContent="Post New Campus Job Drive",l.innerHTML=`
      <form id="post-drive-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Company</label>
          <select id="drive-company" class="form-select" required>
            ${v.map(b=>`<option value="${b.company_id}">${b.company_name} (${b.sector})</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Job Title / Role</label>
          <input type="text" id="drive-title" class="form-control" placeholder="e.g. Full-Stack Developer" required>
        </div>
        <div class="row g-3 mb-3">
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Minimum Required CGPA</label>
            <input type="number" step="0.1" max="10.0" id="drive-cgpa" class="form-control" placeholder="7.5" required value="7.0">
          </div>
          <div class="col-md-6">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Annual CTC Package (in LPA)</label>
            <input type="number" step="0.25" id="drive-ctc" class="form-control" placeholder="8.50" required value="8.0">
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Eligible Academic Branches</label>
          <input type="text" id="drive-branches" class="form-control" placeholder="e.g. B.Sc. CS, B.Sc. IT, B.Sc. Data Science" value="B.Sc. CS, B.Sc. IT" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Application Deadline</label>
          <input type="date" id="drive-deadline" class="form-control" required value="2026-09-30">
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Full Job Description & Criteria</label>
          <textarea id="drive-desc" class="form-control" rows="3" placeholder="Specify technical skills, interview rounds, and job requirements..." required></textarea>
        </div>
      </form>
    `,e.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-drive">Publish Job Drive</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-new-drive").onclick=()=>{const b=parseInt(document.getElementById("drive-company").value),f=document.getElementById("drive-title").value,g=parseFloat(document.getElementById("drive-cgpa").value),x=parseFloat(document.getElementById("drive-ctc").value),w=document.getElementById("drive-branches").value,_=document.getElementById("drive-deadline").value,C=document.getElementById("drive-desc").value;!f||!C||(p.insertRow("JOB_POSTING",{company_id:b,job_title:f,description:C,min_cgpa:g,eligible_branches:w,ctc:x,deadline:_,status:"Open"}),s.hide(),c())}}}function W(n,a){const d=y.getCurrentUser(),i=d.role_id===3,t=d.role_id===1||d.role_id===2||d.role_id===4,o=i?p.getTable("STUDENT").find(c=>c.user_id===d.user_id):null;function u(){var l,e;let c=p.getApplicationsDetailed();i&&o&&(c=c.filter(s=>s.student_id===o.student_id));const r=((l=n.querySelector("#filter-app-status"))==null?void 0:l.value)||"",h=((e=n.querySelector("#search-app"))==null?void 0:e.value.toLowerCase())||"",v=c.filter(s=>{const b=!r||s.status===r,f=!h||s.student_name.toLowerCase().includes(h)||s.job_title.toLowerCase().includes(h)||s.company_name.toLowerCase().includes(h);return b&&f}),m=n.querySelector("#applications-tbody");if(m){if(v.length===0){m.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No drive applications found matching your criteria.</td></tr>';return}m.innerHTML=v.map(s=>`
      <tr>
        <td>
          <div class="fw-bold text-dark">${s.student_name}</div>
          <small class="text-muted">${s.roll_number} • ${s.branch}</small>
        </td>
        <td>
          <div class="fw-semibold text-dark">${s.job_title}</div>
          <small class="text-muted"><i class="bi bi-building me-1"></i>${s.company_name}</small>
        </td>
        <td class="fw-bold text-teal">${s.ctc} LPA</td>
        <td class="text-muted text-xs">${s.applied_date}</td>
        <td>
          <span class="badge badge-status badge-${s.status.toLowerCase()}">${s.status}</span>
        </td>
        <td>
          ${s.interviews&&s.interviews.length>0?`
            <span class="badge bg-light text-dark border text-xs" title="Scheduled Interview Rounds">
              <i class="bi bi-calendar-check me-1 text-primary"></i>Round ${s.interviews[s.interviews.length-1].round_number} (${s.interviews[s.interviews.length-1].result})
            </span>
          `:'<span class="text-muted text-xs">No rounds yet</span>'}
        </td>
        <td>
          ${t?`
            <div class="dropdown">
              <button class="btn btn-xs btn-outline-secondary rounded-pill dropdown-toggle" data-bs-toggle="dropdown">
                Update Status
              </button>
              <ul class="dropdown-menu shadow-sm border-0">
                <li><a class="dropdown-item update-status-btn" href="#" data-id="${s.application_id}" data-status="Applied">Set: Applied</a></li>
                <li><a class="dropdown-item update-status-btn text-warning" href="#" data-id="${s.application_id}" data-status="Shortlisted">Shortlist for Interviews</a></li>
                <li><a class="dropdown-item update-status-btn text-success fw-bold" href="#" data-id="${s.application_id}" data-status="Selected">Mark Selected (Offer)</a></li>
                <li><a class="dropdown-item update-status-btn text-danger" href="#" data-id="${s.application_id}" data-status="Rejected">Mark Rejected</a></li>
              </ul>
            </div>
          `:`
            <span class="text-muted text-xs">View Only</span>
          `}
        </td>
      </tr>
    `).join(""),n.querySelectorAll(".update-status-btn").forEach(s=>{s.addEventListener("click",b=>{b.preventDefault();const f=parseInt(s.getAttribute("data-id")),g=s.getAttribute("data-status");if(p.updateRow("APPLICATION",f,{status:g}),g==="Selected"&&t){const x=p.getApplicationsDetailed().find(w=>w.application_id===f);confirm(`Student ${x.student_name} is marked Selected! Would you like to create a Final Placement Record now?`)&&a("placements")}u()})})}}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Drive Applications & Shortlist Tracker</h4>
          <p class="text-muted text-sm mb-0">Track application statuses, shortlisting, and candidate progression</p>
        </div>
      </div>

      <!-- Filters -->
      <div class="card p-3 mb-4 border-0 shadow-sm rounded-4 bg-white">
        <div class="row g-3 align-items-center">
          <div class="col-md-6">
            <input type="text" id="search-app" class="form-control form-control-sm" placeholder="Search by student name, company, or job title...">
          </div>
          <div class="col-md-6">
            <select id="filter-app-status" class="form-select form-select-sm">
              <option value="">All Application Statuses</option>
              <option value="Applied">Applied</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        </div>
      </div>

      <div class="card custom-table-card">
        <div class="table-responsive">
          <table class="table table-hover align-middle mb-0">
            <thead>
              <tr>
                <th>Student Candidate</th>
                <th>Job Drive & Company</th>
                <th>Package</th>
                <th>Applied Date</th>
                <th>Status Badge</th>
                <th>Latest Interview</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="applications-tbody">
              <!-- Populated dynamically -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,n.querySelector("#search-app").addEventListener("input",u),n.querySelector("#filter-app-status").addEventListener("change",u),u()}function Q(n){var r;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2||a.role_id===4,i=a.role_id===3,t=i?p.getTable("STUDENT").find(h=>h.user_id===a.user_id):null;function o(){const h=p.getTable("INTERVIEW"),v=p.getApplicationsDetailed();let m=h.map(e=>{const s=v.find(b=>b.application_id===e.application_id)||{};return{...e,student_name:s.student_name||"N/A",student_id:s.student_id,roll_number:s.roll_number||"",job_title:s.job_title||"N/A",company_name:s.company_name||"N/A"}});i&&t&&(m=m.filter(e=>e.student_id===t.student_id));const l=n.querySelector("#interviews-tbody");if(l){if(m.length===0){l.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No scheduled interview rounds found.</td></tr>';return}l.innerHTML=m.map(e=>`
      <tr>
        <td>
          <span class="badge bg-primary text-white rounded-circle me-2 px-2.5 py-1">R${e.round_number}</span>
          <span class="fw-bold text-dark">${e.round_type}</span>
        </td>
        <td>
          <div class="fw-bold text-dark">${e.student_name}</div>
          <small class="text-muted">${e.roll_number}</small>
        </td>
        <td>
          <div class="fw-semibold text-dark text-sm">${e.job_title}</div>
          <small class="text-muted">${e.company_name}</small>
        </td>
        <td class="text-muted text-sm fw-semibold"><i class="bi bi-calendar-event me-1 text-primary"></i>${e.scheduled_date}</td>
        <td class="text-muted text-sm"><i class="bi bi-geo-alt me-1 text-danger"></i>${e.venue}</td>
        <td>
          <span class="badge bg-${e.result==="Pass"?"success":e.result==="Fail"?"danger":"warning"}-subtle text-${e.result==="Pass"?"success":e.result==="Fail"?"danger":"warning"} rounded-pill">
            ${e.result}
          </span>
        </td>
        <td>
          ${d?`
            <button class="btn btn-xs btn-outline-primary rounded-pill update-result-btn me-1" data-id="${e.interview_id}">Result</button>
          `:`
            <span class="text-muted text-xs">Scheduled</span>
          `}
        </td>
      </tr>
    `).join(""),n.querySelectorAll(".update-result-btn").forEach(e=>{e.addEventListener("click",()=>{const s=parseInt(e.getAttribute("data-id"));c(s)})})}}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Interview Scheduling & Round Results</h4>
          <p class="text-muted text-sm mb-0">Manage multi-stage technical, aptitude, and HR evaluation rounds</p>
        </div>
        ${d?`
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="schedule-interview-btn">
            <i class="bi bi-calendar-plus me-1"></i> Schedule Interview Round
          </button>
        `:""}
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
  `,o(),d&&((r=n.querySelector("#schedule-interview-btn"))==null||r.addEventListener("click",()=>{u()}));function u(){const h=p.getApplicationsDetailed().filter(s=>s.status==="Shortlisted"||s.status==="Applied"),v=document.getElementById("ctpmsModalTitle"),m=document.getElementById("ctpmsModalBody"),l=document.getElementById("ctpmsModalFooter");v.textContent="Schedule Interview Round",m.innerHTML=`
      <form id="schedule-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Shortlisted Candidate & Drive</label>
          <select id="int-app-id" class="form-select" required>
            ${h.map(s=>`<option value="${s.application_id}">${s.student_name} (${s.roll_number}) — ${s.job_title} @ ${s.company_name}</option>`).join("")}
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
    `,l.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-interview">Confirm Schedule</button>
    `;const e=new bootstrap.Modal(document.getElementById("ctpmsModal"));e.show(),document.getElementById("save-new-interview").onclick=()=>{const s=parseInt(document.getElementById("int-app-id").value),b=parseInt(document.getElementById("int-round-num").value),f=document.getElementById("int-round-type").value,g=document.getElementById("int-date").value.replace("T"," "),x=document.getElementById("int-venue").value;!s||!x||(p.insertRow("INTERVIEW",{application_id:s,round_number:b,round_type:f,scheduled_date:g,venue:x,result:"Pending"}),e.hide(),o())}}function c(h){const v=p.getTable("INTERVIEW").find(b=>b.interview_id===h);if(!v)return;const m=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),e=document.getElementById("ctpmsModalFooter");m.textContent=`Update Round ${v.round_number} Result`,l.innerHTML=`
      <form id="update-result-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Evaluation Result</label>
          <select id="int-result" class="form-select" required>
            <option value="Pending" ${v.result==="Pending"?"selected":""}>Pending</option>
            <option value="Pass" ${v.result==="Pass"?"selected":""}>Pass (Cleared Round)</option>
            <option value="Fail" ${v.result==="Fail"?"selected":""}>Fail (Did Not Clear)</option>
          </select>
        </div>
      </form>
    `,e.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-int-result">Save Result</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-int-result").onclick=()=>{const b=document.getElementById("int-result").value;p.updateRow("INTERVIEW",h,{result:b}),s.hide(),o()}}}function K(n){var h;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2,i=a.role_id===3,t=i?p.getTable("STUDENT").find(v=>v.user_id===a.user_id):null;function o(){const v=p.getTable("TRAINING"),m=n.querySelector("#trainings-grid");m&&(m.innerHTML=v.map(l=>{const e=t&&(l.attendance||[]).includes(t.student_id),s=t&&(l.completed_students||[]).includes(t.student_id);return`
        <div class="col-md-6 col-lg-6">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-4 bg-white">
            <div class="d-flex justify-content-between align-items-start mb-2">
              <span class="badge bg-teal-subtle text-teal rounded-pill text-xs fw-semibold"><i class="bi bi-person-workspace me-1"></i>${l.trainer_name}</span>
              <span class="text-muted text-xs"><i class="bi bi-calendar-range me-1"></i>${l.start_date} to ${l.end_date}</span>
            </div>

            <h5 class="fw-bold text-navy mb-2">${l.title}</h5>
            <p class="text-muted text-sm mb-3">${l.description}</p>

            <div class="d-flex justify-content-between align-items-center border-top pt-3 mt-auto">
              <div class="text-xs text-muted">
                <i class="bi bi-people me-1"></i>${(l.attendance||[]).length} Students Enrolled
              </div>
              
              <div>
                ${i?`
                  ${s?`
                    <button class="btn btn-sm btn-success rounded-pill px-3 download-cert-btn" data-title="${l.title}" data-student="${t.name}">
                      <i class="bi bi-award-fill me-1"></i> Download Certificate
                    </button>
                  `:e?`
                    <span class="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">
                      <i class="bi bi-check-circle me-1"></i> Enrolled
                    </span>
                  `:`
                    <button class="btn btn-sm btn-outline-primary rounded-pill px-3 enroll-btn" data-id="${l.training_id}">
                      Enroll Now
                    </button>
                  `}
                `:""}

                ${d?`
                  <button class="btn btn-xs btn-outline-primary rounded-pill manage-attendance-btn me-1" data-id="${l.training_id}">
                    Attendance (${(l.attendance||[]).length})
                  </button>
                  <button class="btn btn-xs btn-outline-success rounded-pill issue-cert-btn" data-id="${l.training_id}">
                    Certify Students
                  </button>
                `:""}
              </div>
            </div>
          </div>
        </div>
      `}).join(""),n.querySelectorAll(".enroll-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id")),s=v.find(b=>b.training_id===e);s&&t&&(s.attendance||(s.attendance=[]),s.attendance.includes(t.student_id)||(s.attendance.push(t.student_id),p.updateRow("TRAINING",e,{attendance:s.attendance}),alert("Successfully enrolled in training program!"),o()))})}),n.querySelectorAll(".download-cert-btn").forEach(l=>{l.addEventListener("click",()=>{const e=l.getAttribute("data-title"),s=l.getAttribute("data-student");alert(`Simulated Certificate Downloaded for ${s}
Program: ${e}
Issued by TRCAC Placement Cell`)})}),n.querySelectorAll(".manage-attendance-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id"));c(e)})}),n.querySelectorAll(".issue-cert-btn").forEach(l=>{l.addEventListener("click",()=>{const e=parseInt(l.getAttribute("data-id"));r(e)})}))}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Training & Skill Development Programs</h4>
          <p class="text-muted text-sm mb-0">Pre-placement boot camps, technical workshops, and soft skills certifications</p>
        </div>
        ${d?`
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-training-btn">
            <i class="bi bi-plus-circle me-1"></i> Add Training Program
          </button>
        `:""}
      </div>

      <div class="row g-4" id="trainings-grid">
        <!-- Populated dynamically -->
      </div>
    </div>
  `,o(),d&&((h=n.querySelector("#add-training-btn"))==null||h.addEventListener("click",()=>{u()}));function u(){const v=document.getElementById("ctpmsModalTitle"),m=document.getElementById("ctpmsModalBody"),l=document.getElementById("ctpmsModalFooter");v.textContent="Create Skill Training Program",m.innerHTML=`
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
    `,l.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-training">Publish Training</button>
    `;const e=new bootstrap.Modal(document.getElementById("ctpmsModal"));e.show(),document.getElementById("save-new-training").onclick=()=>{const s=document.getElementById("tr-title").value,b=document.getElementById("tr-trainer").value,f=document.getElementById("tr-start").value,g=document.getElementById("tr-end").value,x=document.getElementById("tr-desc").value;!s||!b||(p.insertRow("TRAINING",{title:s,trainer_name:b,start_date:f,end_date:g,description:x,attendance:[],completed_students:[]}),e.hide(),o())}}function c(v){const m=p.getTable("TRAINING").find(g=>g.training_id===v),l=p.getStudentFullProfiles();if(!m)return;const e=document.getElementById("ctpmsModalTitle"),s=document.getElementById("ctpmsModalBody"),b=document.getElementById("ctpmsModalFooter");e.textContent=`Attendance List: ${m.title}`,s.innerHTML=`
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
            ${l.map(g=>{const x=(m.attendance||[]).includes(g.student_id);return`
                <tr>
                  <td>${g.name}</td>
                  <td>${g.roll_number}</td>
                  <td>
                    <input type="checkbox" class="form-check-input att-check" data-sid="${g.student_id}" ${x?"checked":""}>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,b.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-attendance">Save Attendance</button>
    `;const f=new bootstrap.Modal(document.getElementById("ctpmsModal"));f.show(),document.getElementById("save-attendance").onclick=()=>{const g=document.querySelectorAll(".att-check"),x=[];g.forEach(w=>{w.checked&&x.push(parseInt(w.getAttribute("data-sid")))}),p.updateRow("TRAINING",v,{attendance:x}),f.hide(),o()}}function r(v){const m=p.getTable("TRAINING").find(g=>g.training_id===v),l=p.getStudentFullProfiles().filter(g=>(m.attendance||[]).includes(g.student_id));if(!m)return;const e=document.getElementById("ctpmsModalTitle"),s=document.getElementById("ctpmsModalBody"),b=document.getElementById("ctpmsModalFooter");e.textContent=`Issue Completion Certificates: ${m.title}`,s.innerHTML=`
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
            ${l.length===0?'<tr><td colspan="3" class="text-center py-3 text-muted">No enrolled students in this training yet.</td></tr>':l.map(g=>{const x=(m.completed_students||[]).includes(g.student_id);return`
                  <tr>
                    <td>${g.name}</td>
                    <td>${g.roll_number}</td>
                    <td>
                      <input type="checkbox" class="form-check-input cert-check" data-sid="${g.student_id}" ${x?"checked":""}>
                    </td>
                  </tr>
                `}).join("")}
          </tbody>
        </table>
      </div>
    `,b.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-certs">Issue Certificates</button>
    `;const f=new bootstrap.Modal(document.getElementById("ctpmsModal"));f.show(),document.getElementById("save-certs").onclick=()=>{const g=document.querySelectorAll(".cert-check"),x=[];g.forEach(w=>{w.checked&&x.push(parseInt(w.getAttribute("data-sid")))}),p.updateRow("TRAINING",v,{completed_students:x}),f.hide(),o()}}}function z(n){var o;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2;function i(){const u=p.getTable("PLACEMENT_RECORD"),c=p.getStudentFullProfiles(),r=p.getTable("COMPANY"),h=p.getTable("JOB_POSTING"),v=u.map(l=>{const e=c.find(f=>f.student_id===l.student_id)||{},s=r.find(f=>f.company_id===l.company_id)||{},b=h.find(f=>f.job_id===l.job_id)||{};return{...l,student_name:e.name||"Unknown Student",roll_number:e.roll_number||"",branch:e.branch||"",company_name:s.company_name||"N/A",job_title:b.job_title||"N/A"}}),m=n.querySelector("#placements-tbody");if(m){if(v.length===0){m.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No placement records recorded yet.</td></tr>';return}m.innerHTML=v.map(l=>`
      <tr>
        <td>
          <div class="fw-bold text-dark">${l.student_name}</div>
          <small class="text-muted">${l.roll_number} • ${l.branch}</small>
        </td>
        <td>
          <div class="fw-bold text-dark">${l.company_name}</div>
          <small class="text-muted"><i class="bi bi-briefcase me-1"></i>${l.job_title}</small>
        </td>
        <td class="fw-extrabold text-teal fs-6">${l.ctc_offered.toFixed(2)} LPA</td>
        <td class="text-muted text-sm"><i class="bi bi-calendar-check me-1 text-primary"></i>${l.offer_date}</td>
        <td class="text-muted text-sm"><i class="bi bi-box-arrow-in-right me-1 text-success"></i>${l.joining_date}</td>
        <td>
          <span class="badge badge-status badge-placed"><i class="bi bi-check-circle-fill me-1"></i>Official Offer</span>
        </td>
      </tr>
    `).join("")}}n.innerHTML=`
    <div class="fade-in">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 class="fw-bold text-navy mb-1">Final Placement Records</h4>
          <p class="text-muted text-sm mb-0">Official job offers, package CTCs, and joining dates for TRCAC graduates</p>
        </div>
        ${d?`
          <button class="btn btn-primary rounded-pill px-3 py-2 fw-semibold" id="add-placement-btn">
            <i class="bi bi-award-fill me-1"></i> Record Final Placement Offer
          </button>
        `:""}
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
  `,i(),d&&((o=n.querySelector("#add-placement-btn"))==null||o.addEventListener("click",()=>{t()}));function t(){const u=p.getStudentFullProfiles().filter(e=>e.placement_status!=="Placed"),c=p.getTable("COMPANY"),r=p.getTable("JOB_POSTING"),h=document.getElementById("ctpmsModalTitle"),v=document.getElementById("ctpmsModalBody"),m=document.getElementById("ctpmsModalFooter");h.textContent="Record Final Student Placement Offer",v.innerHTML=`
      <form id="add-placement-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Student Candidate</label>
          <select id="pl-student-id" class="form-select" required>
            ${u.length===0?'<option value="">No unplaced students available</option>':u.map(e=>`<option value="${e.student_id}">${e.name} (${e.roll_number} • ${e.branch})</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Offering Company</label>
          <select id="pl-company-id" class="form-select" required>
            ${c.map(e=>`<option value="${e.company_id}">${e.company_name}</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Associated Job Drive</label>
          <select id="pl-job-id" class="form-select" required>
            ${r.map(e=>`<option value="${e.job_id}">${e.job_title} (${e.ctc} LPA)</option>`).join("")}
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
    `,m.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-placement-record">Confirm Placement Offer</button>
    `;const l=new bootstrap.Modal(document.getElementById("ctpmsModal"));l.show(),document.getElementById("save-placement-record").onclick=()=>{const e=parseInt(document.getElementById("pl-student-id").value),s=parseInt(document.getElementById("pl-company-id").value),b=parseInt(document.getElementById("pl-job-id").value),f=parseFloat(document.getElementById("pl-ctc").value),g=document.getElementById("pl-offer-date").value,x=document.getElementById("pl-joining-date").value;!e||!s||!b||(p.insertRow("PLACEMENT_RECORD",{student_id:e,company_id:s,job_id:b,ctc_offered:f,offer_date:g,joining_date:x}),p.updateRow("STUDENT",e,{placement_status:"Placed"}),l.hide(),i())}}}function Z(n){const a=y.getCurrentUser();if(!(a.role_id===1||a.role_id===2)){n.innerHTML=`
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">Placement analytics and CSV exports are restricted to TPO Officers and Administrators.</p>
      </div>
    `;return}const i=p.getStudentFullProfiles(),t=p.getTable("PLACEMENT_RECORD"),o=p.getTable("COMPANY"),u=i.length,c=i.filter(s=>s.placement_status==="Placed"),r=i.filter(s=>s.placement_status==="Unplaced"),h=t.reduce((s,b)=>b.ctc_offered>s?b.ctc_offered:s,0),v=t.length>0?(t.reduce((s,b)=>s+b.ctc_offered,0)/t.length).toFixed(2):"0.00",l=["B.Sc. CS","B.Sc. IT","B.Sc. Data Science"].map(s=>{const b=i.filter(x=>x.branch===s),f=b.filter(x=>x.placement_status==="Placed"),g=b.length>0?(f.length/b.length*100).toFixed(1):"0.0";return{branch:s,total:b.length,placed:f.length,unplaced:b.length-f.length,rate:g}}),e=o.map(s=>{const b=t.filter(g=>g.company_id===s.company_id),f=b.reduce((g,x)=>x.ctc_offered>g?x.ctc_offered:g,0);return{company:s.company_name,hires:b.length,ctc:f>0?`${f.toFixed(2)} LPA`:"N/A"}});n.innerHTML=`
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
            <h3 class="fw-bold text-navy mb-0 mt-1">${u}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Placed Students</small>
            <h3 class="fw-bold text-teal mb-0 mt-1">${c.length}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Unplaced Students</small>
            <h3 class="fw-bold text-danger mb-0 mt-1">${r.length}</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Average Package</small>
            <h3 class="fw-bold text-primary mb-0 mt-1">${v} LPA</h3>
          </div>
        </div>
        <div class="col-md-2.4 col-sm-6">
          <div class="card card-stat p-3">
            <small class="text-muted text-xs text-uppercase fw-bold">Highest Package</small>
            <h3 class="fw-bold text-success mb-0 mt-1">${h} LPA</h3>
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
                  ${l.map(s=>`
                    <tr>
                      <td class="fw-bold text-dark">${s.branch}</td>
                      <td>${s.total}</td>
                      <td class="fw-bold text-success">${s.placed}</td>
                      <td class="text-muted">${s.unplaced}</td>
                      <td>
                        <div class="d-flex align-items-center gap-2">
                          <div class="progress flex-grow-1" style="height: 6px;">
                            <div class="progress-bar bg-teal" role="progressbar" style="width: ${s.rate}%;"></div>
                          </div>
                          <span class="fw-bold text-xs">${s.rate}%</span>
                        </div>
                      </td>
                    </tr>
                  `).join("")}
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
                  ${e.map(s=>`
                    <tr>
                      <td class="fw-semibold text-dark">${s.company}</td>
                      <td><span class="badge bg-primary-subtle text-primary rounded-pill">${s.hires} Offers</span></td>
                      <td class="fw-bold text-success">${s.ctc}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,n.querySelector("#export-csv-btn").addEventListener("click",()=>{const s=i.map(b=>({"Roll Number":b.roll_number,"Student Name":b.name,"Degree Branch":b.branch,"CGPA Score":b.cgpa,"Email Contact":b.email,Skills:b.skills,"Placement Status":b.placement_status,"Company Placed":b.placement_details?b.placement_details.company_name:"N/A","CTC Offered (LPA)":b.placement_details?b.placement_details.ctc_offered:"N/A"}));if(window.Papa){const b=window.Papa.unparse(s),f=new Blob([b],{type:"text/csv;charset=utf-8;"}),g=document.createElement("a");g.href=URL.createObjectURL(f),g.setAttribute("download",`TRCAC_Placement_Report_${new Date().toISOString().substring(0,10)}.csv`),document.body.appendChild(g),g.click(),document.body.removeChild(g)}else alert("CSV export engine ready. Triggered export download.")})}function X(n){const a=y.getCurrentUser(),d=p.getTable("USER").find(o=>o.user_id===a.user_id)||{};n.innerHTML=`
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
            <input type="text" id="prof-name" class="form-control" value="${d.name||a.name}" required>
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Email Address (Login Credential)</label>
            <input type="email" id="prof-email" class="form-control bg-light" value="${d.email||a.email}" readonly disabled>
            <small class="text-muted text-xs">Email address changes must be processed by System Administrator.</small>
          </div>
          <div class="mb-3">
            <label class="form-label text-xs fw-bold text-uppercase text-muted">Assigned System Role (Read-Only)</label>
            <input type="text" class="form-control bg-light" value="${a.role_name}" readonly disabled>
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
  `;const i=n.querySelector("#profile-alert");function t(o,u="success"){i.className=`alert alert-${u} rounded-3 text-xs mb-3 fade-in`,i.textContent=o,i.classList.remove("d-none"),setTimeout(()=>{i.classList.add("d-none")},4e3)}n.querySelector("#profile-info-form").addEventListener("submit",o=>{o.preventDefault();const u=n.querySelector("#prof-name").value;p.updateRow("USER",a.user_id,{name:u}),a.name=u,document.getElementById("user-name").textContent=u,t("Profile name updated successfully!","success")}),n.querySelector("#password-change-form").addEventListener("submit",o=>{o.preventDefault();const u=n.querySelector("#curr-pass").value,c=n.querySelector("#new-pass").value,r=n.querySelector("#confirm-pass").value;if(u!==d.password){t("Current password entered is incorrect.","danger");return}if(c!==r){t("New password and confirmation do not match.","danger");return}p.updateRow("USER",a.user_id,{password:c}),n.querySelector("#curr-pass").value="",n.querySelector("#new-pass").value="",n.querySelector("#confirm-pass").value="",t("Account password changed successfully!","success")})}const $=[{id:"dashboard",label:"Dashboard",icon:"bi-grid-1x2",roles:[1,2,3,4],render:B},{id:"users",label:"User Management",icon:"bi-shield-person",roles:[1],render:H},{id:"students",label:"Student Management",icon:"bi-mortarboard",roles:[1,2],render:G},{id:"companies",label:"Company Management",icon:"bi-building",roles:[1,2],render:J},{id:"jobs",label:"Job Postings",icon:"bi-briefcase",roles:[1,2,3,4],render:Y},{id:"applications",label:"Applications",icon:"bi-file-earmark-check",roles:[1,2,3,4],render:W},{id:"interviews",label:"Interview Schedule",icon:"bi-calendar-event",roles:[1,2,3,4],render:Q},{id:"trainings",label:"Training Programs",icon:"bi-award",roles:[1,2,3,4],render:K},{id:"placements",label:"Placement Records",icon:"bi-journal-check",roles:[1,2],render:z},{id:"reports",label:"Reports & Analytics",icon:"bi-bar-chart-line",roles:[1,2],render:Z},{id:"profile",label:"Profile & Settings",icon:"bi-person-gear",roles:[1,2,3,4],render:X}];class ee{constructor(){this.loginContainer=document.getElementById("login-view-container"),this.appShell=document.getElementById("authenticated-shell"),this.mainViewport=document.getElementById("main-viewport"),this.sidebarNav=document.getElementById("sidebar-nav"),this.sidebar=document.getElementById("sidebar"),this.currentPage="dashboard",this.setupEventListeners(),this.init()}init(){y.isAuthenticated()?this.showAppShell():this.showLogin()}showLogin(){this.appShell.classList.add("d-none"),this.loginContainer.classList.remove("d-none"),F(this.loginContainer,()=>this.showAppShell())}showAppShell(){this.loginContainer.classList.add("d-none"),this.appShell.classList.remove("d-none"),this.updateUserHeader(),this.buildSidebar();const a=window.location.hash.replace("#",""),d=$.find(i=>i.id===a);this.navigateTo(d?a:"dashboard")}updateUserHeader(){const a=y.getCurrentUser();a&&(document.getElementById("user-name").textContent=a.name,document.getElementById("user-role-badge").textContent=a.role_name,document.getElementById("user-avatar").textContent=a.name.charAt(0).toUpperCase(),document.querySelectorAll(".active-role-btn").forEach(d=>{parseInt(d.getAttribute("data-switch-role"))===a.role_id?d.classList.add("active"):d.classList.remove("active")}))}buildSidebar(){const a=y.getCurrentUser();if(!a)return;const d=$.filter(i=>i.roles.includes(a.role_id));this.sidebarNav.innerHTML=d.map(i=>`
      <a class="nav-link ${this.currentPage===i.id?"active":""}" href="#${i.id}" data-page="${i.id}">
        <i class="bi ${i.icon}"></i>
        <span>${i.label}</span>
      </a>
    `).join(""),this.sidebarNav.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",t=>{t.preventDefault();const o=i.getAttribute("data-page");this.navigateTo(o)})})}navigateTo(a){const d=y.getCurrentUser(),i=$.find(t=>t.id===a);if(!i||!i.roles.includes(d.role_id)){this.navigateTo("dashboard");return}this.currentPage=a,window.location.hash=a,this.sidebarNav.querySelectorAll(".nav-link").forEach(t=>{t.getAttribute("data-page")===a?t.classList.add("active"):t.classList.remove("active")}),this.mainViewport.scrollTop=0,i.render(this.mainViewport,t=>this.navigateTo(t)),window.innerWidth<=768&&this.sidebar.classList.add("collapsed")}setupEventListeners(){var a,d,i;(a=document.getElementById("sidebar-toggle"))==null||a.addEventListener("click",()=>{this.sidebar.classList.toggle("collapsed")}),(d=document.getElementById("logout-btn"))==null||d.addEventListener("click",t=>{t.preventDefault(),y.logout(),this.showLogin()}),document.querySelectorAll(".active-role-btn").forEach(t=>{t.addEventListener("click",()=>{const o=parseInt(t.getAttribute("data-switch-role"));y.switchRole(o),this.showAppShell()})}),(i=document.getElementById("view-security-log-btn"))==null||i.addEventListener("click",t=>{t.preventDefault(),this.openSecurityLogModal()}),window.addEventListener("hashchange",()=>{const t=window.location.hash.replace("#","");t&&t!==this.currentPage&&this.navigateTo(t)})}openSecurityLogModal(){const a=p.getTable("SECURITY_LOG"),d=p.getTable("USER"),i=document.getElementById("ctpmsModalTitle"),t=document.getElementById("ctpmsModalBody"),o=document.getElementById("ctpmsModalFooter");i.textContent="Session Security Audit Log (SRS Section 5.1 & 8.10)",t.innerHTML=`
      <div class="table-responsive" style="max-height: 400px;">
        <table class="table table-sm table-hover align-middle">
          <thead>
            <tr>
              <th>Log ID</th>
              <th>User Name</th>
              <th>Entry Timestamp</th>
              <th>Exit Timestamp</th>
              <th>Event Type</th>
            </tr>
          </thead>
          <tbody>
            ${a.slice().reverse().map(c=>{const r=d.find(h=>h.user_id===c.user_id)||{};return`
                <tr>
                  <td>#${c.log_id}</td>
                  <td class="fw-bold">${r.name||"User #"+c.user_id}</td>
                  <td class="text-muted text-xs">${c.entry_time}</td>
                  <td class="text-muted text-xs">${c.exit_time||'<span class="badge bg-success-subtle text-success">Active Session</span>'}</td>
                  <td><span class="badge bg-primary-subtle text-primary">${c.status_event}</span></td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,o.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close Audit Log</button>
    `,new bootstrap.Modal(document.getElementById("ctpmsModal")).show()}}document.addEventListener("DOMContentLoaded",()=>{new ee});
