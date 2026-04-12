import Link from "next/link"

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="section-label">Work</p>

      <h2 className="section-title">
        TOP<br />PROJECT
      </h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-tag">Web</div>
          <h3>Coastal Connect</h3>
          <p>
           Coastal Connect is an AI-powered platform that connects travelers with Kerala’s authentic coastal culture. It offers immersive experiences like fishing village tours, homestays, and cultural storytelling while empowering local communities. By blending technology with tradition, it promotes sustainable tourism and preserves the rich heritage of coastal life for future generations.

          </p>
        </div>

        <div className="project-card">
          <div className="project-tag">Healthcare AI</div>
          <h3>Care Console Pro</h3>
          <p>
            Care console pro is a storage based platform, which provide a secure, user-friendly platform for managing personal medical records. The system leverages cloud technology to provide users with the ability to upload, store, access, and share their medical data from any device, ensuring a seamless experience that prioritizes data security and privacy.
          </p>
        </div>
        
        <div className="project-card">
          <div className="project-tag">Healthcare AI</div>
          <h3>Dental AI</h3>
          <p>
           
          A complete application for dentist to consultation to analysis. Here we introduce many AI features on this website. This is an user friendly website which makes dentist to handle easily. Putting patients first with technology that enhances the human touch.
          </p>
        </div>

      </div>

      {/* 👇 ADD THIS */}
      <div className="projects-cta">
        <Link href="/projects">
          <button className="btn-outline">View More</button>
        </Link>
      </div>
    </section>
  )
}