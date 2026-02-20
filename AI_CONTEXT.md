# Shrey Mistry Portfolio - AI Context & Continuation Guide

## Project Overview

This is a modern, fully dynamic Next.js portfolio website built with cutting-edge technologies. The site is designed to be easily maintainable through a single configuration file (`userinput.txt`) and deployable to GitHub Pages.

**Website:** `shreywy.github.io`  
**Repository:** `https://github.com/shreywy/shreywy.github.io`  
**Deployment:** GitHub Pages via GitHub Actions

---

## Tech Stack

- **Framework:** Next.js 14.2.35 (App Router)
- **UI Library:** React 18+
- **Animations:** Framer Motion
- **Styling:** Tailwind CSS (with custom theme variables)
- **Email Service:** Formspree (https://formspree.io/f/mpqjjlaa)
- **Image Optimization:** Next.js Image Component
- **Deployment:** GitHub Pages (static export)

---

## Architecture

### Core File Structure

```
portfolio2/
├── app/
│   ├── api/content/route.js       # Dynamic content API endpoint
│   ├── layout.jsx                  # Root layout with theme provider
│   ├── page.jsx                    # Home page
│   └── globals.css                 # Global styles
├── components/
│   ├── Header.jsx                  # Top navigation with theme switcher
│   ├── Sidebar.jsx                 # Side navigation
│   ├── Footer.jsx                  # Footer
│   ├── ResumeModal.jsx             # Resume modal component
│   ├── MeshGradient.jsx            # Background mesh gradient
│   ├── providers/
│   │   ├── ThemeProvider.jsx       # Global theme context (blue by default)
│   │   └── SmoothScroll.jsx        # Smooth scroll provider
│   └── sections/
│       ├── Hero.jsx                # Landing section with dynamic content
│       ├── Experience.jsx          # Timeline with dynamic experiences
│       ├── Projects.jsx            # Project cards with dynamic data
│       ├── Skills.jsx              # Skills grid with dynamic skills
│       └── Contact.jsx             # Contact form (Formspree)
├── lib/
│   └── parseUserInput.js           # Parser for userinput.txt file
├── public/
│   ├── .nojekyll                   # Disables Jekyll processing for GitHub Pages
│   └── images/                     # Project images
├── .github/workflows/
│   └── deploy.yml                  # GitHub Actions deployment workflow
├── userinput.txt                   # ⭐ MAIN CONFIG FILE - Edit this to update content
├── next.config.js                  # Next.js config with GitHub Pages settings
├── .env.example                    # Environment variable template
├── .gitignore                      # Git ignore rules
├── tailwind.config.js              # Tailwind CSS configuration
└── jsconfig.json                   # Path aliases and JS config
```

---

## Dynamic Content System

### How It Works

1. **userinput.txt** - User-editable configuration file with portfolio content
2. **lib/parseUserInput.js** - Node.js parser that reads and structures the file
3. **app/api/content/route.js** - API endpoint serving parsed data
4. **React Components** - Fetch from `/api/content` and render dynamically

### userinput.txt Sections

#### [HERO] Section
Contains the landing page copy:
- `SUBTITLE:` Text under the name (appears on page load)
- `TYPING:` Text that types out with animation
- `DESCRIPTION:` Main description paragraph

```
[HERO]
SUBTITLE: I'm a Computer Science student at Toronto Metropolitan University...
TYPING: Computer Science Student & Full-Stack Developer
DESCRIPTION: Building high-performance, beautiful digital experiences...
```

#### [EXPERIENCE] Blocks
One block per job:
```
[EXPERIENCE]
ROLE: Solutions Delivery Intern
COMPANY: Geotab
LOCATION: Oakville, Ontario
START: May 2025
END: Present
DESCRIPTION: Built tools and systems...
TAGS: BigQuery SQL/JS, NLP Tools, 30% Efficiency
```

**Note:** Experiences auto-sort with "Present" dates first, then by end date (newest first).

#### [PROJECT] Blocks
One block per project:
```
[PROJECT]
NAME: URL Shortener
IMAGE: urlshortener.png
DESCRIPTION: Full-stack URL shortening service...
TECH: React, Flask, Firebase, Docker, Azure
LINK: https://github.com/shreywy/cuttt
```

**Note:** Images are auto-prefixed with `/images/` path.

#### [SKILLS] Section
One skill per line, comments with `#`:
```
[SKILLS]
# Frontend
React
TypeScript
JavaScript
Next.js

# Backend
Node.js
Flask
Python
```

---

## Key Features & Implementations

### 1. **Theme System**
- **Provider:** `components/providers/ThemeProvider.jsx`
- **Default:** 'midnight' (blue theme)
- **How it works:** CSS custom properties (--primary, --accent, --bg) via Tailwind
- **Storage:** Persisted in localStorage
- **UI Controls:** Paint brush icon in Header and Sidebar (spins on hover)

### 2. **Hero Section Animation**
- **File:** `components/sections/Hero.jsx`
- **Behavior:** All content displays immediately (no 3+ second delay)
- **Scroll Indicator:** Fixed bottom-right, fades as user scrolls down (400px max)
- **Content:** Fetches from `[HERO]` section in userinput.txt

### 3. **Experience Timeline**
- **File:** `components/sections/Experience.jsx`
- **Layout:** Alternating left-right on desktop, stacked on mobile
- **Timeline:** Center line with dots, triangle pointer at top pointing to future/present
- **Line Height:** Dynamically expands to fit all experiences
- **Sorting:** Auto-sorts by date (Present entries first)

### 4. **Skills Grid**
- **File:** `components/sections/Skills.jsx`
- **Layout:** Responsive grid (2-6 columns depending on viewport)
- **Animations:** Scale 1.12 on hover, spring physics (stiffness: 600)
- **Content:** Pulls from `[SKILLS]` section in userinput.txt

### 5. **Projects Section**
- **File:** `components/sections/Projects.jsx`
- **Cards:** 3D hover effects with perspective transform
- **Colors:** Rotating gradient colors (blue→cyan, purple→pink, etc.)
- **Responsive:** 1 col mobile, 2 cols tablet, 3 cols desktop
- **Content:** Fetches from `[PROJECT]` blocks

### 6. **Contact Form**
- **File:** `components/sections/Contact.jsx`
- **Service:** Formspree (https://formspree.io/f/mpqjjlaa)
- **Method:** POST to hardcoded Formspree endpoint
- **Validation:** Form resets on success, displays feedback for 5 seconds
- **Works on:** GitHub Pages (Formspree is CORS-enabled)

---

## Configuration & Environment

### Environment Variables
- **NEXT_PUBLIC_FORMSPREE_ID:** Not used (hardcoded for GitHub Pages compatibility)
- Create `.env.local` if needed for development-specific settings

### Next.js Configuration
- **Output:** `export` (static export for GitHub Pages)
- **Images:** `unoptimized: true` (required for static hosting)
- **Base Path:** None (hosting at root of `shreywy.github.io`)

---

## Development Workflow

### Running Locally
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

### Adding New Content
1. Edit `userinput.txt` with new experiences, projects, or skills
2. Save the file
3. Refresh your browser (changes appear immediately in development)
4. For production, push to GitHub and GitHub Actions will deploy

### Adding a New Experience
```
[EXPERIENCE]
ROLE: Your Job Title
COMPANY: Company Name
LOCATION: City, State
START: Jan 2025
END: Present
DESCRIPTION: What you did, impact you had, technologies used
TAGS: Skill1, Skill2, Skill3
```

### Adding a New Project
```
[PROJECT]
NAME: Project Name
IMAGE: filename.png
DESCRIPTION: Brief description of what it does
TECH: Tech1, Tech2, Tech3
LINK: https://github.com/...
```

Note: Image should be placed in `/public/images/` folder.

---

## Deployment to GitHub Pages

### Prerequisites
- GitHub account with `shreywy.github.io` repository
- Local git repository initialized and connected

### Deployment Steps

1. **Initialize Git** (if not already done):
```bash
cd e:\GitHub\portfolio2
git init
git config user.name "Shrey Mistry"
git config user.email "shrey.d.mistry@gmail.com"
git remote add origin https://github.com/shreywy/shreywy.github.io.git
git branch -M main
```

2. **Create GitHub Actions Workflow** (already set up in `.github/workflows/deploy.yml`):
The workflow automatically:
- Installs dependencies
- Builds the Next.js app
- Exports to static `out/` folder
- Deploys to `gh-pages` branch
- Sets up custom domain if configured

3. **Push to GitHub**:
```bash
git add .
git commit -m "Initial portfolio site"
git push -u origin main
```

4. **Enable GitHub Pages**:
- Go to repository Settings → Pages
- Source: Deploy from a branch
- Branch: gh-pages
- Folder: / (root)

### Troubleshooting Deployment
- Check GitHub Actions tab for build logs
- Verify base path in next.config.js (should be empty '')
- Ensure all images exist in `/public/images/`
- Check .nojekyll file exists in `public/` folder

---

## Styling & Customization

### Color Theme Variables
Located in `/app/globals.css`, controlled by ThemeProvider:
- `--primary:` Main accent color
- `--accent:` Secondary accent
- `--bg:` Background base color

### Tailwind CSS
- **Config:** `tailwind.config.js`
- **Custom Colors:** Defined as CSS variables
- **Responsive:** Mobile-first approach (sm:, md:, lg:, xl: breakpoints)

### Glass Panels
All content cards use `.glass-panel` class:
```css
@apply bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl
```

---

## Performance Optimizations

- **Image Optimization:** Next.js Image component with lazy loading
- **Code Splitting:** Framer Motion animations only load when needed
- **API Caching:** userinput.txt parsed once per request
- **Static Export:** No server runtime (GitHub Pages compatible)
- **Minification:** Automatic via Next.js build

---

## Known Limitations & Workarounds

### GitHub Pages Limitations
- ❌ No server-side rendering (workaround: static export)
- ❌ No serverless functions (workaround: external APIs like Formspree)
- ❌ No dynamic routes based on query params (design as SPA)

### Image Handling
- Images must be in `/public/images/` folder
- Filenames in userinput.txt should NOT include `/images/` prefix (auto-added)
- Supported formats: PNG, JPG, WEBP, GIF

---

## Maintenance Checklist

- [ ] Update `userinput.txt` when adding experiences/projects
- [ ] Add project images to `/public/images/`
- [ ] Test locally with `npm run dev`
- [ ] Run `npm run build` to verify static generation
- [ ] Push to main branch - GitHub Actions will auto-deploy
- [ ] Verify build at `shreywy.github.io` (may take 1-2 mins)

---

## Future Enhancement Ideas

1. **Dark Mode Toggle:** Already partially set up in ThemeProvider
2. **Blog Section:** Add `[BLOG]` blocks to userinput.txt
3. **Search Functionality:** Client-side search of experiences/projects
4. **Analytics:** Integrate Vercel Analytics or Google Analytics
5. **Comment System:** Use Giscus for GitHub discussions
6. **Newsletter:** Integrate with Substack or similar

---

## Important Files Reference

| File | Purpose | Edit? |
|------|---------|-------|
| `userinput.txt` | ⭐ **All content** | YES - User editable |
| `components/sections/*.jsx` | UI components | Rarely - Code changes |
| `lib/parseUserInput.js` | Content parser | No - Don't modify |
| `app/api/content/route.js` | API endpoint | No - Don't modify |
| `next.config.js` | Build config | No - Already optimized |
| `.github/workflows/deploy.yml` | Deployment automation | No - Already set up |
| `.gitignore` | Git exclusions | Maybe - Already set up |
| `.env.example` | Env template | Reference only |

---

## Questions for Future Claude

When continuing work on this project:
1. Check CHANGELOG.md for recent changes
2. Verify no hardcoded content exists (all should be in userinput.txt)
3. Test locally: `npm run dev` and `npm run build`
4. For new sections, follow the pattern: userinput.txt → parseUserInput.js → API → Component
5. Always test dynamic content by editing userinput.txt and refreshing

---

**Last Updated:** February 19, 2026  
**Created By:** GitHub Copilot  
**Portfolio Owner:** Shrey Mistry
