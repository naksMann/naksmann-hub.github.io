/* ============================================================================
   Nakedi Tumelo Peta — Portfolio data
   ----------------------------------------------------------------------------
   EDIT THIS FILE to update content. Everything the site renders lives here.

   >>> PLACEHOLDERS TO FILL IN are marked with  // TODO  below:
       - CONFIG.email          your contact email
       - CONFIG.linkedin       your LinkedIn profile URL
       - CONFIG.tryhackme      your TryHackMe profile URL
       - CONFIG.profilePhoto   drop a photo at assets/img/profile.jpg
       - project.videoEmbed    YouTube/Vimeo EMBED url for projects 7, 8, 9
   ============================================================================ */

const CONFIG = {
  name: "Nakedi Tumelo Peta",
  // TODO: replace with your real email
  email: "makgwatatumelo46@gmail.com",
  github: "https://github.com/naksMann",
  // TODO: paste your LinkedIn profile URL
  linkedin: "https://www.linkedin.com/in/nakedi-tumelo-peta-30045b381",
  // TODO: paste your TryHackMe profile URL
  tryhackme: "https://tryhackme.com/room/mwrcybersecvirtualintershipcapstone",
  resume: "assets/resume/Nakedi_Tumelo_Peta_CV.pdf",
  // TODO: add a photo at this path (square works best, ~600x600)
  profilePhoto: "assets/img/profile.jpg",
};

/* Skills — grouped badges. */
const SKILLS = [
  {
    group: "SOC Operations",
    items: ["Microsoft Sentinel", "KQL", "Log Analytics", "Azure Monitor Agent", "Sysmon", "Incident Triage"],
  },
  {
    group: "Penetration Testing",
    items: ["OWASP Top 10", "CVSS v3.1", "Burp Suite", "John the Ripper", "PyJWT", "TryHackMe"],
  },
  {
    group: "ICS / OT Security",
    items: ["OT Monitoring", "Network Segmentation", "Asset Visibility", "Protocol Awareness"],
  },
  {
    group: "Machine Learning for Security",
    items: ["scikit-learn", "Isolation Forest", "Decision Trees", "Logistic Regression", "Anomaly Detection"],
  },
  {
    group: "Cloud & Automation",
    items: ["Microsoft Azure", "Defender for Cloud", "Logic Apps (SOAR)", "Azure Policy", "Docker", "Wazuh"],
  },
  {
    group: "Development",
    items: ["Python", "Flask", "JavaScript", "ESP32 / Embedded", "Firebase"],
  },
];

/* Certifications — real PDFs are wired where available; others link out or note status. */
const CERTS = [
  {
    title: "Penetration Testing Virtual Internship",
    issuer: "MWR CyberSec",
    note: "Certificate of Completion",
    status: "done",
    file: "assets/certs/mwr-completion.pdf",
  },
  {
    title: "Data Science in Cybersecurity",
    issuer: "EC-Council",
    note: "Certificate",
    status: "done",
    file: "assets/certs/ec-council-data-science.pdf",
  },
  {
    title: "Cyber Security Job Simulation",
    issuer: "Deloitte (Forage)",
    note: "Certificate of Completion",
    status: "done",
    file: "assets/certs/deloitte-cyber.pdf",
  },
  {
    title: "Attendance",
    issuer: "SA–Netherlands Cyber Security School (SANCS)",
    note: "2026 Cohort",
    status: "done",
    file: "assets/certs/sancs-participation.pdf",
  },
  {
    title: "Participation",
    issuer: "SA–Netherlands Cyber Security School (SANCS)",
    note: "2026 Cohort",
    status: "done",
    file: "assets/certs/sancs-participation.pdf",
  },
  {
    title: "Full Stack Development",
    issuer: "IT Varsity",
    note: "Certificate",
    status: "done",
    file: "assets/certs/it-varsity.pdf",
  },
  {
    title: "Prompt Engineering",
    issuer: "WeThinkCode_",
    note: "Certificate",
    status: "done",
    file: "assets/certs/prompt-engineering.pdf",
  },
  {
    title: "CompTIA Security+",
    issuer: "CompTIA",
    note: "In Progress",
    status: "progress",
    file: "",
  },
];

