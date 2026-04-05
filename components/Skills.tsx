export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <p className="section-label">Expertise</p>

      <h2 className="section-title">
        PERSONAL<br />SKILLS
      </h2>

      <div className="skills-grid">

        <div className="skill-card">
          <div className="skill-icon">01 — Visual</div>
          <h3>Photography</h3>
          <p>Capturing creative and high-quality photos...</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">02 — Post</div>
          <h3>Editing</h3>
          <p>Skilled in photo and video editing...</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">03 — Tech</div>
          <h3>Developer</h3>
          <p>Designing and developing user-friendly interfaces...</p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">04 — Motion</div>
          <h3>Videography</h3>
          <p>Recording and producing engaging videos...</p>
        </div>

      </div>
    </section>
  )
}