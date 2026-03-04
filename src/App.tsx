import React, { useState, useEffect } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import { Timeline } from "@/components/ui/timeline";
import LiquidCrystalBackground from "@/components/ui/liquid-crystal-shader";
import { ProjectCard } from "@/components/ui/project-card";
import { FrostedGlassCard } from "@/components/ui/interactive-frosted-glass-card";
import { 
  Home, 
  Briefcase, 
  Code2, 
  Wrench, 
  Github, 
  Linkedin, 
  Mail,
  ChevronDown,
  ArrowDown
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ExpandableExperience = ({ role, company, points }: { role: string, company: string, points: string[] }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <FrostedGlassCard className="p-6 md:p-8 w-full">
      <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{role}</h4>
      <p className="text-[var(--theme-color)] font-medium mb-4">{company}</p>
      <ul className="list-disc list-inside text-white space-y-2 text-sm md:text-base">
        {points.slice(0, 2).map((point, idx) => (
          <li key={idx} className="text-white/90">{point}</li>
        ))}
      </ul>
      
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <ul className="list-disc list-inside text-white space-y-2 text-sm md:text-base pt-2">
              {points.slice(2).map((point, idx) => (
                <li key={idx + 2} className="text-white/90">{point}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {points.length > 2 && (
        <button 
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-sm font-medium text-[var(--theme-color)] hover:text-white transition-colors flex items-center gap-1"
        >
          {expanded ? "Show Less" : "Show More"}
          <motion.div animate={{ rotate: expanded ? 180 : 0 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      )}
    </FrostedGlassCard>
  );
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home", icon: <Home className="text-white h-5 w-5 flex-shrink-0" />, onClick: () => setOpen(false) },
    { label: "Experience", href: "#experience", icon: <Briefcase className="text-white h-5 w-5 flex-shrink-0" />, onClick: () => setOpen(false) },
    { label: "Projects", href: "#projects", icon: <Code2 className="text-white h-5 w-5 flex-shrink-0" />, onClick: () => setOpen(false) },
    { label: "Skills", href: "#skills", icon: <Wrench className="text-white h-5 w-5 flex-shrink-0" />, onClick: () => setOpen(false) },
  ];

  const connectLinks = [
    { label: "GitHub", href: "https://github.com/shreywy", icon: <Github className="text-white h-5 w-5 flex-shrink-0" /> },
    { label: "LinkedIn", href: "https://linkedin.com/in/shreymistry", icon: <Linkedin className="text-white h-5 w-5 flex-shrink-0" /> },
    { label: "Email", href: "mailto:shreymistry0609@gmail.com", icon: <Mail className="text-white h-5 w-5 flex-shrink-0" /> },
  ];

  const timelineData = [
    {
      title: (
        <div className="flex flex-col space-y-1">
          <span className="text-white/60 font-medium text-lg md:text-xl">May 2025</span>
          <ArrowDown className="w-5 h-5 text-[var(--theme-color)]" />
          <span className="text-white font-bold text-xl md:text-2xl">Present</span>
        </div>
      ),
      content: (
        <ExpandableExperience 
          role="Technical Project Management Intern"
          company="Geotab"
          points={[
            "Built internal dashboards and automation tools using Google Apps Script, Google Sheets, HTML/CSS/JS, and BigQuery SQL to reduce manual work and improve data tracking.",
            "Standardized Jira project templates and workflows for new product introduction (NPI) initiatives.",
            "Managed Jira change requests and agile workflows for firmware-over-the-air (FOTA) scrums and alpha device launches.",
            "Collaborated with engineering, mechanical, compliance, and third-party partners to ensure prototype certification and global shipping.",
            "Developed an AI-powered internal BigQuery search tool to extract metadata, streamline data access, and prioritize tables.",
            "Conducted hands-on prototype testing, including multimeter voltage checks, JST connector wiring, and PCBA verification."
          ]}
        />
      ),
    },
    {
      title: (
        <div className="flex flex-col space-y-1">
          <span className="text-white/60 font-medium text-lg md:text-xl">Jan 2024</span>
          <ArrowDown className="w-5 h-5 text-[var(--theme-color)]" />
          <span className="text-white font-bold text-xl md:text-2xl">Aug 2024</span>
        </div>
      ),
      content: (
        <ExpandableExperience 
          role="Automation Engineering Intern"
          company="AMD"
          points={[
            "Developed and maintained Python-based benchmarking frameworks to automate game performance testing, cutting manual testing time by over 60%.",
            "Assembled high-performance PC test benches from scratch, performing hardware swaps and troubleshooting system-level stability.",
            "Developed scripts to optimize benchmarking OS environments by disabling telemetry and background services.",
            "Led competitive performance analysis comparing AMD enthusiast GPUs against NVIDIA GeForce RTX lineups.",
            "Built visualization dashboards and CLI tools to parse benchmark output, summarizing telemetry, power, and FPS data.",
            "Maintained and updated legacy internal tool for managing account keys, utilizing a SQL database and modifying Java code."
          ]}
        />
      ),
    },
    {
      title: (
        <div className="flex flex-col space-y-1">
          <span className="text-white/60 font-medium text-lg md:text-xl">May 2023</span>
          <ArrowDown className="w-5 h-5 text-[var(--theme-color)]" />
          <span className="text-white font-bold text-xl md:text-2xl">Aug 2023</span>
        </div>
      ),
      content: (
        <ExpandableExperience 
          role="Automation & Data Tools Intern"
          company="Bombardier"
          points={[
            "Lead the development of internal dashboards using TypeScript along with PowerBI, enabling real-time supplier KPI tracking, reducing report generation times by 70%.",
            "Designed and implemented data validation scripts to identify discrepancies in supplier audit records.",
            "Created automated Excel scripts using VBA and TypeScript bindings to assist in generating weekly compliance reports, saving ~2.5 hours of manual work per week.",
            "Refactored legacy macros into modular, maintainable code and created reusable automation templates.",
            "Managed Excel databases for a 92-person team and contributed process improvement ideas."
          ]}
        />
      ),
    },
  ];

  const projects = [
    {
      title: "URL Shortener",
      description: "Full-stack URL shortening service with real-time analytics and custom slug support.",
      tech: ["React", "Flask", "Firebase", "Docker", "Azure"],
      link: "https://github.com/shreywy/cuttt",
    },
    {
      title: "Media Store DBMS",
      description: "GUI-based database management application for music and movies with advanced querying.",
      tech: ["Python", "Oracle SQL", "CustomTkinter"],
      link: "https://github.com/shreywy/Movie-And-Music-Store-DBMS",
    },
    {
      title: "TabStitcher",
      description: "Python tool that automatically extracts and stitches guitar tabs from YouTube videos.",
      tech: ["Python", "OpenCV", "Tkinter"],
      link: "https://github.com/shreywy/TabStitcher",
    }
  ];

  const skills = [
    "React", "TypeScript", "JavaScript", "Next.js", "Tailwind CSS", 
    "Node.js", "Flask", "Python", "Java", "C/C++",
    "PostgreSQL", "Firebase", "SQL", "BigQuery", "Oracle SQL",
    "Docker", "Git", "AWS", "Linux",
    "API Design", "System Design", "Performance Tuning", "Data Analysis", "Automation"
  ];

  return (
    <div className="flex h-screen w-full bg-black overflow-hidden relative text-white font-sans">
      {/* Global Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
        <LiquidCrystalBackground 
          speed={0.2}
          radii={[0.3, 0.2, 0.25]}
          smoothK={[0.3, 0.3]}
          className="w-full h-full" 
        />
      </div>

      <motion.div 
        initial={{ x: -300 }} 
        animate={{ x: 0 }} 
        transition={{ delay: 1, duration: 0.5, ease: "easeOut" }}
        className="z-50"
      >
        <Sidebar open={open} setOpen={setOpen}>
          <SidebarBody className="justify-between gap-10 bg-black/40 backdrop-blur-xl border-r border-white/10">
            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
              <div className="font-bold text-white py-4 whitespace-nowrap overflow-hidden flex items-center md:justify-start">
                {open ? (
                  <span className="text-xl ml-2">Shrey Mistry</span>
                ) : (
                  <div className="w-5 flex justify-center">
                    <span className="text-[10px] w-5 h-5 flex items-center justify-center bg-white/10 rounded font-mono">SM</span>
                  </div>
                )}
              </div>
              <div className="mt-8 flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <SidebarLink key={idx} link={link} />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {connectLinks.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </SidebarBody>
        </Sidebar>
      </motion.div>

      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="flex-1 overflow-y-auto z-10 scroll-smooth relative pt-14 md:pt-0 flex flex-col"
      >
        {/* Hero Section */}
        <section id="home" className="flex flex-col items-center justify-center relative px-6 md:px-20 min-h-screen">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
            <div className="w-[80vw] md:w-[600px] h-[60vw] md:h-[400px] bg-black/70 blur-[80px] rounded-full" />
          </div>
          <div className="z-10 w-full max-w-4xl flex flex-col items-center justify-center text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-6xl md:text-8xl font-medium mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70 pb-2 leading-tight"
            >
              Shrey Mistry
            </motion.h1>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="max-w-2xl"
            >
              <p className="text-lg md:text-xl text-white/90 leading-relaxed font-light">
                Computer Science student at Toronto Metropolitan University (Class of 2026). Experienced in full-stack development, database systems, performance analysis, and project management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 relative z-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Experience</h2>
            <FrostedGlassCard className="p-0 md:p-0 overflow-hidden">
              <Timeline data={timelineData} />
            </FrostedGlassCard>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 relative z-10 px-6 md:px-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Projects</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ProjectCard 
                title="Cuttt - URL Shortener"
                description='Cuttt is a "cuttt"ing-edge URL shortening service that streamlines the way you share links online. It uses a powerful tech stack for the frontend and backend.'
                imageSrc="/urlshortener.png"
                tags={["React", "Node.js", "Python", "Flask", "Firebase", "Azure", "Docker"]}
                githubUrl="https://github.com/shreywy/cuttt"
              />
              <ProjectCard 
                title="Music and Movie Store DBMS"
                description="A Python application to interact with an Oracle Database intended for a Movie and Music store. This tool provides a simple UI to display tables, manage entries, and execute custom SQL queries."
                imageSrc="/dbms.png"
                tags={["Python", "cx_Oracle", "customtkinter", "tabulate", "Oracle XE 21c"]}
                githubUrl="https://github.com/shreywy/Movie-And-Music-Store-DBMS"
              />
              <ProjectCard 
                title="TabStitch - Guitar Tab Extractor"
                description="A powerful tool for extracting guitar tablature from videos with automatic deduplication and stitching capabilities. Uses a multi-stage processing pipeline."
                imageSrc="/tabstich.png"
                tags={["Python", "OpenCV", "imagehash", "yt-dlp"]}
                githubUrl="https://github.com/shreywy/TabStitcher"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="pt-16 pb-12 px-6 md:px-10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-12">Skills</h2>
            <FrostedGlassCard className="p-8 md:p-12">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: idx * 0.02 }}
                    className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-colors"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </FrostedGlassCard>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 text-center text-white/60 text-sm relative z-10 bg-black/40 backdrop-blur-md border-t border-white/10 mt-auto w-full shrink-0">
          <p>Made by Shrey Mistry</p>
        </footer>
      </motion.main>
    </div>
  );
}

