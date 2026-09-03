import { db } from './db.js';

export function validateStudentEligibility(studentId, jobId) {
  const students = db.getStudentFullProfiles();
  const jobs = db.getJobPostingsDetailed();

  const student = students.find(s => s.student_id === studentId);
  const job = jobs.find(j => j.job_id === jobId);

  if (!student) {
    return { eligible: false, reason: 'Student profile not found.' };
  }

  if (!job) {
    return { eligible: false, reason: 'Job drive not found.' };
  }

  if (job.status !== 'Open') {
    return { eligible: false, reason: `Job drive is currently ${job.status.toLowerCase()}.` };
  }

  if (student.placement_status === 'Placed') {
    return { eligible: false, reason: 'You have already accepted a final placement offer and are ineligible for further drives.' };
  }

  if (student.placement_status === 'Opted Out') {
    return { eligible: false, reason: 'Your status is currently set to Opted Out.' };
  }

  if (student.cgpa < job.min_cgpa) {
    return { eligible: false, reason: `Your CGPA (${student.cgpa.toFixed(2)}) is below the required threshold of ${job.min_cgpa.toFixed(2)}.` };
  }

  // Branch check
  if (job.eligible_branches) {
    const branches = job.eligible_branches.split(',').map(b => b.trim().toLowerCase());
    const studentBranchClean = student.branch.trim().toLowerCase();
    const isMatched = branches.some(b => studentBranchClean.includes(b) || b.includes(studentBranchClean));

    if (!isMatched) {
      return { eligible: false, reason: `Your branch (${student.branch}) is not eligible for this drive. Eligible branches: ${job.eligible_branches}.` };
    }
  }

  return { eligible: true, reason: 'Eligible to apply.' };
}
