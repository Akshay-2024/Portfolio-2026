import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "AmoraWeds",
      tag: "Our new business idea",
      desc: " A modern luxury wedding invitation website built using Next.js, React, and immersive UI animations. Designed for premium digital wedding experiences with elegant visuals, smooth interactions, and responsive layouts. Amora Weds focuses on creating cinematic and luxury digital wedding invitations for premium & budget friendly clients using modern web technologies.",
      tech: ["Next.js","React","Framer Motion","Node.js","Tailwind"],
      live: "https://amora-weds.vercel.app/",
      github: "https://github.com/Akshay-2024/AmoraWeds.git",
    },
    {
      title: "Coastal Connect",
      tag: "Coastal Culture",
      desc: "            Coastal Connect is an AI-powered platform that connects travelers with Kerala’s authentic coastal culture. It offers immersive experiences like fishing village tours, homestays, and cultural storytelling while empowering local communities. By blending technology with tradition, it promotes sustainable tourism and preserves the rich heritage of coastal life for future generations.",
      tech: ["Next.js", "AI", "Node.js", "Tailwind"],
      live: "https://coastal-connect2.vercel.app/",
      github: "https://github.com/Akshay-2024/coastal-connect2",
    },
    {
      title: "Care Console",
      tag: "Healthcare",
      desc: "             Care console pro is a storage based platform, which provide a secure, user-friendly platform for managing personal medical records. The system leverages cloud technology to provide users with the ability to upload, store, access, and share their medical data from any device, ensuring a seamless experience that prioritizes data security and privacy.",
      tech: ["HTML", "CSS", "MySQL","Django"],
      github: "https://github.com/Akshay-2024/Care-Console-Pro",
    },
    {
      title: "Dental AI",
      tag: "Healthcare",
      desc: "            A complete application for dentist to consultation to analysis. Here we introduce many AI features on this website. This is an user friendly website which makes dentist to handle easily. Putting patients first with technology that enhances the human touch.",
      tech: ["React", "Python", "AI", "Tailwind", "Shadcn UI"],
      github: "https://github.com/Akshay-2024/DentalAI",
    },
    {
      title: "Virtual Physics Lab",
      tag: "Education",
      desc: "            The Virtual Physics Lab is a modern educational web application designed to simplify complex physics concepts through visual learning, videos, and real-time simulations. The platform focuses on making physics intuitive, engaging, and accessible for students of all levels by combining theory with interactive experiences.",
      tech: ["HTML", "CSS", "Django", "JavaScript"],
      github: "https://github.com/Akshay-2024/Virtual-Physics-Lab",
    },
    {
      title: "Eco-Campus",
      tag: "Sustainability",
      desc: "Year-round campus engagement model to encourage eco-friendly activities. Students earn points for environmental and social awareness tasks. Gamifies sustainability on campus. Uses volunteer verification.Encourage consistent participation in sustainability efforts. Reward meaningful contributions with badges and prizes. Build year-wise eco-leaders through gamification. Create visible campus impact.",
      tech: ["HTML", "CSS", "Django", "JavaScript"],
      github: "https://github.com/Akshay-2024/Eco-Campus",
    },

  ];

  return (
    <section className="section" id="projects">
      <p className="section-label">Work</p>

      <h2 className="section-title">PROJECTS</h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">

            {/* HEADER */}
            <div className="project-header">
              <span className="project-tag">{project.tag}</span>
              <div className="project-index">0{i + 1}</div>
            </div>

            {/* TITLE */}
            <h3>{project.title}</h3>

            {/* DESC */}
            <p>{project.desc}</p>

            {/* TECH STACK */}
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>

            {/* LINKS */}
            <div className="project-links">
              {project.live && (
                <a href={project.live} target="_blank">Live →</a>
              )}
              <a href={project.github} target="_blank">GitHub →</a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}