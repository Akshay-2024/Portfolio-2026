import Projects from "@/components/Projects"

export default function ProjectsPage() {
  return (
    <section className="section" id="projects">
      <p className="section-label">Work</p>

      <h2 className="section-title">
        PROJECTS
      </h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-tag">Web App</div>
          <h3>Coastal Connect</h3>
          <p>
            Coastal Connect is an AI-powered platform that connects travelers with Kerala’s authentic coastal culture. It offers immersive experiences like fishing village tours, homestays, and cultural storytelling while empowering local communities. By blending technology with tradition, it promotes sustainable tourism and preserves the rich heritage of coastal life for future generations.

          </p>
          <div className="project-links">
            <a href="https://coastal-connect2.vercel.app/">Live</a>
            <a href="https://github.com/Akshay-2024/coastal-connect2">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-tag">Full Stack</div>
          <h3>Care Console</h3>
          <p>
             Care console pro is a storage based platform, which provide a secure, user-friendly platform for managing personal medical records. The system leverages cloud technology to provide users with the ability to upload, store, access, and share their medical data from any device, ensuring a seamless experience that prioritizes data security and privacy.

          </p>
          <div className="project-links">
            
            <a href="https://github.com/Akshay-2024/Care-Console-Pro">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-tag">Health care</div>
          <h3>Dental AI</h3>
          <p>
            A complete application for dentist to consultation to analysis. Here we introduce many AI features on this website. This is an user friendly website which makes dentist to handle easily. Putting patients first with technology that enhances the human touch.
          </p>
          <div className="project-links">
            
            <a href="https://github.com/Akshay-2024/DentalAI">GitHub</a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-tag">Education</div>
          <h3>Virtual Physics Lab</h3>
          <p>
            The Virtual Physics Lab is a modern educational web application designed to simplify complex physics concepts through visual learning, videos, and real-time simulations. The platform focuses on making physics intuitive, engaging, and accessible for students of all levels by combining theory with interactive experiences.  
            </p>
          <div className="project-links">
            
            <a href="https://github.com/Akshay-2024/Virtual-Physics-Lab">GitHub</a>
          </div>
        </div>

      </div>
    </section>
  )
}