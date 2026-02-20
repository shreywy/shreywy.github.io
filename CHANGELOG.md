# Changelog

All notable changes to this portfolio project are documented here.

## [1.2.0] - 2026-02-19

### Added
- **AI Context File** (AI_CONTEXT.md) with comprehensive project documentation for future Claude sessions
- **Project Details** (PROJECT_DETAILS.md) with portfolio owner info, build details, and customization notes
- **Triangle indicator** at top of Experience timeline pointing upward (indicates future/present)
- **Dynamic timeline line** - Experience section line now expands fully to fit all experiences
- **Scroll indicator fade effect** - Chevron in bottom-right now fades as user scrolls down (max 400px fade)
- **.gitignore** - Valid for GitHub Pages deployment, excludes node_modules, .next, legacy files, etc.

### Changed
- **Page load animations** - Removed 3+ second fade-in delay; all content now displays immediately
- **Scroll indicator position** - Moved from centered between buttons to fixed bottom-right corner
- **Formspree integration** - Hardcoded endpoint (mpqjjlaa) for GitHub Pages compatibility (no env vars needed)
- **Hero section** - Now fully dynamic; pulls SUBTITLE, TYPING, and DESCRIPTION from userinput.txt
- **userinput.txt** - Added [HERO] section at top for easy customization of landing page copy

### Fixed
- Skills section now properly pulls from userinput.txt
- Timeline triangle properly positioned above the center line
- Scroll indicator no longer blocks UI elements on desktop
- Content now stretches boxes properly (cards expand with content)

### Deprecated
- FORMSPREE_SETUP.txt, FORMSPREE_QUICK_START.txt - Consolidated into AI_CONTEXT.md
- IMPLEMENTATION_SUMMARY.txt - Functionality now documented in PROJECT_DETAILS.md

---

## [1.1.1] - 2026-02-19

### Added
- **Formspree email integration** - Contact form now sends emails via Formspree API (endpoint: mpqjjlaa)
- **Environment variable system** - Created .env.example template for future configuration
- **Setup documentation** - FORMSPREE_SETUP.txt and FORMSPREE_QUICK_START.txt guides

### Fixed
- Contact form validation - Checks for configured Form ID before attempting submission
- Error handling - 5-second error message display for failed submissions
- Form reset - Form clears on successful submission

---

## [1.1.0] - 2026-02-19

### Added
- **Dynamic content system** - Created userinput.txt configuration file
- **Content parser** - Built lib/parseUserInput.js to parse userinput.txt
- **API endpoint** - /api/content route serves parsed content (hero, experiences, projects, skills)
- **Experience fetch** - Experience.jsx now fetches from API instead of hardcoded data
- **Projects fetch** - Projects.jsx now fetches from API instead of hardcoded data
- **Skills fetch** - Skills.jsx now fetches from API instead of hardcoded data

### Changed
- Components from static to dynamic - All content sections now pull from single userinput.txt file
- Experience sorting - Auto-sorts by date with "Present" entries first

### Benefits
- Content updates no longer require code changes or rebuilds
- Easy to add/remove experiences, projects, and skills
- Single source of truth (userinput.txt) for all portfolio content

---

## [1.0.2] - 2026-02-19

### Fixed
- **Hero animation syntax error** - Fixed malformed conditional rendering in Experience.jsx line 63-66
- **Animation timing** - Changed delay from 800ms to 3000ms for more dramatic landing effect
- **Content reveal** - Changed from staggered to simultaneous fade-in of all elements

### Changed
- Hero section animation - Extended initial name reveal delay from 800ms to 3 seconds
- All content now fades in simultaneously after delay (was: staggered animation)

---

## [1.0.1] - 2026-02-18

### Added
- **Paint brush icon** - Updated theme switcher icon from palette to brush in Header.jsx and Sidebar.jsx
- **Icon animation** - 360° rotation on hover for paint brush theme switcher
- **Sidebar navigation** - Moved "Connect" buttons to bottom of sidebar with social links
- **Sticky theme switcher** - Paint brush icon always accessible at top-right and sidebar-bottom

### Removed
- **Bottom navigation bar** - Removed fixed bottom bar with navigation and connection links

### Changed
- **Default theme** - Changed default from 'frappe' (light) to 'midnight' (blue)
- **Theme persistence** - Updated localStorage fallback to use 'midnight' theme

### Fixed
- **Button styling** - Ensured all buttons now use consistent styling
- **Responsive navigation** - Navigation works seamlessly on mobile and desktop

---

## [1.0.0] - 2026-02-18

### Added
- **Initial portfolio release** - Modern Next.js 14 portfolio with Framer Motion animations
- **Hero section** - Landing section with typing animation and CTA buttons
- **Experience timeline** - Alternating left-right layout with timeline visualization
- **Projects showcase** - 3D hover effects on project cards with gradient colors
- **Skills grid** - Responsive grid with hover animations and glow effects
- **Contact form** - Fully functional contact form with validation
- **Theme system** - Built-in theme switcher with multiple color schemes
- **Responsive design** - Mobile-first design that works on all devices
- **Smooth scroll** - Smooth page navigation with scroll listeners
- **Resume modal** - Inline PDF viewer for resume

### Technical Stack
- Next.js 14.2.35 with App Router
- React 18+ with Hooks
- Framer Motion for animations
- Tailwind CSS for styling
- Context API for state management

---

## Roadmap (Planned)

- [ ] Blog section with dynamic posts
- [ ] Dark mode toggle completion
- [ ] PDF generation for projects
- [ ] Comment system for projects (Giscus)
- [ ] Newsletter signup integration
- [ ] Analytics integration (Vercel/Google)
- [ ] Search functionality
- [ ] Admin panel for content management
- [ ] Multi-language support

---

## Notes for Future Developers

### When Making Changes
1. Update CHANGELOG.md with all changes
2. Bump version number in this file
3. Test locally with `npm run dev`
4. Build with `npm run build` to verify static generation
5. Test all content is dynamic before pushing

### Common Tasks
- **Add experience:** Add [EXPERIENCE] block to userinput.txt
- **Add project:** Add [PROJECT] block to userinput.txt
- **Add skill:** Add line to [SKILLS] section in userinput.txt
- **Change hero text:** Edit [HERO] section in userinput.txt
- **Update theme colors:** Edit /app/globals.css CSS variables
- **Change fonts:** Update tailwind.config.js

### Testing Checklist
- [ ] Content renders in all devices (mobile, tablet, desktop)
- [ ] All links work (internal and external)
- [ ] Contact form submits successfully
- [ ] Theme switcher works and persists
- [ ] Animations perform well (60 FPS target)
- [ ] Images load correctly
- [ ] No console errors

---

## Version History
- **v1.2.0** (Feb 19, 2026) - GitHub Pages setup + AI context + full dynamic content
- **v1.1.1** (Feb 19, 2026) - Formspree email integration
- **v1.1.0** (Feb 19, 2026) - Dynamic content system
- **v1.0.2** (Feb 19, 2026) - Animation fixes
- **v1.0.1** (Feb 18, 2026) - UI improvements (sidebar, theme)
- **v1.0.0** (Feb 18, 2026) - Initial release
