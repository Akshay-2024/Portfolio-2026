import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "Coastal Connect",
      tag: "Coastal Culture",
      desc: "AI-powered platform connecting travelers with Kerala’s coastal culture through immersive local experiences and sustainable tourism.",
      tech: ["Next.js", "AI", "Node.js", "Tailwind"],
    },
    {
      title: "Care Console Pro",
      tag: "Healthcare AI",
      desc: "Secure cloud-based system for storing and managing personal medical records with seamless cross-device access.",
      tech: ["HTML", "CSS", "MySQL","Django"],
    },
    {
      title: "Dental AI",
      tag: "Healthcare AI",
      desc: "End-to-end dental platform integrating AI for diagnosis and consultation with a strong focus on usability.",
      tech: ["AI", "React", "Python","Tailwind", "Shadcn UI"],
    },
  ];

  return (
    <section className="section projects-section" id="projects">
      <p className="section-label">Work</p>

      <h2 className="section-title">
        TOP<br />PROJECT
      </h2>

      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">

            <div className="project-header">
              <span className="project-tag">{project.tag}</span>
              <div className="project-dot"></div>
            </div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            {/* ✅ Tech Stack */}
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      <div className="projects-cta">
        <Link href="/projects">
          <button className="btn-outline">View More</button>
        </Link>
      </div>
    </section>
  );
}