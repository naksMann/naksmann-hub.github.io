/* ============================================================================
   Certifications data
   ----------------------------------------------------------------------------
   EDIT THIS FILE to add or update a certificate.

     status  "done"     earned, opens the certificate PDF
             "progress" studying towards it, shown with a live progress state
     file    path to the PDF (leave "" for anything in progress)

   To move a certificate from in progress to earned: drop the PDF into
   assets/certs/, set status to "done" and point file at it.
   ============================================================================ */

const CERTS = [
  {
    title: "Penetration Testing Virtual Internship",
    issuer: "MWR CyberSec",
    note: "Certificate of Completion",
    status: "done",
    file: "assets/certs/mwr-completion.pdf"
  },
  {
    title: "Data Science in Cybersecurity",
    issuer: "EC-Council",
    note: "Certificate",
    status: "done",
    file: "assets/certs/ec-council-data-science.pdf"
  },
  {
    title: "Cyber Security Job Simulation",
    issuer: "Deloitte (Forage)",
    note: "Certificate of Completion",
    status: "done",
    file: "assets/certs/deloitte-cyber.pdf"
  },
  {
    title: "Attendance",
    issuer: "SA and Netherlands Cyber Security School",
    note: "SANCS, 2026 Cohort",
    status: "done",
    file: "assets/certs/sancs-attendance.pdf"
  },
  {
    title: "Participation",
    issuer: "SA and Netherlands Cyber Security School",
    note: "SANCS, 2026 Cohort",
    status: "done",
    file: "assets/certs/sancs-participation.pdf"
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    note: "Studying towards certification",
    status: "progress",
    file: ""
  },
  {
    title: "Cisco CCNA",
    issuer: "Cisco",
    note: "Studying towards certification",
    status: "progress",
    file: ""
  }
];
