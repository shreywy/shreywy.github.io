const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');
const themeCycleButton = document.getElementById('btn-theme-cycle');

// ===================== THEME CONFIGURATION =====================
const themePairs = {
  default: {
    light: {
      '--clr-bg': '#fcfcfc',
      '--clr-bg-alt': '#fff',
      '--clr-fg': '#555',
      '--clr-fg-alt': '#444',
      '--clr-primary': '#2978b5',
      '--shadow': 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
    },
    dark: {
      '--clr-bg': '#23283e',
      '--clr-bg-alt': '#323757',
      '--clr-fg': '#bdbddd',
      '--clr-fg-alt': '#cdcdff',
      '--clr-primary': '#90a0d9',
      '--shadow': 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px'
    }
  },
  nord: {
    light: {
      '--clr-bg': '#ECEFF4',
      '--clr-bg-alt': '#ccd5e4',
      '--clr-fg': '#4C566A',
      '--clr-fg-alt': '#3B4252',
      '--clr-primary': '#5E81AC',
      '--shadow': 'rgba(76, 86, 106, 0.1) 0px 4px 12px'
    },
    dark: {
      '--clr-bg': '#2E3440',
      '--clr-bg-alt': '#3B4252',
      '--clr-fg': '#D8DEE9',
      '--clr-fg-alt': '#E5E9F0',
      '--clr-primary': '#81A1C1',
      '--shadow': 'rgba(0, 0, 0, 0.3) 0px 10px 30px'
    }
  },
  dracula: {
    light: {
      '--clr-bg': '#f8f8f2',
      '--clr-bg-alt': '#e2e2dc',
      '--clr-fg': '#44475a',
      '--clr-fg-alt': '#343746',
      '--clr-primary': '#6272a4',
      '--shadow': 'rgba(68, 71, 90, 0.1) 0px 6px 12px'
    },
    dark: {
      '--clr-bg': '#282a36',
      '--clr-bg-alt': '#343746',
      '--clr-fg': '#f8f8f2',
      '--clr-fg-alt': '#e2e2dc',
      '--clr-primary': '#bd93f9',
      '--shadow': 'rgba(0, 0, 0, 0.45) 0px 10px 30px'
    }
  }
};

// ===================== THEME FUNCTIONS =====================
function initializeTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme');
  const savedThemePair = localStorage.getItem('themePair');

  const theme = savedTheme || 'dark';
  const themePair = savedThemePair || 'dracula';

  body.classList.add(theme);
  applyThemePair(themePair);

  if (theme === 'dark') {
    btnTheme.classList.remove('fa-moon');
    btnTheme.classList.add('fa-sun');
  } else {
    btnTheme.classList.remove('fa-sun');
    btnTheme.classList.add('fa-moon');
  }
  if (!savedTheme) localStorage.setItem('portfolio-theme', 'dark');
  if (!savedThemePair) localStorage.setItem('themePair', 'dracula');
}

function applyThemePair(pairName) {
  const isDark = body.classList.contains('dark');
  const theme = isDark ? themePairs[pairName].dark : themePairs[pairName].light;
  
  for (const [property, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(property, value);
  }
  
  localStorage.setItem('themePair', pairName);
}

function cycleThemePair() {
  const pairNames = Object.keys(themePairs);
  const currentPair = localStorage.getItem('themePair') || 'default';
  const currentIndex = pairNames.indexOf(currentPair);
  const nextIndex = (currentIndex + 1) % pairNames.length;
  const nextPair = pairNames[nextIndex];
  
  applyThemePair(nextPair);
}

function toggleTheme() {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const currentPair = localStorage.getItem('themePair') || 'default';
  
  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  
  btnTheme.classList.toggle('fa-moon');
  btnTheme.classList.toggle('fa-sun');
  
  applyThemePair(currentPair);
  localStorage.setItem('portfolio-theme', newTheme);
}

// ===================== EVENT LISTENERS =====================
btnTheme.addEventListener('click', toggleTheme);
themeCycleButton.addEventListener('click', cycleThemePair);

// ===================== MENU FUNCTIONALITY =====================
const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
    header.classList.add('menu-open'); // ✅ add solid background
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
    header.classList.remove('menu-open'); // ✅ remove background
  }
};


btnHamburger.addEventListener('click', displayList);

// ===================== SCROLL FUNCTIONALITY =====================
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);

// ===================== HEADER ANIMATION =====================
const header = document.querySelector('.header');
const maxHeight = 8;
const minHeight = 3;
const scrollRange = 200;

window.addEventListener('scroll', () => {
  const scrollPosition = Math.min(window.scrollY, scrollRange);
  const heightPercent = scrollPosition / scrollRange;
  const newHeight = maxHeight - (heightPercent * (maxHeight - minHeight));
  
  header.style.height = `${newHeight}em`;

  // ✅ Dynamically adjust menu position
  const navUl = document.querySelector('.nav__list');
  if (navUl) {
    navUl.style.top = `${newHeight - 0.5}em`;
  }
});


window.addEventListener('load', () => {
  if (window.scrollY === 0) {
    header.style.height = `${maxHeight}em`;

    const navUl = document.querySelector('.nav__list');
    if (navUl) {
      navUl.style.top = `${maxHeight - 0.5}em`; // ✅ match scroll behavior
    }
  }
});



// ===================== FADE-IN EFFECTS =====================
const fadeIns = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.1
});

fadeIns.forEach(el => observer.observe(el));
fadeIns.forEach((el, index) => {
  el.style.transitionDelay = `${index * 1}ms`;
});

// ===================== TYPING EFFECT =====================
const typedTextSpan = document.getElementById('typed-text');
const text = "An Aspiring Software Engineer.";
const typingDelay = 40;
let charIndex = 0;

function type() {
  if (charIndex < text.length) {
    typedTextSpan.textContent += text.charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typedTextSpan.textContent = '';
  charIndex = 0;
  type();
});

// ===================== SCROLL BUTTONS =====================
const scrollTop = document.querySelector('.scroll-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    if (!scrollTop.classList.contains('visible')) {
      scrollTop.classList.add('visible');
    }
  } else {
    if (scrollTop.classList.contains('visible')) {
      scrollTop.classList.remove('visible');
    }
  }
});

const scrollArrow = document.querySelector('.scroll-arrow');
scrollArrow.addEventListener('click', () => {
  const target = document.querySelector('#experience');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// ===================== RESUME PDF MODAL FUNCTIONALITY =====================

const modal = document.getElementById('resumeModal');
const openBtn = document.getElementById('openResume');
const closeBtn = modal.querySelector('.modal-close');

function openModal() {
  modal.style.display = 'flex';
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('show');
  }, 20);
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
}

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// ===================== RESUME PDF MODAL FUNCTIONALITY =====================

const siteWrapper = document.getElementById('site-wrapper');

function openModal() {
  modal.style.display = 'flex';
  modal.classList.remove('show');
  setTimeout(() => {
    modal.classList.add('show');
  }, 10);
  document.body.style.overflow = 'hidden';
  siteWrapper.classList.add('blurred'); // add blur
}

function closeModal() {
  modal.classList.remove('show');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 300);
  siteWrapper.classList.remove('blurred'); // remove blur
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});



// ===================== INITIALIZATION =====================
initializeTheme();
document.body.classList.add('loaded');




