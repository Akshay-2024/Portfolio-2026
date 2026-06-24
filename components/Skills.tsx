export default function Skills() {
  return (
    <>
      <style>{`
        .skills-grid {
          grid-template-columns: repeat(2, 1fr);
        }

        .skill-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .skill-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 99px;
          border: 1px solid rgba(212,168,67,0.25);
          color: var(--gold);
          background: rgba(212,168,67,0.08);
        }

        .skill-num {
          font-size: 12px;
          font-weight: 600;
          color: rgba(212,168,67,0.35);
          letter-spacing: 0.05em;
        }

        .skill-card h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: var(--white);
          margin: 0 0 10px 0;
        }

        .skill-card p {
          font-size: 14px;
          color: rgba(255,255,255,0.5);
          line-height: 1.65;
          margin: 0 0 20px 0;
        }

        .skill-icon-row {
          font-size: 22px;
          opacity: 0.6;
        }

        .skills-meta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .skills-tagline {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          max-width: 260px;
          margin-bottom: 64px;
        }

        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="section skills-section" id="skills">

        <div className="skills-meta">
          <div>
            <p className="section-label">Expertise</p>
            <h2 className="section-title">
              PERSONAL<br />SKILLS
            </h2>
          </div>
          
        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <div className="skill-top">
              <span className="skill-tag">Visual</span>
              <span className="skill-num">01</span>
            </div>
            <h3>Photography</h3>
            <p>Capturing creative and high-quality photos that tell a story through composition and light.</p>
          </div>

          <div className="skill-card">
            <div className="skill-top">
              <span className="skill-tag">Post</span>
              <span className="skill-num">02</span>
            </div>
            <h3>Editing</h3>
            <p>Skilled in photo and video editing to produce polished, publication-ready work.</p>
          </div>

          <div className="skill-card">
            <div className="skill-top">
              <span className="skill-tag">Tech</span>
              <span className="skill-num">03</span>
            </div>
            <h3>Developer</h3>
            <p>Designing and developing user-friendly interfaces with clean, maintainable code.</p>
          </div>

          <div className="skill-card">
            <div className="skill-top">
              <span className="skill-tag">Motion</span>
              <span className="skill-num">04</span>
            </div>
            <h3>Videography</h3>
            <p>Recording and producing engaging videos with a cinematic eye for narrative flow.</p>
          </div>

        </div>
      </section>
    </>
  )
}