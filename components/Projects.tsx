export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <p className="section-label">Work</p>

      <h2 className="section-title">
        TOP<br />PROJECT
      </h2>

      <div className="projects-grid">

        <div className="project-card">
          <div className="project-tag">Mobile / Web</div>
          <h3>Coastal Connect</h3>
          <p>
            A platform connecting tourists with Kerala coastal communities.
            Includes interactive maps, cultural insights, and booking experiences.
          </p>
        </div>

        <div className="project-card">
          <div className="project-tag">Healthcare AI</div>
          <h3>Care Console Pro</h3>
          <p>
            A healthcare platform to manage medical records, analyze symptoms,
            and send medicine reminders.
          </p>
        </div>

      </div>
    </section>
  )
}