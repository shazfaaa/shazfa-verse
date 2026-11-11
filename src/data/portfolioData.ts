import { Project, BlogPost, SocialProfile } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Shazfa Delphinia",
  fullName: "Shazfa Delphinia Arifinnisa Rasyid",
  headline: "HEY, IT'S SHAZFA",
  role: "UI Designer · Web Developer · IT Business Analyst",
  university: "Universitas Gunadarma",
  degree: "S1 Sistem Informasi (S.Kom)",
  gpa: "3.71 / 4.00",
  languages: "Indonesian (Native), English (Fluent - Verbal & Written)",
  techStack: ["Laravel", "HTML", "CSS", "JavaScript", "MySQL", "Figma", "Scrum", "UAT"],
  pronouns: "she/her",
  location: "Bekasi, ID",
  status: "Available for Full-Time & Freelance Projects",
  bio: "Universitas Gunadarma Information Systems fresh graduate (GPA 3.71/4.00) skilled in UI/UX Design (Figma), Web Development (Laravel, HTML, CSS, JS), and IT Business Analysis (Scrum & UAT) with fluent English verbal & written communication.",
  email: "shazfa.delphinia@gmail.com",
  phone: "+62 811-9841-903",
  whatsappUrl: "https://wa.me/628119841903?text=Hi%20Shazfa!%20I'd%20love%20to%20connect%20for%20a%20project!",
  linkedinUrl: "https://linkedin.com/in/shazfadelphinia",
  instagramUrl: "https://instagram.com/shaz.faa",
  githubUrl: "https://github.com/shazfadelphinia",
  spotifyTrack: {
    title: "plot twist (첫 만남은 계획대로 되지 않아)",
    artist: "TWS (투어스)",
    playlistName: "Sparkling Blue · Ice & Butter Vibe ✦",
    progress: "01:24 / 02:32"
  }
};

