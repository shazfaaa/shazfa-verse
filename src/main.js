import './index.css';
import { t } from './data/i18n.js';
import {
  PERSONAL_INFO,
  getCertificates,
  getExperienceTimeline,
  getUiDesignProjects,
  getWebDevProjects,
  getAllProjects,
} from './data/portfolioData.js';
import { getRunaData } from './data/runaDocumentation.js';

let currentLang = localStorage.getItem('portfolio-lang') === 'id' ? 'id' : 'en';

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function resolveKey(obj, path) {
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

function copyText(text, onDone) {
  if (!navigator.clipboard) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
    } catch {
      // ignore fallback failure
    }
    document.body.removeChild(textarea);
    if (onDone) onDone();
    return;
  }

  navigator.clipboard.writeText(text).then(() => {
    if (onDone) onDone();
  });
}

/* ================================================================ */
/* 1. THEME, LANGUAGE, NAVBAR, MOBILE DRAWER & CLOCK                */
/* ================================================================ */
function initTheme() {
  const saved = localStorage.getItem('portfolio-theme');
  if (saved === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = document.documentElement.classList.toggle('dark');
      localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
    });
  }
}

function initLanguageSwitcher() {
  document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetLang = btn.getAttribute('data-lang-btn');
      if (targetLang === 'id' || targetLang === 'en') {
        applyLanguage(targetLang);
      }
    });
  });
}

function applyLanguage(lang) {
  currentLang = lang === 'id' ? 'id' : 'en';
  localStorage.setItem('portfolio-lang', currentLang);
  document.documentElement.lang = currentLang;

  const tr = t(currentLang);
  document.title = tr.meta.title;

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta) descMeta.setAttribute('content', tr.meta.description);
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta) ogTitleMeta.setAttribute('content', tr.meta.title);
  const ogDescMeta = document.querySelector('meta[property="og:description"]');
  if (ogDescMeta) ogDescMeta.setAttribute('content', tr.meta.description);

  // Update active styles for ID | EN switcher buttons
  const activeLangClasses = ['bg-[#2F4860]', 'text-[#FFF7CC]', 'dark:bg-[#FFF7CC]', 'dark:text-[#2F4860]', 'shadow-2xs'];
  const inactiveLangClasses = ['text-[#2F4860]/70', 'dark:text-[#DCEEFF]/70', 'hover:text-[#2F4860]', 'dark:hover:text-white'];

  document.querySelectorAll('.lang-switch-btn').forEach((btn) => {
    const isMatch = btn.getAttribute('data-lang-btn') === currentLang;
    if (isMatch) {
      btn.classList.remove(...inactiveLangClasses);
      btn.classList.add(...activeLangClasses);
    } else {
      btn.classList.remove(...activeLangClasses);
      btn.classList.add(...inactiveLangClasses);
    }
  });

  // Update static text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const val = key ? resolveKey(tr, key) : undefined;
    if (typeof val === 'string') {
      el.textContent = val;
    }
  });

  // Update rich-HTML static text elements
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    const val = key ? resolveKey(tr, key) : undefined;
    if (typeof val === 'string') {
      el.innerHTML = val;
    }
  });

  // Re-render dynamic JS sections in the selected language
  renderExperienceTimeline();
  renderSkills();
  renderCertificates();
  renderProjects();
  renderITBASection();

  // Refresh open overlays if any
  const csModal = document.getElementById('case-study-modal');
  if (csModal && !csModal.classList.contains('hidden') && activeProjectIndex >= 0) {
    renderCaseStudyModal();
  }

  const runaModal = document.getElementById('runa-doc-modal');
  if (runaModal && !runaModal.classList.contains('hidden')) {
    renderRunaDocModal();
  }

  window.requestAnimationFrame(() => {
    refreshScrollReveal();
  });
}

function initNavbarAndScroll() {
  const navbar = document.getElementById('navbar');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileIcon = document.getElementById('mobile-menu-icon');
  const mobileDrawer = document.getElementById('mobile-drawer');

  if (navbar) {
    const updateNavbar = () => {
      if (window.scrollY > 20) {
        navbar.classList.add('shadow-md', 'py-3');
        navbar.classList.remove('py-4');
      } else {
        navbar.classList.remove('shadow-md', 'py-3');
        navbar.classList.add('py-4');
      }
    };
    updateNavbar();
    window.addEventListener('scroll', updateNavbar, { passive: true });
  }

  if (mobileBtn && mobileDrawer && mobileIcon) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = !mobileDrawer.classList.contains('hidden');
      if (isOpen) {
        mobileDrawer.classList.add('hidden');
        mobileIcon.textContent = '☰';
      } else {
        mobileDrawer.classList.remove('hidden');
        mobileIcon.textContent = '✕';
      }
    });

    document.querySelectorAll('.mobile-nav-link').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.add('hidden');
        mobileIcon.textContent = '☰';
      });
    });
  }

  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initClockAndYear() {
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const clockEl = document.getElementById('wib-clock');
  if (clockEl) {
    const updateClock = () => {
      try {
        clockEl.textContent = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
      } catch {
        clockEl.textContent = new Date().toLocaleTimeString();
      }
    };
    updateClock();
    window.setInterval(updateClock, 1000);
  }
}

function initContactCopy() {
  const iconBtn = document.getElementById('contact-copy-email-icon');
  const textBtn = document.getElementById('contact-copy-email-btn');

  const triggerCopy = () => {
    const tr = t(currentLang);
    copyText(PERSONAL_INFO.email, () => {
      if (iconBtn) iconBtn.textContent = '✓';
      if (textBtn) textBtn.textContent = tr.contact.emailCopied;
      window.setTimeout(() => {
        if (iconBtn) iconBtn.textContent = '📋';
        if (textBtn) textBtn.textContent = t(currentLang).contact.emailCopy;
      }, 2000);
    });
  };

  if (iconBtn) iconBtn.addEventListener('click', triggerCopy);
  if (textBtn) textBtn.addEventListener('click', triggerCopy);
}

/* ================================================================ */
/* 2. DECORATIVE STARS & MARQUEE RIBBONS                            */
/* ================================================================ */
const STARLIGHT_PATH = 'M12 0 L13.85 10.15 L24 12 L13.85 13.85 L12 24 L10.15 13.85 L0 12 L10.15 10.15 Z';

function createStarGlintMarkup({ top, left, size, delay, duration, color }) {
  return `
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="absolute select-none animate-gentle-star starlight-glint ${color}"
      style="top:${top};left:${left};width:${size}px;height:${size}px;animation-delay:${delay};animation-duration:${duration};"
    >
      <path d="${STARLIGHT_PATH}" />
    </svg>`;
}

function createStardustDotMarkup({ top, left, size, delay, duration, color }) {
  return `
    <span
      aria-hidden="true"
      class="absolute select-none animate-cute-twinkle stardust-dot ${color}"
      style="top:${top};left:${left};width:${size}px;height:${size}px;background-color:currentColor;animation-delay:${delay};animation-duration:${duration};"
    ></span>`;
}

function renderBackgroundStars() {
  const container = document.getElementById('background-stars');
  if (!container) return;

  const glints = [
    { top: '7%', left: '5%', size: 15, delay: '0s', duration: '5.8s', color: 'text-[#7DA7D9]/70 dark:text-[#72E2E6]/75' },
    { top: '14%', left: '92%', size: 17, delay: '1.1s', duration: '6.4s', color: 'text-[#72E2E6]/75 dark:text-white/80' },
    { top: '25%', left: '4%', size: 12, delay: '0.6s', duration: '5.5s', color: 'text-[#7DA7D9]/65 dark:text-[#FFF7CC]/70' },
    { top: '37%', left: '94%', size: 16, delay: '1.7s', duration: '6.1s', color: 'text-[#7DA7D9]/70 dark:text-[#72E2E6]/75' },
    { top: '49%', left: '5%', size: 14, delay: '0.9s', duration: '6.8s', color: 'text-[#72E2E6]/65 dark:text-white/75' },
    { top: '62%', left: '92%', size: 15, delay: '2.1s', duration: '5.9s', color: 'text-[#E0C860]/75 dark:text-[#FFF7CC]/70' },
    { top: '75%', left: '6%', size: 16, delay: '1.4s', duration: '6.3s', color: 'text-[#7DA7D9]/70 dark:text-[#72E2E6]/75' },
    { top: '88%', left: '91%', size: 15, delay: '0.4s', duration: '5.7s', color: 'text-[#72E2E6]/70 dark:text-white/75' },
  ];

  const dots = [
    { top: '10%', left: '9%', size: 2.5, delay: '0.3s', duration: '3.2s', color: 'text-[#7DA7D9]/60 dark:text-white/70' },
    { top: '20%', left: '89%', size: 2, delay: '1.4s', duration: '2.9s', color: 'text-[#72E2E6]/65 dark:text-[#72E2E6]/75' },
    { top: '32%', left: '7%', size: 2, delay: '2.1s', duration: '3.4s', color: 'text-[#E0C860]/70 dark:text-[#FFF7CC]/75' },
    { top: '44%', left: '91%', size: 2.5, delay: '0.8s', duration: '3.0s', color: 'text-[#7DA7D9]/60 dark:text-white/70' },
    { top: '57%', left: '4%', size: 2.5, delay: '1.9s', duration: '3.5s', color: 'text-[#72E2E6]/65 dark:text-[#72E2E6]/75' },
    { top: '69%', left: '95%', size: 2, delay: '0.5s', duration: '2.8s', color: 'text-[#7DA7D9]/60 dark:text-white/70' },
    { top: '82%', left: '8%', size: 2.5, delay: '1.2s', duration: '3.3s', color: 'text-[#E0C860]/70 dark:text-[#FFF7CC]/70' },
    { top: '92%', left: '86%', size: 2, delay: '2.4s', duration: '3.1s', color: 'text-[#72E2E6]/65 dark:text-white/70' },
  ];

  container.innerHTML = glints.map(createStarGlintMarkup).join('') + dots.map(createStardustDotMarkup).join('');
}

