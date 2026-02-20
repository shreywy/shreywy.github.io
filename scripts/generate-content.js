const fs = require('fs');
const path = require('path');

function parseUserInput() {
  try {
    const filePath = path.join(process.cwd(), 'userinput.txt');
    const content = fs.readFileSync(filePath, 'utf-8');

    return {
      hero: parseHero(content),
      experiences: parseExperiences(content),
      projects: parseProjects(content),
      skills: parseSkills(content),
    };
  } catch (error) {
    console.error('Error reading userinput.txt:', error);
    process.exit(1);
  }
}

function parseHero(content) {
  const heroBlock = content.split('[HERO]')[1]?.split('[EXPERIENCE]')[0];
  if (!heroBlock) {
    return { subtitle: '', typing: '', description: '' };
  }

  const hero = { subtitle: '', typing: '', description: '' };
  const lines = heroBlock.trim().split('\n');
  
  lines.forEach((line) => {
    const [key, ...valueParts] = line.split(':');
    const value = valueParts.join(':').trim();

    if (key.trim() === 'SUBTITLE') hero.subtitle = value;
    if (key.trim() === 'TYPING') hero.typing = value;
    if (key.trim() === 'DESCRIPTION') hero.description = value;
  });

  return hero;
}

function parseExperiences(content) {
  const experienceBlocks = content.split('[EXPERIENCE]').slice(1);
  
  return experienceBlocks
    .map((block) => {
      const lines = block.trim().split('\n');
      const exp = {};

      lines.forEach((line) => {
        const [key, ...valueParts] = line.split(':');
        const value = valueParts.join(':').trim();

        if (key.trim() === 'ROLE') exp.role = value;
        if (key.trim() === 'COMPANY') exp.company = value;
        if (key.trim() === 'LOCATION') exp.location = value;
        if (key.trim() === 'START') exp.startDate = value;
        if (key.trim() === 'END') exp.endDate = value;
        if (key.trim() === 'DESCRIPTION') exp.description = value;
        if (key.trim() === 'TAGS') {
          exp.highlights = value.split(',').map((tag) => tag.trim());
        }
      });

      return exp.role ? { ...exp, period: `${exp.startDate} – ${exp.endDate}` } : null;
    })
    .filter(Boolean)
    .sort((a, b) => {
      const aIsPresent = a.endDate === 'Present';
      const bIsPresent = b.endDate === 'Present';

      if (aIsPresent && !bIsPresent) return -1;
      if (!aIsPresent && bIsPresent) return 1;

      const dateA = new Date(a.endDate === 'Present' ? '2099' : a.endDate);
      const dateB = new Date(b.endDate === 'Present' ? '2099' : b.endDate);
      return dateB - dateA;
    });
}

function parseProjects(content) {
  const projectBlocks = content.split('[PROJECT]').slice(1);

  return projectBlocks
    .map((block) => {
      const lines = block.trim().split('\n');
      const project = {};

      lines.forEach((line) => {
        const [key, ...valueParts] = line.split(':');
        const value = valueParts.join(':').trim();

        if (key.trim() === 'NAME') project.name = value;
        if (key.trim() === 'IMAGE') project.image = `/images/${value}`;
        if (key.trim() === 'DESCRIPTION') project.description = value;
        if (key.trim() === 'TECH') {
          project.tech = value.split(',').map((t) => t.trim());
        }
        if (key.trim() === 'LINK') project.link = value;
      });

      return project.name ? project : null;
    })
    .filter(Boolean);
}

function parseSkills(content) {
  const skillsSection = content.split('SKILLS')[1]?.split('================================================================================')[0];
  if (!skillsSection) return [];

  const skills = skillsSection
    .split('\n')
    .filter((line) => {
      const trimmed = line.trim();
      return trimmed && !trimmed.startsWith('#') && trimmed !== '';
    })
    .map((line) => line.trim());

  return skills;
}

// Run the parser and save to public/content.json
const data = parseUserInput();
const outputPath = path.join(process.cwd(), 'public', 'content.json');

fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
console.log('✓ Generated public/content.json');