/* ============================================================== */
/* 1. PORTFOLIO UI DESIGN PROJECTS                                */
/* ============================================================== */
export const UI_DESIGN_PROJECTS: Project[] = [
  {
    id: "arise-generation-girl",
    title: "Arise — Mental Health & Self-Care Companion",
    subtitle: "Final Project (Group Collaboration) · Comprehensive Mental Wellness Ecosystem (2021)",
    category: "ui-design",
    categoryLabel: "UI/UX Mobile App · Group Final Project",
    year: "2021",
    client: "Final Project (Group Collaboration · 5 Years Ago)",
    role: "UI/UX Designer (Collaborative Team)",
    tools: ["Figma", "Design System", "User Research", "Wireframing", "Interactive Prototyping", "Mood Tracking UX"],
    coverImage: "/public/assets/aistudio/Final_Project_311daccb.png",
    galleryImages: [
      "/public/assets/aistudio/Final_Project_311daccb.png"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/cSHPgPlw24hsI3aJIT2dBv/Final-Project?node-id=0-1&embed-host=share",
    figmaShareUrl: "https://embed.figma.com/design/cSHPgPlw24hsI3aJIT2dBv/Final-Project?node-id=0-1&embed-host=share",
    summary: "Aplikasi mobile kesehatan mental dan self-care terpadu yang dirancang bersama tim untuk menjawab kecemasan, isolasi, dan kebutuhan konseling psikologis selama era pandemi. Menampilkan mood tracker, box breathing 4-4-4-4, telekonsultasi psikolog (chat, call, video call), podcast, dan forum komunitas.",
    overview: "Dibuat sekitar 5 tahun lalu (2021) sebagai Final Project berkelompok, Arise mengusung visi menciptakan ruang aman digital (safe space) bagi pengguna yang membutuhkan dukungan emosional dan self-care rutin. Aplikasi ini memadukan 5 pilar utama: Daily Mood & Activity Journaling, Online Counseling & Teleconsultation (Chat, Voice, dan Video Call dengan psikolog terverifikasi), Guided Box Breathing Timer untuk pereda cemas instan, Peer Support Community Forum, serta Wellness Podcast & Self-Care Articles.",
    challenge: "Mendesain aplikasi kesehatan mental yang ramah, hangat, dan menenangkan tanpa menimbulkan stigma medis atau kesan kaku. Alur telekonsultasi harus terasa privat dan terpercaya, sementara fitur mood tracking dan latihan pernapasan harus dapat diakses secara instan saat pengguna mengalami lonjakan kecemasan (panic attack/stress).",
    solution: "Menerapkan palet warna warm peach dan calming mint yang hangat dan terapeutik, dilengkapi ilustrasi yang inklusif. Merancang dashboard Discovery intuitif dengan navigasi 5 pilar utama, modul Box Breathing dengan timer 4 fase visual, sistem jurnal emosi dengan grafik Mood Flow mingguan/bulanan, dan alur booking telekonsultasi psikolog lengkap dengan antarmuka video call.",
    deliverables: [
      "30+ High-Fidelity Mobile App Screens in Figma",
      "Interactive Box Breathing Timer (4-4-4-4 Technique) Flow",
      "Mood Flow & Mood Count Emotional Analytics Charts",
      "Psychologist Directory & Booking System with Video/Voice Call UX",
      "Community Discussion Board & Curated Audio Podcast Player",
      "Calming Warm Pastel Design System & Component Library"
    ],
    colorPalette: ["#F9A174", "#FED5C2", "#97D2C5", "#2F4860", "#FFFFFF"],
    accentColor: "#F9A174",
    stats: [
      { label: "Screens Designed", value: "30+" },
      { label: "Core Modules", value: "5 Pillars" },
      { label: "Timeline", value: "2021" }
    ],
    featured: true,
    orientation: "portrait"
  },
  {
    id: "unimate-technofair",
    title: "Unimate — University Student Schedule & Team Collaboration Platform",
    subtitle: "Proposal & UI/UX Design TechnoFair 11.0 (Universitas Gunadarma 2024)",
    category: "ui-design",
    categoryLabel: "UI/UX Web Platform · TechnoFair 11.0",
    year: "2024",
    client: "TechnoFair 11.0 UI/UX Competition",
    role: "UI/UX Designer",
    tools: ["Figma", "User-Centered Design (UCD)", "Wireframing", "Interactive Prototyping", "Design System"],
    coverImage: "/public/assets/aistudio/unimate_cover.png",
    galleryImages: [
      "/public/assets/aistudio/unimate_cover.png"
    ],
    figmaEmbedUrl: "https://embed.figma.com/design/IfRgGpnbhWPbpNPQuABHs9/UI-UX-Technofair?node-id=0-1&embed-host=share",
    figmaShareUrl: "https://www.figma.com/proto/IfRgGpnbhWPbpNPQuABHs9/UI%2FUX-Technofair?node-id=0-1&t=QmSdZphPMTJahBvo-1",
    summary: "Platform berbasis web (tablet & desktop) yang dirancang untuk kompetisi TechnoFair 11.0 (Universitas Gunadarma). Unimate menyatukan sistem penjadwalan akademik terpusat (Scheduling, To-Do List, Notes) dan sarana kerja kelompok (Team Up & Discuss Zone) untuk mengatasi jadwal perkuliahan yang tersebar dan masalah ketimpangan kerja kelompok (free rider).",
    overview: "Dirancang untuk kompetisi UI/UX Design TechnoFair 11.0 (Universitas Gunadarma 2024). Unimate lahir dari observasi nyata kehidupan mahasiswa: banyaknya aplikasi penjadwalan yang terfragmentasi sehingga sulit mendapatkan gambaran utuh prioritas, serta kendala kerja kelompok di mana pembagian tugas sering tidak adil dan minim koordinasi. Mengusung logo burung hantu sebagai simbol edukasi dan tagline 'Fast, Reliable, and Smart Studying', Unimate dirancang responsif untuk tablet dan desktop.",
    challenge: "Mahasiswa sering mengalami inefisiensi karena jadwal kelas, tugas, dan proyek organisasi tersebar di berbagai platform tanpa satu gambaran menyeluruh. Selain itu, dalam tugas kelompok sering terjadi 'free rider problem' (hanya sebagian anggota yang mengerjakan) akibat tidak adanya sistem pembagian tugas yang transparan dan kanal diskusi terpusat.",
    solution: "Menerapkan metodologi User-Centered Design (UCD) melalui tahapan Plan, Context of Use, User Requirements, Solution Design, hingga Evaluasi. Unimate menyediakan Dashboard terpusat dengan timeline tenggat dan teman online, fitur Scheduling per jam dengan To-Do List & Notes, fitur kolaborasi 'Team Up' untuk pembagian dan pengumpulan tugas anggota dengan notifikasi pengingat, serta 'Discuss Zone' (Messages) untuk obrolan personal dan grup proyek.",
    deliverables: [
      "Dokumen Proposal UI/UX Design Lengkap (TechnoFair 11.0)",
      "Penerapan Metodologi User-Centered Design (UCD) 4 Tahap",
      "High-Fidelity Web Prototype Interaktif di Figma (Desktop & Tablet)",
      "Set Wireframe Lengkap (Dashboard, Team Up, Messages, Schedule, Settings)",
      "Fitur Kolaborasi Tim 'Team Up' & 'Discuss Zone' Terintegrasi",
      "Sistem Task Manager & Penjadwalan Terperinci per Jam"
    ],
    methodologies: ["User-Centered Design (UCD)", "Survei & Wawancara Pengguna", "Wireframing", "Iterative Usability Testing"],
    colorPalette: ["#2F4860", "#7DA7D9", "#DCEEFF", "#FFF7CC", "#FFFFFF"],
    accentColor: "#7DA7D9",
    stats: [
      { label: "Kompetisi", value: "TechnoFair 11.0" },
      { label: "Metodologi", value: "UCD Framework" },
      { label: "Platform", value: "Web & Tablet UI" }
    ],
    featured: true,
    orientation: "portrait"
  }
];

/* ============================================================== */
/* 2. PORTFOLIO WEB DEVELOPMENT PROJECTS                          */
/* ============================================================== */
export const WEB_DEV_PROJECTS: Project[] = [
  {
    id: "learnify-dicoding",
    title: "Learnify — AI-Powered Learning Companion Platform",
    subtitle: "Capstone Project Asah led by Dicoding in association with Accenture (2025)",
    category: "web-dev",
    categoryLabel: "Full-Stack Web App · Capstone Project",
    year: "2025",
    client: "Asah led by Dicoding in association with Accenture",
    role: "Ketua Kelompok & Full-Stack Web Developer",
    tools: ["JavaScript", "Node.js", "HTML5", "CSS3", "Supabase", "REST API", "Vercel"],
    coverImage: "/public/assets/aistudio/learnify_cover.png",
    galleryImages: [
      "/public/assets/aistudio/learnify_cover.png"
    ],
    liveUrl: "https://learnify-capstone.vercel.app/index.html",
    githubUrl: "https://github.com/shazfa-delphinia/learnify-frontend",
    summary: "Sebagai Ketua Kelompok (Project Team Lead), peran yang dijalankan mencakup memimpin tim lintas disiplin dalam mengembangkan Learnify, platform AI-powered learning companion yang mempersonalisasi alur onboarding dan roadmap belajar pengguna berdasarkan minat serta asesmen kemampuan.",
    overview: "Dikembangkan dalam program Asah led by Dicoding in association with Accenture. Berperan sebagai Ketua Kelompok (Project Team Lead) sekaligus Full-Stack Web Developer dengan memimpin koordinasi sprint dan integrasi teknis antara front-end, back-end, serta layanan AI. Learnify hadir untuk menjawab tantangan rendahnya retensi pada platform pembelajaran digital melalui sistem onboarding yang adaptif dan personal.",
    challenge: "Banyak pengguna platform pembelajaran daring meninggalkan kursus sebelum selesai karena proses onboarding yang masih bersifat generik dan belum mampu menyesuaikan kebutuhan sesuai minat serta tingkat pemahaman awal pengguna.",
    solution: "Mengintegrasikan antarmuka web interaktif dengan sistem asesmen minat dan keahlian bertingkat untuk merekomendasikan roadmap belajar yang terarah. Mengimplementasikan arsitektur front-end yang responsif, terhubung dengan layanan back-end untuk manajemen akun dan pelacakan progres belajar yang berkelanjutan.",
    deliverables: [
      "Aplikasi Web Full-Stack Responsif (Deployed on Vercel)",
      "Sistem Asesmen Minat & Level Kemampuan Interaktif",
      "Rekomendasi Roadmap Pembelajaran Terstruktur",
      "Integrasi API Front-End & Back-End dengan Supabase",
      "Dokumentasi Teknis & Manajemen Sprint Capstone Project"
    ],
    colorPalette: ["#2F4860", "#7DA7D9", "#DCEEFF", "#FFF7CC", "#FFFFFF"],
    accentColor: "#7DA7D9",
    stats: [
      { label: "Peran Proyek", value: "Ketua Kelompok" },
      { label: "Tim Capstone", value: "5 Anggota" },
      { label: "Status Proyek", value: "Live on Vercel" }
    ],
    featured: true,
    orientation: "landscape"
  },
  {
    id: "runa-citizen-management",
    title: "RUNA — Resident Unified Network Application",
    subtitle: "Sistem Informasi Manajemen Warga Perumahan Tiara Residence Berbasis Website",
    category: "web-dev",
    categoryLabel: "Full-Stack Web App · Laravel 12 & MySQL",
    year: "2025",
    client: "Perumahan Tiara Residence",
    role: "Full-Stack Web Developer",
    tools: ["Laravel 12", "PHP", "MySQL", "Blade", "Bootstrap/Tailwind", "RESTful MVC"],
    coverImage: "/public/assets/aistudio/runa_cover.png",
    galleryImages: [
      "/public/assets/aistudio/runa_cover.png",
      "/public/assets/aistudio/runa_web_visual.png",
      "/public/assets/aistudio/runa_app_icon.png"
    ],
    liveUrl: "https://runa-resident.site.je/login",
    figmaEmbedUrl: "https://embed.figma.com/design/dMatxChKbAEpks208WCVu1/RUNA-%E2%80%94-High-Fidelity-Wireframes?node-id=0-1&embed-host=share",
    figmaShareUrl: "https://www.figma.com/design/dMatxChKbAEpks208WCVu1/RUNA-%E2%80%94-High-Fidelity-Wireframes?node-id=0-1",
    summary: "Mengembangkan aplikasi web RUNA (Resident Unified Network Application) untuk mendigitalkan administrasi Perumahan Tiara Residence. Mengintegrasikan pencatatan data warga, pembayaran iuran, transparansi kas bulanan, pengumuman RT, ticketing pengaduan warga berlampiran foto, serta kontak darurat satpam.",
    overview: "Aplikasi RUNA dirancang untuk mentransformasikan proses administrasi manual di Perumahan Tiara Residence menjadi sistem digital yang terstruktur, transparan, dan mudah diakses warga. Dikembangkan dengan framework Laravel 12, PHP, dan arsitektur database MySQL 3NF melalui metode Agile Scrum (3 Sprint). Aplikasi telah dipublikasikan secara daring serta tervalidasi dengan 100% kelulusan Black-Box Testing (25 skenario) dan skor UAT 94,5% (Sangat Layak).",
    challenge: "Pencatatan data warga dan iuran menggunakan buku besar konvensional rentan kehilangan data, memicu ketidaksesuaian catatan antara warga dan bendahara, minimnya transparansi pelaporan kas bulanan, serta lambatnya penyebaran informasi dan penanganan pengaduan.",
    solution: "Menerapkan arsitektur MVC berbasis Laravel 12 dengan normalisasi database tingkat 3 (3NF) untuk mencegah redundansi. Mengimplementasikan autentikasi multi-role (Admin/RT dan Warga), verifikasi bukti transfer iuran, sistem pencatatan mutasi kas transparan, dan ticketing keluhan berlampiran foto.",
    deliverables: [
      "Aplikasi Web RUNA Terpublikasi Daring (https://runa-resident.site.je/login)",
      "High-Fidelity Wireframes & Desain Antarmuka Terperinci di Figma",
      "Arsitektur Database Relasional MySQL Normalisasi 3NF",
      "Modul Manajemen Data Warga & Tagihan Iuran Bulanan Otomatis",
      "Sistem Pelaporan Kas Bulanan Transparan & Validasi Struk Transfer",
      "Modul Ticketing Pengaduan Warga Berlampiran Foto & Direktori Satpam"
    ],
    colorPalette: ["#415111", "#FCBF93", "#D2E186", "#F2E8DF", "#FBF7EF"],
    accentColor: "#415111",
    demoCredentials: {
      password: "password",
      accounts: [
        { role: "Warga", email: "warga@gmail.com", badge: "Akses Akun Warga" },
        { role: "Admin", email: "admin@gmail.com", badge: "Akses Pengurus RT" }
      ],
      note: "Kredensial demo untuk mengeksplorasi modul live RUNA di https://runa-resident.site.je/login"
    },
    stats: [
      { label: "Hasil UAT", value: "94.5% Layak" },
      { label: "Black-Box Test", value: "25/25 Lulus" },
      { label: "Metode Dev", value: "3 Sprint Scrum" }
    ],
    featured: true,
    orientation: "landscape"
  },
  {
    id: "estehpaus-ciracas",
    title: "Es Teh Paus Ciracas — Interactive F&B Business Website",
    subtitle: "Website Interaktif & Fitur Kuis Rekomendasi 'Find Your Tea Match' (Metode RAD)",
    category: "web-dev",
    categoryLabel: "Frontend Web App · F&B Digital Platform",
    year: "2024",
    client: "Es Teh Paus Ciracas (Food & Beverage)",
    role: "Frontend Web Developer & UI Designer",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Figma", "UML Modeling", "GitHub Pages", "Black-Box Testing"],
    coverImage: "/public/assets/aistudio/estehpaus_cover.jpg",
    galleryImages: [
      "/public/assets/aistudio/estehpaus_cover.jpg",
      "/public/assets/aistudio/estehpaus_quiz.jpg",
      "/public/assets/aistudio/estehpaus_bg_quiz.jpg",
      "/public/assets/aistudio/estehpaus_logo.png"
    ],
    galleryLabels: ["Banner & Menu Utama", "Fitur Kuis Tea Match", "Tampilan Soal Interaktif", "Logo Resmi"],
    liveUrl: "https://shazfaaaa.github.io/estehpaus-ciracas/",
    githubUrl: "https://github.com/shazfaaaa/estehpaus-ciracas",
    summary: "Perancangan dan pengembangan website interaktif untuk bisnis F&B Es Teh Paus Ciracas menggunakan metode Rapid Application Development (RAD). Dilengkapi fitur kuis interaktif 'Find Your Tea Match' yang membantu pelanggan menemukan rekomendasi minuman sesuai preferensi rasa dan suasana hati.",
    overview: "Proyek ini merupakan perancangan dan pengembangan website interaktif untuk Es Teh Paus Ciracas, sebuah bisnis di bidang Food & Beverage (F&B), yang bertujuan untuk meningkatkan aksesibilitas informasi produk, memperkenalkan bisnis secara digital, serta memberikan pengalaman yang lebih interaktif kepada pelanggan. Website dipublikasikan melalui GitHub Pages dengan fokus mempermudah pelanggan dalam mengakses informasi menu dan mendukung promosi layanan digital bisnis.",
    challenge: "Pengembangan proyek ini dilatarbelakangi oleh permasalahan yang dihadapi pelanggan ketika memilih minuman dari berbagai pilihan menu yang tersedia tanpa adanya panduan pemilihan yang terarah, serta kebutuhan sarana informasi digital terpusat untuk katalog harga, lokasi kedai, dan pemesanan online.",
    solution: "Menerapkan metode Rapid Application Development (RAD) yang mencakup 4 tahapan utama: Requirement Planning, User Design, Construction, serta Testing and Feedback. Mengembangkan fitur utama 'Find Your Tea Match' yaitu kuis interaktif penentu minuman personal berdasarkan preferensi rasa dan suasana hati, katalog menu berharga dan berdeskripsi lengkap, pemodelan sistem UML (Use Case, Activity, Sequence Diagram), serta pengujian fungsional Black-Box Testing (15/17 skenario berhasil).",
    deliverables: [
      "Website Interaktif Es Teh Paus Ciracas (Live di GitHub Pages)",
      "Fitur Kuis Interaktif 'Find Your Tea Match' (Rasa & Mood Recommendation)",
      "Katalog Menu Interaktif Lengkap Beserta Harga & Deskripsi Produk",
      "Informasi Bisnis, Peta Lokasi Kedai & Integrasi Media Sosial / Delivery",
      "Pemodelan Alur Sistem UML (Use Case, Activity, Sequence Diagram)",
      "Wireframe & Desain Antarmuka Terperinci di Figma",
      "Laporan Uji Fungsional Black-Box Testing (15/17 Skenario Berhasil)"
    ],
    methodologies: ["Rapid Application Development (RAD)", "Black-Box Testing", "UML System Modeling", "User Design in Figma"],
    colorPalette: ["#1B4D3E", "#E8C547", "#F4F1DE", "#2F4860", "#FFFFFF"],
    accentColor: "#1B4D3E",
    stats: [
      { label: "Metode Dev", value: "RAD Method" },
      { label: "Black-Box Test", value: "15/17 Valid" },
      { label: "Fitur Utama", value: "Tea Match Quiz" }
    ],
    featured: true,
    orientation: "landscape"
  }
];

/* ============================================================== */
/* 3. PORTFOLIO IT BUSINESS ANALYST PROJECTS                      */
/* ============================================================== */
export const IT_BA_PROJECTS: Project[] = [
  {
    id: "runa-it-ba-thesis",
    title: "RUNA — Analisis Kebutuhan & Validasi UAT Sistem Warga",
    subtitle: "Studi Kasus Implementasi Metode Scrum & UAT pada Perumahan Tiara Residence",
    category: "it-ba",
    categoryLabel: "IT Business Analyst · Agile Scrum & UAT",
    year: "2025",
    client: "Perumahan Tiara Residence",
    role: "IT Business Analyst & Quality Assurance Lead",
    tools: ["Scrum Framework", "User Stories", "UAT Likert Scale", "UML Diagram", "Black-Box Testing", "Figma"],
    coverImage: "/public/assets/aistudio/runa_cover.png",
    galleryImages: [
      "/public/assets/aistudio/runa_cover.png",
      "/public/assets/aistudio/runa_web_visual.png",
      "/public/assets/aistudio/runa_app_icon.png"
    ],
    liveUrl: "https://runa-resident.site.je/login",
    figmaEmbedUrl: "https://embed.figma.com/design/dMatxChKbAEpks208WCVu1/RUNA-%E2%80%94-High-Fidelity-Wireframes?node-id=0-1&embed-host=share",
    figmaShareUrl: "https://www.figma.com/design/dMatxChKbAEpks208WCVu1/RUNA-%E2%80%94-High-Fidelity-Wireframes?node-id=0-1",
    summary: "Memformulasikan elicitasi kebutuhan sistem perumahan melalui observasi dan wawancara pemangku kepentingan, memetakan diagram UML & ERD 3NF, mengelola Product Backlog dalam 3 Sprint Scrum, serta memimpin pengujian Black-Box (25 skenario) dan User Acceptance Testing (UAT) dengan skor 94,5%.",
    overview: "Berperan sebagai IT Business Analyst dan QA Lead dalam merancang solusi digital untuk mengeliminasi hambatan operasional administrasi konvensional di Perumahan Tiara Residence. Menyusun arsitektur pemodelan UML (Use Case, Activity, Sequence, Class Diagram) serta mengawal siklus sprint: Sprint 1 (Analisis & Desain Figma/ERD 3NF), Sprint 2 (Core System: Autentikasi, Warga, Iuran), dan Sprint 3 (Kas, Ticketing Pengaduan, Testing).",
    challenge: "Menjembatani kebutuhan pengurus RT dan warga dengan variasi tingkat literasi digital agar fitur penagihan iuran, pelaporan mutasi kas, dan pengaduan fasilitas dapat dioperasikan secara ergonomis tanpa menimbulkan kesalahan interpretasi data.",
    solution: "Merumuskan acceptance criteria yang terukur untuk tiap user story, melaksanakan Black-Box Testing pada 25 skenario fungsional dan boundary testing, serta mengukur tingkat penerimaan pengguna akhir lewat kuesioner UAT 16 indikator berskala Likert (usability, functionality, reliability) yang menghasilkan skor 1.134/1.200 (94,5% - Sangat Layak).",
    deliverables: [
      "Dokumen Spesifikasi Kebutuhan & Pemodelan UML (Use Case, Activity, Sequence)",
      "Product Backlog & Manajemen Siklus 3 Sprint Scrum",
      "Matriks Uji Black-Box Testing 25 Skenario Fungsional (100% Pass)",
      "Laporan Evaluasi User Acceptance Testing (UAT) 16 Butir Skala Likert (94.5%)",
      "Validasi Hasil Riset & Pengujian Lapangan di Perumahan Tiara Residence"
    ],
    methodologies: ["Agile Scrum (3 Sprint)", "User Acceptance Testing (UAT)", "Black-Box Testing", "UML Modeling", "Normalisasi 3NF"],
    artifacts: ["Product Backlog & Sprint Tracker", "Matriks Skenario Black-Box", "Instrumen Kuesioner UAT (Skala Likert)", "Hasil Uji & Validasi Pengguna"],
    metrics: [
      { label: "Skor UAT (Likert)", value: "1.134 / 1.200" },
      { label: "Skenario Uji Fungsional", value: "100% Valid" },
      { label: "Siklus Pengembangan", value: "3 Sprint Scrum" }
    ],
    demoCredentials: {
      password: "password",
      accounts: [
        { role: "Warga", email: "warga@gmail.com", badge: "Akses Akun Warga" },
        { role: "Admin", email: "admin@gmail.com", badge: "Akses Pengurus RT" }
      ],
      note: "Kredensial demo untuk mengeksplorasi modul live RUNA di https://runa-resident.site.je/login"
    },
    stats: [
      { label: "Tingkat Kelayakan UAT", value: "94.5%" },
      { label: "Black-Box Testing", value: "25/25 Lulus" },
      { label: "Responden UAT", value: "15 Pengguna" }
    ],
    featured: true,
    orientation: "landscape"
  }
];

export const ALL_PROJECTS: Project[] = [
  ...UI_DESIGN_PROJECTS,
  ...WEB_DEV_PROJECTS,
  ...IT_BA_PROJECTS
];

/* Legacy compatibility export */
export const PROJECTS = ALL_PROJECTS;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "bridge-between-ui-dev-ba",
    title: "Mengapa Memahami UI Design, Web Dev, dan IT Business Analysis Membuat Kita Menjadi Problem Solver Terbaik",
    slug: "bridge-between-ui-dev-ba",
    excerpt: "Bagaimana kemampuan menjembatani visi bisnis (BA), keindahan visual (UI Design), dan batasan teknis (Web Dev) mempercepat eksekusi proyek digital.",
    category: "Career & Strategy",
    date: "04 Feb 2025",
    readTime: "5 min baca",
    coverImage: "/public/assets/aistudio/runa_cover.png",
    tags: ["UI Design", "Web Development", "Business Analyst", "Product"],
    content: [
      "Di dunia industri teknologi modern, masalah terbesar dalam pengembangan software sering kali bukan karena kurangnya kemampuan coding atau desain, melainkan 'lost in translation' antara kebutuhan bisnis, ekspektasi desainer, dan realitas teknis para engineer.",
      "Sebagai seorang yang mendalami UI Design, Web Development, dan IT Business Analysis, saya melihat ketiga pilar ini bukan sebagai bidang terpisah, melainkan satu siklus utuh pemecahan masalah.",
      "Ketika menyusun skenario User Acceptance Testing (UAT) dan kriteria penerimaan sprint (acceptance criteria), pemahaman UI/UX membantu saya memikirkan alur pengguna yang manusiawi sejak hari pertama. Dan pemahaman Web Development membantu saya mengantisipasi batasan API, struktur database, dan latency sebelum sebuah fitur dirancang.",
      "Hasilnya adalah produk digital yang tidak hanya indah secara estetika, tetapi juga tepat sasaran secara bisnis dan kokoh secara implementasi kode."
    ]
  },
  {
    id: "uat-scrum-testing-guide",
    title: "UAT & Scrum: Cara Mendesain Skenario Pengujian yang Menangkap Bug Sebelum Rilis",
    slug: "uat-scrum-testing-guide",
    excerpt: "Tips praktis merancang skenario User Acceptance Testing (UAT) dan kriteria penerimaan sprint agar aplikasi siap digunakan user tanpa drama.",
    category: "Business Analysis & QA",
    date: "18 Jan 2025",
    readTime: "5 min baca",
    coverImage: "/public/assets/aistudio/image_2ebe3b49.png",
    tags: ["Scrum", "UAT", "Business Analyst", "Quality Assurance"],
    content: [
      "Dalam siklus pengembangan Scrum, salah satu momen paling krusial sebelum peluncuran fitur ke pengguna akhir adalah User Acceptance Testing (UAT).",
      "Kunci dari UAT yang efektif adalah menyusun skenario pengujian berdasarkan skenario nyata pengguna (user-centric), bukan sekadar memeriksa apakah tombol bisa diklik atau tidak.",
      "Dengan merumuskan kriteria penerimaan yang jelas pada setiap user story dan mencatat skenario batas (edge cases), tim IT Business Analyst dapat memastikan bahwa aplikasi benar-benar memenuhi ekspektasi bisnis dan pengguna akhir sebelum naik ke tahap produksi.",
      "Kolaborasi yang erat antara QA, developer, dan business analyst dalam sprint review adalah kunci peluncuran fitur yang sukses dan minim bug."
    ]
  }
];

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    platform: "Instagram",
    handle: "@shaz.faa",
    url: "https://instagram.com/shaz.faa",
    iconName: "Instagram",
    followers: "12.4K",
    description: "UI showcases, visual design work, creative process & daily snapshots",
    accent: "from-[#2F4860] to-[#7DA7D9]"
  },
  {
    platform: "LinkedIn",
    handle: "Shazfa Delphinia",
    url: "https://linkedin.com/in/shazfadelphinia",
    iconName: "Linkedin",
    followers: "3.5K",
    description: "Professional case studies, IT Business Analysis, UI/UX & Web development",
    accent: "from-[#2F4860] to-[#7DA7D9]"
  },
  {
    platform: "Email",
    handle: "shazfa.delphinia@gmail.com",
    url: "mailto:shazfa.delphinia@gmail.com",
    iconName: "Mail",
    followers: "Direct Inbox",
    description: "Direct business inquiries, collaboration proposals & freelance bookings",
    accent: "from-[#2F4860] to-[#7DA7D9]"
  },
  {
    platform: "GitHub",
    handle: "shazfadelphinia",
    url: "https://github.com/shazfadelphinia",
    iconName: "Code",
    followers: "Repos & PRs",
    description: "Open source web repositories, Laravel projects & full-stack experiments",
    accent: "from-[#2F4860] to-[#7DA7D9]"
  },
  {
    platform: "Spotify",
    handle: "Shazfa's Moodboard",
    url: "https://spotify.com",
    iconName: "Music",
    followers: "940 Followers",
    description: "Curated playlists: deep focus, late night coding & ambient lofi beats",
    accent: "from-[#7DA7D9] to-[#2F4860]"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Shazfa has that rare dual superpower: she crafts intuitive, human-centered UI wireframes in Figma and then breaks down the Scrum user stories and rigorous UAT testing scenarios with engineering precision.",
    author: "Hendrawan Putra",
    role: "UI/UX Mentor & Competition Jury",
    company: "TechnoFair & Design Community",
    avatar: "HP"
  },
  {
    quote: "As team lead for the Learnify capstone project in Asah by Dicoding, Shazfa demonstrated outstanding full-stack execution, strong leadership across 5 developers, and spotless sprint delivery.",
    author: "Rizky Ramadhan",
    role: "Capstone Lead Reviewer",
    company: "Asah by Dicoding",
    avatar: "RR"
  },
  {
    quote: "Her RUNA citizen management system thesis excelled in both technical implementation and business analysis—combining Laravel backend reliability with exhaustive UAT testing across community users.",
    author: "Dr. Budi Santoso",
    role: "Thesis Committee Reviewer",
    company: "Universitas Gunadarma",
    avatar: "BS"
  }
];
