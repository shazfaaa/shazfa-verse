const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const RUNA_MASTER_PDF = {
  fileName: 'Business Analyst_RUNA.pdf',
  downloadName: 'Business_Analyst_RUNA_Shazfa.pdf',
  url: withBase('documents/business-analyst-runa.pdf'),
  pageCount: 17,
  sizeLabel: '403 KB',
};

const RUNA_DATA_BY_LANG = {
  en: {
    itBaCaseStudy: {
      id: 'runa-case',
      code: 'CASE STUDY #01',
      title: 'RUNA — Resident Unified Network Application',
      subtitle: 'Web-Based Housing Community Management Information System',
      client: 'Perumahan Tiara Residence',
      year: '2026',
      coverImage: withBase('images/runa-cover.png'),
      summary:
        'A complete IT Business Analyst portfolio consolidated into one 17-page document covering Case Study, BRD (8 BRs), SRS (20 FRs & 5 Business Rules), To-Be Business Process, Product Backlog & 3-Sprint Plan, and UAT Report (94.5% acceptance from 756/800).',
    },
    projectMeta: {
      targetObject: 'Perumahan Tiara Residence',
      projectType: 'Self-Initiated ITBA Portfolio',
      year: '2026',
      methodology: 'Agile Scrum',
    },
    chapters: [
      {
        id: 'case-study',
        number: '01',
        shortTitle: 'Case Study',
        title: 'RUNA Case Study',
        pages: 'pp. 2–6',
        summary:
          'Project summary, 5 core business problems, objectives, ITBA roles, Admin & Resident requirements, 3-Sprint Scrum plan, UAT validation, and key learnings.',
      },
      {
        id: 'brd',
        number: '02',
        shortTitle: 'BRD',
        title: 'Business Requirements Document (BRD)',
        pages: 'pp. 7–8',
        summary:
          'Executive summary, problem-area mapping, business goals, 3-stakeholder profile, 8 Business Requirements (BR-01–BR-08), scope boundaries, and expected benefits.',
      },
      {
        id: 'srs',
        number: '03',
        shortTitle: 'SRS',
        title: 'Software Requirements Specification (SRS)',
        pages: 'pp. 9–10',
        summary:
          'Core Admin & Resident access controls, 20 Functional Requirements (FR-01–FR-20), 5 Business Rules (RB-01–RB-05), NFRs, 12 data entities, and traceability matrix.',
      },
      {
        id: 'business-process',
        number: '04',
        shortTitle: 'Business Process',
        title: 'Business Process Document',
        pages: 'pp. 11–13',
        summary:
          'As-Is vs To-Be comparison across 4 areas, To-Be Dues Payment flow (P-01–P-06) & Activity Diagram, To-Be Resident Complaint flow (C-01–C-06), and process controls.',
      },
      {
        id: 'product-backlog',
        number: '05',
        shortTitle: 'Backlog & Sprint',
        title: 'Product Backlog & Sprint Plan',
        pages: 'pp. 14–15',
        summary:
          '15 Product Backlog items (PB-01–PB-15) across 3 Scrum Sprints, planned vs actual timeline tracking, and deliverables per sprint.',
      },
      {
        id: 'uat-report',
        number: '06',
        shortTitle: 'UAT Report',
        title: 'User Acceptance Testing (UAT) Report',
        pages: 'pp. 16–17',
        summary:
          'User acceptance evaluation with 10 respondents and 16 Likert-scale statements (Q01–Q16), response breakdown (756/800 = 94.5%), and follow-up recommendations.',
      },
    ],
    caseStudyData: {
      problems: [
        { title: '1. Data Management', desc: 'Need for more structured and centralized resident record management.' },
        { title: '2. Payment Monitoring', desc: 'Need for systematic dues recording and payment status tracking.' },
        { title: '3. Financial Transparency', desc: 'Need for easily accessible cash inflow and outflow reports.' },
        { title: '4. Information Distribution', desc: 'Important announcements shared on WhatsApp risk getting buried and hard to retrieve.' },
        { title: '5. Complaint Management', desc: 'Need for a complaint channel enabling residents to submit issues and track follow-up status.' },
      ],
      objectives: [
        'Integrate residential community administration activities into one unified information system.',
        'Simplify management of resident data, monthly billing, and dues verification.',
        'Support financial transparency through structured monthly cash reports.',
        'Provide a structured, searchable channel for official announcements and communication.',
        'Streamline submission, handling, and status tracking of resident complaints.',
      ],
      responsibilities: [
        { title: 'Stakeholder Requirement Gathering', desc: 'Collected system requirements via interviews with the Complex Coordinator and literature review.' },
        { title: 'Requirements Analysis', desc: 'Identified user needs and translated them into user stories and functional requirements.' },
        { title: 'Business Process Modeling', desc: 'Modeled login, dues payment, and complaint workflows using Activity Diagrams.' },
        { title: 'System Design', desc: 'Designed Use Case Diagrams, Sequence Diagrams, Class Diagrams, and Entity Relationship Diagrams (ERD).' },
        { title: 'Backlog Management', desc: 'Compiled the Product Backlog, prioritized items, and planned delivery across three Scrum Sprints.' },
        { title: 'User Acceptance Testing', desc: 'Conducted UAT evaluation to validate how well application features satisfy user expectations.' },
      ],
      adminCapabilities: [
        'Manage resident records and security/coordinator profiles.',
        'Generate dues bills and verify transfer payment receipts.',
        'Record cash payments and cash-ledger transactions.',
        'Publish official announcements and follow up on resident complaints.',
      ],
      wargaCapabilities: [
        'View active dues bills and payment verification status.',
        'Upload bank transfer proof for verification.',
        'Access monthly cash reports and official announcements.',
        'Submit complaints and monitor handling status history.',
        'View coordinator and security guard contact details.',
      ],
      outcomes: [
        'Successfully developed a web application integrating residential administrative workflows.',
        'Formulated system requirements grounded in stakeholder interviews and user analysis.',
        'Produced complete UML and ERD system design documentation.',
        'Executed iterative delivery across three structured Scrum Sprints.',
        'Passed all documented functional Black-Box Testing scenarios.',
        'Achieved 94.5% user acceptance score in UAT evaluation (756 out of 800).',
        'Deployed the live web application to public web hosting.',
      ],
      keyLearning:
        'Through RUNA, I gained hands-on experience bridging real stakeholder needs with system design and technical implementation—sharpening problem-solving, analytical thinking, requirement management, and sprint planning as a strong foundation for IT Business Analysis.',
    },
    brdData: {
      executiveSummary:
        'RUNA is designed to support administration at Perumahan Tiara Residence through one unified web application. Initial requirements were gathered via interviews with the Complex Coordinator, covering resident data, dues/payments, cash ledger management, monthly reporting, announcements, complaints, and coordinator/security contact directories.',
      problemMatrix: [
        { area: 'Scattered / manual administrative records', need: 'Structured and centralized resident database' },
        { area: 'Dues and cash ledger disconnected', need: 'Connected billing, verification, cash ledger, and reporting' },
        { area: 'Announcements buried in chat threads', need: 'Searchable and persistent official notices' },
        { area: 'Complaint handling lacks tracking', need: 'Logged complaints with visible resolution statuses' },
      ],
      stakeholders: [
        { name: 'Complex Coordinator', interest: 'Primary interviewee; defines community administrative workflow needs.' },
        { name: 'Admin / Management', interest: 'Manages records, dues, transfer verification, cash ledger, notices, and complaints.' },
        { name: 'Residents (Warga)', interest: 'Views bills, uploads payment proofs, reads notices, submits/tracks complaints.' },
      ],
      businessRequirements: [
        { id: 'BR-01', area: 'Resident Data', desc: 'Management requires structured and centralized resident record administration.' },
        { id: 'BR-02', area: 'Dues & Billing', desc: 'Management requires bill generation, transfer receipt verification, and cash payment logging.' },
        { id: 'BR-03', area: 'Cash Ledger', desc: 'Management requires income/expense tracking synced with verified dues payments.' },
        { id: 'BR-04', area: 'Reporting', desc: 'Management and residents require transparent access to monthly cash reports.' },
        { id: 'BR-05', area: 'Announcements', desc: 'Residents require official announcements that remain easy to find and re-read.' },
        { id: 'BR-06', area: 'Complaints', desc: 'Residents require a complaint channel with clear follow-up status updates.' },
        { id: 'BR-07', area: 'Staff Contacts', desc: 'Residents require quick access to coordinator and security guard contact details.' },
        { id: 'BR-08', area: 'Access Control', desc: 'Admins and Residents require distinct role-based system permissions.' },
      ],
      scope: {
        inScope: 'Two roles (Admin, Resident); resident records; dues & billing; receipt upload & verification; cash payment recording; cash ledger & monthly reports; announcements; complaints; staff directory.',
        outOfScope: 'Automated payment gateway checkout and direct bank API integration.',
      },
    },
    srsData: {
      actors: [
        { actor: 'Admin', access: 'Login; manage residents/staff, dues, payments, cash ledger, announcements, and complaints.' },
        { actor: 'Resident', access: 'Login; view bills; upload payment proofs; view reports/announcements/contacts; submit and track complaints.' },
      ],
      functionalRequirements: [
        { id: 'FR-01', actor: 'Admin/Resident', desc: 'Authenticate (login/logout) and redirect according to user role.', br: 'BR-08' },
        { id: 'FR-02', actor: 'Admin/Resident', desc: 'Display a role-tailored summary dashboard.', br: 'BR-08' },
        { id: 'FR-03', actor: 'Admin', desc: 'Manage resident records (view, add, update, deactivate, or delete).', br: 'BR-01' },
        { id: 'FR-04', actor: 'Admin', desc: 'Create and manage recurring or one-off dues definitions.', br: 'BR-02' },
        { id: 'FR-05', actor: 'System', desc: 'Automatically generate bills for active households when dues are published.', br: 'BR-02' },
        { id: 'FR-06', actor: 'Resident', desc: 'View personal bills and current payment statuses.', br: 'BR-02' },
        { id: 'FR-07', actor: 'Resident', desc: 'Upload bank transfer proof for verification.', br: 'BR-02' },
        { id: 'FR-08', actor: 'Admin', desc: 'Approve or reject transfer proofs; allow re-upload when rejected.', br: 'BR-02' },
        { id: 'FR-09', actor: 'Admin', desc: 'Record direct cash dues payments.', br: 'BR-02' },
        { id: 'FR-10', actor: 'System', desc: 'Automatically record cash inflow once a dues payment is approved.', br: 'BR-03' },
        { id: 'FR-11', actor: 'Admin', desc: 'Record additional cash inflows and operational expenses.', br: 'BR-03' },
        { id: 'FR-12', actor: 'Admin/Resident', desc: 'View monthly cash reports and itemized transaction details.', br: 'BR-04' },
        { id: 'FR-13', actor: 'Admin', desc: 'Create, update, and publish official announcements.', br: 'BR-05' },
        { id: 'FR-14', actor: 'Resident', desc: 'Browse announcement lists and read full details.', br: 'BR-05' },
        { id: 'FR-15', actor: 'Resident', desc: 'Submit complaints with optional supporting photos.', br: 'BR-06' },
        { id: 'FR-16', actor: 'Admin', desc: 'Update complaint resolution status and management response.', br: 'BR-06' },
        { id: 'FR-17', actor: 'Resident', desc: 'Track complaint status and chronological resolution log.', br: 'BR-06' },
        { id: 'FR-18', actor: 'Admin', desc: 'Manage coordinator and security guard profiles.', br: 'BR-07' },
        { id: 'FR-19', actor: 'Resident', desc: 'View coordinator and security staff names, roles, and contacts.', br: 'BR-07' },
        { id: 'FR-20', actor: 'Admin/Resident', desc: 'Manage personal account profile based on role permissions.', br: 'BR-08' },
      ],
      businessRules: [
        { id: 'RB-01', rule: 'Valid credentials route users to their respective role dashboard; invalid credentials are rejected.' },
        { id: 'RB-02', rule: 'Uploading a valid transfer receipt transitions payment status to Pending Verification.' },
        { id: 'RB-03', rule: 'Admin approval marks the bill Paid and automatically logs a cash inflow transaction.' },
        { id: 'RB-04', rule: 'Admin rejection sets status to Rejected, allowing residents to re-upload corrected proof.' },
        { id: 'RB-05', rule: 'New complaints start as New; Admins can transition to In Progress, Resolved, or Rejected with full audit history.' },
      ],
      technicalEnv: 'PHP 8.2, Laravel 12, MySQL, XAMPP, Git, and Figma',
      dataEntities: ['Kompleks', 'User', 'Resident', 'Staff', 'Due', 'Bill', 'Payment', 'Transaction', 'Announcement', 'Notification', 'Complaint', 'ComplaintStatusLog'],
      traceability: [
        { map: 'BR-02 → FR-07/08', criteria: 'Receipt uploaded → Pending Verification; Approved → Paid; Rejected → Re-upload enabled.' },
        { map: 'BR-03 → FR-10/11', criteria: 'Approved dues payments credit cash ledger; manual expense entries logged.' },
        { map: 'BR-06 → FR-15/16/17', criteria: 'Valid complaint saved as New; Admin updates status; resident inspects audit history.' },
        { map: 'BR-08 → FR-01', criteria: 'Valid authentication routes strictly to Admin or Resident dashboard.' },
      ],
    },
    businessProcessData: {
      asIsToBe: [
        { area: 'Dues & Billing', asIs: 'Recording and payment monitoring are fragmented.', toBe: 'Digital bills, proof upload, Admin verification, and synced cash ledger.' },
        { area: 'Announcements', asIs: 'Notices in WhatsApp groups easily get buried.', toBe: 'Archived official announcements accessible anytime.' },
        { area: 'Complaints', asIs: 'No centralized tracking or status log for issues.', toBe: 'Structured complaints with status, responses, and change log.' },
        { area: 'Financials', asIs: 'Cash balance visibility lacks transparency.', toBe: 'Real-time transaction records and monthly cash statements.' },
      ],
      paymentFlow: {
        actors: 'Admin, Resident, RUNA System',
        steps: [
          { step: 'P-01', actor: 'Admin/System', activity: 'Admin defines dues; system generates monthly bills for active homes.' },
          { step: 'P-02', actor: 'Resident', activity: 'Selects an unpaid bill and uploads bank transfer proof.' },
          { step: 'P-03', actor: 'System', activity: 'Validates file input and sets status to Pending Verification.' },
          { step: 'P-04', actor: 'Admin', activity: 'Reviews transfer receipt; chooses Approve or Reject.' },
          { step: 'P-05A', actor: 'System', activity: 'If approved: marks bill Paid and records cash inflow.' },
          { step: 'P-05B', actor: 'System/Resident', activity: 'If rejected: marks Rejected; resident may re-upload receipt.' },
          { step: 'P-06', actor: 'Admin', activity: 'For cash payments, Admin records payment and cash inflow directly.' },
        ],
      },
      complaintFlow: {
        statuses: ['New', 'In Progress', 'Resolved', 'Rejected'],
        steps: [
          { step: 'C-01', actor: 'Resident', activity: 'Enters complaint title, category, description, and optional photo.' },
          { step: 'C-02', actor: 'System', activity: 'Validates input; prompts correction if fields are incomplete.' },
          { step: 'C-03', actor: 'System', activity: 'Saves complaint with status New and records initial audit log.' },
          { step: 'C-04', actor: 'Admin', activity: 'Reviews complaint; updates resolution status and adds notes.' },
          { step: 'C-05', actor: 'System', activity: 'Persists status update and timestamped audit entry.' },
          { step: 'C-06', actor: 'Resident', activity: 'Views current status, audit trail, and Admin response.' },
        ],
      },
      controlsAndOpenIssues:
        'Documented controls include mandatory Admin payment verification, strict Admin/Resident role boundaries, and immutable complaint status logs. Future iterations can standardize cash reconciliation SOPs, payment correction flows, receipt guidelines, and complaint SLA targets.',
    },
    backlogData: {
      sprints: [
        {
          name: 'Sprint 1: Analysis & Design',
          timelinePlan: 'April 2026',
          timelineActual: 'April 2026',
          deliverable: 'System requirements; 3NF ERD & tables; UML diagrams; UI wireframes.',
          items: [
            { id: 'PB-01', title: 'System Requirements Analysis', desc: 'Identified Admin and Resident needs from stakeholder interviews and user stories.', priority: 'High' },
            { id: 'PB-02', title: 'Database Design', desc: 'Modeled ERD, relational foreign keys, and 3NF MySQL schema for RUNA.', priority: 'High' },
            { id: 'PB-03', title: 'UML System Modeling', desc: 'Authored Use Case, Activity, Sequence, and Class Diagrams.', priority: 'High' },
            { id: 'PB-04', title: 'UI Interface Design', desc: 'Created high-fidelity Admin and Resident screen designs in Figma.', priority: 'Medium' },
            { id: 'PB-05', title: 'Application Setup', desc: 'Bootstrapped Laravel 12 project and configured MySQL database connection.', priority: 'High' },
          ],
        },
        {
          name: 'Sprint 2: Core Feature Development',
          timelinePlan: 'May 2026',
          timelineActual: 'May 2026',
          deliverable: 'Authentication, dashboards, resident CRUD, dues, cash ledger, announcements.',
          items: [
            { id: 'PB-06', title: 'User Authentication', desc: 'Built role-based login and logout flows for Admin and Resident.', priority: 'High' },
            { id: 'PB-07', title: 'Role Dashboards', desc: 'Implemented tailored summary dashboards for Admin and Resident.', priority: 'High' },
            { id: 'PB-08', title: 'Resident Data Management', desc: 'Built CRUD functionality to view, add, edit, and deactivate resident records.', priority: 'High' },
            { id: 'PB-09', title: 'Dues & Payment Verification', desc: 'Implemented billing, receipt upload, cash logging, and verification workflow.', priority: 'High' },
            { id: 'PB-10', title: 'Cash Ledger Management', desc: 'Built income and operational expense recording module.', priority: 'High' },
            { id: 'PB-11', title: 'Announcements', desc: 'Created announcement publishing and resident reading views.', priority: 'Medium' },
          ],
        },
        {
          name: 'Sprint 3: Completion & Testing',
          timelinePlan: 'June 2026',
          timelineActual: 'June–July 2026',
          deliverable: 'Monthly reports, complaints, staff contacts, refinements, Black-Box Testing.',
          items: [
            { id: 'PB-12', title: 'Monthly Cash Reports', desc: 'Displayed monthly inflows, outflows, and itemized ledger breakdowns.', priority: 'High' },
            { id: 'PB-13', title: 'Resident Complaints', desc: 'Implemented complaint submission, photo uploads, and status history.', priority: 'High' },
            { id: 'PB-14', title: 'Coordinator & Security Directory', desc: 'Displayed complex coordinator and security guard contact details.', priority: 'Medium' },
            { id: 'PB-15', title: 'System Testing', desc: 'Executed 25 Black-Box functional test scenarios across all RUNA modules.', priority: 'High' },
          ],
        },
      ],
    },
    uatData: {
      objective:
        'RUNA UAT evaluates user acceptance across UI/navigation clarity, authentication, ease of feature use, responsiveness, and overall satisfaction on a 1–5 Likert scale with 10 respondents and 16 assessment statements (8 Admin, 8 Resident).',
      indicators: [
        { label: 'Respondents', value: '10 users' },
        { label: 'Instrument', value: '16 statements (8 Admin, 8 Resident)' },
        { label: 'Score Scale', value: '1–5 (SD to SA)' },
        { label: 'Total Score', value: '756 / 800' },
        { label: 'Acceptance Rate', value: '94.5%' },
      ],
      adminItems: [
        { id: 'Q01', statement: 'The Admin interface and navigation layout are clear and easy to understand.', score: 47, pct: '94%' },
        { id: 'Q02', statement: 'Admin login works smoothly and redirects directly to the authorized dashboard.', score: 47, pct: '94%' },
        { id: 'Q03', statement: 'Resident management features make viewing, adding, editing, and deactivating records straightforward.', score: 46, pct: '92%' },
        { id: 'Q04', statement: 'Dues and payment modules simplify bill creation and receipt verification for Admins.', score: 47, pct: '94%' },
        { id: 'Q05', statement: 'Cash management makes recording income and expenses efficient and accurate.', score: 47, pct: '94%' },
        { id: 'Q06', statement: 'Announcement and complaint features streamline publishing updates and tracking resident issues.', score: 47, pct: '94%' },
        { id: 'Q07', statement: 'RUNA responds reliably and its features match community administrative needs.', score: 47, pct: '94%' },
        { id: 'Q08', statement: 'Overall, I am satisfied using RUNA as an Administrator.', score: 47, pct: '94%' },
      ],
      wargaItems: [
        { id: 'Q09', statement: 'The Resident interface and navigation layout are clear and easy to understand.', score: 47, pct: '94%' },
        { id: 'Q10', statement: 'Resident login works smoothly and shows pages appropriate to my role.', score: 48, pct: '96%' },
        { id: 'Q11', statement: 'Billing and payment features make viewing bills, uploading proofs, and checking status easy.', score: 46, pct: '92%' },
        { id: 'Q12', statement: 'Monthly cash reports clearly communicate community inflows and expenses.', score: 48, pct: '96%' },
        { id: 'Q13', statement: 'Announcements help me stay updated on official notices from management.', score: 48, pct: '96%' },
        { id: 'Q14', statement: 'The complaint module makes submitting reports and tracking resolution easy.', score: 47, pct: '94%' },
        { id: 'Q15', statement: 'Coordinator and security contacts are easy to access, and RUNA responds smoothly.', score: 49, pct: '98%' },
        { id: 'Q16', statement: 'Overall, I am satisfied using RUNA as a Resident.', score: 48, pct: '96%' },
      ],
      distribution: [
        { label: 'Strongly Agree (5)', count: 125 },
        { label: 'Agree (4)', count: 27 },
        { label: 'Neutral (3)', count: 7 },
        { label: 'Disagree (2)', count: 1 },
        { label: 'Strongly Disagree (1)', count: 0 },
      ],
      summaryNote:
        'Verification: 125×5 + 27×4 + 7×3 + 1×2 + 0×1 = 756 across 160 responses. Highest item score: Q15 (98%); lowest item scores: Q03 & Q11 (92% each).',
      evaluationResult:
        'User Acceptance Testing (UAT) achieved a 94.5% acceptance score, confirming that RUNA is well-received and ready for community use.',
      limitation:
        'The evaluation has not yet benchmarked before-and-after operational time efficiency metrics.',
      recommendation:
        'Conduct periodic post-deployment usability check-ins to monitor feature adoption and administrative effectiveness.',
    },
  },
  id: {
    itBaCaseStudy: {
      id: 'runa-case',
      code: 'CASE STUDY #01',
      title: 'RUNA — Resident Unified Network Application',
      subtitle: 'Sistem Informasi Manajemen Warga Berbasis Web',
      client: 'Perumahan Tiara Residence',
      year: '2026',
      coverImage: withBase('images/runa-cover.png'),
      summary:
        'Portofolio lengkap IT Business Analyst dalam 1 dokumen terpadu (17 halaman) yang mencakup Case Study, BRD (8 BR), SRS (20 FR & 5 Business Rules), Business Process To-Be, Product Backlog & 3 Sprint Plan, hingga UAT Report (skor 94,5% dari 756/800).',
    },
    projectMeta: {
      targetObject: 'Perumahan Tiara Residence',
      projectType: 'Portofolio ITBA Mandiri',
      year: '2026',
      methodology: 'Agile Scrum',
    },
    chapters: [
      {
        id: 'case-study',
        number: '01',
        shortTitle: 'Case Study',
        title: 'Case Study RUNA',
        pages: 'Hal. 2–6',
        summary:
          'Ringkasan proyek, 5 masalah bisnis, tujuan, peran ITBA, kebutuhan Admin & Warga, perencanaan 3 Sprint Scrum, validasi UAT, dan pembelajaran.',
      },
      {
        id: 'brd',
        number: '02',
        shortTitle: 'BRD',
        title: 'Business Requirements Document (BRD)',
        pages: 'Hal. 7–8',
        summary:
          'Ringkasan eksekutif, pemetaan area masalah, tujuan bisnis, profil 3 stakeholder, 8 Business Requirements (BR-01–BR-08), batasan ruang lingkup, serta manfaat.',
      },
      {
        id: 'srs',
        number: '03',
        shortTitle: 'SRS',
        title: 'Software Requirements Specification (SRS)',
        pages: 'Hal. 9–10',
        summary:
          'Hak akses inti Admin & Warga, 20 Functional Requirements (FR-01–FR-20), 5 Business Rules (RB-01–RB-05), NFR, 12 entitas data, dan matriks traceability.',
      },
      {
        id: 'business-process',
        number: '04',
        shortTitle: 'Business Process',
        title: 'Business Process Document',
        pages: 'Hal. 11–13',
        summary:
          'Perbandingan kondisi awal vs To-Be (4 area), alur To-Be Pembayaran Iuran (P-01–P-06) & Activity Diagram, To-Be Pengaduan Warga (C-01–C-06), serta kontrol proses.',
      },
      {
        id: 'product-backlog',
        number: '05',
        shortTitle: 'Backlog & Sprint',
        title: 'Product Backlog & Sprint Plan',
        pages: 'Hal. 14–15',
        summary:
          '15 item Product Backlog (PB-01–PB-15) terbagi ke dalam 3 Sprint Scrum, perbandingan rencana vs realisasi jadwal, dan ringkasan deliverables tiap sprint.',
      },
      {
        id: 'uat-report',
        number: '06',
        shortTitle: 'UAT Report',
        title: 'User Acceptance Testing (UAT) Report',
        pages: 'Hal. 16–17',
        summary:
          'Evaluasi penerimaan pengguna dengan 10 responden dan 16 pernyataan skala Likert (Q01–Q16), distribusi jawaban (756/800 = 94,5%), dan tindak lanjut.',
      },
    ],
    caseStudyData: {
      problems: [
        { title: '1. Pengelolaan Data', desc: 'Kebutuhan pengelolaan data warga yang lebih terstruktur dan terpusat.' },
        { title: '2. Pemantauan Pembayaran', desc: 'Kebutuhan pencatatan pembayaran iuran dan pemantauan status pembayaran secara sistematis.' },
        { title: '3. Transparansi Keuangan', desc: 'Kebutuhan laporan pemasukan dan pengeluaran kas yang mudah diakses.' },
        { title: '4. Distribusi Informasi', desc: 'Informasi penting yang disampaikan melalui WhatsApp berpotensi tertimbun dan sulit ditemukan kembali.' },
        { title: '5. Manajemen Pengaduan', desc: 'Kebutuhan sarana pengaduan yang memungkinkan warga menyampaikan masalah dan memantau tindak lanjutnya.' },
      ],
      objectives: [
        'Mengintegrasikan berbagai aktivitas administrasi perumahan dalam satu sistem informasi.',
        'Mempermudah pengelolaan data warga, tagihan, dan pembayaran iuran.',
        'Mendukung transparansi pengelolaan keuangan melalui laporan kas bulanan.',
        'Menyediakan sarana komunikasi dan penyampaian informasi yang lebih terstruktur.',
        'Mempermudah proses pencatatan, pengelolaan, dan pemantauan pengaduan warga.',
      ],
      responsibilities: [
        { title: 'Stakeholder Requirement Gathering', desc: 'Mengumpulkan informasi kebutuhan sistem melalui wawancara dengan Koordinator Kompleks dan studi pustaka.' },
        { title: 'Requirements Analysis', desc: 'Mengidentifikasi kebutuhan pengguna dan menyusunnya menjadi user stories serta functional requirements.' },
        { title: 'Business Process Modeling', desc: 'Memodelkan alur login, pembayaran iuran, dan pengaduan menggunakan Activity Diagram.' },
        { title: 'System Design', desc: 'Merancang Use Case Diagram, Sequence Diagram, Class Diagram, dan Entity Relationship Diagram (ERD).' },
        { title: 'Backlog Management', desc: 'Menyusun Product Backlog, menetapkan prioritas pekerjaan, dan merencanakan pengembangan dalam tiga Sprint.' },
        { title: 'User Acceptance Testing', desc: 'Melakukan evaluasi sistem untuk mengetahui kesesuaian fungsi aplikasi dengan kebutuhan pengguna.' },
      ],
      adminCapabilities: [
        'Mengelola data warga dan informasi petugas.',
        'Membuat tagihan serta memverifikasi pembayaran iuran.',
        'Mencatat pembayaran tunai dan transaksi kas.',
        'Mengelola pengumuman serta menindaklanjuti pengaduan warga.',
      ],
      wargaCapabilities: [
        'Melihat tagihan dan status pembayaran iuran.',
        'Mengunggah bukti pembayaran.',
        'Mengakses laporan kas dan pengumuman.',
        'Mengirim pengaduan serta memantau status penanganannya.',
        'Mengakses informasi koordinator dan petugas keamanan.',
      ],
      outcomes: [
        'Berhasil mengembangkan aplikasi dengan fitur administrasi perumahan yang terintegrasi.',
        'Menyusun kebutuhan sistem berdasarkan wawancara dan analisis pengguna.',
        'Menghasilkan dokumentasi perancangan sistem berupa UML dan ERD.',
        'Melaksanakan pengembangan bertahap melalui tiga Sprint.',
        'Melakukan pengujian fungsional dengan hasil seluruh skenario yang didokumentasikan berhasil.',
        'Memperoleh tingkat penerimaan pengguna sebesar 94,5% berdasarkan UAT (756 dari 800).',
        'Melakukan deployment aplikasi ke layanan web hosting.',
      ],
      keyLearning:
        'Melalui pengembangan RUNA, saya memperoleh pengalaman langsung dalam menghubungkan kebutuhan pengguna dengan perancangan dan implementasi solusi teknologi—memperkuat kemampuan problem-solving, analytical thinking, requirement management, dan project planning sebagai fondasi karier di bidang IT Business Analysis.',
    },
    brdData: {
      executiveSummary:
        'RUNA dirancang untuk mendukung pengelolaan administrasi Perumahan Tiara Residence melalui satu aplikasi web. Kebutuhan awal diidentifikasi melalui wawancara dengan Koordinator Kompleks. Proyek meliputi data warga, iuran/pembayaran, manajemen kas, laporan bulanan, pengumuman, pengaduan, serta informasi koordinator dan petugas keamanan.',
      problemMatrix: [
        { area: 'Data administrasi tersebar/manual', need: 'Data warga terstruktur dan terpusat' },
        { area: 'Iuran dan kas belum terintegrasi', need: 'Tagihan, verifikasi, kas, dan laporan saling terhubung' },
        { area: 'Pengumuman tertimbun percakapan', need: 'Informasi dapat dicari dan dibaca kembali' },
        { area: 'Pelayanan pengaduan perlu fasilitas', need: 'Pengaduan tercatat dan statusnya dapat dipantau' },
      ],
      stakeholders: [
        { name: 'Koordinator Kompleks', interest: 'Narasumber wawancara; menyampaikan kebutuhan layanan administrasi.' },
        { name: 'Admin / Pengurus', interest: 'Mengelola data, iuran, verifikasi pembayaran, kas, pengumuman, pengaduan.' },
        { name: 'Warga', interest: 'Melihat tagihan, unggah bukti, membaca informasi, mengirim/memantau pengaduan.' },
      ],
      businessRequirements: [
        { id: 'BR-01', area: 'Data warga', desc: 'Pengurus memerlukan pengelolaan data warga yang terstruktur dan terpusat.' },
        { id: 'BR-02', area: 'Iuran', desc: 'Pengurus memerlukan pembuatan tagihan, verifikasi bukti transfer, dan pencatatan tunai.' },
        { id: 'BR-03', area: 'Kas', desc: 'Pengurus memerlukan pencatatan pemasukan/pengeluaran yang terhubung dengan iuran.' },
        { id: 'BR-04', area: 'Laporan', desc: 'Pengurus dan warga memerlukan akses laporan kas bulanan.' },
        { id: 'BR-05', area: 'Pengumuman', desc: 'Warga memerlukan informasi resmi yang mudah dibaca kembali.' },
        { id: 'BR-06', area: 'Pengaduan', desc: 'Warga memerlukan saluran pengaduan dan informasi status tindak lanjut.' },
        { id: 'BR-07', area: 'Kontak petugas', desc: 'Warga memerlukan akses informasi koordinator dan petugas keamanan.' },
        { id: 'BR-08', area: 'Hak akses', desc: 'Admin dan Warga memerlukan akses yang dibedakan sesuai perannya.' },
      ],
      scope: {
        inScope: 'Dua peran (Admin, Warga); data warga; iuran/tagihan; unggah bukti dan verifikasi; pembayaran tunai; kas dan laporan bulanan; pengumuman; pengaduan; informasi petugas.',
        outOfScope: 'Pembayaran otomatis melalui payment gateway dan integrasi langsung dengan sistem perbankan.',
      },
    },
    srsData: {
      actors: [
        { actor: 'Admin', access: 'Login; kelola warga/petugas, iuran, pembayaran, kas, pengumuman, serta pengaduan.' },
        { actor: 'Warga', access: 'Login; lihat tagihan; unggah bukti; lihat laporan/pengumuman/petugas; kirim dan pantau pengaduan.' },
      ],
      functionalRequirements: [
        { id: 'FR-01', actor: 'Admin/Warga', desc: 'Login/logout dan diarahkan sesuai role.', br: 'BR-08' },
        { id: 'FR-02', actor: 'Admin/Warga', desc: 'Dashboard menampilkan ringkasan sesuai hak akses.', br: 'BR-08' },
        { id: 'FR-03', actor: 'Admin', desc: 'Mengelola data warga (melihat, menambah, memperbarui, menonaktifkan, atau menghapus).', br: 'BR-01' },
        { id: 'FR-04', actor: 'Admin', desc: 'Membuat dan mengelola definisi iuran.', br: 'BR-02' },
        { id: 'FR-05', actor: 'Sistem', desc: 'Membuat tagihan untuk rumah aktif ketika iuran ditetapkan.', br: 'BR-02' },
        { id: 'FR-06', actor: 'Warga', desc: 'Melihat tagihan dan status pembayaran miliknya.', br: 'BR-02' },
        { id: 'FR-07', actor: 'Warga', desc: 'Mengunggah bukti transfer untuk verifikasi.', br: 'BR-02' },
        { id: 'FR-08', actor: 'Admin', desc: 'Menerima atau menolak bukti pembayaran; warga dapat mengunggah ulang bila ditolak.', br: 'BR-02' },
        { id: 'FR-09', actor: 'Admin', desc: 'Mencatat pembayaran tunai.', br: 'BR-02' },
        { id: 'FR-10', actor: 'Sistem', desc: 'Mencatat kas masuk dari pembayaran iuran yang diterima.', br: 'BR-03' },
        { id: 'FR-11', actor: 'Admin', desc: 'Mencatat pemasukan dan pengeluaran kas.', br: 'BR-03' },
        { id: 'FR-12', actor: 'Admin/Warga', desc: 'Melihat laporan kas bulanan dan rincian transaksi.', br: 'BR-04' },
        { id: 'FR-13', actor: 'Admin', desc: 'Mengelola pengumuman.', br: 'BR-05' },
        { id: 'FR-14', actor: 'Warga', desc: 'Membaca daftar dan detail pengumuman.', br: 'BR-05' },
        { id: 'FR-15', actor: 'Warga', desc: 'Mengirim pengaduan dan foto pendukung opsional.', br: 'BR-06' },
        { id: 'FR-16', actor: 'Admin', desc: 'Memperbarui status dan tanggapan pengaduan.', br: 'BR-06' },
        { id: 'FR-17', actor: 'Warga', desc: 'Melihat status dan riwayat pengaduannya.', br: 'BR-06' },
        { id: 'FR-18', actor: 'Admin', desc: 'Mengelola informasi koordinator dan petugas keamanan.', br: 'BR-07' },
        { id: 'FR-19', actor: 'Warga', desc: 'Melihat nama, jabatan, dan kontak koordinator atau petugas keamanan.', br: 'BR-07' },
        { id: 'FR-20', actor: 'Admin/Warga', desc: 'Mengelola profil akun sesuai hak akses.', br: 'BR-08' },
      ],
      businessRules: [
        { id: 'RB-01', rule: 'Login valid dialihkan ke dashboard role yang tepat; kredensial tidak valid ditolak.' },
        { id: 'RB-02', rule: 'Unggah bukti transfer yang valid menghasilkan status Menunggu Verifikasi.' },
        { id: 'RB-03', rule: 'Admin menerima pembayaran → status Lunas dan transaksi kas masuk tercatat.' },
        { id: 'RB-04', rule: 'Admin menolak bukti → status Ditolak; warga dapat mengunggah ulang.' },
        { id: 'RB-05', rule: 'Pengaduan baru berstatus Baru; Admin dapat mengubah menjadi Diproses, Selesai, atau Ditolak; riwayat disimpan.' },
      ],
      technicalEnv: 'PHP 8.2, Laravel 12, MySQL, XAMPP, Git, dan Figma',
      dataEntities: ['Kompleks', 'User', 'Resident', 'Staff', 'Due', 'Bill', 'Payment', 'Transaction', 'Announcement', 'Notification', 'Complaint', 'ComplaintStatusLog'],
      traceability: [
        { map: 'BR-02 → FR-07/08', criteria: 'Bukti diunggah → Menunggu Verifikasi; disetujui → Lunas; ditolak → dapat unggah ulang.' },
        { map: 'BR-03 → FR-10/11', criteria: 'Penerimaan pembayaran menambah kas; transaksi keluar tercatat.' },
        { map: 'BR-06 → FR-15/16/17', criteria: 'Pengaduan valid tersimpan Baru; Admin memperbarui status; warga melihat riwayat.' },
        { map: 'BR-08 → FR-01', criteria: 'Login valid menghasilkan dashboard sesuai Admin/Warga.' },
      ],
    },
    businessProcessData: {
      asIsToBe: [
        { area: 'Iuran', asIs: 'Pencatatan dan pemantauan belum terintegrasi.', toBe: 'Tagihan digital, unggah bukti, verifikasi Admin, pencatatan kas.' },
        { area: 'Pengumuman', asIs: 'Informasi grup WhatsApp dapat tertimbun.', toBe: 'Pengumuman tersimpan dan dapat dibaca kembali.' },
        { area: 'Pengaduan', asIs: 'Diperlukan kanal laporan dan pemantauan.', toBe: 'Pengaduan dengan status, tanggapan, dan riwayat.' },
        { area: 'Keuangan', asIs: 'Informasi kas perlu lebih transparan.', toBe: 'Transaksi dan laporan bulanan dapat ditampilkan.' },
      ],
      paymentFlow: {
        actors: 'Admin, Warga, Sistem RUNA',
        steps: [
          { step: 'P-01', actor: 'Admin/Sistem', activity: 'Admin membuat iuran; sistem membuat tagihan untuk rumah aktif.' },
          { step: 'P-02', actor: 'Warga', activity: 'Memilih tagihan dan mengunggah bukti transfer.' },
          { step: 'P-03', actor: 'Sistem', activity: 'Validasi input dan simpan status Menunggu Verifikasi.' },
          { step: 'P-04', actor: 'Admin', activity: 'Meninjau bukti transfer; memilih Terima atau Tolak.' },
          { step: 'P-05A', actor: 'Sistem', activity: 'Jika diterima: pembayaran/tagihan menjadi Lunas, kas masuk tercatat.' },
          { step: 'P-05B', actor: 'Sistem/Warga', activity: 'Jika ditolak: status Ditolak; warga dapat mengunggah ulang bukti.' },
          { step: 'P-06', actor: 'Admin', activity: 'Untuk pembayaran tunai, Admin mencatat pembayaran dan kas masuk.' },
        ],
      },
      complaintFlow: {
        statuses: ['Baru', 'Diproses', 'Selesai', 'Ditolak'],
        steps: [
          { step: 'C-01', actor: 'Warga', activity: 'Mengisi judul, kategori, uraian, dan foto pendukung jika ada.' },
          { step: 'C-02', actor: 'Sistem', activity: 'Validasi input; jika tidak valid warga diminta memperbaiki.' },
          { step: 'C-03', actor: 'Sistem', activity: 'Simpan pengaduan berstatus Baru dan catat riwayat awal.' },
          { step: 'C-04', actor: 'Admin', activity: 'Meninjau pengaduan; mengubah status dan memberi tanggapan bila diperlukan.' },
          { step: 'C-05', actor: 'Sistem', activity: 'Simpan perubahan dan riwayat status terbaru.' },
          { step: 'C-06', actor: 'Warga', activity: 'Melihat status, riwayat, dan tanggapan Admin.' },
        ],
      },
      controlsAndOpenIssues:
        'Kontrol yang terdokumentasi meliputi verifikasi pembayaran oleh Admin, pembatasan akses Admin/Warga, dan penyimpanan riwayat status pengaduan. Untuk pengembangan lanjutan, prosedur rekonsiliasi kas, koreksi pembayaran, standar bukti transfer, dan target waktu penanganan pengaduan dapat dirumuskan lebih rinci.',
    },
    backlogData: {
      sprints: [
        {
          name: 'Sprint 1: Analisis dan Perancangan',
          timelinePlan: 'April 2026',
          timelineActual: 'April 2026',
          deliverable: 'Kebutuhan sistem; ERD dan tabel; UML; rancangan antarmuka.',
          items: [
            { id: 'PB-01', title: 'Analisis kebutuhan sistem', desc: 'Mengidentifikasi kebutuhan Admin dan Warga berdasarkan wawancara dan user story.', priority: 'Tinggi' },
            { id: 'PB-02', title: 'Perancangan basis data', desc: 'Menyusun ERD, relasi tabel, dan struktur basis data aplikasi RUNA.', priority: 'Tinggi' },
            { id: 'PB-03', title: 'Perancangan UML', desc: 'Membuat Use Case Diagram, Activity Diagram, Sequence Diagram, dan Class Diagram.', priority: 'Tinggi' },
            { id: 'PB-04', title: 'Perancangan antarmuka', desc: 'Membuat rancangan tampilan halaman Admin dan Warga.', priority: 'Sedang' },
            { id: 'PB-05', title: 'Konfigurasi awal aplikasi', desc: 'Membuat proyek Laravel serta menghubungkannya dengan basis data MySQL.', priority: 'Tinggi' },
          ],
        },
        {
          name: 'Sprint 2: Pengembangan Fitur Utama',
          timelinePlan: 'Mei 2026',
          timelineActual: 'Mei 2026',
          deliverable: 'Autentikasi, dashboard, warga, iuran, kas, pengumuman.',
          items: [
            { id: 'PB-06', title: 'Autentikasi pengguna', desc: 'Mengembangkan fitur login dan logout untuk Admin dan Warga.', priority: 'Tinggi' },
            { id: 'PB-07', title: 'Dashboard', desc: 'Mengembangkan halaman Dashboard untuk Admin dan Warga.', priority: 'Tinggi' },
            { id: 'PB-08', title: 'Pengelolaan data warga', desc: 'Mengembangkan fungsi tambah, lihat, ubah, dan hapus data warga.', priority: 'Tinggi' },
            { id: 'PB-09', title: 'Pembayaran iuran', desc: 'Mengembangkan fitur tagihan, unggah bukti transfer, pencatatan pembayaran tunai, dan verifikasi pembayaran.', priority: 'Tinggi' },
            { id: 'PB-10', title: 'Manajemen kas', desc: 'Mengembangkan fitur pencatatan transaksi pemasukan dan pengeluaran kas.', priority: 'Tinggi' },
            { id: 'PB-11', title: 'Pengumuman', desc: 'Mengembangkan fitur pengelolaan dan penyampaian pengumuman.', priority: 'Sedang' },
          ],
        },
        {
          name: 'Sprint 3: Penyelesaian dan Pengujian',
          timelinePlan: 'Juni 2026',
          timelineActual: 'Juni–Juli 2026',
          deliverable: 'Laporan kas, pengaduan, info petugas, perbaikan, Black-Box Testing.',
          items: [
            { id: 'PB-12', title: 'Laporan kas bulanan', desc: 'Menampilkan pemasukan, pengeluaran, dan rincian transaksi setiap bulan.', priority: 'Tinggi' },
            { id: 'PB-13', title: 'Pengaduan warga', desc: 'Mengembangkan fitur pengiriman dan pengelolaan status pengaduan.', priority: 'Tinggi' },
            { id: 'PB-14', title: 'Informasi koordinator dan satpam', desc: 'Menampilkan informasi serta kontak koordinator dan satpam.', priority: 'Sedang' },
            { id: 'PB-15', title: 'Pengujian sistem', desc: 'Melakukan Black-Box Testing terhadap seluruh fungsi aplikasi RUNA.', priority: 'Tinggi' },
          ],
        },
      ],
    },
    uatData: {
      objective:
        'UAT RUNA bertujuan mengukur penerimaan pengguna pada aspek tampilan/navigasi, login, kemudahan penggunaan fitur, respons aplikasi, dan kepuasan menggunakan skala Likert 1–5 dengan 10 responden dan 16 butir penilaian (8 terkait Admin, 8 terkait Warga).',
      indicators: [
        { label: 'Responden', value: '10 orang' },
        { label: 'Instrumen', value: '16 pernyataan (8 Admin, 8 Warga)' },
        { label: 'Rentang Skor', value: '1–5 (STS hingga SS)' },
        { label: 'Total Skor', value: '756 dari 800' },
        { label: 'Persentase Penerimaan', value: '94,5%' },
      ],
      adminItems: [
        { id: 'Q01', statement: 'Tampilan dan navigasi pada halaman Admin mudah dipahami dan digunakan.', score: 47, pct: '94%' },
        { id: 'Q02', statement: 'Proses login sebagai Admin dapat dilakukan dengan mudah dan sistem menampilkan halaman sesuai hak akses.', score: 47, pct: '94%' },
        { id: 'Q03', statement: 'Fitur pengelolaan data warga memudahkan Admin dalam melihat, menambah, mengubah, dan menonaktifkan data warga.', score: 46, pct: '92%' },
        { id: 'Q04', statement: 'Fitur iuran dan pembayaran memudahkan Admin dalam mengelola tagihan serta memeriksa dan memverifikasi pembayaran warga.', score: 47, pct: '94%' },
        { id: 'Q05', statement: 'Fitur manajemen kas memudahkan Admin dalam mencatat dan mengelola pemasukan serta pengeluaran.', score: 47, pct: '94%' },
        { id: 'Q06', statement: 'Fitur pengumuman dan pengaduan memudahkan Admin dalam menyampaikan informasi serta mengelola laporan warga.', score: 47, pct: '94%' },
        { id: 'Q07', statement: 'Aplikasi RUNA memberikan respons yang baik dan fitur yang tersedia sesuai dengan kebutuhan pengelolaan administrasi perumahan.', score: 47, pct: '94%' },
        { id: 'Q08', statement: 'Secara keseluruhan, saya puas menggunakan aplikasi RUNA sebagai Admin.', score: 47, pct: '94%' },
      ],
      wargaItems: [
        { id: 'Q09', statement: 'Tampilan dan navigasi pada halaman Warga mudah dipahami dan digunakan.', score: 47, pct: '94%' },
        { id: 'Q10', statement: 'Proses login sebagai Warga dapat dilakukan dengan mudah dan sistem menampilkan halaman sesuai hak akses.', score: 48, pct: '96%' },
        { id: 'Q11', statement: 'Fitur tagihan dan pembayaran memudahkan saya melihat tagihan, mengunggah bukti pembayaran, dan mengetahui status pembayaran.', score: 46, pct: '92%' },
        { id: 'Q12', statement: 'Fitur laporan kas bulanan memudahkan saya mengetahui informasi pemasukan dan pengeluaran perumahan.', score: 48, pct: '96%' },
        { id: 'Q13', statement: 'Fitur pengumuman memudahkan saya memperoleh informasi terbaru dari pengurus.', score: 48, pct: '96%' },
        { id: 'Q14', statement: 'Fitur pengaduan memudahkan saya mengirim laporan dan memantau status pengaduan.', score: 47, pct: '94%' },
        { id: 'Q15', statement: 'Informasi koordinator dan satpam mudah diakses, serta aplikasi RUNA memberikan respons yang baik saat digunakan.', score: 49, pct: '98%' },
        { id: 'Q16', statement: 'Secara keseluruhan, saya puas menggunakan aplikasi RUNA sebagai Warga.', score: 48, pct: '96%' },
      ],
      distribution: [
        { label: 'Sangat Setuju (5)', count: 125 },
        { label: 'Setuju (4)', count: 27 },
        { label: 'Netral (3)', count: 7 },
        { label: 'Tidak Setuju (2)', count: 1 },
        { label: 'Sangat Tidak Setuju (1)', count: 0 },
      ],
      summaryNote:
        'Pemeriksaan: 125×5 + 27×4 + 7×3 + 1×2 + 0×1 = 756 dari 160 respons. Nilai butir tertinggi ialah Q15 (98%) dan terendah ialah Q03 dan Q11 (masing-masing 92%).',
      evaluationResult:
        'Hasil User Acceptance Testing (UAT) menunjukkan tingkat penerimaan pengguna sebesar 94,5%, yang mengindikasikan bahwa aplikasi RUNA telah diterima dengan baik oleh pengguna.',
      limitation:
        'Evaluasi belum mencakup pengukuran efisiensi operasional sebelum dan sesudah implementasi sistem.',
      recommendation:
        'Melakukan evaluasi berkala terhadap kemudahan penggunaan fitur serta efektivitas sistem dalam mendukung administrasi perumahan.',
    },
  },
};

export function getRunaData(lang = 'en') {
  return {
    masterPdf: RUNA_MASTER_PDF,
    ...(RUNA_DATA_BY_LANG[lang] || RUNA_DATA_BY_LANG.en),
  };
}

export const IT_BA_CASE_STUDY = RUNA_DATA_BY_LANG.en.itBaCaseStudy;
export const RUNA_PROJECT_META = RUNA_DATA_BY_LANG.en.projectMeta;
export const RUNA_CHAPTERS = RUNA_DATA_BY_LANG.en.chapters;
export const RUNA_CASE_STUDY_DATA = RUNA_DATA_BY_LANG.en.caseStudyData;
export const RUNA_BRD_DATA = RUNA_DATA_BY_LANG.en.brdData;
export const RUNA_SRS_DATA = RUNA_DATA_BY_LANG.en.srsData;
export const RUNA_BUSINESS_PROCESS_DATA = RUNA_DATA_BY_LANG.en.businessProcessData;
export const RUNA_BACKLOG_DATA = RUNA_DATA_BY_LANG.en.backlogData;
export const RUNA_UAT_DATA = RUNA_DATA_BY_LANG.en.uatData;