function renderHeroScatteredStars() {
  const container = document.getElementById('hero-scattered-stars');
  if (!container) return;

  // Slim glowing 4-point starlight glints (matching starry sky reference)
  const heroGlints = [
    { top: '6%', left: '7%', size: 17, delay: '0s', duration: '5.2s', color: 'text-[#7DA7D9]/80 dark:text-white/90' },
    { top: '11%', left: '21%', size: 11, delay: '1.1s', duration: '5.8s', color: 'text-[#72E2E6]/85 dark:text-[#72E2E6]/90' },
    { top: '6%', left: '37%', size: 9, delay: '0.5s', duration: '4.9s', color: 'text-[#E0C860]/85 dark:text-[#FFF7CC]/85' },
    { top: '7%', left: '64%', size: 10, delay: '1.5s', duration: '5.4s', color: 'text-[#7DA7D9]/75 dark:text-white/85' },
    { top: '10%', left: '80%', size: 18, delay: '0.7s', duration: '6.0s', color: 'text-[#72E2E6]/85 dark:text-white/95' },
    { top: '7%', left: '92%', size: 13, delay: '1.8s', duration: '5.5s', color: 'text-[#7DA7D9]/80 dark:text-[#72E2E6]/85' },

    { top: '21%', left: '11%', size: 14, delay: '2.0s', duration: '5.6s', color: 'text-[#72E2E6]/85 dark:text-white/90' },
    { top: '28%', left: '24%', size: 9, delay: '0.9s', duration: '5.1s', color: 'text-[#E0C860]/80 dark:text-[#FFF7CC]/80' },
    { top: '37%', left: '5%', size: 16, delay: '2.2s', duration: '6.1s', color: 'text-[#7DA7D9]/80 dark:text-[#72E2E6]/90' },
    { top: '47%', left: '15%', size: 11, delay: '0.4s', duration: '4.8s', color: 'text-[#72E2E6]/80 dark:text-white/85' },
    { top: '59%', left: '8%', size: 13, delay: '1.3s', duration: '5.7s', color: 'text-[#E0C860]/85 dark:text-[#FFF7CC]/85' },

    { top: '20%', left: '88%', size: 15, delay: '1.2s', duration: '5.4s', color: 'text-[#7DA7D9]/80 dark:text-white/90' },
    { top: '29%', left: '75%', size: 10, delay: '2.4s', duration: '5.9s', color: 'text-[#72E2E6]/80 dark:text-[#72E2E6]/85' },
    { top: '39%', left: '85%', size: 19, delay: '1.6s', duration: '6.2s', color: 'text-[#72E2E6]/90 dark:text-white/95' },
    { top: '49%', left: '94%', size: 12, delay: '0.3s', duration: '5.2s', color: 'text-[#7DA7D9]/75 dark:text-[#FFF7CC]/85' },
    { top: '61%', left: '89%', size: 14, delay: '1.9s', duration: '5.8s', color: 'text-[#7DA7D9]/80 dark:text-[#72E2E6]/85' },

    { top: '72%', left: '11%', size: 18, delay: '1.7s', duration: '6.0s', color: 'text-[#7DA7D9]/80 dark:text-white/90' },
    { top: '80%', left: '25%', size: 11, delay: '0.6s', duration: '5.0s', color: 'text-[#72E2E6]/80 dark:text-[#72E2E6]/85' },
    { top: '87%', left: '17%', size: 13, delay: '2.3s', duration: '5.9s', color: 'text-[#E0C860]/80 dark:text-[#FFF7CC]/80' },
    { top: '88%', left: '38%', size: 9, delay: '1.1s', duration: '5.3s', color: 'text-[#7DA7D9]/70 dark:text-white/80' },
    { top: '87%', left: '63%', size: 10, delay: '0.8s', duration: '5.6s', color: 'text-[#72E2E6]/75 dark:text-[#FFF7CC]/80' },
    { top: '74%', left: '76%', size: 14, delay: '2.1s', duration: '5.7s', color: 'text-[#72E2E6]/85 dark:text-white/90' },
    { top: '81%', left: '88%', size: 17, delay: '1.0s', duration: '5.8s', color: 'text-[#7DA7D9]/85 dark:text-[#72E2E6]/90' },
    { top: '90%', left: '81%', size: 11, delay: '2.5s', duration: '6.1s', color: 'text-[#E0C860]/80 dark:text-[#FFF7CC]/80' },
  ];

  // Deterministic fine stardust pinpoints across the Hero sky
  const stardustDots = Array.from({ length: 56 }, (_, i) => {
    const leftVal = ((i * 37 + 11) % 94) + 3;
    const topVal = ((i * 53 + 7) % 90) + 4;
    const sizeVal = i % 5 === 0 ? 3 : i % 2 === 0 ? 2 : 1.5;
    const delayVal = ((i * 0.37) % 3.2).toFixed(2);
    const durVal = (2.4 + ((i * 0.29) % 2.1)).toFixed(2);
    const palette = [
      'text-[#7DA7D9]/65 dark:text-white/85',
      'text-[#72E2E6]/75 dark:text-[#72E2E6]/85',
      'text-[#E0C860]/70 dark:text-[#FFF7CC]/80',
      'text-[#FFFFFF] dark:text-white/90',
    ];
    return {
      top: `${topVal}%`,
      left: `${leftVal}%`,
      size: sizeVal,
      delay: `${delayVal}s`,
      duration: `${durVal}s`,
      color: palette[i % palette.length],
    };
  });

  container.innerHTML =
    stardustDots.map(createStardustDotMarkup).join('') +
    heroGlints.map(createStarGlintMarkup).join('');
}

