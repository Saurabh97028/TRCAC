import{initializeApp as L}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";import{getFirestore as M,doc as R,setDoc as k}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";import{getAuth as O}from"https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function d(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=d(e);fetch(e.href,n)}})();const D={apiKey:"AIzaSyAAFXLtkLf55eMIeeTGHpu7KVu-WE9-Zeg",authDomain:"tpms-6e8d8.firebaseapp.com",projectId:"tpms-6e8d8",storageBucket:"tpms-6e8d8.firebasestorage.app",messagingSenderId:"480678660528",appId:"1:480678660528:web:c6e35266d4eb5159d6ee75",measurementId:"G-Z54H1Y13Q0"};let T=null,P=null,N=null,j=!1;try{T=L(D),P=M(T),N=O(T),j=!0,console.log("🔥 Live connected to user Firebase project: TPMS (tpms-6e8d8)!")}catch(o){console.warn("Firebase initialization note:",o)}async function E(o,a){if(P)try{for(const d of a){const i=`${o.toLowerCase()}_id`,e=d[i]?String(d[i]):String(Date.now()),n=R(P,o,e);await k(n,d,{merge:!0})}console.log(`Synced ${a.length} records to Firestore collection: ${o}`)}catch(d){console.warn(`Firestore sync note for ${o}:`,d)}}const I="CTPMS_RELATIONAL_DATABASE_V1",S={ROLE:[{role_id:1,role_name:"Administrator"},{role_id:2,role_name:"TPO"},{role_id:3,role_name:"Student"},{role_id:4,role_name:"Company HR"}],USER:[{user_id:1,name:"Admin Administrator",email:"admin@trcac.edu.in",password:"adminpassword123",role_id:1,is_active:!0},{user_id:2,name:"Prof. Saurabh Vishwakarma (TPO)",email:"tpo@trcac.edu.in",password:"tpopassword123",role_id:2,is_active:!0},{user_id:3,name:"Rahul Sharma",email:"rahul.sharma@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:4,name:"Ananya Patel",email:"ananya.patel@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:5,name:"Siddharth Verma",email:"siddharth.v@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:6,name:"Neha Gupta",email:"neha.gupta@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:7,name:"Vikram Singh",email:"vikram.singh@trcac.edu.in",password:"studentpassword123",role_id:3,is_active:!0},{user_id:8,name:"Priya Iyer (TCS HR)",email:"priya.hr@tcs.com",password:"hrpassword123",role_id:4,is_active:!0},{user_id:9,name:"Amitabh Joshi (Google HR)",email:"ajoshi@google.com",password:"hrpassword123",role_id:4,is_active:!0},{user_id:10,name:"Saurabh Vishwakarma (Admin)",email:"cs63saurabh@gmail.com",password:"S1a2u3r4",role_id:1,is_active:!0}],STUDENT:[{student_id:101,user_id:3,roll_number:"TRCAC2024CS001",branch:"B.Sc. CS",cgpa:8.9,skills:"Python, Java, SQL, React, AWS",resume_url:"resumes/rahul_sharma_cv.pdf",placement_status:"Placed"},{student_id:102,user_id:4,roll_number:"TRCAC2024CS002",branch:"B.Sc. CS",cgpa:9.45,skills:"C++, Data Structures, System Design, Node.js",resume_url:"resumes/ananya_patel_cv.pdf",placement_status:"Unplaced"},{student_id:103,user_id:5,roll_number:"TRCAC2024IT015",branch:"B.Sc. IT",cgpa:7.8,skills:"HTML, CSS, JavaScript, PHP, MySQL",resume_url:"resumes/siddharth_v_cv.pdf",placement_status:"Unplaced"},{student_id:104,user_id:6,roll_number:"TRCAC2024DS008",branch:"B.Sc. Data Science",cgpa:8.65,skills:"Python, R, PowerBI, Machine Learning, SQL",resume_url:"resumes/neha_gupta_cv.pdf",placement_status:"Unplaced"},{student_id:105,user_id:7,roll_number:"TRCAC2024CS045",branch:"B.Sc. CS",cgpa:6.75,skills:"HTML, Java, SQL Basics",resume_url:"resumes/vikram_s_cv.pdf",placement_status:"Unplaced"}],COMPANY:[{company_id:201,company_name:"Tata Consultancy Services (TCS)",sector:"IT Services",location:"Mumbai, MH",contact_email:"priya.hr@tcs.com",website:"https://www.tcs.com"},{company_id:202,company_name:"Infosys Limited",sector:"IT & Cloud Services",location:"Bengaluru / Mumbai",contact_email:"campus@infosys.com",website:"https://www.infosys.com"},{company_id:203,company_name:"Google India",sector:"Software & Technology",location:"Hyderabad / Bengaluru",contact_email:"ajoshi@google.com",website:"https://careers.google.com"},{company_id:204,company_name:"Deloitte India",sector:"Consulting & Financial Advisory",location:"Mumbai, MH",contact_email:"hr@deloitte.com",website:"https://www.deloitte.com"}],JOB_POSTING:[{job_id:301,company_id:201,job_title:"Software Engineer - TCS Ninja / Digital",description:"Development and maintenance of enterprise cloud applications. Requires strong problem solving and programming skills.",min_cgpa:7,eligible_branches:"B.Sc. CS, B.Sc. IT, B.Sc. Data Science",ctc:7.5,deadline:"2026-09-15",status:"Open"},{job_id:302,company_id:203,job_title:"Associate Software Engineer",description:"Build scalable software services powering global Google Infrastructure. High algorithmic proficiency required.",min_cgpa:8.5,eligible_branches:"B.Sc. CS, B.Sc. IT",ctc:18,deadline:"2026-09-30",status:"Open"},{job_id:303,company_id:204,job_title:"Risk & Analytics Associate",description:"Perform technical risk modeling, data analytics, and audit compliance for enterprise clients.",min_cgpa:7.5,eligible_branches:"B.Sc. CS, B.Sc. IT, B.Sc. Data Science",ctc:8.75,deadline:"2026-08-30",status:"Open"},{job_id:304,company_id:202,job_title:"Specialist Programmer",description:"Design enterprise software architectures and full-stack solutions.",min_cgpa:8,eligible_branches:"B.Sc. CS, B.Sc. IT",ctc:9.5,deadline:"2026-08-10",status:"Closed"}],APPLICATION:[{application_id:401,student_id:101,job_id:301,applied_date:"2026-08-01 10:30:00",status:"Selected"},{application_id:402,student_id:102,job_id:301,applied_date:"2026-08-02 11:15:00",status:"Shortlisted"},{application_id:403,student_id:102,job_id:302,applied_date:"2026-08-03 14:20:00",status:"Shortlisted"},{application_id:404,student_id:103,job_id:301,applied_date:"2026-08-02 16:45:00",status:"Applied"},{application_id:405,student_id:104,job_id:303,applied_date:"2026-08-04 09:00:00",status:"Shortlisted"}],INTERVIEW:[{interview_id:501,application_id:401,round_number:1,round_type:"Aptitude & Coding Test",scheduled_date:"2026-08-04 10:00:00",venue:"Online Assessment Portal",result:"Pass"},{interview_id:502,application_id:401,round_number:2,round_type:"Technical Interview",scheduled_date:"2026-08-05 14:00:00",venue:"TRCAC Seminar Hall 1",result:"Pass"},{interview_id:503,application_id:401,round_number:3,round_type:"HR Interview",scheduled_date:"2026-08-06 11:30:00",venue:"TPO Conference Room",result:"Pass"},{interview_id:504,application_id:402,round_number:1,round_type:"Aptitude & Coding Test",scheduled_date:"2026-08-10 10:00:00",venue:"TRCAC Computer Lab 3",result:"Pending"},{interview_id:505,application_id:403,round_number:1,round_type:"Technical Screening",scheduled_date:"2026-08-12 15:00:00",venue:"Google Meet (Virtual)",result:"Pending"},{interview_id:506,application_id:405,round_number:1,round_type:"Data Case Study",scheduled_date:"2026-08-11 11:00:00",venue:"TRCAC Lab 2",result:"Pending"}],TRAINING:[{training_id:601,title:"Full-Stack Web & Cloud Boot Camp",trainer_name:"TechSkill Academy",start_date:"2026-07-01",end_date:"2026-07-25",description:"Comprehensive training on React, Node.js, REST APIs, Docker, and AWS deployment.",attendance:[101,102,103],completed_students:[101,102]},{training_id:602,title:"Corporate Communication & Mock HR Interviews",trainer_name:"Prof. Anjali Mehta",start_date:"2026-08-01",end_date:"2026-08-15",description:"Interview body language, group discussion tactics, resume polishing, and aptitude shortcuts.",attendance:[101,102,103,104,105],completed_students:[101]}],PLACEMENT_RECORD:[{placement_id:701,student_id:101,company_id:201,job_id:301,ctc_offered:7.5,offer_date:"2026-08-07",joining_date:"2027-06-15"}],SECURITY_LOG:[{log_id:801,user_id:2,entry_time:"2026-08-08 09:00:00",exit_time:"2026-08-08 17:30:00",status_event:"Success Login"},{log_id:802,user_id:3,entry_time:"2026-08-08 11:14:00",exit_time:"2026-08-08 12:00:00",status_event:"Success Login"},{log_id:803,user_id:1,entry_time:"2026-08-08 14:22:00",exit_time:null,status_event:"Success Login"}]};class q{constructor(){this.init()}init(){if(!localStorage.getItem(I))this.saveAll(S);else{const a=this.getAll();a.USER.some(d=>d.email==="cs63saurabh@gmail.com")||(a.USER.push({user_id:10,name:"Saurabh Vishwakarma (Admin)",email:"cs63saurabh@gmail.com",password:"S1a2u3r4",role_id:1,is_active:!0}),this.saveAll(a))}this.syncAllToFirestore()}async syncAllToFirestore(){try{const a=this.getAll();for(const[d,i]of Object.entries(a))Array.isArray(i)&&i.length>0&&await E(d,i)}catch(a){console.warn("Initial Firestore sync error:",a)}}getAll(){try{const a=localStorage.getItem(I);return a?JSON.parse(a):S}catch(a){return console.error("Error loading DB from LocalStorage",a),S}}saveAll(a){try{localStorage.setItem(I,JSON.stringify(a))}catch(d){console.error("Error saving DB to LocalStorage",d)}}resetToDefault(){return this.saveAll(S),S}getTable(a){return this.getAll()[a]||[]}insertRow(a,d){const i=this.getAll();i[a]||(i[a]=[]);const e=`${a.toLowerCase()}_id`;if(!d[e]){const n=i[a].reduce((u,c)=>c[e]>u?c[e]:u,100);d[e]=n+1}return i[a].push(d),this.saveAll(i),E(a,[d]),d}updateRow(a,d,i){const e=this.getAll(),n=`${a.toLowerCase()}_id`,u=e[a]||[],c=u.findIndex(r=>r[n]===d);return c!==-1?(u[c]={...u[c],...i},e[a]=u,this.saveAll(e),E(a,[u[c]]),u[c]):null}deleteRow(a,d){const i=this.getAll(),e=`${a.toLowerCase()}_id`;return i[a]?(i[a]=i[a].filter(n=>n[e]!==d),this.saveAll(i),!0):!1}getStudentFullProfiles(){const a=this.getAll();return a.STUDENT.map(d=>{const i=a.USER.find(u=>u.user_id===d.user_id)||{},e=a.PLACEMENT_RECORD.find(u=>u.student_id===d.student_id);let n=null;return e&&(n=a.COMPANY.find(u=>u.company_id===e.company_id)),{...d,name:i.name||"Unknown",email:i.email||"",is_active:i.is_active,placement_details:e?{...e,company_name:n==null?void 0:n.company_name}:null}})}getJobPostingsDetailed(){const a=this.getAll();return a.JOB_POSTING.map(d=>{const i=a.COMPANY.find(n=>n.company_id===d.company_id)||{},e=a.APPLICATION.filter(n=>n.job_id===d.job_id);return{...d,company_name:i.company_name||"N/A",sector:i.sector||"N/A",location:i.location||"N/A",application_count:e.length}})}getApplicationsDetailed(){const a=this.getAll();return a.APPLICATION.map(d=>{const i=a.STUDENT.find(r=>r.student_id===d.student_id)||{},e=a.USER.find(r=>r.user_id===i.user_id)||{},n=a.JOB_POSTING.find(r=>r.job_id===d.job_id)||{},u=a.COMPANY.find(r=>r.company_id===n.company_id)||{},c=a.INTERVIEW.filter(r=>r.application_id===d.application_id);return{...d,student_name:e.name||"Unknown Student",roll_number:i.roll_number||"",branch:i.branch||"",cgpa:i.cgpa||0,job_title:n.job_title||"N/A",company_name:u.company_name||"N/A",ctc:n.ctc||0,interviews:c}})}}const m=new q,A="CTPMS_ACTIVE_SESSION";class U{constructor(){this.currentUser=this.loadSession()}loadSession(){try{const a=sessionStorage.getItem(A)||localStorage.getItem(A);return a?JSON.parse(a):null}catch{return null}}login(a,d){const e=m.getTable("USER").find(l=>l.email.toLowerCase()===a.toLowerCase()&&l.password===d);if(!e)return{success:!1,message:"Invalid email credentials or password."};if(!e.is_active)return{success:!1,message:"Account is deactivated. Please contact Administrator."};const u=m.getTable("ROLE").find(l=>l.role_id===e.role_id)||{};let c=null;e.role_id===3&&(c=m.getTable("STUDENT").find(l=>l.user_id===e.user_id)||null);const r={user_id:e.user_id,name:e.name,email:e.email,role_id:e.role_id,role_name:u.role_name||"User",student_id:c?c.student_id:null,login_time:new Date().toISOString()},h=new Date().toISOString().replace("T"," ").substring(0,19),b=m.insertRow("SECURITY_LOG",{user_id:e.user_id,entry_time:h,exit_time:null,status_event:"Success Login"}),p=b.security_log_id||b.log_id||b.id;return r.current_log_id=p,this.currentUser=r,sessionStorage.setItem(A,JSON.stringify(r)),{success:!0,user:r}}logout(){if(this.currentUser){const a=new Date().toISOString().replace("T"," ").substring(0,19);let d=this.currentUser.current_log_id;if(!d){const e=[...m.getTable("SECURITY_LOG")].reverse().find(n=>n.user_id===this.currentUser.user_id&&!n.exit_time);e&&(d=e.security_log_id||e.log_id)}d&&m.updateRow("SECURITY_LOG",d,{exit_time:a,status_event:"Logout"})}this.currentUser=null,sessionStorage.removeItem(A),localStorage.removeItem(A)}switchRole(a){const i=m.getTable("USER").find(e=>e.role_id===a);return i?this.login(i.email,i.password):{success:!1,message:"User for selected role not found."}}getCurrentUser(){return this.currentUser}isAuthenticated(){return!!this.currentUser}}const y=new U;function F(o,a){o.innerHTML=`
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
  `;const d=o.querySelector("#login-form"),i=o.querySelector("#login-alert");d.addEventListener("submit",e=>{e.preventDefault();const n=o.querySelector("#login-email").value,u=o.querySelector("#login-password").value,c=y.login(n,u);c.success?a():(i.textContent=c.message,i.classList.remove("d-none"))})}function B(o,a){var v;const d=y.getCurrentUser(),i=m.getStudentFullProfiles(),e=m.getTable("COMPANY"),n=m.getJobPostingsDetailed(),u=m.getApplicationsDetailed(),c=m.getTable("PLACEMENT_RECORD"),r=i.length,h=i.filter(g=>g.placement_status==="Placed").length,b=r>0?(h/r*100).toFixed(1):0,p=n.filter(g=>g.status==="Open").length,l=c.reduce((g,f)=>f.ctc_offered>g?f.ctc_offered:g,0),t=c.length>0?(c.reduce((g,f)=>g+f.ctc_offered,0)/c.length).toFixed(2):"0.00";let s="";if(d.role_id===3){const g=i.find(x=>x.user_id===d.user_id)||{},f=u.filter(x=>x.student_id===g.student_id);s=`
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-primary text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">My Profile Status</small>
                <h4 class="fw-bold mb-0 text-white mt-1">${g.placement_status||"Unplaced"}</h4>
                <div class="text-white-50 text-xs mt-1">Roll No: ${g.roll_number||"N/A"} • CGPA: ${g.cgpa?g.cgpa.toFixed(2):"0.00"}</div>
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
                <h4 class="fw-bold mb-0 text-white mt-1">${f.length}</h4>
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
                <h4 class="fw-bold mb-0 text-white mt-1">${f.filter(x=>x.status==="Shortlisted"||x.status==="Selected").length}</h4>
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
              ${f.length===0?'<tr><td colspan="5" class="text-center py-4 text-muted">You have not applied to any job drives yet.</td></tr>':f.map(x=>`
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
    `}else if(d.role_id===4){const g=m.getTable("USER").find(_=>_.user_id===d.user_id),f=e.find(_=>_.contact_email===g.email)||e[0],x=n.filter(_=>_.company_id===f.company_id),w=u.filter(_=>x.some(C=>C.job_id===_.job_id));s=`
      <div class="row g-4 mb-4">
        <div class="col-md-4">
          <div class="card card-stat p-3 border-0 bg-navy text-white">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <small class="text-white-50 text-uppercase fw-semibold text-xs">Company Profile</small>
                <h5 class="fw-bold mb-0 text-white mt-1">${f.company_name}</h5>
                <div class="text-white-50 text-xs mt-1">${f.sector} • ${f.location}</div>
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
                <small class="text-success fw-semibold text-xs"><i class="bi bi-graph-up me-1"></i>${b}% Placement Rate</small>
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
                <h3 class="fw-bold text-dark mb-0 mt-1">${p}</h3>
                <small class="text-muted text-xs">${e.length} hiring companies</small>
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
                <small class="text-muted text-xs">Average: ${t} LPA</small>
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
                  ${u.slice(0,5).map(g=>`
                    <tr>
                      <td>
                        <div class="fw-semibold text-dark">${g.student_name}</div>
                        <small class="text-muted">${g.roll_number}</small>
                      </td>
                      <td class="text-muted text-sm">${g.branch}</td>
                      <td class="fw-semibold text-dark text-sm">${g.job_title}</td>
                      <td class="text-muted text-sm">${g.company_name}</td>
                      <td><span class="badge badge-status badge-${g.status.toLowerCase()}">${g.status}</span></td>
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
    `;o.innerHTML=`
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
  `,o.querySelectorAll(".navigate-btn").forEach(g=>{g.addEventListener("click",()=>{const f=g.getAttribute("data-page");a(f)})}),(v=o.querySelector("#refresh-dashboard"))==null||v.addEventListener("click",()=>{B(o,a)})}function H(o){if(y.getCurrentUser().role_id!==1){o.innerHTML=`
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">User Management is restricted to System Administrator accounts only.</p>
      </div>
    `;return}function d(){const e=m.getTable("USER"),n=m.getTable("ROLE"),u=o.querySelector("#users-tbody");u&&(u.innerHTML=e.map(c=>{const r=n.find(h=>h.role_id===c.role_id)||{};return`
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
      `}).join(""),o.querySelectorAll(".toggle-active-btn").forEach(c=>{c.addEventListener("click",()=>{const r=parseInt(c.getAttribute("data-id")),h=e.find(b=>b.user_id===r);h&&(m.updateRow("USER",r,{is_active:!h.is_active}),d())})}),o.querySelectorAll(".edit-user-btn").forEach(c=>{c.addEventListener("click",()=>{const r=parseInt(c.getAttribute("data-id"));i(r)})}))}o.innerHTML=`
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
          <span class="text-muted text-xs">Total Users Registered: ${m.getTable("USER").length}</span>
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
  `,d(),o.querySelector("#add-user-btn").addEventListener("click",()=>{const e=document.getElementById("ctpmsModalTitle"),n=document.getElementById("ctpmsModalBody"),u=document.getElementById("ctpmsModalFooter");e.textContent="Create New User Account",n.innerHTML=`
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
    `;const c=new bootstrap.Modal(document.getElementById("ctpmsModal"));c.show(),document.getElementById("submit-new-user").onclick=()=>{const r=document.getElementById("new-user-name").value,h=document.getElementById("new-user-email").value,b=document.getElementById("new-user-pass").value,p=parseInt(document.getElementById("new-user-role").value);if(!r||!h||!b)return;const l=m.insertRow("USER",{name:r,email:h,password:b,role_id:p,is_active:!0});p===3&&m.insertRow("STUDENT",{user_id:l.user_id,roll_number:`TRCAC2026CS${Math.floor(100+Math.random()*900)}`,branch:"B.Sc. CS",cgpa:7.5,skills:"HTML, CSS, JavaScript",resume_url:`resumes/student_${l.user_id}.pdf`,placement_status:"Unplaced"}),c.hide(),d()}});function i(e){const u=m.getTable("USER").find(p=>p.user_id===e);if(!u)return;const c=document.getElementById("ctpmsModalTitle"),r=document.getElementById("ctpmsModalBody"),h=document.getElementById("ctpmsModalFooter");c.textContent=`Edit User: ${u.name}`,r.innerHTML=`
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
    `;const b=new bootstrap.Modal(document.getElementById("ctpmsModal"));b.show(),document.getElementById("save-edit-user").onclick=()=>{const p=document.getElementById("edit-user-name").value,l=document.getElementById("edit-user-email").value,t=parseInt(document.getElementById("edit-user-role").value);m.updateRow("USER",e,{name:p,email:l,role_id:t}),b.hide(),d()}}}function G(o){const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2;function i(){const u=m.getStudentFullProfiles(),c=o.querySelector("#filter-branch").value,r=o.querySelector("#filter-status").value,h=parseFloat(o.querySelector("#filter-cgpa").value)||0,b=o.querySelector("#search-student").value.toLowerCase(),p=u.filter(t=>{const s=!c||t.branch===c,v=!r||t.placement_status===r,g=t.cgpa>=h,f=!b||t.name.toLowerCase().includes(b)||t.roll_number.toLowerCase().includes(b)||t.skills.toLowerCase().includes(b);return s&&v&&g&&f}),l=o.querySelector("#students-tbody");if(l){if(p.length===0){l.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No students matching the filter criteria.</td></tr>';return}l.innerHTML=p.map(t=>`
      <tr>
        <td>
          <div class="fw-bold text-dark">${t.name}</div>
          <small class="text-muted"><i class="bi bi-person-vcard me-1"></i>${t.roll_number}</small>
        </td>
        <td><span class="badge bg-light text-dark border">${t.branch}</span></td>
        <td class="fw-bold ${t.cgpa>=8?"text-success":"text-dark"}">${t.cgpa.toFixed(2)}</td>
        <td>
          <div class="text-truncate text-sm" style="max-width: 220px;" title="${t.skills}">
            ${t.skills.split(",").map(s=>`<span class="badge bg-secondary-subtle text-secondary me-1 text-xs">${s.trim()}</span>`).join("")}
          </div>
        </td>
        <td class="text-muted text-xs">${t.email}</td>
        <td>
          <span class="badge badge-status badge-${t.placement_status.toLowerCase().replace(/\s+/g,"")}">
            ${t.placement_status}
          </span>
        </td>
        <td>
          <button class="btn btn-xs btn-outline-primary rounded-pill view-student-btn me-1" data-id="${t.student_id}">View Profile</button>
          ${d?`<button class="btn btn-xs btn-outline-dark rounded-pill edit-student-btn" data-id="${t.student_id}">Edit Status</button>`:""}
        </td>
      </tr>
    `).join(""),o.querySelectorAll(".view-student-btn").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.getAttribute("data-id"));e(s)})}),o.querySelectorAll(".edit-student-btn").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.getAttribute("data-id"));n(s)})})}}o.innerHTML=`
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
  `,o.querySelector("#search-student").addEventListener("input",i),o.querySelector("#filter-branch").addEventListener("change",i),o.querySelector("#filter-cgpa").addEventListener("change",i),o.querySelector("#filter-status").addEventListener("change",i),i();function e(u){const r=m.getStudentFullProfiles().find(t=>t.student_id===u);if(!r)return;const h=document.getElementById("ctpmsModalTitle"),b=document.getElementById("ctpmsModalBody"),p=document.getElementById("ctpmsModalFooter");h.textContent=`Student Profile: ${r.name}`,b.innerHTML=`
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
    `,p.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
    `,new bootstrap.Modal(document.getElementById("ctpmsModal")).show()}function n(u){const r=m.getStudentFullProfiles().find(t=>t.student_id===u);if(!r)return;const h=document.getElementById("ctpmsModalTitle"),b=document.getElementById("ctpmsModalBody"),p=document.getElementById("ctpmsModalFooter");h.textContent=`Update Student Eligibility: ${r.name}`,b.innerHTML=`
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
    `,p.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-student-changes">Save Updates</button>
    `;const l=new bootstrap.Modal(document.getElementById("ctpmsModal"));l.show(),document.getElementById("save-student-changes").onclick=()=>{const t=parseFloat(document.getElementById("edit-student-cgpa").value),s=document.getElementById("edit-student-status").value,v=document.getElementById("edit-student-skills").value;m.updateRow("STUDENT",u,{cgpa:t,placement_status:s,skills:v}),l.hide(),i()}}}function J(o,a){var c;const d=y.getCurrentUser(),i=d.role_id===1||d.role_id===2;function e(){const r=m.getTable("COMPANY"),h=m.getTable("JOB_POSTING"),b=o.querySelector("#companies-grid");b&&(b.innerHTML=r.map(p=>{const l=h.filter(t=>t.company_id===p.company_id&&t.status==="Open").length;return`
        <div class="col-md-6 col-lg-4">
          <div class="card border-0 shadow-sm rounded-4 h-100 p-3 bg-white">
            <div class="d-flex align-items-center gap-3 mb-3">
              <div class="avatar bg-navy text-white rounded-3 d-flex align-items-center justify-content-center fw-bold fs-4" style="width: 52px; height: 52px;">
                ${p.company_name.charAt(0)}
              </div>
              <div>
                <h6 class="fw-bold mb-0 text-navy">${p.company_name}</h6>
                <span class="badge bg-light text-secondary border text-xs mt-1">${p.sector}</span>
              </div>
            </div>
            <div class="border-top pt-2.5 mb-3 fs-7">
              <div class="text-muted mb-1"><i class="bi bi-geo-alt me-1 text-danger"></i>${p.location}</div>
              <div class="text-muted mb-1"><i class="bi bi-envelope me-1 text-primary"></i>${p.contact_email}</div>
              <div class="text-muted"><i class="bi bi-globe me-1 text-teal"></i><a href="${p.website}" target="_blank" class="text-decoration-none text-muted">${p.website}</a></div>
            </div>
            <div class="d-flex justify-content-between align-items-center border-top pt-2 mt-auto">
              <span class="badge bg-primary-subtle text-primary rounded-pill text-xs fw-semibold">
                ${l} Active Drives
              </span>
              ${i?`
                <div>
                  <button class="btn btn-xs btn-outline-primary rounded-pill edit-company-btn me-1" data-id="${p.company_id}">Edit</button>
                  <button class="btn btn-xs btn-outline-dark rounded-pill view-drives-btn" data-id="${p.company_id}">View Drives</button>
                </div>
              `:""}
            </div>
          </div>
        </div>
      `}).join(""),o.querySelectorAll(".edit-company-btn").forEach(p=>{p.addEventListener("click",()=>{const l=parseInt(p.getAttribute("data-id"));u(l)})}),o.querySelectorAll(".view-drives-btn").forEach(p=>{p.addEventListener("click",()=>{a("jobs")})}))}o.innerHTML=`
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
  `,e(),i&&((c=o.querySelector("#add-company-btn"))==null||c.addEventListener("click",()=>{n()}));function n(){const r=document.getElementById("ctpmsModalTitle"),h=document.getElementById("ctpmsModalBody"),b=document.getElementById("ctpmsModalFooter");r.textContent="Register New Recruiting Company",h.innerHTML=`
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
    `,b.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-company">Save Company</button>
    `;const p=new bootstrap.Modal(document.getElementById("ctpmsModal"));p.show(),document.getElementById("save-new-company").onclick=()=>{const l=document.getElementById("comp-name").value,t=document.getElementById("comp-sector").value,s=document.getElementById("comp-location").value,v=document.getElementById("comp-email").value,g=document.getElementById("comp-website").value;!l||!v||(m.insertRow("COMPANY",{company_name:l,sector:t,location:s,contact_email:v,website:g}),p.hide(),e())}}function u(r){const b=m.getTable("COMPANY").find(v=>v.company_id===r);if(!b)return;const p=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),t=document.getElementById("ctpmsModalFooter");p.textContent=`Edit Company: ${b.company_name}`,l.innerHTML=`
      <form id="edit-company-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Company Official Name</label>
          <input type="text" id="edit-comp-name" class="form-control" value="${b.company_name}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Industry Sector</label>
          <input type="text" id="edit-comp-sector" class="form-control" value="${b.sector}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Location</label>
          <input type="text" id="edit-comp-location" class="form-control" value="${b.location}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">HR Contact Email</label>
          <input type="email" id="edit-comp-email" class="form-control" value="${b.contact_email}" required>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Website</label>
          <input type="url" id="edit-comp-website" class="form-control" value="${b.website}" required>
        </div>
      </form>
    `,t.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-edit-company">Save Changes</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-edit-company").onclick=()=>{const v=document.getElementById("edit-comp-name").value,g=document.getElementById("edit-comp-sector").value,f=document.getElementById("edit-comp-location").value,x=document.getElementById("edit-comp-email").value,w=document.getElementById("edit-comp-website").value;m.updateRow("COMPANY",r,{company_name:v,sector:g,location:f,contact_email:x,website:w}),s.hide(),e()}}}function V(o,a){const d=m.getStudentFullProfiles(),i=m.getJobPostingsDetailed(),e=d.find(u=>u.student_id===o),n=i.find(u=>u.job_id===a);if(!e)return{eligible:!1,reason:"Student profile not found."};if(!n)return{eligible:!1,reason:"Job drive not found."};if(n.status!=="Open")return{eligible:!1,reason:`Job drive is currently ${n.status.toLowerCase()}.`};if(e.placement_status==="Placed")return{eligible:!1,reason:"You have already accepted a final placement offer and are ineligible for further drives."};if(e.placement_status==="Opted Out")return{eligible:!1,reason:"Your status is currently set to Opted Out."};if(e.cgpa<n.min_cgpa)return{eligible:!1,reason:`Your CGPA (${e.cgpa.toFixed(2)}) is below the required threshold of ${n.min_cgpa.toFixed(2)}.`};if(n.eligible_branches){const u=n.eligible_branches.split(",").map(h=>h.trim().toLowerCase()),c=e.branch.trim().toLowerCase();if(!u.some(h=>c.includes(h)||h.includes(c)))return{eligible:!1,reason:`Your branch (${e.branch}) is not eligible for this drive. Eligible branches: ${n.eligible_branches}.`}}return{eligible:!0,reason:"Eligible to apply."}}function Y(o,a){var h;const d=y.getCurrentUser(),i=d.role_id===1||d.role_id===2||d.role_id===4,e=d.role_id===3,n=e?m.getTable("STUDENT").find(b=>b.user_id===d.user_id):null,u=e&&n?m.getTable("APPLICATION").filter(b=>b.student_id===n.student_id):[];function c(){const b=m.getJobPostingsDetailed(),p=o.querySelector("#jobs-grid");p&&(p.innerHTML=b.map(l=>{let t=null,s=!1;return e&&n&&(s=u.some(v=>v.job_id===l.job_id),t=V(n.student_id,l.job_id)),`
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
                <span class="fw-bold ${n&&n.cgpa>=l.min_cgpa?"text-success":"text-dark"}">${l.min_cgpa.toFixed(2)}</span>
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
                ${e?`
                  ${s?`
                    <span class="badge bg-success-subtle text-success rounded-pill px-3 py-2 fw-semibold">
                      <i class="bi bi-check-circle-fill me-1"></i> Applied
                    </span>
                  `:`
                    <button class="btn btn-sm btn-primary rounded-pill px-3 apply-job-btn" 
                      data-id="${l.job_id}" 
                      ${t!=null&&t.eligible?"":`disabled title="${t==null?void 0:t.reason}"`}>
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

            ${e&&!s&&!(t!=null&&t.eligible)?`
              <small class="text-danger text-xs mt-2 d-block"><i class="bi bi-exclamation-triangle-fill me-1"></i>${t==null?void 0:t.reason}</small>
            `:""}
          </div>
        </div>
      `}).join(""),o.querySelectorAll(".apply-job-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id"));n&&(m.insertRow("APPLICATION",{student_id:n.student_id,job_id:t,applied_date:new Date().toISOString().replace("T"," ").substring(0,19),status:"Applied"}),alert("Application submitted successfully!"),c())})}),o.querySelectorAll(".close-drive-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id"));m.updateRow("JOB_POSTING",t,{status:"Closed"}),c()})}),o.querySelectorAll(".open-drive-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id"));m.updateRow("JOB_POSTING",t,{status:"Open"}),c()})}),o.querySelectorAll(".view-apps-btn").forEach(l=>{l.addEventListener("click",()=>{a("applications")})}))}o.innerHTML=`
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
  `,c(),i&&((h=o.querySelector("#post-drive-btn"))==null||h.addEventListener("click",()=>{r()}));function r(){const b=m.getTable("COMPANY"),p=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),t=document.getElementById("ctpmsModalFooter");p.textContent="Post New Campus Job Drive",l.innerHTML=`
      <form id="post-drive-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Company</label>
          <select id="drive-company" class="form-select" required>
            ${b.map(v=>`<option value="${v.company_id}">${v.company_name} (${v.sector})</option>`).join("")}
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
    `,t.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-new-drive">Publish Job Drive</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-new-drive").onclick=()=>{const v=parseInt(document.getElementById("drive-company").value),g=document.getElementById("drive-title").value,f=parseFloat(document.getElementById("drive-cgpa").value),x=parseFloat(document.getElementById("drive-ctc").value),w=document.getElementById("drive-branches").value,_=document.getElementById("drive-deadline").value,C=document.getElementById("drive-desc").value;!g||!C||(m.insertRow("JOB_POSTING",{company_id:v,job_title:g,description:C,min_cgpa:f,eligible_branches:w,ctc:x,deadline:_,status:"Open"}),s.hide(),c())}}}function W(o,a){const d=y.getCurrentUser(),i=d.role_id===3,e=d.role_id===1||d.role_id===2||d.role_id===4,n=i?m.getTable("STUDENT").find(c=>c.user_id===d.user_id):null;function u(){var l,t;let c=m.getApplicationsDetailed();i&&n&&(c=c.filter(s=>s.student_id===n.student_id));const r=((l=o.querySelector("#filter-app-status"))==null?void 0:l.value)||"",h=((t=o.querySelector("#search-app"))==null?void 0:t.value.toLowerCase())||"",b=c.filter(s=>{const v=!r||s.status===r,g=!h||s.student_name.toLowerCase().includes(h)||s.job_title.toLowerCase().includes(h)||s.company_name.toLowerCase().includes(h);return v&&g}),p=o.querySelector("#applications-tbody");if(p){if(b.length===0){p.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No drive applications found matching your criteria.</td></tr>';return}p.innerHTML=b.map(s=>`
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
          ${e?`
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
    `).join(""),o.querySelectorAll(".update-status-btn").forEach(s=>{s.addEventListener("click",v=>{v.preventDefault();const g=parseInt(s.getAttribute("data-id")),f=s.getAttribute("data-status");if(m.updateRow("APPLICATION",g,{status:f}),f==="Selected"&&e){const x=m.getApplicationsDetailed().find(w=>w.application_id===g);confirm(`Student ${x.student_name} is marked Selected! Would you like to create a Final Placement Record now?`)&&a("placements")}u()})})}}o.innerHTML=`
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
  `,o.querySelector("#search-app").addEventListener("input",u),o.querySelector("#filter-app-status").addEventListener("change",u),u()}function Q(o){var r;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2||a.role_id===4,i=a.role_id===3,e=i?m.getTable("STUDENT").find(h=>h.user_id===a.user_id):null;function n(){const h=m.getTable("INTERVIEW"),b=m.getApplicationsDetailed();let p=h.map(t=>{const s=b.find(v=>v.application_id===t.application_id)||{};return{...t,student_name:s.student_name||"N/A",student_id:s.student_id,roll_number:s.roll_number||"",job_title:s.job_title||"N/A",company_name:s.company_name||"N/A"}});i&&e&&(p=p.filter(t=>t.student_id===e.student_id));const l=o.querySelector("#interviews-tbody");if(l){if(p.length===0){l.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No scheduled interview rounds found.</td></tr>';return}l.innerHTML=p.map(t=>`
      <tr>
        <td>
          <span class="badge bg-primary text-white rounded-circle me-2 px-2.5 py-1">R${t.round_number}</span>
          <span class="fw-bold text-dark">${t.round_type}</span>
        </td>
        <td>
          <div class="fw-bold text-dark">${t.student_name}</div>
          <small class="text-muted">${t.roll_number}</small>
        </td>
        <td>
          <div class="fw-semibold text-dark text-sm">${t.job_title}</div>
          <small class="text-muted">${t.company_name}</small>
        </td>
        <td class="text-muted text-sm fw-semibold"><i class="bi bi-calendar-event me-1 text-primary"></i>${t.scheduled_date}</td>
        <td class="text-muted text-sm"><i class="bi bi-geo-alt me-1 text-danger"></i>${t.venue}</td>
        <td>
          <span class="badge bg-${t.result==="Pass"?"success":t.result==="Fail"?"danger":"warning"}-subtle text-${t.result==="Pass"?"success":t.result==="Fail"?"danger":"warning"} rounded-pill">
            ${t.result}
          </span>
        </td>
        <td>
          ${d?`
            <button class="btn btn-xs btn-outline-primary rounded-pill update-result-btn me-1" data-id="${t.interview_id}">Result</button>
          `:`
            <span class="text-muted text-xs">Scheduled</span>
          `}
        </td>
      </tr>
    `).join(""),o.querySelectorAll(".update-result-btn").forEach(t=>{t.addEventListener("click",()=>{const s=parseInt(t.getAttribute("data-id"));c(s)})})}}o.innerHTML=`
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
  `,n(),d&&((r=o.querySelector("#schedule-interview-btn"))==null||r.addEventListener("click",()=>{u()}));function u(){const h=m.getApplicationsDetailed().filter(s=>s.status==="Shortlisted"||s.status==="Applied"),b=document.getElementById("ctpmsModalTitle"),p=document.getElementById("ctpmsModalBody"),l=document.getElementById("ctpmsModalFooter");b.textContent="Schedule Interview Round",p.innerHTML=`
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
    `;const t=new bootstrap.Modal(document.getElementById("ctpmsModal"));t.show(),document.getElementById("save-new-interview").onclick=()=>{const s=parseInt(document.getElementById("int-app-id").value),v=parseInt(document.getElementById("int-round-num").value),g=document.getElementById("int-round-type").value,f=document.getElementById("int-date").value.replace("T"," "),x=document.getElementById("int-venue").value;!s||!x||(m.insertRow("INTERVIEW",{application_id:s,round_number:v,round_type:g,scheduled_date:f,venue:x,result:"Pending"}),t.hide(),n())}}function c(h){const b=m.getTable("INTERVIEW").find(v=>v.interview_id===h);if(!b)return;const p=document.getElementById("ctpmsModalTitle"),l=document.getElementById("ctpmsModalBody"),t=document.getElementById("ctpmsModalFooter");p.textContent=`Update Round ${b.round_number} Result`,l.innerHTML=`
      <form id="update-result-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Evaluation Result</label>
          <select id="int-result" class="form-select" required>
            <option value="Pending" ${b.result==="Pending"?"selected":""}>Pending</option>
            <option value="Pass" ${b.result==="Pass"?"selected":""}>Pass (Cleared Round)</option>
            <option value="Fail" ${b.result==="Fail"?"selected":""}>Fail (Did Not Clear)</option>
          </select>
        </div>
      </form>
    `,t.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-int-result">Save Result</button>
    `;const s=new bootstrap.Modal(document.getElementById("ctpmsModal"));s.show(),document.getElementById("save-int-result").onclick=()=>{const v=document.getElementById("int-result").value;m.updateRow("INTERVIEW",h,{result:v}),s.hide(),n()}}}function K(o){var h;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2,i=a.role_id===3,e=i?m.getTable("STUDENT").find(b=>b.user_id===a.user_id):null;function n(){const b=m.getTable("TRAINING"),p=o.querySelector("#trainings-grid");p&&(p.innerHTML=b.map(l=>{const t=e&&(l.attendance||[]).includes(e.student_id),s=e&&(l.completed_students||[]).includes(e.student_id);return`
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
                    <button class="btn btn-sm btn-success rounded-pill px-3 download-cert-btn" data-title="${l.title}" data-student="${e.name}">
                      <i class="bi bi-award-fill me-1"></i> Download Certificate
                    </button>
                  `:t?`
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
      `}).join(""),o.querySelectorAll(".enroll-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id")),s=b.find(v=>v.training_id===t);s&&e&&(s.attendance||(s.attendance=[]),s.attendance.includes(e.student_id)||(s.attendance.push(e.student_id),m.updateRow("TRAINING",t,{attendance:s.attendance}),alert("Successfully enrolled in training program!"),n()))})}),o.querySelectorAll(".download-cert-btn").forEach(l=>{l.addEventListener("click",()=>{const t=l.getAttribute("data-title"),s=l.getAttribute("data-student");alert(`Simulated Certificate Downloaded for ${s}
Program: ${t}
Issued by TRCAC Placement Cell`)})}),o.querySelectorAll(".manage-attendance-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id"));c(t)})}),o.querySelectorAll(".issue-cert-btn").forEach(l=>{l.addEventListener("click",()=>{const t=parseInt(l.getAttribute("data-id"));r(t)})}))}o.innerHTML=`
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
  `,n(),d&&((h=o.querySelector("#add-training-btn"))==null||h.addEventListener("click",()=>{u()}));function u(){const b=document.getElementById("ctpmsModalTitle"),p=document.getElementById("ctpmsModalBody"),l=document.getElementById("ctpmsModalFooter");b.textContent="Create Skill Training Program",p.innerHTML=`
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
    `;const t=new bootstrap.Modal(document.getElementById("ctpmsModal"));t.show(),document.getElementById("save-new-training").onclick=()=>{const s=document.getElementById("tr-title").value,v=document.getElementById("tr-trainer").value,g=document.getElementById("tr-start").value,f=document.getElementById("tr-end").value,x=document.getElementById("tr-desc").value;!s||!v||(m.insertRow("TRAINING",{title:s,trainer_name:v,start_date:g,end_date:f,description:x,attendance:[],completed_students:[]}),t.hide(),n())}}function c(b){const p=m.getTable("TRAINING").find(f=>f.training_id===b),l=m.getStudentFullProfiles();if(!p)return;const t=document.getElementById("ctpmsModalTitle"),s=document.getElementById("ctpmsModalBody"),v=document.getElementById("ctpmsModalFooter");t.textContent=`Attendance List: ${p.title}`,s.innerHTML=`
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
            ${l.map(f=>{const x=(p.attendance||[]).includes(f.student_id);return`
                <tr>
                  <td>${f.name}</td>
                  <td>${f.roll_number}</td>
                  <td>
                    <input type="checkbox" class="form-check-input att-check" data-sid="${f.student_id}" ${x?"checked":""}>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,v.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-primary rounded-pill px-4" id="save-attendance">Save Attendance</button>
    `;const g=new bootstrap.Modal(document.getElementById("ctpmsModal"));g.show(),document.getElementById("save-attendance").onclick=()=>{const f=document.querySelectorAll(".att-check"),x=[];f.forEach(w=>{w.checked&&x.push(parseInt(w.getAttribute("data-sid")))}),m.updateRow("TRAINING",b,{attendance:x}),g.hide(),n()}}function r(b){const p=m.getTable("TRAINING").find(f=>f.training_id===b),l=m.getStudentFullProfiles().filter(f=>(p.attendance||[]).includes(f.student_id));if(!p)return;const t=document.getElementById("ctpmsModalTitle"),s=document.getElementById("ctpmsModalBody"),v=document.getElementById("ctpmsModalFooter");t.textContent=`Issue Completion Certificates: ${p.title}`,s.innerHTML=`
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
            ${l.length===0?'<tr><td colspan="3" class="text-center py-3 text-muted">No enrolled students in this training yet.</td></tr>':l.map(f=>{const x=(p.completed_students||[]).includes(f.student_id);return`
                  <tr>
                    <td>${f.name}</td>
                    <td>${f.roll_number}</td>
                    <td>
                      <input type="checkbox" class="form-check-input cert-check" data-sid="${f.student_id}" ${x?"checked":""}>
                    </td>
                  </tr>
                `}).join("")}
          </tbody>
        </table>
      </div>
    `,v.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-certs">Issue Certificates</button>
    `;const g=new bootstrap.Modal(document.getElementById("ctpmsModal"));g.show(),document.getElementById("save-certs").onclick=()=>{const f=document.querySelectorAll(".cert-check"),x=[];f.forEach(w=>{w.checked&&x.push(parseInt(w.getAttribute("data-sid")))}),m.updateRow("TRAINING",b,{completed_students:x}),g.hide(),n()}}}function z(o){var n;const a=y.getCurrentUser(),d=a.role_id===1||a.role_id===2;function i(){const u=m.getTable("PLACEMENT_RECORD"),c=m.getStudentFullProfiles(),r=m.getTable("COMPANY"),h=m.getTable("JOB_POSTING"),b=u.map(l=>{const t=c.find(g=>g.student_id===l.student_id)||{},s=r.find(g=>g.company_id===l.company_id)||{},v=h.find(g=>g.job_id===l.job_id)||{};return{...l,student_name:t.name||"Unknown Student",roll_number:t.roll_number||"",branch:t.branch||"",company_name:s.company_name||"N/A",job_title:v.job_title||"N/A"}}),p=o.querySelector("#placements-tbody");if(p){if(b.length===0){p.innerHTML='<tr><td colspan="7" class="text-center py-4 text-muted">No placement records recorded yet.</td></tr>';return}p.innerHTML=b.map(l=>`
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
    `).join("")}}o.innerHTML=`
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
  `,i(),d&&((n=o.querySelector("#add-placement-btn"))==null||n.addEventListener("click",()=>{e()}));function e(){const u=m.getStudentFullProfiles().filter(t=>t.placement_status!=="Placed"),c=m.getTable("COMPANY"),r=m.getTable("JOB_POSTING"),h=document.getElementById("ctpmsModalTitle"),b=document.getElementById("ctpmsModalBody"),p=document.getElementById("ctpmsModalFooter");h.textContent="Record Final Student Placement Offer",b.innerHTML=`
      <form id="add-placement-form">
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Select Student Candidate</label>
          <select id="pl-student-id" class="form-select" required>
            ${u.length===0?'<option value="">No unplaced students available</option>':u.map(t=>`<option value="${t.student_id}">${t.name} (${t.roll_number} • ${t.branch})</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Offering Company</label>
          <select id="pl-company-id" class="form-select" required>
            ${c.map(t=>`<option value="${t.company_id}">${t.company_name}</option>`).join("")}
          </select>
        </div>
        <div class="mb-3">
          <label class="form-label text-xs fw-bold text-uppercase text-muted">Associated Job Drive</label>
          <select id="pl-job-id" class="form-select" required>
            ${r.map(t=>`<option value="${t.job_id}">${t.job_title} (${t.ctc} LPA)</option>`).join("")}
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
    `,p.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Cancel</button>
      <button type="button" class="btn btn-success rounded-pill px-4" id="save-placement-record">Confirm Placement Offer</button>
    `;const l=new bootstrap.Modal(document.getElementById("ctpmsModal"));l.show(),document.getElementById("save-placement-record").onclick=()=>{const t=parseInt(document.getElementById("pl-student-id").value),s=parseInt(document.getElementById("pl-company-id").value),v=parseInt(document.getElementById("pl-job-id").value),g=parseFloat(document.getElementById("pl-ctc").value),f=document.getElementById("pl-offer-date").value,x=document.getElementById("pl-joining-date").value;!t||!s||!v||(m.insertRow("PLACEMENT_RECORD",{student_id:t,company_id:s,job_id:v,ctc_offered:g,offer_date:f,joining_date:x}),m.updateRow("STUDENT",t,{placement_status:"Placed"}),l.hide(),i())}}}function Z(o){const a=y.getCurrentUser();if(!(a.role_id===1||a.role_id===2)){o.innerHTML=`
      <div class="alert alert-danger rounded-3 p-4">
        <h5 class="fw-bold"><i class="bi bi-shield-lock-fill me-2"></i>Access Restricted</h5>
        <p class="mb-0">Placement analytics and CSV exports are restricted to TPO Officers and Administrators.</p>
      </div>
    `;return}const i=m.getStudentFullProfiles(),e=m.getTable("PLACEMENT_RECORD"),n=m.getTable("COMPANY"),u=i.length,c=i.filter(s=>s.placement_status==="Placed"),r=i.filter(s=>s.placement_status==="Unplaced"),h=e.reduce((s,v)=>v.ctc_offered>s?v.ctc_offered:s,0),b=e.length>0?(e.reduce((s,v)=>s+v.ctc_offered,0)/e.length).toFixed(2):"0.00",l=["B.Sc. CS","B.Sc. IT","B.Sc. Data Science"].map(s=>{const v=i.filter(x=>x.branch===s),g=v.filter(x=>x.placement_status==="Placed"),f=v.length>0?(g.length/v.length*100).toFixed(1):"0.0";return{branch:s,total:v.length,placed:g.length,unplaced:v.length-g.length,rate:f}}),t=n.map(s=>{const v=e.filter(f=>f.company_id===s.company_id),g=v.reduce((f,x)=>x.ctc_offered>f?x.ctc_offered:f,0);return{company:s.company_name,hires:v.length,ctc:g>0?`${g.toFixed(2)} LPA`:"N/A"}});o.innerHTML=`
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
            <h3 class="fw-bold text-primary mb-0 mt-1">${b} LPA</h3>
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
                  ${t.map(s=>`
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
  `,o.querySelector("#export-csv-btn").addEventListener("click",()=>{const s=i.map(v=>({"Roll Number":v.roll_number,"Student Name":v.name,"Degree Branch":v.branch,"CGPA Score":v.cgpa,"Email Contact":v.email,Skills:v.skills,"Placement Status":v.placement_status,"Company Placed":v.placement_details?v.placement_details.company_name:"N/A","CTC Offered (LPA)":v.placement_details?v.placement_details.ctc_offered:"N/A"}));if(window.Papa){const v=window.Papa.unparse(s),g=new Blob([v],{type:"text/csv;charset=utf-8;"}),f=document.createElement("a");f.href=URL.createObjectURL(g),f.setAttribute("download",`TRCAC_Placement_Report_${new Date().toISOString().substring(0,10)}.csv`),document.body.appendChild(f),f.click(),document.body.removeChild(f)}else alert("CSV export engine ready. Triggered export download.")})}function X(o){const a=y.getCurrentUser(),d=m.getTable("USER").find(n=>n.user_id===a.user_id)||{};o.innerHTML=`
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
  `;const i=o.querySelector("#profile-alert");function e(n,u="success"){i.className=`alert alert-${u} rounded-3 text-xs mb-3 fade-in`,i.textContent=n,i.classList.remove("d-none"),setTimeout(()=>{i.classList.add("d-none")},4e3)}o.querySelector("#profile-info-form").addEventListener("submit",n=>{n.preventDefault();const u=o.querySelector("#prof-name").value;m.updateRow("USER",a.user_id,{name:u}),a.name=u,document.getElementById("user-name").textContent=u,e("Profile name updated successfully!","success")}),o.querySelector("#password-change-form").addEventListener("submit",n=>{n.preventDefault();const u=o.querySelector("#curr-pass").value,c=o.querySelector("#new-pass").value,r=o.querySelector("#confirm-pass").value;if(u!==d.password){e("Current password entered is incorrect.","danger");return}if(c!==r){e("New password and confirmation do not match.","danger");return}m.updateRow("USER",a.user_id,{password:c}),o.querySelector("#curr-pass").value="",o.querySelector("#new-pass").value="",o.querySelector("#confirm-pass").value="",e("Account password changed successfully!","success")})}const $=[{id:"dashboard",label:"Dashboard",icon:"bi-grid-1x2",roles:[1,2,3,4],render:B},{id:"users",label:"User Management",icon:"bi-shield-person",roles:[1],render:H},{id:"students",label:"Student Management",icon:"bi-mortarboard",roles:[1,2],render:G},{id:"companies",label:"Company Management",icon:"bi-building",roles:[1,2],render:J},{id:"jobs",label:"Job Postings",icon:"bi-briefcase",roles:[1,2,3,4],render:Y},{id:"applications",label:"Applications",icon:"bi-file-earmark-check",roles:[1,2,3,4],render:W},{id:"interviews",label:"Interview Schedule",icon:"bi-calendar-event",roles:[1,2,3,4],render:Q},{id:"trainings",label:"Training Programs",icon:"bi-award",roles:[1,2,3,4],render:K},{id:"placements",label:"Placement Records",icon:"bi-journal-check",roles:[1,2],render:z},{id:"reports",label:"Reports & Analytics",icon:"bi-bar-chart-line",roles:[1,2],render:Z},{id:"profile",label:"Profile & Settings",icon:"bi-person-gear",roles:[1,2,3,4],render:X}];class ee{constructor(){this.loginContainer=document.getElementById("login-view-container"),this.appShell=document.getElementById("authenticated-shell"),this.mainViewport=document.getElementById("main-viewport"),this.sidebarNav=document.getElementById("sidebar-nav"),this.sidebar=document.getElementById("sidebar"),this.currentPage="dashboard",this.setupEventListeners(),this.init()}init(){y.isAuthenticated()?this.showAppShell():this.showLogin()}showLogin(){this.appShell.classList.add("d-none"),this.loginContainer.classList.remove("d-none"),F(this.loginContainer,()=>this.showAppShell())}showAppShell(){this.loginContainer.classList.add("d-none"),this.appShell.classList.remove("d-none"),this.updateUserHeader(),this.buildSidebar();const a=window.location.hash.replace("#",""),d=$.find(i=>i.id===a);this.navigateTo(d?a:"dashboard")}updateUserHeader(){const a=y.getCurrentUser();a&&(document.getElementById("user-name").textContent=a.name,document.getElementById("user-role-badge").textContent=a.role_name,document.getElementById("user-avatar").textContent=a.name.charAt(0).toUpperCase(),document.querySelectorAll(".active-role-btn").forEach(d=>{parseInt(d.getAttribute("data-switch-role"))===a.role_id?d.classList.add("active"):d.classList.remove("active")}))}buildSidebar(){const a=y.getCurrentUser();if(!a)return;const d=$.filter(i=>i.roles.includes(a.role_id));this.sidebarNav.innerHTML=d.map(i=>`
      <a class="nav-link ${this.currentPage===i.id?"active":""}" href="#${i.id}" data-page="${i.id}">
        <i class="bi ${i.icon}"></i>
        <span>${i.label}</span>
      </a>
    `).join(""),this.sidebarNav.querySelectorAll(".nav-link").forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();const n=i.getAttribute("data-page");this.navigateTo(n)})})}navigateTo(a){const d=y.getCurrentUser(),i=$.find(e=>e.id===a);if(!i||!i.roles.includes(d.role_id)){this.navigateTo("dashboard");return}this.currentPage=a,window.location.hash=a,this.sidebarNav.querySelectorAll(".nav-link").forEach(e=>{e.getAttribute("data-page")===a?e.classList.add("active"):e.classList.remove("active")}),this.mainViewport.scrollTop=0,i.render(this.mainViewport,e=>this.navigateTo(e)),window.innerWidth<=768&&this.sidebar.classList.add("collapsed")}setupEventListeners(){var a,d,i;(a=document.getElementById("sidebar-toggle"))==null||a.addEventListener("click",()=>{this.sidebar.classList.toggle("collapsed")}),(d=document.getElementById("logout-btn"))==null||d.addEventListener("click",e=>{e.preventDefault(),y.logout(),this.showLogin()}),document.querySelectorAll(".active-role-btn").forEach(e=>{e.addEventListener("click",()=>{const n=parseInt(e.getAttribute("data-switch-role"));y.switchRole(n),this.showAppShell()})}),(i=document.getElementById("view-security-log-btn"))==null||i.addEventListener("click",e=>{e.preventDefault(),this.openSecurityLogModal()}),window.addEventListener("hashchange",()=>{const e=window.location.hash.replace("#","");e&&e!==this.currentPage&&this.navigateTo(e)})}openSecurityLogModal(){const a=m.getTable("SECURITY_LOG"),d=m.getTable("USER"),i=document.getElementById("ctpmsModalTitle"),e=document.getElementById("ctpmsModalBody"),n=document.getElementById("ctpmsModalFooter");i.textContent="Session Security Audit Log (SRS Section 5.1 & 8.10)",e.innerHTML=`
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
                  <td>#${c.security_log_id||c.log_id}</td>
                  <td class="fw-bold">${r.name||"User #"+c.user_id}</td>
                  <td class="text-muted text-xs">${c.entry_time}</td>
                  <td class="text-muted text-xs">${c.exit_time||'<span class="badge bg-success-subtle text-success">Active Session</span>'}</td>
                  <td><span class="badge bg-primary-subtle text-primary">${c.status_event}</span></td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    `,n.innerHTML=`
      <button type="button" class="btn btn-light rounded-pill px-4" data-bs-dismiss="modal">Close Audit Log</button>
    `,new bootstrap.Modal(document.getElementById("ctpmsModal")).show()}}document.addEventListener("DOMContentLoaded",()=>{new ee});
