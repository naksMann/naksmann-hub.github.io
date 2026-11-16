/* ============================================================================
   Projects data
   ----------------------------------------------------------------------------
   EDIT THIS FILE to change project content. Each entry renders one card on
   projects.html and the modal that opens when the card is clicked.

     img      card thumbnail (assets/img/...)
     blurb    the two lines shown on the card face
     body     paragraphs shown in the modal
     docs     one button + embedded viewer per report
     video    YouTube EMBED url, or "" for no video
   ============================================================================ */

const PROJECTS = [
  {
    id: "incident-response",
    title: "Incident Response",
    subtitle: "Tier 1 & Tier 2 SOC Operations",
    img: "assets/img/incident-response.jpg",
    blurb: "Sentinel and Sysmon triage across Tier 1 and Tier 2 workflows, documented so the next analyst can pick it up cold.",
    tags: ["Microsoft Sentinel", "KQL", "Sysmon", "Incident Triage"],
    body: [
      "Two connected SOC labs. In Tier 1 I monitored an Azure environment through Microsoft Sentinel, triaging failed and successful logon activity (Event ID 4625 and 4624) and separating brute force noise from the logons that actually mattered.",
      "Tier 2 moved deeper into the host. I hunted Sysmon process creation (Event ID 1) and outbound network connections (Event ID 3) with advanced KQL, following the process tree rather than the alert.",
      "Each scenario ships with the same three artefacts: an investigation playbook, a use case sheet, and a shift handover document, so the incident survives a change of analyst without a verbal briefing."
    ],
    docs: [
      { label: "Tier 1 SOC Report", file: "assets/reports/01-tier1-soc.pdf" },
      { label: "Tier 2 SOC Report", file: "assets/reports/02-tier2-soc.pdf" }
    ],
    video: ""
  },
  {
    id: "insider-threat",
    title: "SOC Insider Threat Detection",
    subtitle: "Wazuh + Isolation Forest Anomaly Detection",
    img: "assets/img/insider-threat.jpg",
    blurb: "A Dockerised Wazuh SOC where an Isolation Forest model flags the exfiltration-style file access that signature rules miss.",
    tags: ["Wazuh", "Docker", "Isolation Forest", "File Integrity Monitoring"],
    body: [
      "A self-contained SOC built in Docker, with Wazuh agents monitoring insider threat scenarios across Tier 1 and Tier 2 workflows and File Integrity Monitoring (Syscheck) watching the directories that matter.",
      "The problem with insider threats is that the activity is authorised. A user reading files they have permission to read breaks no rule, so signature-based detection has nothing to fire on. Rather than write more rules, I trained an Isolation Forest model on the collected Wazuh log data to learn what normal file access looks like for each account, then flag the sessions that sit outside it.",
      "That turns the exfiltration case into an anomaly detection problem instead of a manual log review, and surfaces the access patterns a rule set would have passed over."
    ],
    docs: [
      { label: "Insider Threat Report", file: "assets/reports/08-insider-threat.pdf" }
    ],
    video: "https://www.youtube.com/embed/WY-QnTTFSOU"
  },
  {
    id: "penetration-testing",
    title: "Penetration Testing",
    subtitle: "Web Application Assessments & Security Challenge",
    img: "assets/img/penetration-testing.jpg",
    blurb: "Two MWR CyberSec web app tests and an Orange Cyberdefense challenge: RCE, SQL injection, forged admin tokens and free currency.",
    tags: ["OWASP Top 10", "CVSS v3.1", "Burp Suite", "JWT Attacks", "SQL Injection", "CyberChef"],
    body: [
      "Three web security engagements, each with its own report. Use the tabs below to switch between them.",
      "MWR CyberSec applicant portal. A full black-box test against a deliberately vulnerable React and Vite application served by Nginx on Ubuntu. Twelve findings (F-01 to F-12) were scored with CVSS v3.1 and mapped to the OWASP Top 10. Five flags were captured across SQL injection, stored XSS, an unrestricted file upload chained into remote code execution (CVSS 8.8, High), JWT forgery through an HS256 secret cracked with John the Ripper in under a second, and a business logic flaw.",
      "Imgurr marketplace (MWR report v2.0). An image marketplace with an internal currency, reviews and gift vouchers. Ten findings (five High, four Medium, one Informational) and four flags. A UNION-based SQL injection in the login email parameter read the whole SQLite database, administrator hash included. The token verifier accepted alg:none, so an unsigned JWT with is_admin set to true opened the admin dashboard. The voucher flow checked card format but never took payment, so a card number of all zeros minted 100,000 MWR-Bucks.",
      "Orange Cyberdefense Academy challenge. A level-based web security challenge solved from level 0 to level 7: DNS A and TXT record enumeration, secrets hardcoded or encoded in client-side JavaScript, a CryptoJS AES passphrase hidden in a Sudoku and found by testing every digit order in the console, and a next-level URL recovered from an inverted QR code with ImageMagick and zbarimg. The lesson running through it is that hiding something is not securing it."
    ],
    docs: [
      { label: "MWR Pen-Test Report", file: "assets/reports/10-mwr-pentest.pdf" },
      { label: "Imgurr Pen-Test Report", file: "assets/reports/12-mwr-pentest-imgurr.pdf" },
      { label: "Orange Cyberdefense Challenge", file: "assets/reports/13-orange-challenge.pdf" }
    ],
    video: ""
  },
  {
    id: "ics-ot",
    title: "ICS / OT Security",
    subtitle: "Siemens S7-1200 PLC Assessment",
    img: "assets/img/ics-ot.jpg",
    blurb: "An unauthenticated STOP command over S7comm halted a live programmable logic controller mid-run. CVSS 7.5, High.",
    tags: ["S7comm", "Modbus TCP", "Metasploit", "MITRE ATT&CK for ICS"],
    body: [
      "A penetration test against real industrial hardware rather than a simulation. ARP-based host discovery and Nmap located the controller, then S7comm protocol enumeration confirmed what it would answer without credentials.",
      "Metasploit was used to issue an unauthenticated STOP command that halted a live Siemens S7-1200 mid-run. No authentication was required at any point, which is the finding: the protocol trusts whoever can reach it.",
      "Three findings were scored to CVSS v3.1, the highest at 7.5 (High), and the attack path was mapped to MITRE ATT&CK for ICS. Supporting work included instrumenting Modbus TCP traffic with Zeek and surfacing the telemetry in Grafana for a water treatment facility simulation."
    ],
    docs: [
      { label: "PLC Pen-Test Report", file: "assets/reports/11-plc-pentest.pdf" }
    ],
    video: ""
  },
  {
    id: "honeypot",
    title: "Azure Cloud Honeypot",
    subtitle: "Attack Capture & GeoIP Analysis",
    img: "assets/img/honeypot.jpg",
    blurb: "An exposed Azure VM left to absorb real internet attacks, then mapped by country. 2,610 failed logons came from one host.",
    tags: ["Microsoft Azure", "Log Analytics", "KQL", "GeoIP"],
    body: [
      "A Windows virtual machine deployed on Microsoft Azure and deliberately exposed to the internet, with logs piped through Azure Monitor, Log Analytics and Sentinel.",
      "Thousands of failed logon events (Event ID 4625) were queried with KQL and enriched with GeoIP data to build a live map of attacker origins across multiple countries. A single Slovenian host accounted for roughly 2,610 of them.",
      "The value of the lab is the scale: it makes the constant background rate of automated credential attacks against any exposed host measurable rather than theoretical."
    ],
    docs: [
      { label: "Honeypot Report", file: "assets/reports/07-honeypot.pdf" }
    ],
    video: "https://www.youtube.com/embed/Z07DxozD9tM"
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition",
    subtitle: "Final-Year Engineering Project (PJD 376)",
    img: "assets/img/facial-recognition.jpg",
    blurb: "An access control system on Python, OpenCV and ESP32. Tuned to 0.5 tolerance: ~95% genuine acceptance, 0% impostor pass.",
    tags: ["Python", "OpenCV", "Flask", "ESP32", "Firebase"],
    body: [
      "A smart access control system built for my final-year engineering project, combining Python, Flask, OpenCV, Firebase and an ESP32 driving a solenoid lock.",
      "At a recognition tolerance of 0.5 the system reached roughly 95% genuine acceptance in controlled conditions with no impostor ever passing. Tightening the tolerance further traded away legitimate users for no security gain, which is what the report argues.",
      "A live monitoring dashboard shows access attempts as they happen and raises breach alerts on repeated failures."
    ],
    docs: [
      { label: "Project Report", file: "assets/reports/09-facial-recognition.pdf" }
    ],
    video: "https://www.youtube.com/embed/OAYKzZmYNtQ"
  }
];