function initHeroFlyingStars() {
  const box = document.getElementById('hero-title-box');
  const layer = document.getElementById('hero-flying-stars');
  if (!box || !layer) return;

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  const colors = [
    'text-[#72E2E6]',
    'text-[#7DA7D9] dark:text-white',
    'text-[#E0C860] dark:text-[#FFF7CC]',
  ];

  const spawnStar = (originXPercent, originYPercent, tx, ty, delayMs = 0) => {
    if (layer.childElementCount >= 22) return;

    const star = document.createElement('span');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isDot = Math.random() < 0.28;
    const size = isDot ? 3 + Math.floor(Math.random() * 2) : 11 + Math.floor(Math.random() * 9);
    const dur = (1.15 + Math.random() * 0.45).toFixed(2);
    const rot = `${Math.round((Math.random() > 0.5 ? 1 : -1) * (20 + Math.random() * 55))}deg`;

    star.className = `hero-flying-star ${color} ${isDot ? 'stardust-dot' : 'starlight-glint'}`;
    star.style.left = `${originXPercent}%`;
    star.style.top = `${originYPercent}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    if (isDot) {
      star.style.backgroundColor = 'currentColor';
    } else {
      star.innerHTML = `<svg viewBox="0 0 24 24" fill="currentColor" class="w-full h-full block"><path d="${STARLIGHT_PATH}" /></svg>`;
    }

    star.style.setProperty('--tx', `${Math.round(tx)}px`);
    star.style.setProperty('--ty', `${Math.round(ty)}px`);
    star.style.setProperty('--rot', rot);
    star.style.setProperty('--dur', `${dur}s`);
    star.style.setProperty('--delay', `${(delayMs / 1000).toFixed(2)}s`);
    star.style.setProperty('--end-scale', (0.35 + Math.random() * 0.25).toFixed(2));

    star.addEventListener('animationend', () => {
      star.remove();
    }, { once: true });

    layer.appendChild(star);
  };

  const launchPerimeterFlight = () => {
    const trajectories = [
      { x: 6, y: 8, tx: -58, ty: -62, delay: 0 },
      { x: 28, y: 2, tx: -22, ty: -72, delay: 70 },
      { x: 68, y: 2, tx: 26, ty: -70, delay: 110 },
      { x: 94, y: 10, tx: 60, ty: -58, delay: 40 },
      { x: 98, y: 54, tx: 68, ty: -24, delay: 140 },
      { x: 88, y: 94, tx: 52, ty: 38, delay: 170 },
      { x: 10, y: 92, tx: -52, ty: 36, delay: 90 },
      { x: 2, y: 50, tx: -66, ty: -26, delay: 150 },
    ];

    trajectories.forEach((pt) => {
      const jitterX = (Math.random() - 0.5) * 14;
      const jitterY = (Math.random() - 0.5) * 14;
      spawnStar(pt.x, pt.y, pt.tx + jitterX, pt.ty + jitterY, pt.delay);
    });
  };

  let lastMoveTime = 0;

  box.addEventListener('mouseenter', () => {
    launchPerimeterFlight();
  });

  box.addEventListener('touchstart', () => {
    launchPerimeterFlight();
  }, { passive: true });

  box.addEventListener('mousemove', (e) => {
    const now = performance.now();
    if (now - lastMoveTime < 260) return;
    lastMoveTime = now;

    const rect = box.getBoundingClientRect();
    if (!rect.width || !rect.height) return;

    const relX = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const relY = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    const dirX = (relX - 50) * 1.1 + (Math.random() - 0.5) * 32;
    const dirY = -42 - Math.random() * 34;

    spawnStar(relX, relY, dirX, dirY, 0);
  }, { passive: true });
}

function renderMarqueeRibbons() {
  const variantClasses = {
    butter:
      'bg-[#FFF7CC] text-[#2F4860] border-y border-[#E6D990]',
    ice:
      'bg-[#DCEEFF] dark:bg-[#1A2837] text-[#2F4860] dark:text-[#DCEEFF] border-y border-[#BDDAF7] dark:border-[#2F4860]',
    cobalt:
      'bg-[#7DA7D9] text-[#2F4860] border-y border-[#5F8EC9]',
    navy:
      'bg-[#2F4860] text-[#FFF7CC] border-y border-[#1F3347]',
  };

  document.querySelectorAll('.marquee-ribbon').forEach((el) => {
    const text = el.getAttribute('data-text') || '';
    const variant = el.getAttribute('data-variant') || 'ice';
    const reverse = el.getAttribute('data-direction') === 'reverse';
    const cls = variantClasses[variant] || variantClasses.ice;
    const animCls = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

    const unit = `<span class="inline-flex items-center gap-6 px-6 font-syne font-bold text-xs sm:text-sm uppercase tracking-widest whitespace-nowrap">${escapeHtml(text)} <span class="opacity-60">✦</span></span>`;
    const track = unit.repeat(6);

    el.className = `marquee-ribbon overflow-hidden py-3 select-none ${cls}`;
    el.innerHTML = `<div class="${animCls}">${track}${track}</div>`;
  });
}

/* ================================================================ */
/* 3. ABOUT SKILLS: SOFTWARE STARS & PERSONAL SKILLS                */
/* ================================================================ */
function renderSkills() {
  const starsContainer = document.getElementById('software-stars');
  const personalContainer = document.getElementById('personal-skills');
  const tr = t(currentLang).skills;

  const softwareSkills = tr.softwareItems;

  if (starsContainer) {
    starsContainer.innerHTML = `
      <div class="w-full space-y-3">
        <div class="flex flex-wrap gap-2.5">
          ${softwareSkills
            .map(
              (skill, idx) => `
            <button
              type="button"
              data-skill-idx="${idx}"
              class="software-star-btn group inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl border-2 border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-[#203244] hover:border-[#7DA7D9] hover:-translate-y-0.5 transition-all cursor-pointer shadow-2xs"
            >
              <span class="w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold text-[#2F4860]" style="background:${skill.color};">★</span>
              <span class="font-syne font-bold text-xs text-[#2F4860] dark:text-white">${escapeHtml(skill.name)}</span>
            </button>`
            )
            .join('')}
        </div>
        <div id="software-skill-detail" class="px-4 py-2.5 rounded-xl bg-[#DCEEFF]/55 dark:bg-[#162331] border border-[#BDDAF7] dark:border-[#2F4860] text-xs font-mono text-[#2F4860] dark:text-[#FFF7CC]">
          ✦ ${escapeHtml(softwareSkills[0].name)} — ${escapeHtml(softwareSkills[0].level)}
        </div>
      </div>
    `;

    const detailEl = document.getElementById('software-skill-detail');
    starsContainer.querySelectorAll('.software-star-btn').forEach((btn) => {
      const showSkill = () => {
        const idx = Number(btn.getAttribute('data-skill-idx'));
        const s = softwareSkills[idx];
        if (s && detailEl) {
          detailEl.textContent = `✦ ${s.name} — ${s.level}`;
        }
      };
      btn.addEventListener('mouseenter', showSkill);
      btn.addEventListener('click', showSkill);
    });
  }

  if (personalContainer) {
    personalContainer.innerHTML = tr.personalItems
      .map(
        (label, index) => `
      <span class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-semibold border ${
        index % 2 === 0
          ? 'bg-[#FFF7CC] text-[#2F4860] border-[#E7DB99]'
          : 'bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] border-[#BDDAF7] dark:border-[#2F4860]'
      }">
        <span>✦</span>
        <span>${escapeHtml(label)}</span>
      </span>`
      )
      .join('');
  }
}

/* ================================================================ */
/* 4. CERTIFICATES CAROUSEL                                         */
/* ================================================================ */
function initCertificatesCarouselNav() {
  const track = document.getElementById('cert-track');
  const prevBtn = document.getElementById('cert-prev-btn');
  const nextBtn = document.getElementById('cert-next-btn');

  if (prevBtn && track) {
    prevBtn.addEventListener('click', () => {
      track.scrollBy({ left: -310, behavior: 'smooth' });
    });
  }
  if (nextBtn && track) {
    nextBtn.addEventListener('click', () => {
      track.scrollBy({ left: 310, behavior: 'smooth' });
    });
  }
}

function renderCertificates() {
  const track = document.getElementById('cert-track');
  if (!track) return;

  const certificates = getCertificates(currentLang);
  track.innerHTML = certificates
    .map(
      (cert) => `
    <a
      href="${escapeHtml(cert.url)}"
      target="_blank"
      rel="noopener noreferrer"
      class="group min-w-[265px] sm:min-w-[295px] max-w-[305px] shrink-0 snap-start rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] dark:hover:border-[#72E2E6] p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 flex flex-col justify-between gap-3"
    >
      <div class="space-y-2">
        <div class="flex items-center justify-between gap-2">
          <span class="font-mono text-[10px] font-bold text-[#7DA7D9] tracking-wider">${escapeHtml(cert.code)}</span>
          <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#FFF7CC] text-[#2F4860] border border-[#E7DB99]">
            ${escapeHtml(cert.badge)}
          </span>
        </div>
        <h3 class="font-syne font-bold text-sm sm:text-base text-[#2F4860] dark:text-white leading-snug group-hover:text-[#7DA7D9] transition-colors">
          ${escapeHtml(cert.title)}
        </h3>
        <p class="text-xs font-sans-body text-[#2F4860]/80 dark:text-[#DCEEFF]/80 font-medium">
          ${escapeHtml(cert.issuer)}
        </p>
        <p class="text-[11px] font-mono text-[#2F4860]/60 dark:text-[#DCEEFF]/60 leading-snug">
          ${escapeHtml(cert.meta)}
        </p>
      </div>

      <div class="pt-2.5 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between text-xs font-mono font-bold text-[#2F4860] dark:text-[#FFF7CC] group-hover:text-[#7DA7D9]">
        <span>${escapeHtml(cert.ctaLabel)}</span>
        <span>↗</span>
      </div>
    </a>`
    )
    .join('');
}

/* ================================================================ */
/* 5. UI DESIGN & WEB DEV PROJECT CARDS                             */
/* ================================================================ */
function renderProjectCard(project) {
  const visibleTools = project.tools.slice(0, 4);
  const extraCount = project.tools.length - visibleTools.length;
  const pui = t(currentLang).projectUi;

  return `
  <article class="reveal-on-scroll group bg-white dark:bg-[#1A2837] rounded-3xl border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] dark:hover:border-[#72E2E6] overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#7DA7D9]/15 transition-all duration-300 flex flex-col justify-between">
    <div>
      <button
        type="button"
        data-open-project="${escapeHtml(project.id)}"
        class="relative block w-full aspect-[16/10] bg-[#DCEEFF]/40 dark:bg-[#162331] overflow-hidden cursor-pointer text-left"
      >
        <img
          src="${escapeHtml(project.coverImage)}"
          alt="${escapeHtml(project.title)}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-[#2F4860]/60 via-transparent to-transparent opacity-80"></div>
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span class="px-2.5 py-1 rounded-full bg-white/95 dark:bg-[#162331]/95 text-[#2F4860] dark:text-[#FFF7CC] text-[10px] font-mono font-bold border border-[#DCEEFF] dark:border-[#2F4860] shadow-xs">
            ${escapeHtml(project.categoryLabel)}
          </span>
          <span class="px-2.5 py-1 rounded-full bg-[#2F4860] text-[#FFF7CC] text-[10px] font-mono font-bold shadow-xs">
            ${escapeHtml(project.year)}
          </span>
        </div>
      </button>

      <div class="p-6 sm:p-7 space-y-4">
        <div class="space-y-1.5">
          <h3 class="font-syne font-extrabold text-xl sm:text-2xl text-[#2F4860] dark:text-white leading-tight group-hover:text-[#7DA7D9] transition-colors">
            ${escapeHtml(project.title)}
          </h3>
          <p class="font-fraunces italic text-xs sm:text-sm text-[#7DA7D9] dark:text-[#FFF7CC]">
            ${escapeHtml(project.subtitle)}
          </p>
        </div>

        <p class="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/85 leading-relaxed font-sans-body line-clamp-3">
          ${escapeHtml(project.summary)}
        </p>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${visibleTools
            .map(
              (tool) => `
            <span class="px-2.5 py-0.5 rounded-full bg-[#DCEEFF]/60 dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] text-[11px] font-mono font-semibold border border-[#BDDAF7]/60 dark:border-[#2F4860]">
              ${escapeHtml(tool)}
            </span>`
            )
            .join('')}
          ${
            extraCount > 0
              ? `<span class="px-2.5 py-0.5 rounded-full bg-[#FFF7CC] text-[#2F4860] text-[11px] font-mono font-bold border border-[#E7DB99]">+${extraCount}</span>`
              : ''
          }
        </div>
      </div>
    </div>

    <div class="px-6 sm:px-7 pb-6 pt-4 border-t border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between gap-3">
      <div class="min-w-0">
        <p class="text-[10px] font-mono uppercase text-[#7DA7D9] font-bold">${escapeHtml(pui.roleLabel)}</p>
        <p class="text-xs font-semibold text-[#2F4860] dark:text-white truncate">${escapeHtml(project.role)}</p>
      </div>
      <button
        type="button"
        data-open-project="${escapeHtml(project.id)}"
        class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2F4860] hover:bg-[#7DA7D9] text-[#FFF7CC] hover:text-[#2F4860] dark:bg-[#FFF7CC] dark:text-[#2F4860] dark:hover:bg-[#DCEEFF] font-syne font-bold text-xs transition-all cursor-pointer active:scale-95"
      >
        <span>${escapeHtml(pui.caseStudyCta)}</span>
        <span>→</span>
      </button>
    </div>
  </article>`;
}

function renderProjects() {
  const uiGrid = document.getElementById('ui-design-grid');
  const webGrid = document.getElementById('web-dev-grid');

  if (uiGrid) {
    uiGrid.innerHTML = getUiDesignProjects(currentLang).map(renderProjectCard).join('');
  }
  if (webGrid) {
    webGrid.innerHTML = getWebDevProjects(currentLang).map(renderProjectCard).join('');
  }

  document.querySelectorAll('[data-open-project]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-open-project');
      if (id) openCaseStudyModal(id);
    });
  });
}

/* ================================================================ */
/* 6. FULL-PAGE CASE STUDY OVERLAY (UI & WEB DEV PROJECTS)          */
/* ================================================================ */
let activeProjectIndex = -1;
let activeGalleryIdx = 0;

function closeCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modal.innerHTML = '';
  activeProjectIndex = -1;
  document.body.style.overflow = '';
}

function openCaseStudyModal(projectId) {
  const projects = getAllProjects(currentLang);
  const index = projects.findIndex((p) => p.id === projectId);
  if (index === -1) return;
  activeProjectIndex = index;
  activeGalleryIdx = 0;
  renderCaseStudyModal();
}

function renderCaseStudyModal() {
  const modal = document.getElementById('case-study-modal');
  const projects = getAllProjects(currentLang);
  if (!modal || activeProjectIndex < 0 || !projects[activeProjectIndex]) return;

  const project = projects[activeProjectIndex];
  const pui = t(currentLang).projectUi;
  const images = project.galleryImages && project.galleryImages.length > 0 ? project.galleryImages : [project.coverImage];
  const currentImg = images[activeGalleryIdx] || images[0];
  const total = projects.length;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  modal.innerHTML = `
    <!-- Sticky Top Header Bar -->
    <div class="sticky top-0 z-30 bg-[#FAFCFF]/95 dark:bg-[#111A24]/95 backdrop-blur-md border-b border-[#DCEEFF] dark:border-[#2F4860] px-4 sm:px-8 py-3.5">
      <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <button id="cs-back-top" type="button" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEEFF]/70 dark:bg-[#203244] hover:bg-[#7DA7D9] text-[#2F4860] dark:text-white hover:text-[#2F4860] text-xs font-syne font-bold transition-colors cursor-pointer">
          <span>←</span>
          <span>${escapeHtml(pui.backBtn)}</span>
        </button>

        <div class="flex items-center gap-2">
          <button id="cs-prev-top" type="button" aria-label="Previous Project" class="w-8 h-8 rounded-full border border-[#BDDAF7] dark:border-[#2F4860] hover:bg-[#DCEEFF] dark:hover:bg-[#203244] flex items-center justify-center text-sm font-bold cursor-pointer">‹</button>
          <span class="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] border border-[#E7DB99]">
            ${activeProjectIndex + 1} / ${total}
          </span>
          <button id="cs-next-top" type="button" aria-label="Next Project" class="w-8 h-8 rounded-full border border-[#BDDAF7] dark:border-[#2F4860] hover:bg-[#DCEEFF] dark:hover:bg-[#203244] flex items-center justify-center text-sm font-bold cursor-pointer">›</button>
          <button id="cs-close-top" type="button" aria-label="Close Case Study" class="ml-1 w-8 h-8 rounded-full bg-[#2F4860] text-[#FFF7CC] hover:bg-[#7DA7D9] hover:text-[#2F4860] flex items-center justify-center text-sm font-bold cursor-pointer">✕</button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-5xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-12 space-y-10 flex-1">
      <!-- Header Info -->
      <div class="space-y-4">
        <div class="flex flex-wrap items-center gap-2.5">
          <span class="px-3 py-1 rounded-full bg-[#2F4860] text-[#FFF7CC] font-mono text-xs font-bold">
            ${escapeHtml(project.categoryLabel)}
          </span>
          <span class="px-3 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] font-mono text-xs font-bold border border-[#E7DB99]">
            ${escapeHtml(project.year)}
          </span>
          <span class="px-3 py-1 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] font-mono text-xs font-semibold">
            ${escapeHtml(project.client)}
          </span>
        </div>

        <h1 class="font-syne font-extrabold text-3xl sm:text-5xl text-[#2F4860] dark:text-white tracking-tight leading-tight">
          ${escapeHtml(project.title)}
        </h1>
        <p class="font-fraunces italic text-base sm:text-xl text-[#7DA7D9] dark:text-[#FFF7CC]">
          ${escapeHtml(project.subtitle)}
        </p>

        <!-- Action Links -->
        <div class="flex flex-wrap items-center gap-3 pt-2">
          ${
            project.liveUrl
              ? `<a href="${escapeHtml(project.liveUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F4860] hover:bg-[#7DA7D9] text-[#FFF7CC] hover:text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider shadow-sm transition-all">
                  <span>${escapeHtml(pui.liveWebsite)}</span><span>↗</span>
                </a>`
              : ''
          }
          ${
            project.figmaShareUrl
              ? `<a href="${escapeHtml(project.figmaShareUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7DA7D9] hover:bg-[#2F4860] text-[#2F4860] hover:text-[#FFF7CC] font-syne font-bold text-xs uppercase tracking-wider shadow-sm transition-all">
                  <span>${escapeHtml(pui.openFigma)}</span><span>↗</span>
                </a>`
              : ''
          }
          ${
            project.githubUrl
              ? `<a href="${escapeHtml(project.githubUrl)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-[#203244] border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] text-[#2F4860] dark:text-white font-syne font-bold text-xs uppercase tracking-wider transition-all">
                  <span>${escapeHtml(pui.githubRepo)}</span><span>↗</span>
                </a>`
              : ''
          }
        </div>
      </div>

      <!-- Stats Row -->
      ${
        project.stats && project.stats.length
          ? `<div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
              ${project.stats
                .map(
                  (st) => `
                <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860]">
                  <p class="text-[11px] font-mono uppercase text-[#7DA7D9] font-bold">${escapeHtml(st.label)}</p>
                  <p class="font-syne font-extrabold text-xl text-[#2F4860] dark:text-white mt-1">${escapeHtml(st.value)}</p>
                </div>`
                )
                .join('')}
            </div>`
          : ''
      }

      <!-- Visual Preview + Gallery Switcher -->
      <div class="space-y-4">
        <div class="rounded-3xl overflow-hidden border-2 border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-[#1A2837] shadow-lg">
          <img id="cs-main-img" src="${escapeHtml(currentImg)}" alt="${escapeHtml(project.title)}" class="w-full max-h-[520px] object-cover object-top" />
        </div>
        ${
          images.length > 1
            ? `<div class="flex flex-wrap gap-3">
                ${images
                  .map(
                    (img, i) => `
                  <button
                    type="button"
                    data-gallery-idx="${i}"
                    class="cs-thumb-btn group relative rounded-xl overflow-hidden border-2 ${
                      i === activeGalleryIdx
                        ? 'border-[#7DA7D9] ring-2 ring-[#7DA7D9]/40'
                        : 'border-[#DCEEFF] dark:border-[#2F4860] opacity-75 hover:opacity-100'
                    } cursor-pointer transition-all"
                  >
                    <img src="${escapeHtml(img)}" alt="Preview ${i + 1}" class="w-24 h-16 object-cover" />
                    ${
                      project.galleryLabels && project.galleryLabels[i]
                        ? `<span class="block px-2 py-1 text-[10px] font-mono font-semibold bg-white dark:bg-[#1A2837] text-[#2F4860] dark:text-[#DCEEFF] truncate max-w-[110px]">${escapeHtml(project.galleryLabels[i])}</span>`
                        : ''
                    }
                  </button>`
                  )
                  .join('')}
              </div>`
            : ''
        }
      </div>

      <!-- Demo Credentials (RUNA) -->
      ${
        project.demoCredentials
          ? `<div class="p-5 sm:p-6 rounded-2xl bg-[#FFF7CC]/70 dark:bg-[#1A2837] border-2 border-[#E7DB99] dark:border-[#72E2E6]/40 space-y-4">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <p class="font-mono text-xs font-bold uppercase text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(pui.demoTitle)}</p>
                  <p class="text-xs text-[#2F4860]/80 dark:text-[#DCEEFF]/80">${escapeHtml(pui.demoPasswordDesc)} <code class="px-2 py-0.5 rounded bg-white dark:bg-[#203244] font-mono font-bold">${escapeHtml(project.demoCredentials.password)}</code></p>
                </div>
                <button type="button" data-copy-cred="${escapeHtml(project.demoCredentials.password)}" class="copy-cred-btn px-3 py-1.5 rounded-full bg-[#2F4860] text-[#FFF7CC] text-xs font-mono font-bold cursor-pointer hover:bg-[#7DA7D9] hover:text-[#2F4860]">${escapeHtml(pui.copyPassword)}</button>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${project.demoCredentials.accounts
                  .map(
                    (acc) => `
                  <div class="p-3.5 rounded-xl bg-white dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] flex items-center justify-between gap-3">
                    <div class="min-w-0">
                      <span class="text-[10px] font-mono font-bold uppercase text-[#7DA7D9]">${escapeHtml(acc.role)} · ${escapeHtml(acc.badge)}</span>
                      <p class="font-mono text-xs font-bold text-[#2F4860] dark:text-white truncate">${escapeHtml(acc.email)}</p>
                    </div>
                    <button type="button" data-copy-cred="${escapeHtml(acc.email)}" class="copy-cred-btn shrink-0 px-2.5 py-1 rounded-lg bg-[#DCEEFF] dark:bg-[#162331] text-[#2F4860] dark:text-[#FFF7CC] text-[11px] font-mono font-bold cursor-pointer hover:bg-[#7DA7D9] hover:text-[#2F4860]">${escapeHtml(pui.copyBtn)}</button>
                  </div>`
                  )
                  .join('')}
              </div>
            </div>`
          : ''
      }

      <!-- Overview, Challenge & Solution -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="md:col-span-3 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2">
          <h2 class="font-syne font-bold text-lg sm:text-xl text-[#2F4860] dark:text-white">${escapeHtml(pui.overview)}</h2>
          <p class="text-sm sm:text-base text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed">${escapeHtml(project.overview)}</p>
        </div>

        <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.challenge)}</h3>
            <p class="text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed">${escapeHtml(project.challenge)}</p>
          </div>
          <div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.solution)}</h3>
            <p class="text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed">${escapeHtml(project.solution)}</p>
          </div>
        </div>
      </div>

      <!-- Deliverables & Color Palette / Tools -->
      <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div class="md:col-span-7 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.deliverables)}</h3>
          <ul class="space-y-2">
            ${project.deliverables
              .map(
                (item) => `
              <li class="flex items-start gap-2.5 text-sm text-[#2F4860]/90 dark:text-[#DCEEFF]/90">
                <span class="text-[#7DA7D9] font-bold mt-0.5">✓</span>
                <span>${escapeHtml(item)}</span>
              </li>`
              )
              .join('')}
          </ul>
        </div>

        <div class="md:col-span-5 space-y-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.toolsStack)}</h3>
            <div class="flex flex-wrap gap-2">
              ${project.tools
                .map(
                  (tool) => `<span class="px-3 py-1 rounded-full bg-[#DCEEFF]/70 dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] text-xs font-mono font-semibold">${escapeHtml(tool)}</span>`
                )
                .join('')}
            </div>
          </div>

          ${
            project.colorPalette && project.colorPalette.length
              ? `<div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
                  <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.colorPalette)}</h3>
                  <div class="flex flex-wrap gap-3">
                    ${project.colorPalette
                      .map(
                        (hex) => `
                      <div class="flex items-center gap-2 px-2.5 py-1.5 rounded-xl border border-[#DCEEFF] dark:border-[#2F4860]">
                        <span class="w-5 h-5 rounded-full border border-black/15" style="background:${escapeHtml(hex)};"></span>
                        <span class="font-mono text-[11px] font-bold">${escapeHtml(hex)}</span>
                      </div>`
                      )
                      .join('')}
                  </div>
                </div>`
              : ''
          }
        </div>
      </div>

      <!-- Optional Figma Embed -->
      ${
        project.figmaEmbedUrl
          ? `<div class="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
              <div class="flex items-center justify-between gap-4">
                <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(pui.figmaPreview)}</h3>
                ${
                  project.figmaShareUrl
                    ? `<a href="${escapeHtml(project.figmaShareUrl)}" target="_blank" rel="noopener noreferrer" class="text-xs font-mono font-bold text-[#7DA7D9] hover:underline">${escapeHtml(pui.openFullscreen)}</a>`
                    : ''
                }
              </div>
              <div class="rounded-2xl overflow-hidden border border-[#DCEEFF] dark:border-[#2F4860] aspect-video bg-[#FAFCFF] dark:bg-[#111A24]">
                <iframe src="${escapeHtml(project.figmaEmbedUrl)}" class="w-full h-full border-0" allowfullscreen loading="lazy" title="Figma Preview"></iframe>
              </div>
            </div>`
          : ''
      }
    </div>

    <!-- Bottom Footer Navigation -->
    <div class="border-t border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-[#172431] px-4 sm:px-8 py-5 mt-8">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
        <button id="cs-prev-bottom" type="button" class="px-4 py-2 rounded-full border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] text-xs font-syne font-bold cursor-pointer">
          ${escapeHtml(pui.prevProject)}
        </button>
        <button id="cs-back-bottom" type="button" class="px-5 py-2 rounded-full bg-[#FFF7CC] text-[#2F4860] border border-[#E7DB99] text-xs font-syne font-bold cursor-pointer hover:bg-[#DCEEFF]">
          ${escapeHtml(pui.backPortfolio)}
        </button>
        <button id="cs-next-bottom" type="button" class="px-4 py-2 rounded-full bg-[#2F4860] text-[#FFF7CC] text-xs font-syne font-bold cursor-pointer hover:bg-[#7DA7D9] hover:text-[#2F4860]">
          ${escapeHtml(pui.nextProject)}
        </button>
      </div>
    </div>
  `;

  const goPrev = () => {
    activeProjectIndex = (activeProjectIndex - 1 + total) % total;
    activeGalleryIdx = 0;
    renderCaseStudyModal();
  };
  const goNext = () => {
    activeProjectIndex = (activeProjectIndex + 1) % total;
    activeGalleryIdx = 0;
    renderCaseStudyModal();
  };

  modal.querySelector('#cs-back-top')?.addEventListener('click', closeCaseStudyModal);
  modal.querySelector('#cs-close-top')?.addEventListener('click', closeCaseStudyModal);
  modal.querySelector('#cs-back-bottom')?.addEventListener('click', closeCaseStudyModal);
  modal.querySelector('#cs-prev-top')?.addEventListener('click', goPrev);
  modal.querySelector('#cs-prev-bottom')?.addEventListener('click', goPrev);
  modal.querySelector('#cs-next-top')?.addEventListener('click', goNext);
  modal.querySelector('#cs-next-bottom')?.addEventListener('click', goNext);

  modal.querySelectorAll('.cs-thumb-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      activeGalleryIdx = Number(btn.getAttribute('data-gallery-idx')) || 0;
      renderCaseStudyModal();
    });
  });

  modal.querySelectorAll('.copy-cred-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const val = btn.getAttribute('data-copy-cred') || '';
      const original = btn.textContent;
      copyText(val, () => {
        btn.textContent = pui.copiedBtn;
        window.setTimeout(() => {
          btn.textContent = original;
        }, 1600);
      });
    });
  });
}

/* ================================================================ */
/* 7. IT BUSINESS ANALYST SECTION + FULL-PAGE RUNA DOC VIEWER       */
/* ================================================================ */
let activeRunaChapterId = 'case-study';

function renderITBASection() {
  const container = document.getElementById('itba-showcase');
  if (!container) return;

  const runa = getRunaData(currentLang);
  const rui = t(currentLang).runaUi;

  container.innerHTML = `
    <div class="bg-white dark:bg-[#1A2837] rounded-3xl border-2 border-[#DCEEFF] dark:border-[#2F4860] shadow-xl shadow-[#7DA7D9]/10 overflow-hidden">
      <div class="grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <!-- Left: Clean Cover Preview -->
        <div class="lg:col-span-5 bg-[#DCEEFF]/35 dark:bg-[#162331] flex items-center justify-center p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#DCEEFF] dark:border-[#2F4860]">
          <div class="w-full rounded-2xl overflow-hidden border-2 border-[#DCEEFF] dark:border-[#2F4860] shadow-md bg-white dark:bg-[#1A2837]">
            <img
              src="${escapeHtml(runa.itBaCaseStudy.coverImage)}"
              alt="${escapeHtml(runa.itBaCaseStudy.title)}"
              class="w-full aspect-[16/10] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <!-- Right: Consolidated RUNA Master Document Summary -->
        <div class="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between gap-6">
          <div class="space-y-4">
            <div class="flex flex-wrap items-center gap-2">
              <span class="px-3 py-1 rounded-full bg-[#2F4860] text-[#FFF7CC] font-mono text-xs font-bold">
                ${escapeHtml(runa.itBaCaseStudy.code)}
              </span>
              <span class="px-3 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] font-mono text-xs font-bold border border-[#E7DB99]">
                ${escapeHtml(runa.masterPdf.pageCount)} ${escapeHtml(rui.pagesUnit)} · ${escapeHtml(runa.masterPdf.sizeLabel)}
              </span>
              <span class="px-3 py-1 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] font-mono text-xs font-semibold">
                ${escapeHtml(runa.itBaCaseStudy.year)} · ${escapeHtml(runa.projectMeta.methodology)}
              </span>
            </div>

            <div>
              <h3 class="font-syne font-extrabold text-2xl sm:text-3xl text-[#2F4860] dark:text-white leading-tight">
                ${escapeHtml(runa.itBaCaseStudy.title)}
              </h3>
              <p class="font-fraunces italic text-sm sm:text-base text-[#7DA7D9] dark:text-[#FFF7CC] mt-1">
                ${escapeHtml(runa.itBaCaseStudy.subtitle)} · ${escapeHtml(runa.itBaCaseStudy.client)}
              </p>
            </div>

            <p class="text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed font-sans-body">
              ${escapeHtml(runa.itBaCaseStudy.summary)}
            </p>

            <!-- 6 Chapters Quick Preview -->
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              ${runa.chapters
                .map(
                  (ch) => `
                <button
                  type="button"
                  data-open-runa-chapter="${escapeHtml(ch.id)}"
                  class="text-left p-2.5 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] transition-all cursor-pointer group"
                >
                  <div class="flex items-center justify-between text-[10px] font-mono text-[#7DA7D9] font-bold">
                    <span>${escapeHtml(ch.number)}</span>
                    <span>${escapeHtml(ch.pages)}</span>
                  </div>
                  <p class="font-syne font-bold text-xs text-[#2F4860] dark:text-white group-hover:text-[#7DA7D9] truncate mt-0.5">
                    ${escapeHtml(ch.shortTitle)}
                  </p>
                </button>`
                )
                .join('')}
            </div>
          </div>

          <div class="pt-4 border-t border-[#DCEEFF] dark:border-[#2F4860] flex flex-wrap items-center justify-between gap-3">
            <button
              id="open-runa-viewer-btn"
              type="button"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2F4860] hover:bg-[#7DA7D9] text-[#FFF7CC] hover:text-[#2F4860] font-syne font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer active:scale-95"
            >
              <span>${escapeHtml(rui.openCaseStudyBtn)}</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  document.getElementById('open-runa-viewer-btn')?.addEventListener('click', () => {
    openRunaDocModal('case-study');
  });

  container.querySelectorAll('[data-open-runa-chapter]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const chId = btn.getAttribute('data-open-runa-chapter') || 'case-study';
      openRunaDocModal(chId);
    });
  });
}

