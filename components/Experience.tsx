export default function Experience() {
  return (
    <section className="section" id="experience">
      <p className="section-label">Career</p>

      <h2 className="section-title">
        WORK<br />EXPERIENCE
      </h2>

       <div className="exp-card">
          <div className="exp-logo">
            <img src="/icons/Hult_Prize.jpg" alt="Hult Prize" />
          </div>
          <div className="exp-role">Media Lead</div>
          <h3>Director of Visual Media</h3>
          <p>
            Capturing every moment and story of Hult Prize UCEK 📸🎥.
          </p>
        </div>

      <div className="exp-grid">

       <div className="exp-card">
          <div className="exp-logo">
            <img src="/icons/legecy.jpg" alt="Legacy Iedc" />
          </div>
          <div className="exp-role">Technical Lead</div>
          <h3>Technical Direction</h3>
          <p>
            Managed technical infrastructure and development workflows for digital projects.
          </p>
        </div>

        <div className="exp-card">
          <div className="exp-logo">
            <img src="/icons/nss.png" alt="NSS" />
          </div>
          <div className="exp-role">Creative Team Lead</div>
          <h3>Creative Leadership</h3>
          <p>
            Led the creative team, overseeing design and media production for events and campaigns.
          </p>
        </div>


        <div className="exp-card">
          <div className="exp-logo">
            <img src="/icons/Kerala.png" alt="Kerala Tourism Club" />
          </div>
          <div className="exp-role">Member</div>
          <h3>Kerala Tourism Club</h3>
          <p>
            Active member contributing photography and visual storytelling.
          </p>
        </div>

      </div>
    </section>
  )
}