/* Project categories used by the filter bar (order = display order). */
const CATEGORIES = [
  "All",
  "SOC Operations",
  "Detection Engineering",
  "ML for Security",
  "Penetration Testing",
  "Embedded Security",
];

/* Projects — figures below are pulled from the actual source reports.
   featured: true  → renders as a wide flagship card with an on-face artifact.
   kicker          → the single most specific finding, shown on the card face.
   artifact        → real terminal/SIEM snippet (label + lines) for featured cards. */
const PROJECTS = [
  {
    id: "tier1-soc",
    title: "Tier-1 SOC Lab",
    subtitle: "Azure Sentinel Monitoring & Triage",
    category: "SOC Operations",
    tags: ["Microsoft Sentinel", "KQL", "Log Analytics", "Triage"],
    kicker: "Triaged EventID 4625/4624 and shipped a use-case sheet, playbook, and shift-handover doc.",
    summary:
      "Simulated a Tier-1 analyst workflow in Microsoft Sentinel — ingesting Windows SecurityEvent logs and triaging authentication events end to end.",
    metrics: [
      { value: "4625 / 4624", label: "Logon events triaged" },
      { value: "3", label: "SOC docs produced" },
      { value: "AMA + DCR", label: "Ingestion pipeline" },
    ],
    details: [
      "Built a Log Analytics workspace with the Azure Monitor Agent (AMA) and a Data Collection Rule (DCR) feeding Microsoft Sentinel (resource group <code>Tier1_SOC</code>).",
      "Enabled the failed-logon audit policy, generated failed/successful logons, and triaged them with KQL — EventID 4625 (failed) vs 4624 (successful).",
      "Ran the full first-responder loop: heartbeat health check → triage → enrichment (account, host, logon type, timestamp) → documented containment.",
      "Delivered Tier-1 analyst artefacts: a use-case sheet, a playbook design doc, and a shift-handover doc.",
    ],
    tools: ["Microsoft Sentinel", "Log Analytics", "Azure Monitor Agent", "DCR", "KQL", "PowerShell"],
    reports: [{ label: "Tier-1 SOC Report", href: "assets/reports/01-tier1-soc.pdf" }],
    github: "",
    videoEmbed: "",
  },
  {
    id: "tier2-soc",
    title: "Tier-2 SOC Lab",
    subtitle: "Sysmon + Advanced Investigation",
    category: "SOC Operations",
    tags: ["Sysmon", "KQL", "Endpoint Telemetry", "Investigation"],
    kicker: "Hunted Sysmon process-creation (EID 1) and outbound connections (EID 3) with advanced KQL.",
    summary:
      "Extended the SOC lab with Sysmon endpoint telemetry and advanced KQL for process-creation and outbound-connection investigation.",
    metrics: [
      { value: "EID 1 & 3", label: "Process + network hunts" },
      { value: "New DCR", label: "Sysmon ingestion" },
      { value: "Endpoint", label: "Investigation depth" },
    ],
    details: [
      "Deployed Sysmon (Sysinternals) with <code>sysmonconfig-export.xml</code>, verified the service, then wired a new DCR to ingest <code>Microsoft-Windows-Sysmon/Operational</code> into Log Analytics.",
      "Wrote advanced KQL over Sysmon: process-creation analysis (EventID 1 — CommandLine / Image) and outbound network-connection analysis (EventID 3 — DestinationIp).",
      "Correlated Tier-1 SecurityEvent logons with Tier-2 process/network telemetry to build attack timelines at endpoint granularity.",
      "Documented real troubleshooting of DCR configuration and log-path issues, plus containment steps (account / host isolation).",
    ],
    tools: ["Sysmon", "Microsoft Sentinel", "Log Analytics", "DCR", "KQL", "PowerShell"],
    reports: [{ label: "Tier-2 SOC Report", href: "assets/reports/02-tier2-soc.pdf" }],
    github: "",
    videoEmbed: "",
  },
  {
    id: "bto-pack",
    title: "Blue Team Operations Lab Pack",
    subtitle: "BTO-1 → BTO-3",
    category: "Detection Engineering",
    tags: ["Detection Engineering", "SOAR", "Sigma → KQL", "Azure Policy"],
    featured: true,
    kicker: "Built a custom PowerShell -enc detection wired to a SOAR playbook with a human approval gate before containment.",
    artifact: {
      label: "T2_Suspicious_PowerShell_Process · scheduled analytics rule",
      lines: [
        "SecurityEvent",
        '| where Image endswith "powershell.exe"',
        '| where CommandLine contains "-enc"',
        "// entities → Account · Host · Process",
        "// incident → SOAR: logic-soar-approval-containment",
        "// action  → HUMAN APPROVAL, then isolate host",
      ],
    },
    summary:
      "A three-stage blue-team progression: from signal onboarding to a custom analytics rule, Sigma-to-KQL conversion, adversary emulation, and a human-gated SOAR playbook.",
    metrics: [
      { value: "3 stages", label: "BTO-1 → BTO-3" },
      { value: "1", label: "Custom scheduled rule" },
      { value: "Approval gate", label: "SOAR containment" },
    ],
    details: [
      "<strong>BTO-1 (Foundations):</strong> signal onboarding + health checks, Windows Security + Sysmon via AMA, KQL essentials, enabled out-of-box analytics rules, custom workbooks, and watchlist correlation for high-value users/assets.",
      "<strong>BTO-2 (Detection & Posture):</strong> built a custom scheduled rule <code>T2_Suspicious_PowerShell_Process</code> (KQL: <code>Image contains \"powershell.exe\" and CommandLine contains \"-enc\"</code>) with Account/Host/Process entity mapping + incident automation; ran false-positive tuning; wrote a use-case registry entry with a Sim-1/Sim-2 test plan and responder runbook; remediated Defender for Cloud recommendations; and assigned an Azure Policy initiative with automated remediation.",
      "<strong>BTO-3 (Advanced):</strong> converted a public Sigma rule to working KQL (sigconverter.io); tuned Sysmon for Event IDs 1/7/10/11 (ProcessCreate, ImageLoaded, ProcessAccess, FileCreate); ran a controlled adversary emulation (custom <code>BruteForceTest</code> generating 4625/4624 + Sysmon) to validate detection; and built a Logic Apps SOAR playbook (<code>logic-soar-approval-containment</code>) with a human approval gate before containment.",
    ],
    tools: ["Microsoft Sentinel", "KQL", "Sigma", "Sysmon", "Defender for Cloud", "Azure Policy", "Logic Apps (SOAR)"],
    reports: [
      { label: "BTO-1 · Foundations", href: "assets/reports/03a-bto1.pdf" },
      { label: "BTO-2 · Detection & Posture", href: "assets/reports/03b-bto2.pdf" },
      { label: "BTO-3 · Advanced", href: "assets/reports/03c-bto3.pdf" },
    ],
    github: "",
    videoEmbed: "",
  },
  {
    id: "malware-classifier",
    title: "Malware Detection Classifier",
    subtitle: "Supervised ML — Decision Tree",
    category: "ML for Security",
    tags: ["Machine Learning", "Decision Tree", "scikit-learn", "Malware Analysis"],
    kicker: "98% accuracy with 100% precision — 0 false positives on the held-out 50-file test set.",
    summary:
      "A supervised Decision Tree that flags files as benign or malicious from structural metadata — size, permissions, entropy, and import count.",
    metrics: [
      { value: "98%", label: "Accuracy (49/50)" },
      { value: "100%", label: "Precision" },
      { value: "0.99", label: "AUC" },
    ],
    details: [
      "Trained a Decision Tree classifier (<code>max_depth=4</code>, chosen for interpretable if-then rules) on a 200-sample dataset — 150 train / 50 test, 66% benign / 34% malware.",
      "Features: <code>file_size</code>, <code>permissions</code> (read-only / RW / executable), <code>entropy</code> (1.0–8.0 bits/byte), and <code>num_imports</code> — high entropy near 8.0 emerged as a strong malware signal.",
      "Held-out results: 98% accuracy, 100% precision, 94.1% recall, 0.99 AUC — confusion matrix TN 33 / FP 0 / FN 1 / TP 16 (zero false alarms).",
      "Full Python pipeline (pandas / scikit-learn) with confusion-matrix and ROC analysis.",
    ],
    tools: ["Python", "scikit-learn", "pandas", "matplotlib", "seaborn"],
    reports: [{ label: "Classifier Report", href: "assets/reports/04-malware-classifier.pdf" }],
    github: "",
    videoEmbed: "",
  },
  {
    id: "network-intrusion",
    title: "Network Intrusion Detection System",
    subtitle: "Logistic Regression NIDS",
    category: "ML for Security",
    tags: ["Network Security", "Intrusion Detection", "Logistic Regression", "scikit-learn"],
    kicker: "0.968 AUC over 2,000 sessions; connection-frequency (+3.37) was the strongest intrusion signal.",
    summary:
      "A Logistic Regression NIDS that classifies network sessions as normal or suspicious from traffic metadata — targeting DDoS, port-scan, and exfiltration patterns.",
    metrics: [
      { value: "94.7%", label: "Accuracy" },
      { value: "0.968", label: "AUC" },
      { value: "2,000", label: "Sessions modelled" },
    ],
    details: [
      "Built a Logistic Regression classifier (StandardScaler-normalised) over 2,000 synthetic sessions — 84.2% normal / 15.8% suspicious — evaluated on 600 held-out samples.",
      "Features: <code>packet_count</code>, <code>duration_seconds</code>, <code>byte_transferred</code>, <code>connection_frequency</code> → <code>is_suspicious</code>; modelled DDoS, port-scan, and data-exfiltration behaviours.",
      "Results: 94.7% accuracy, 86.9% precision, 77.7% recall, 0.968 AUC (confusion matrix TN 495 / FP 11 / FN 21 / TP 73).",
      "Coefficient analysis ranked the risk drivers: connection frequency (+3.37) ≫ packet count (+1.46) ≫ duration (+0.22) — rapid, repeated connections were the strongest intrusion signal.",
    ],
    tools: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    reports: [{ label: "NIDS Report", href: "assets/reports/05-network-intrusion.pdf" }],
    github: "",
    videoEmbed: "",
  },
  {
    id: "regression-severity",
    title: "Incident Severity Prediction",
    subtitle: "Multiple Linear Regression",
    category: "ML for Security",
    tags: ["Machine Learning", "Regression", "Risk Modeling"],
    kicker: "OLS model recovered the ground truth almost exactly: Severity ≈ 1.95·Duration + 11.57·Vulnerability.",
    summary:
      "A multiple linear regression that predicts breach severity from attack duration and system vulnerability — turning early indicators into a quantified impact score.",
    metrics: [
      { value: "High R²", label: "Fit quality" },
      { value: "N = 100", label: "OLS model" },
      { value: "2 drivers", label: "Duration + vuln" },
    ],
    details: [
      "Trained an Ordinary Least Squares multiple linear regression on 100 synthetic breach records (80 train / 20 test) to estimate a severity score.",
      "Learned equation: <code>Severity ≈ 1.95·Duration + 11.57·Vulnerability − 0.39</code> — closely recovering the generative ground truth (<code>2·Duration + 10·Vulnerability</code>), with vulnerability the dominant driver.",
      "Evaluated with MSE / RMSE / R²; predicted-vs-actual points clustered tightly around the ideal y = x line, with low bias and no significant outliers.",
      "Full Python source (scikit-learn) with EDA correlation plots.",
    ],
    tools: ["Python", "scikit-learn", "pandas", "NumPy", "matplotlib"],
    reports: [{ label: "Regression Report", href: "assets/reports/06-regression-severity.pdf" }],
    github: "",
    videoEmbed: "",
  },
  {
    id: "honeypot",
    title: "Azure Cloud Honeypot",
    subtitle: "Attack Capture & GeoIP Analysis",
    category: "SOC Operations",
    tags: ["Cloud Security", "Threat Intelligence", "Azure Sentinel", "GeoIP"],
    featured: true,
    kicker: "Mapped thousands of real internet attacks against an exposed VM — ~2,610 failed logons from a single Slovenian host.",
    artifact: {
      label: "AttackerLocation workbook · failed-logon GeoIP rollup",
      lines: [
        "SecurityEvent | where EventID == 4625",
        "| evaluate ipv4_lookup(GeoIPDB, IpAddress, network)",
        "| summarize Fails=count() by cityname, countryname",
        "",
        "  Koper · Slovenia ........ 2,610",
        "  Zagreb · Croatia ........... 708",
        "  United States .............. 4",
      ],
    },
    summary:
      "An exposed Azure Windows honeypot piped into Sentinel — capturing thousands of real failed-logon attempts and mapping attacker origins with GeoIP enrichment.",
    metrics: [
      { value: "~2,610", label: "Attacks from Koper, SI" },
      { value: "708", label: "From Zagreb, HR" },
      { value: "4625", label: "Failed-logon events" },
    ],
    details: [
      "Deployed a deliberately exposed Windows 10 VM (<code>CORP-NET-EAST-1</code>, Standard D2s v3, public IP 40.76.251.214) in Azure East US 2, with a permissive NSG and the host firewall disabled to attract traffic.",
      "Wired the telemetry pipeline: Azure Monitor Agent → Log Analytics workspace → Microsoft Sentinel, capturing every failed sign-in as EventID 4625.",
      "Analysed thousands of real failed logons with KQL, enriching each source IP against a GeoIP watchlist (<code>ipv4_lookup</code>) to attach city / country / coordinates.",
      "Built a heatmap map workbook of attacker origins: Koper, Slovenia led with ~2,610 attempts, Zagreb, Croatia 708, and the United States 4 — concentrated pressure from a handful of European hosts.",
    ],
    tools: ["Microsoft Azure", "Sentinel", "Log Analytics", "Azure Monitor Agent", "KQL", "GeoIP Watchlist"],
    reports: [{ label: "Honeypot Report", href: "assets/reports/07-honeypot.pdf" }],
    github: "https://github.com/naksMann/honeypot-threat-analysis",
    videoEmbed: "", // TODO: paste YouTube/Vimeo EMBED url (e.g. https://www.youtube.com/embed/XXXX)
  },
  {
    id: "insider-threat",
    title: "SOC Insider Threat Detection",
    subtitle: "Wazuh + Isolation Forest",
    category: "Detection Engineering",
    tags: ["Insider Threat", "Machine Learning", "Wazuh", "Isolation Forest"],
    kicker: "Isolation Forest over Wazuh FIM logs flags exfiltration-style file anomalies that signature rules miss.",
    summary:
      "A Docker-based SOC that pairs Wazuh file-integrity monitoring with an Isolation Forest model to catch anomalous file behaviour signalling data exfiltration.",
    metrics: [
      { value: "4", label: "Wazuh agents" },
      { value: "Isolation Forest", label: "Anomaly model" },
      { value: "FIM /data", label: "Syscheck monitoring" },
    ],
    details: [
      "Stood up a multi-container SOC in Docker with four Wazuh agents (three simulated users + a <code>wazuh-server</code> manager) generating and centralising file activity.",
      "Enabled File Integrity Monitoring (Syscheck) on sensitive paths such as <code>/data</code>, shipping create / modify / delete events to the Wazuh manager.",
      "Simulated an insider aggregating unusually large files (an exfiltration proxy), then applied an Isolation Forest model to behavioural features from the Wazuh logs — flagging anomalies rather than known signatures.",
      "Surfaced the anomalies in Wazuh dashboards for fast analyst triage — detection that stays quiet under rule-based tooling because no signature matches.",
    ],
    tools: ["Wazuh", "Docker", "Isolation Forest", "Syscheck FIM", "Python", "scikit-learn"],
    reports: [{ label: "Insider Threat Report", href: "assets/reports/08-insider-threat.pdf" }],
    github: "https://github.com/naksMann/soc-insider-threat-detection",
    videoEmbed: "", // TODO: paste YouTube/Vimeo EMBED url
  },
  {
    id: "facial-recognition",
    title: "Facial Recognition Door Lock",
    subtitle: "Final-Year Engineering Project (PJD 376)",
    category: "Embedded Security",
    tags: ["Embedded Systems", "IoT", "Biometric Security", "ESP32", "Flask"],
    kicker: "Tuned to 0.5 tolerance: ~95% genuine acceptance, 0% impostor pass — driving an ESP32 solenoid lock.",
    summary:
      "A final-year biometric door lock: browser face capture → Flask embedding match → ESP32-driven solenoid lock, with Firebase auth and full access logging.",
    metrics: [
      { value: "~95%", label: "Recognition @ 0.5 tol." },
      { value: "300–850 ms", label: "End-to-end latency" },
      { value: "128-dim", label: "Face embeddings" },
    ],
    details: [
      "Distributed design: a browser webcam + face-api.js crops the face, a Python Flask backend generates a 128-dim embedding with the <code>face_recognition</code> library, and Firebase stores embeddings + logs every attempt with a timestamp.",
      "On a match, Flask sends an HTTP command over Wi-Fi to an ESP32 that energises a relay to open a solenoid lock and lights a green LED (red on failure), with an I2C LCD and buzzer for status.",
      "Tuned the matching tolerance empirically: 0.5 Euclidean distance gave the best balance — ~95% genuine acceptance (19/20) while rejecting 100% of unregistered faces (the default 0.6 let 10% of impostors through).",
      "Measured end-to-end latency at ~300–850 ms on local Wi-Fi; housed in a custom-fabricated PVC hardware enclosure.",
    ],
    tools: ["face-api.js", "Python Flask", "face_recognition", "Firebase", "ESP32", "JavaScript"],
    reports: [{ label: "Technical Documentation", href: "assets/reports/09-facial-recognition.pdf" }],
    github: "https://github.com/naksMann/facial-recognition-access-control",
    videoEmbed: "", // TODO: paste YouTube/Vimeo EMBED url
  },
  {
    id: "mwr-pentest",
    title: "MWR CyberSec Pen-Test Capstone",
    subtitle: "Black-Box Web Application Assessment",
    category: "Penetration Testing",
    tags: ["Penetration Testing", "Web App Security", "OWASP Top 10", "CVSS", "Burp Suite"],
    featured: true,
    kicker: "Chained an unrestricted file upload to Remote Code Execution (CVSS 8.8) and cracked the JWT signing secret in under a second.",
    artifact: {
      label: "Finding F-01 · unrestricted upload → RCE",
      lines: [
        "POST /api/cv/upload   (multipart, .py payload)",
        "  └─ path traversal → /app served as code",
        "$ curl http://interns.mwrcybersec.loc/u/x.py",
        "  [+] reverse shell established — flag captured",
        "",
        "CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:U/C:H/I:H/A:H  → 8.8 High",
      ],
    },
    summary:
      "A full black-box web-app pentest of the MWR applicant portal — 12 findings mapped to OWASP 2021 with CVSS v3.1, and 5 flags captured from SQLi to file-upload RCE.",
    metrics: [
      { value: "12", label: "Findings (8 High)" },
      { value: "5", label: "Flags captured" },
      { value: "CVSS 8.8", label: "File-upload RCE" },
    ],
    details: [
      "Black-box assessment of the MWR CyberSec Applicant Portal following PTES and OWASP Top 10 (2021) / ASVS — 12 findings (8 High, 2 Medium, 1 Low, 1 Info), each with a CWE and CVSS v3.1 score.",
      "Captured 5 flags: unrestricted file upload chained with path traversal → Remote Code Execution and a reverse shell (CVSS 8.8); SQL injection in the login email parameter; broken access control via a forged admin JWT; stored XSS; and a business-logic information-disclosure flaw.",
      "Cracked the weak HS256 JWT signing secret in under a second (John the Ripper) to forge arbitrary admin tokens and export the applicant database; also documented IDOR, sensitive-data exposure, cleartext transport, and missing security headers.",
      "Tooling: Burp Suite + FoxyProxy (intercept / replay), CyberChef (JWT decoding), John the Ripper (secret cracking), Python3 / PyJWT (token forgery). Top remediation priorities: JWT signing key, upload validation, admin authorisation.",
    ],
    tools: ["Burp Suite", "John the Ripper", "CyberChef", "PyJWT", "Python"],
    reports: [{ label: "Full Pen-Test Report (55 pp)", href: "assets/reports/10-mwr-pentest.pdf" }],
    github: "",
    videoEmbed: "",
  },
];