function closeRunaDocModal() {
  const modal = document.getElementById('runa-doc-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  modal.classList.remove('flex');
  modal.innerHTML = '';
  document.body.style.overflow = '';
}

function openRunaDocModal(chapterId = 'case-study') {
  activeRunaChapterId = chapterId;
  renderRunaDocModal();
}

function renderRunaChapterBody(chapterId, runa, rui) {
  if (chapterId === 'case-study') {
    return `
      <div class="space-y-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch1Problems)}</h3>
            <div class="space-y-2.5">
              ${runa.caseStudyData.problems
                .map(
                  (p) => `
                <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
                  <p class="font-syne font-bold text-xs text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(p.title)}</p>
                  <p class="text-xs text-[#2F4860]/80 dark:text-[#DCEEFF]/85 mt-0.5">${escapeHtml(p.desc)}</p>
                </div>`
                )
                .join('')}
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch1Objectives)}</h3>
            <ul class="space-y-2 text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90">
              ${runa.caseStudyData.objectives
                .map(
                  (obj) => `<li class="flex items-start gap-2"><span class="text-[#7DA7D9] font-bold">✦</span><span>${escapeHtml(obj)}</span></li>`
                )
                .join('')}
            </ul>
            <div class="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860]">
              <p class="font-mono text-[11px] font-bold uppercase text-[#7DA7D9] mb-2">${escapeHtml(rui.ch1Outcomes)}</p>
              <ul class="space-y-1.5 text-xs text-[#2F4860]/85 dark:text-[#DCEEFF]/85">
                ${runa.caseStudyData.outcomes
                  .map(
                    (out) => `<li class="flex items-start gap-2"><span class="text-emerald-600 font-bold">✓</span><span>${escapeHtml(out)}</span></li>`
                  )
                  .join('')}
              </ul>
            </div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch1Responsibilities)}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            ${runa.caseStudyData.responsibilities
              .map(
                (r) => `
              <div class="p-4 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
                <h4 class="font-syne font-bold text-xs text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(r.title)}</h4>
                <p class="text-xs text-[#2F4860]/80 dark:text-[#DCEEFF]/85 mt-1 leading-relaxed">${escapeHtml(r.desc)}</p>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2.5">
            <h4 class="font-syne font-bold text-base text-[#2F4860] dark:text-white">${escapeHtml(rui.ch1AdminNeeds)}</h4>
            <ul class="space-y-1.5 text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/85">
              ${runa.caseStudyData.adminCapabilities
                .map((c) => `<li class="flex items-start gap-2"><span class="text-[#7DA7D9]">•</span><span>${escapeHtml(c)}</span></li>`)
                .join('')}
            </ul>
          </div>
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2.5">
            <h4 class="font-syne font-bold text-base text-[#2F4860] dark:text-white">${escapeHtml(rui.ch1WargaNeeds)}</h4>
            <ul class="space-y-1.5 text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/85">
              ${runa.caseStudyData.wargaCapabilities
                .map((c) => `<li class="flex items-start gap-2"><span class="text-[#7DA7D9]">•</span><span>${escapeHtml(c)}</span></li>`)
                .join('')}
            </ul>
          </div>
        </div>

        <div class="p-5 sm:p-6 rounded-2xl bg-[#FFF7CC]/75 dark:bg-[#203244] border border-[#E7DB99] dark:border-[#2F4860]">
          <p class="font-mono text-[11px] font-bold uppercase text-[#2F4860] dark:text-[#FFF7CC] mb-1">${escapeHtml(rui.ch1KeyLearning)}</p>
          <p class="text-xs sm:text-sm text-[#2F4860] dark:text-[#DCEEFF] leading-relaxed">${escapeHtml(runa.caseStudyData.keyLearning)}</p>
        </div>
      </div>
    `;
  }

  if (chapterId === 'brd') {
    return `
      <div class="space-y-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch2ExecSummary)}</h3>
          <p class="text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 leading-relaxed">${escapeHtml(runa.brdData.executiveSummary)}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch2ProblemMap)}</h3>
            <div class="space-y-2.5">
              ${runa.brdData.problemMatrix
                .map(
                  (row) => `
                <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs">
                  <p class="font-bold text-[#2F4860] dark:text-white">${escapeHtml(row.area)}</p>
                  <p class="text-[#7DA7D9] dark:text-[#FFF7CC] mt-0.5">→ ${escapeHtml(row.need)}</p>
                </div>`
                )
                .join('')}
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch2Stakeholders)}</h3>
            <div class="space-y-2.5">
              ${runa.brdData.stakeholders
                .map(
                  (st) => `
                <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs">
                  <p class="font-syne font-bold text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(st.name)}</p>
                  <p class="text-[#2F4860]/80 dark:text-[#DCEEFF]/85 mt-0.5">${escapeHtml(st.interest)}</p>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch2BrHeading)}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${runa.brdData.businessRequirements
              .map(
                (br) => `
              <div class="p-3.5 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
                <div class="flex items-center gap-2 mb-1">
                  <span class="px-2 py-0.5 rounded bg-[#2F4860] text-[#FFF7CC] font-mono text-[10px] font-bold">${escapeHtml(br.id)}</span>
                  <span class="font-syne font-bold text-xs text-[#2F4860] dark:text-white">${escapeHtml(br.area)}</span>
                </div>
                <p class="text-xs text-[#2F4860]/85 dark:text-[#DCEEFF]/85">${escapeHtml(br.desc)}</p>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-5 rounded-2xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860]">
            <p class="font-mono text-xs font-bold text-emerald-600 mb-1">${escapeHtml(rui.ch2InScope)}</p>
            <p class="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90">${escapeHtml(runa.brdData.scope.inScope)}</p>
          </div>
          <div class="p-5 rounded-2xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860]">
            <p class="font-mono text-xs font-bold text-amber-600 mb-1">${escapeHtml(rui.ch2OutScope)}</p>
            <p class="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90">${escapeHtml(runa.brdData.scope.outOfScope)}</p>
          </div>
        </div>
      </div>
    `;
  }

  if (chapterId === 'srs') {
    return `
      <div class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${runa.srsData.actors
            .map(
              (a) => `
            <div class="p-5 rounded-2xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860]">
              <span class="px-2.5 py-0.5 rounded-full bg-[#2F4860] text-[#FFF7CC] font-mono text-xs font-bold">${escapeHtml(a.actor)}</span>
              <p class="text-xs sm:text-sm text-[#2F4860]/85 dark:text-[#DCEEFF]/90 mt-2">${escapeHtml(a.access)}</p>
            </div>`
            )
            .join('')}
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch3FrHeading)}</h3>
          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="border-b-2 border-[#DCEEFF] dark:border-[#2F4860] font-mono text-[#7DA7D9]">
                  <th class="py-2 pr-3">${escapeHtml(rui.ch3Id)}</th>
                  <th class="py-2 pr-3">${escapeHtml(rui.ch3Actor)}</th>
                  <th class="py-2 pr-3">${escapeHtml(rui.ch3Spec)}</th>
                  <th class="py-2">${escapeHtml(rui.ch3Trace)}</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-[#DCEEFF]/70 dark:divide-[#2F4860]/70">
                ${runa.srsData.functionalRequirements
                  .map(
                    (fr) => `
                  <tr>
                    <td class="py-2 pr-3 font-mono font-bold text-[#2F4860] dark:text-[#FFF7CC] whitespace-nowrap">${escapeHtml(fr.id)}</td>
                    <td class="py-2 pr-3 font-mono whitespace-nowrap">${escapeHtml(fr.actor)}</td>
                    <td class="py-2 pr-3 text-[#2F4860]/85 dark:text-[#DCEEFF]/90">${escapeHtml(fr.desc)}</td>
                    <td class="py-2 font-mono font-bold text-[#7DA7D9] whitespace-nowrap">${escapeHtml(fr.br)}</td>
                  </tr>`
                  )
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2.5">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch3RulesHeading)}</h3>
            ${runa.srsData.businessRules
              .map(
                (rb) => `
              <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs">
                <span class="font-mono font-bold text-[#7DA7D9]">${escapeHtml(rb.id)}:</span>
                <span> ${escapeHtml(rb.rule)}</span>
              </div>`
              )
              .join('')}
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
            <div>
              <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white mb-2">${escapeHtml(rui.ch3EntitiesHeading)}</h3>
              <p class="text-xs font-mono text-[#7DA7D9] mb-2">${escapeHtml(runa.srsData.technicalEnv)}</p>
              <div class="flex flex-wrap gap-1.5">
                ${runa.srsData.dataEntities
                  .map(
                    (ent) => `<span class="px-2.5 py-1 rounded-full bg-[#DCEEFF]/70 dark:bg-[#203244] text-[11px] font-mono font-semibold">${escapeHtml(ent)}</span>`
                  )
                  .join('')}
              </div>
            </div>
            <div class="pt-3 border-t border-[#DCEEFF] dark:border-[#2F4860] space-y-1.5">
              <p class="font-mono text-xs font-bold text-[#7DA7D9]">${escapeHtml(rui.ch3TraceHeading)}</p>
              ${runa.srsData.traceability
                .map(
                  (trItem) => `<p class="text-xs"><strong class="font-mono">${escapeHtml(trItem.map)}:</strong> ${escapeHtml(trItem.criteria)}</p>`
                )
                .join('')}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (chapterId === 'business-process') {
    return `
      <div class="space-y-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
          <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch4Comparison)}</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${runa.businessProcessData.asIsToBe
              .map(
                (item) => `
              <div class="p-4 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs space-y-1.5">
                <p class="font-syne font-bold text-sm text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(item.area)}</p>
                <p><strong class="text-rose-500">As-Is:</strong> ${escapeHtml(item.asIs)}</p>
                <p><strong class="text-emerald-600">To-Be:</strong> ${escapeHtml(item.toBe)}</p>
              </div>`
              )
              .join('')}
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch4PaymentFlow)}</h3>
            <p class="text-xs font-mono text-[#7DA7D9]">${escapeHtml(runa.businessProcessData.paymentFlow.actors)}</p>
            <div class="space-y-2">
              ${runa.businessProcessData.paymentFlow.steps
                .map(
                  (s) => `
                <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs">
                  <span class="font-mono font-bold text-[#7DA7D9]">${escapeHtml(s.step)} (${escapeHtml(s.actor)}):</span>
                  <span> ${escapeHtml(s.activity)}</span>
                </div>`
                )
                .join('')}
            </div>
          </div>

          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
            <h3 class="font-syne font-bold text-lg text-[#2F4860] dark:text-white">${escapeHtml(rui.ch4ComplaintFlow)}</h3>
            <div class="flex flex-wrap gap-1.5">
              ${runa.businessProcessData.complaintFlow.statuses
                .map(
                  (st) => `<span class="px-2.5 py-0.5 rounded-full bg-[#FFF7CC] text-[#2F4860] text-[10px] font-mono font-bold border border-[#E7DB99]">${escapeHtml(st)}</span>`
                )
                .join('')}
            </div>
            <div class="space-y-2">
              ${runa.businessProcessData.complaintFlow.steps
                .map(
                  (s) => `
                <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] text-xs">
                  <span class="font-mono font-bold text-[#7DA7D9]">${escapeHtml(s.step)} (${escapeHtml(s.actor)}):</span>
                  <span> ${escapeHtml(s.activity)}</span>
                </div>`
                )
                .join('')}
            </div>
          </div>
        </div>

        <div class="p-5 rounded-2xl bg-[#DCEEFF]/50 dark:bg-[#203244] border border-[#BDDAF7] dark:border-[#2F4860] text-xs sm:text-sm">
          <strong class="font-mono text-[#2F4860] dark:text-[#FFF7CC]">${escapeHtml(rui.ch4Controls)}</strong>
          <span> ${escapeHtml(runa.businessProcessData.controlsAndOpenIssues)}</span>
        </div>
      </div>
    `;
  }

  if (chapterId === 'product-backlog') {
    return `
      <div class="space-y-6">
        ${runa.backlogData.sprints
          .map(
            (sprint) => `
          <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-[#DCEEFF] dark:border-[#2F4860]">
              <div>
                <h3 class="font-syne font-extrabold text-lg text-[#2F4860] dark:text-white">${escapeHtml(sprint.name)}</h3>
                <p class="text-xs text-[#7DA7D9] font-mono">${escapeHtml(rui.ch5Deliverable)}: ${escapeHtml(sprint.deliverable)}</p>
              </div>
              <div class="flex flex-wrap gap-2 text-[11px] font-mono">
                <span class="px-2.5 py-1 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] font-semibold">${escapeHtml(rui.ch5Plan)}: ${escapeHtml(sprint.timelinePlan)}</span>
                <span class="px-2.5 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] border border-[#E7DB99] font-bold">${escapeHtml(rui.ch5Actual)}: ${escapeHtml(sprint.timelineActual)}</span>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${sprint.items
                .map(
                  (pb) => `
                <div class="p-3.5 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] space-y-1">
                  <div class="flex items-center justify-between gap-2">
                    <span class="font-mono text-[11px] font-bold text-[#7DA7D9]">${escapeHtml(pb.id)}</span>
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                      pb.priority === rui.ch5PriorityHigh || pb.priority === 'High' || pb.priority === 'Tinggi'
                        ? 'bg-[#2F4860] text-[#FFF7CC]'
                        : 'bg-[#DCEEFF] text-[#2F4860]'
                    }">${escapeHtml(pb.priority)}</span>
                  </div>
                  <p class="font-syne font-bold text-xs sm:text-sm text-[#2F4860] dark:text-white">${escapeHtml(pb.title)}</p>
                  <p class="text-xs text-[#2F4860]/80 dark:text-[#DCEEFF]/85">${escapeHtml(pb.desc)}</p>
                </div>`
                )
                .join('')}
            </div>
          </div>`
          )
          .join('')}
      </div>
    `;
  }

  return `
    <div class="space-y-6">
      <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-4">
        <p class="text-sm text-[#2F4860]/90 dark:text-[#DCEEFF]/90 leading-relaxed">${escapeHtml(runa.uatData.objective)}</p>
        <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
          ${runa.uatData.indicators
            .map(
              (ind) => `
            <div class="p-3 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860]">
              <p class="text-[10px] font-mono uppercase text-[#7DA7D9] font-bold">${escapeHtml(ind.label)}</p>
              <p class="font-syne font-extrabold text-sm text-[#2F4860] dark:text-white mt-0.5">${escapeHtml(ind.value)}</p>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2.5">
          <h3 class="font-syne font-bold text-base text-[#2F4860] dark:text-white">${escapeHtml(rui.ch6AdminInstr)}</h3>
          ${runa.uatData.adminItems
            .map(
              (q) => `
            <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] flex items-start justify-between gap-3 text-xs">
              <div><strong class="font-mono text-[#7DA7D9]">${escapeHtml(q.id)}</strong> ${escapeHtml(q.statement)}</div>
              <span class="shrink-0 font-mono font-bold px-2 py-0.5 rounded bg-[#FFF7CC] text-[#2F4860]">${escapeHtml(q.pct)}</span>
            </div>`
            )
            .join('')}
        </div>

        <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-2.5">
          <h3 class="font-syne font-bold text-base text-[#2F4860] dark:text-white">${escapeHtml(rui.ch6WargaInstr)}</h3>
          ${runa.uatData.wargaItems
            .map(
              (q) => `
            <div class="p-3 rounded-xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] flex items-start justify-between gap-3 text-xs">
              <div><strong class="font-mono text-[#7DA7D9]">${escapeHtml(q.id)}</strong> ${escapeHtml(q.statement)}</div>
              <span class="shrink-0 font-mono font-bold px-2 py-0.5 rounded bg-[#FFF7CC] text-[#2F4860]">${escapeHtml(q.pct)}</span>
            </div>`
            )
            .join('')}
        </div>
      </div>

      <div class="p-6 rounded-3xl bg-white dark:bg-[#1A2837] border-2 border-[#DCEEFF] dark:border-[#2F4860] space-y-3">
        <h3 class="font-syne font-bold text-base text-[#2F4860] dark:text-white">${escapeHtml(rui.ch6LikertTitle)}</h3>
        <div class="space-y-2">
          ${runa.uatData.distribution
            .map((d) => {
              const widthPct = Math.round((d.count / 160) * 100);
              return `
              <div class="space-y-1 text-xs">
                <div class="flex justify-between font-mono font-semibold">
                  <span>${escapeHtml(d.label)}</span>
                  <span>${escapeHtml(d.count)} ${escapeHtml(rui.ch6ResponsesUnit)} (${widthPct}%)</span>
                </div>
                <div class="h-2.5 w-full rounded-full bg-[#DCEEFF]/60 dark:bg-[#203244] overflow-hidden">
                  <div class="h-full rounded-full bg-[#7DA7D9]" style="width:${widthPct}%;"></div>
                </div>
              </div>`;
            })
            .join('')}
        </div>
        <p class="text-xs font-mono text-[#7DA7D9] pt-2">${escapeHtml(runa.uatData.summaryNote)}</p>
      </div>

      <div class="p-5 sm:p-6 rounded-2xl bg-[#FFF7CC]/75 dark:bg-[#203244] border border-[#E7DB99] dark:border-[#2F4860] space-y-1.5 text-xs sm:text-sm">
        <p><strong>${escapeHtml(rui.ch6Conclusion)}</strong> ${escapeHtml(runa.uatData.evaluationResult)}</p>
        <p><strong>${escapeHtml(rui.ch6Limitation)}</strong> ${escapeHtml(runa.uatData.limitation)}</p>
        <p><strong>${escapeHtml(rui.ch6Recommendation)}</strong> ${escapeHtml(runa.uatData.recommendation)}</p>
      </div>
    </div>
  `;
}

function renderRunaDocModal() {
  const modal = document.getElementById('runa-doc-modal');
  if (!modal) return;

  const runa = getRunaData(currentLang);
  const rui = t(currentLang).runaUi;

  const chIdx = Math.max(
    0,
    runa.chapters.findIndex((c) => c.id === activeRunaChapterId)
  );
  const currentChapter = runa.chapters[chIdx] || runa.chapters[0];
  const prevChapter = chIdx > 0 ? runa.chapters[chIdx - 1] : null;
  const nextChapter = chIdx < runa.chapters.length - 1 ? runa.chapters[chIdx + 1] : null;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  modal.innerHTML = `
    <!-- Clean Top Sticky Header Bar -->
    <div class="sticky top-0 z-30 bg-[#FAFCFF]/95 dark:bg-[#111A24]/95 backdrop-blur-md border-b border-[#DCEEFF] dark:border-[#2F4860] px-4 sm:px-8 py-3.5">
      <div class="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <button id="runa-back-top" type="button" class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#DCEEFF]/70 dark:bg-[#203244] hover:bg-[#7DA7D9] text-[#2F4860] dark:text-white hover:text-[#2F4860] text-xs font-syne font-bold transition-colors cursor-pointer">
          <span>←</span>
          <span>${escapeHtml(rui.backBtn)}</span>
        </button>

        <span class="font-mono text-xs font-bold text-[#7DA7D9] truncate">
          RUNA ITBA · ${escapeHtml(currentChapter.number)}. ${escapeHtml(currentChapter.shortTitle)}
        </span>

        <button id="runa-close-top" type="button" aria-label="Close RUNA Viewer" class="w-8 h-8 rounded-full bg-[#2F4860] text-[#FFF7CC] hover:bg-[#7DA7D9] hover:text-[#2F4860] flex items-center justify-center text-sm font-bold cursor-pointer">
          ✕
        </button>
      </div>
    </div>

    <!-- Main Viewer Body -->
    <div class="max-w-5xl mx-auto w-full px-4 sm:px-8 py-8 sm:py-10 space-y-8 flex-1">
      <div class="space-y-5">
        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-3 py-1 rounded-full bg-[#2F4860] text-[#FFF7CC] font-mono text-xs font-bold">${escapeHtml(runa.projectMeta.methodology)}</span>
            <span class="px-3 py-1 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#DCEEFF] font-mono text-xs font-semibold">${escapeHtml(runa.projectMeta.targetObject)}</span>
            <span class="px-3 py-1 rounded-full bg-[#FFF7CC] text-[#2F4860] font-mono text-xs font-bold border border-[#E7DB99]">${escapeHtml(runa.projectMeta.year)}</span>
          </div>
          <h1 class="font-syne font-extrabold text-2xl sm:text-4xl text-[#2F4860] dark:text-white tracking-tight">
            ${escapeHtml(runa.itBaCaseStudy.title)}
          </h1>
          <p class="font-fraunces italic text-sm sm:text-lg text-[#7DA7D9] dark:text-[#FFF7CC]">
            ${escapeHtml(currentChapter.number)}. ${escapeHtml(currentChapter.title)} (${escapeHtml(currentChapter.pages)})
          </p>
        </div>

        <!-- Master PDF Card -->
        <div class="p-4 sm:p-5 rounded-2xl bg-white dark:bg-[#1A2837] border-2 border-[#72E2E6]/50 dark:border-[#72E2E6]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-0.5 rounded-full bg-[#DCEEFF] dark:bg-[#203244] text-[#2F4860] dark:text-[#FFF7CC] font-mono text-[10px] font-bold">
                ${escapeHtml(runa.masterPdf.pageCount)} ${escapeHtml(rui.pagesUnit)} · ${escapeHtml(runa.masterPdf.sizeLabel)}
              </span>
            </div>
            <p class="font-syne font-bold text-base sm:text-lg text-[#2F4860] dark:text-white">${escapeHtml(runa.masterPdf.fileName)}</p>
            <p class="text-xs text-[#2F4860]/75 dark:text-[#DCEEFF]/75">${escapeHtml(rui.masterPdfDesc)}</p>
          </div>
          <div class="flex items-center gap-2.5 shrink-0">
            <a
              href="${escapeHtml(runa.masterPdf.url)}"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#2F4860] hover:bg-[#7DA7D9] text-[#FFF7CC] hover:text-[#2F4860] font-syne font-bold text-xs transition-colors"
            >
              <span>${escapeHtml(rui.openPdf)}</span>
              <span>↗</span>
            </a>
            <a
              href="${escapeHtml(runa.masterPdf.url)}"
              download="${escapeHtml(runa.masterPdf.downloadName)}"
              class="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white dark:bg-[#203244] border border-[#BDDAF7] dark:border-[#2F4860] hover:border-[#7DA7D9] text-[#2F4860] dark:text-white font-syne font-bold text-xs transition-colors"
            >
              <span>${escapeHtml(rui.downloadPdf)}</span>
              <span>↓</span>
            </a>
          </div>
        </div>

        <!-- 6 Chapter Switcher Pills -->
        <div class="flex flex-wrap gap-2">
          ${runa.chapters
            .map(
              (ch) => `
            <button
              type="button"
              data-switch-chapter="${escapeHtml(ch.id)}"
              class="runa-chapter-pill px-3.5 py-1.5 rounded-full text-xs font-mono font-bold transition-all cursor-pointer border ${
                ch.id === currentChapter.id
                  ? 'bg-[#2F4860] text-[#FFF7CC] border-[#2F4860] shadow-xs'
                  : 'bg-white dark:bg-[#1A2837] text-[#2F4860] dark:text-[#DCEEFF] border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9]'
              }"
            >
              ${escapeHtml(ch.number)}. ${escapeHtml(ch.shortTitle)}
            </button>`
            )
            .join('')}
        </div>
      </div>

      <!-- Active Chapter Body -->
      ${renderRunaChapterBody(currentChapter.id, runa, rui)}
    </div>

    <!-- Bottom Chapter Navigation -->
    <div class="border-t border-[#DCEEFF] dark:border-[#2F4860] bg-white dark:bg-[#172431] px-4 sm:px-8 py-5 mt-8">
      <div class="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-3">
        ${
          prevChapter
            ? `<button type="button" data-switch-chapter="${escapeHtml(prevChapter.id)}" class="runa-chapter-pill px-4 py-2 rounded-full border-2 border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] text-xs font-syne font-bold cursor-pointer">
                ← ${escapeHtml(prevChapter.number)}. ${escapeHtml(prevChapter.shortTitle)}
              </button>`
            : '<span></span>'
        }
        <button id="runa-back-bottom" type="button" class="px-5 py-2 rounded-full bg-[#FFF7CC] text-[#2F4860] border border-[#E7DB99] text-xs font-syne font-bold cursor-pointer hover:bg-[#DCEEFF]">
          ${escapeHtml(rui.backToPortfolio)}
        </button>
        ${
          nextChapter
            ? `<button type="button" data-switch-chapter="${escapeHtml(nextChapter.id)}" class="runa-chapter-pill px-4 py-2 rounded-full bg-[#2F4860] text-[#FFF7CC] text-xs font-syne font-bold cursor-pointer hover:bg-[#7DA7D9] hover:text-[#2F4860]">
                ${escapeHtml(nextChapter.number)}. ${escapeHtml(nextChapter.shortTitle)} →
              </button>`
            : '<span></span>'
        }
      </div>
    </div>
  `;

  modal.querySelector('#runa-back-top')?.addEventListener('click', closeRunaDocModal);
  modal.querySelector('#runa-close-top')?.addEventListener('click', closeRunaDocModal);
  modal.querySelector('#runa-back-bottom')?.addEventListener('click', closeRunaDocModal);

  modal.querySelectorAll('.runa-chapter-pill').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-switch-chapter');
      if (target) {
        activeRunaChapterId = target;
        renderRunaDocModal();
      }
    });
  });
}

/* ================================================================ */
/* 8. EXPERIENCE TIMELINE, WORKS FILTER, SCROLL-REVEAL & SCROLL-SPY */
/* ================================================================ */
function renderExperienceTimeline() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  const timeline = getExperienceTimeline(currentLang);
  container.innerHTML = timeline
    .map(
      (item, idx) => `
    <div class="reveal-on-scroll relative group">
      <!-- Timeline Node -->
      <span class="absolute -left-[31px] sm:-left-[35px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-[#1A2837] ${
        idx === 0 ? 'bg-[#72E2E6] shadow-[0_0_10px_rgba(114,226,230,0.75)]' : 'bg-[#7DA7D9]'
      } group-hover:scale-125 transition-transform"></span>

      <div class="p-4 sm:p-5 rounded-2xl bg-[#FAFCFF] dark:bg-[#203244] border border-[#DCEEFF] dark:border-[#2F4860] hover:border-[#7DA7D9] transition-all space-y-2">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex flex-wrap items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-[#FFF7CC] text-[#2F4860] font-mono text-[11px] font-bold border border-[#E7DB99]">
              ${escapeHtml(item.year)}
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-[#2F4860] text-[#FFF7CC] font-mono text-[10px] font-bold">
              ${escapeHtml(item.badge)}
            </span>
          </div>
          <span class="text-[11px] font-mono text-[#7DA7D9] font-semibold">${escapeHtml(item.org)}</span>
        </div>

        <h4 class="font-syne font-bold text-sm sm:text-base text-[#2F4860] dark:text-white leading-snug">
          ${escapeHtml(item.title)}
        </h4>
        <p class="text-xs sm:text-sm text-[#2F4860]/80 dark:text-[#DCEEFF]/85 leading-relaxed font-sans-body">
          ${escapeHtml(item.desc)}
        </p>

        <div class="flex flex-wrap gap-1.5 pt-1">
          ${item.tags
            .map(
              (tag) => `<span class="px-2 py-0.5 rounded-full bg-[#DCEEFF]/70 dark:bg-[#162331] text-[#2F4860] dark:text-[#DCEEFF] font-mono text-[10px] font-semibold">${escapeHtml(tag)}</span>`
            )
            .join('')}
        </div>
      </div>
    </div>`
    )
    .join('');
}

let revealObserver = null;

function refreshScrollReveal() {
  const targets = document.querySelectorAll('.reveal-on-scroll');
  if (!('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );
  }

  targets.forEach((el) => {
    if (!el.classList.contains('is-visible')) {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.95 && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        revealObserver.observe(el);
      }
    }
  });
}

function initWorksFilter() {
  const filterButtons = document.querySelectorAll('.works-filter-btn');
  const workSections = document.querySelectorAll('[data-work-section]');
  const workMarquees = document.querySelectorAll('[data-works-marquee]');
  if (!filterButtons.length) return;

  const activeClasses = ['bg-[#2F4860]', 'text-[#FFF7CC]', 'border-[#2F4860]', 'shadow-2xs'];
  const inactiveClasses = [
    'bg-white',
    'dark:bg-[#1A2837]',
    'text-[#2F4860]',
    'dark:text-[#DCEEFF]',
    'border-[#DCEEFF]',
    'dark:border-[#2F4860]',
    'hover:border-[#7DA7D9]',
  ];

  const applyFilter = (selected) => {
    filterButtons.forEach((btn) => {
      const isMatch = btn.getAttribute('data-filter') === selected;
      if (isMatch) {
        btn.classList.remove(...inactiveClasses);
        btn.classList.add(...activeClasses);
      } else {
        btn.classList.remove(...activeClasses);
        btn.classList.add(...inactiveClasses);
      }
    });

    workSections.forEach((sec) => {
      const cat = sec.getAttribute('data-work-section');
      if (selected === 'all' || selected === cat) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });

    workMarquees.forEach((mq) => {
      if (selected === 'all') {
        mq.classList.remove('hidden');
      } else {
        mq.classList.add('hidden');
      }
    });

    window.requestAnimationFrame(() => {
      refreshScrollReveal();
    });
  };

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter') || 'all';
      applyFilter(filter);
    });
  });
}

function initNavbarScrollSpy() {
  const navLinks = document.querySelectorAll('.nav-spy-link');
  const sections = ['about', 'certificates', 'works', 'contact']
    .map((id) => ({ id, el: document.getElementById(id) }))
    .filter((item) => Boolean(item.el));

  if (!navLinks.length || !sections.length) return;

  const updateActiveNav = () => {
    const scrollPos = window.scrollY + 180;
    let activeId = '';

    sections.forEach(({ id, el }) => {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        activeId = id;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) {
      activeId = 'contact';
    }

    navLinks.forEach((link) => {
      const target = link.getAttribute('data-nav-target');
      if (target === activeId) {
        link.classList.add('nav-link-active');
      } else {
        link.classList.remove('nav-link-active');
      }
    });
  };

  updateActiveNav();
  window.addEventListener('scroll', updateActiveNav, { passive: true });
}

function initKeyboardShortcuts() {
  window.addEventListener('keydown', (e) => {
    const csModal = document.getElementById('case-study-modal');
    const runaModal = document.getElementById('runa-doc-modal');

    if (csModal && !csModal.classList.contains('hidden')) {
      const total = getAllProjects(currentLang).length;
      if (e.key === 'Escape') {
        closeCaseStudyModal();
      } else if (e.key === 'ArrowLeft') {
        activeProjectIndex = (activeProjectIndex - 1 + total) % total;
        activeGalleryIdx = 0;
        renderCaseStudyModal();
      } else if (e.key === 'ArrowRight') {
        activeProjectIndex = (activeProjectIndex + 1) % total;
        activeGalleryIdx = 0;
        renderCaseStudyModal();
      }
      return;
    }

    if (runaModal && !runaModal.classList.contains('hidden')) {
      if (e.key === 'Escape') {
        closeRunaDocModal();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const profileImg = document.getElementById('profile-photo');
  if (profileImg) {
    profileImg.setAttribute('src', `${import.meta.env.BASE_URL}images/profile-shazfa.png`);
  }
  initTheme();
  initLanguageSwitcher();
  initNavbarAndScroll();
  initClockAndYear();
  initContactCopy();
  initCertificatesCarouselNav();
  renderBackgroundStars();
  renderHeroScatteredStars();
  initHeroFlyingStars();
  renderMarqueeRibbons();
  applyLanguage(currentLang);
  initWorksFilter();
  initNavbarScrollSpy();
  initKeyboardShortcuts();
});
