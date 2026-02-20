# Shrey Mistry - Portfolio

My portfolio website built with Next.js and deployed to GitHub Pages.

**Live:** https://shreywy.github.io

## Quick Start

### Development
```bash
npm install
npm run dev
```
Visit http://localhost:3000

### Build & Deploy
```bash
npm run build
git add .
git commit -m "your message"
git push origin main
```
GitHub Actions automatically deploys (2-3 mins).

## Updating Content

Edit `userinput.txt` with your:
- **[HERO]** - Landing page text
- **[EXPERIENCE]** - Work history
- **[PROJECT]** - Projects showcase
- **[SKILLS]** - Skills list

Format examples are in the file.

## Adding Project Images

1. Save images to `/public/images/`
2. Reference in userinput.txt: `IMAGE: filename.png`
3. Commit & push (auto-deploys)

## Tech Stack

- Next.js 14
- Framer Motion (animations)
- Tailwind CSS (styling)
- Formspree (contact form)

## Customization

All colors, animations, and layouts are in the component files. Theme is controlled via CSS variables in `/app/globals.css`.

---

Made with care for GitHub Pages.
