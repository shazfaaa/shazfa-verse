const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const IT_BA_CASE_STUDY = {
  id: 'runa-case',
  code: 'CASE STUDY #01',
  title: 'RUNA — Resident Unified Network Application',
  subtitle: 'Sistem Informasi Manajemen Warga Berbasis Web',
  client: 'Perumahan Tiara Residence',
  year: '2026',
  coverImage: withBase('images/runa-cover.png'),
  summary:
    'Portofolio lengkap IT Business Analyst dalam 1 dokumen terpadu (17 halaman) yang mencakup Case Study, BRD (8 BR), SRS (20 FR & 5 Business Rules), Business Process To-Be, Product Backlog & 3 Sprint Plan, hingga UAT Report (skor 94,5% dari 756/800).',
};

export const RUNA_MASTER_PDF = {
  fileName: 'Business Analyst_RUNA.pdf',
  downloadName: 'Business_Analyst_RUNA_Shazfa.pdf',
  url: withBase('documents/business-analyst-runa.pdf'),
  pageCount: 17,
  sizeLabel: '403 KB',
};

export const RUNA_PROJECT_META = {
  targetObject: 'Perumahan Tiara Residence',
  projectType: 'Self-Initiated ITBA Portfolio',
  year: '2026',
  methodology: 'Agile Scrum',
};

export const RUNA_CHAPTERS = [
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
];

export const RUNA_CASE_STUDY_DATA = {
  problems: [
    { title: '1. Data Management', desc: 'Kebutuhan pengelolaan data warga yang lebih terstruktur dan terpusat.' },
    { title: '2. Payment Monitoring', desc: 'Kebutuhan pencatatan pembayaran iuran dan pemantauan status pembayaran secara sistematis.' },
    { title: '3. Financial Transparency', desc: 'Kebutuhan laporan pemasukan dan pengeluaran kas yang mudah diakses.' },
    { title: '4. Information Distribution', desc: 'Informasi penting yang disampaikan melalui WhatsApp berpotensi tertimbun dan sulit ditemukan kembali.' },
    { title: '5. Complaint Management', desc: 'Kebutuhan sarana pengaduan yang memungkinkan warga menyampaikan masalah dan memantau tindak lanjutnya.' },
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
};

export const RUNA_BRD_DATA = {
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
  benefitsAndEvidence:
    'Manfaat yang diharapkan ialah administrasi yang lebih terstruktur, transparansi informasi keuangan, dan kemudahan akses layanan warga. Sistem dibangun menggunakan Laravel 12, PHP, MySQL dan diuji dengan UAT dengan hasil 756/800 atau 94,5% (10 responden, 16 pernyataan).',
};

export const RUNA_SRS_DATA = {
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
  nfrs: [
    { id: 'NFR-01', title: 'Kontrol Akses', desc: 'Akses fungsi pengelolaan dibatasi sesuai role Admin dan Warga.' },
    { id: 'NFR-02', title: 'Konsistensi Data', desc: 'Pembayaran yang diterima memperbarui status tagihan dan mencatat pemasukan kas.' },
    { id: 'NFR-03', title: 'Jejak Perubahan', desc: 'Riwayat perubahan status pengaduan tersimpan dan dapat ditinjau kembali.' },
  ],
  technicalEnv: 'PHP 8.2, Laravel 12, MySQL, XAMPP, Git, dan Figma',
  dataEntities: ['Kompleks', 'User', 'Resident', 'Staff', 'Due', 'Bill', 'Payment', 'Transaction', 'Announcement', 'Notification', 'Complaint', 'ComplaintStatusLog'],
  traceability: [
    { map: 'BR-02 → FR-07/08', criteria: 'Bukti diunggah → Menunggu Verifikasi; disetujui → Lunas; ditolak → dapat unggah ulang.' },
    { map: 'BR-03 → FR-10/11', criteria: 'Penerimaan pembayaran menambah kas; transaksi keluar tercatat.' },
    { map: 'BR-06 → FR-15/16/17', criteria: 'Pengaduan valid tersimpan Baru; Admin memperbarui status; warga melihat riwayat.' },
    { map: 'BR-08 → FR-01', criteria: 'Login valid menghasilkan dashboard sesuai Admin/Warga.' },
  ],
};

export const RUNA_BUSINESS_PROCESS_DATA = {
  asIsToBe: [
    { area: 'Iuran', asIs: 'Pencatatan dan pemantauan belum terintegrasi.', toBe: 'Tagihan digital, unggah bukti, verifikasi Admin, pencatatan kas.' },
    { area: 'Pengumuman', asIs: 'Informasi grup WhatsApp dapat tertimbun.', toBe: 'Pengumuman tersimpan dan dapat dibaca kembali.' },
    { area: 'Pengaduan', asIs: 'Diperlukan kanal laporan dan pemantauan.', toBe: 'Pengaduan dengan status, tanggapan, dan riwayat.' },
    { area: 'Keuangan', asIs: 'Informasi kas perlu lebih transparan.', toBe: 'Transaksi dan laporan bulanan dapat ditampilkan.' },
  ],
  paymentFlow: {
    actors: 'Admin, Warga, Sistem RUNA',
    trigger: 'Iuran dan tagihan tersedia bagi rumah aktif.',
    outcome: 'Pembayaran tercatat Lunas dan kas bertambah, atau bukti ditolak untuk diperbaiki.',
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
};

export const RUNA_BACKLOG_DATA = {
  sprints: [
    {
      name: 'Sprint 1: Analisis dan Perancangan',
      timelinePlan: 'April 2026',
      timelineActual: 'April 2026',
      note: 'Sesuai rencana',
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
      note: 'Sesuai rencana',
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
      note: 'Penyesuaian untuk perbaikan dan penyempurnaan',
      deliverable: 'Laporan kas, pengaduan, info petugas, perbaikan, Black-Box Testing.',
      items: [
        { id: 'PB-12', title: 'Laporan kas bulanan', desc: 'Menampilkan pemasukan, pengeluaran, dan rincian transaksi setiap bulan.', priority: 'Tinggi' },
        { id: 'PB-13', title: 'Pengaduan warga', desc: 'Mengembangkan fitur pengiriman dan pengelolaan status pengaduan.', priority: 'Tinggi' },
        { id: 'PB-14', title: 'Informasi koordinator dan satpam', desc: 'Menampilkan informasi serta kontak koordinator dan satpam.', priority: 'Sedang' },
        { id: 'PB-15', title: 'Pengujian sistem', desc: 'Melakukan Black-Box Testing terhadap seluruh fungsi aplikasi RUNA.', priority: 'Tinggi' },
      ],
    },
  ],
};

export const RUNA_UAT_DATA = {
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
};
