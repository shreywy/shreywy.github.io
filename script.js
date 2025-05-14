const body = document.body;
const btnTheme = document.querySelector('.fa-moon');
const btnHamburger = document.querySelector('.fa-bars');
const themeCycleButton = document.getElementById('btn-theme-cycle');

// Theme pairs configuration
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

// Initialize theme
function initializeTheme() {
  const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
  const savedThemePair = localStorage.getItem('themePair') || 'default';
  
  body.classList.add(savedTheme);
  applyThemePair(savedThemePair);
  
  // Set moon/sun icon based on theme
  if (savedTheme === 'dark') {
    btnTheme.classList.remove('fa-moon');
    btnTheme.classList.add('fa-sun');
  }
}

// Apply theme pair
function applyThemePair(pairName) {
  const isDark = body.classList.contains('dark');
  const theme = isDark ? themePairs[pairName].dark : themePairs[pairName].light;
  
  for (const [property, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(property, value);
  }
  
  localStorage.setItem('themePair', pairName);
}

// Cycle through theme pairs
function cycleThemePair() {
  const pairNames = Object.keys(themePairs);
  const currentPair = localStorage.getItem('themePair') || 'default';
  const currentIndex = pairNames.indexOf(currentPair);
  const nextIndex = (currentIndex + 1) % pairNames.length;
  const nextPair = pairNames[nextIndex];
  
  applyThemePair(nextPair);
}

// Toggle between light/dark mode
function toggleTheme() {
  const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  const currentPair = localStorage.getItem('themePair') || 'default';
  
  body.classList.remove(currentTheme);
  body.classList.add(newTheme);
  
  // Toggle icon
  btnTheme.classList.toggle('fa-moon');
  btnTheme.classList.toggle('fa-sun');
  
  // Re-apply theme pair with new mode
  applyThemePair(currentPair);
  
  localStorage.setItem('portfolio-theme', newTheme);
}

// Event listeners
btnTheme.addEventListener('click', toggleTheme);
themeCycleButton.addEventListener('click', cycleThemePair);

// Hamburger menu functionality
const displayList = () => {
  const navUl = document.querySelector('.nav__list');

  if (btnHamburger.classList.contains('fa-bars')) {
    btnHamburger.classList.remove('fa-bars');
    btnHamburger.classList.add('fa-times');
    navUl.classList.add('display-nav-list');
  } else {
    btnHamburger.classList.remove('fa-times');
    btnHamburger.classList.add('fa-bars');
    navUl.classList.remove('display-nav-list');
  }
};

btnHamburger.addEventListener('click', displayList);

// Scroll to top functionality
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top');

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block';
  } else {
    btnScrollTop.style.display = 'none';
  }
};

document.addEventListener('scroll', scrollUp);

// Initialize on load
initializeTheme();


