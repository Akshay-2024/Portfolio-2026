export default function Education() {
  return (
    <section className="section" id="education">
      <p className="section-label">Background</p>

      <h2 className="section-title">EDUCATION</h2>

      <div className="edu-timeline">

        {/* LEFT */}
        <div>
          <div className="edu-card edu-left">
            <div className="edu-level">Pursuing</div>
            <h3>University College of Engineering, Kariavattom</h3>
            <p>BTech in Computer Engineering</p>
          </div>

          <div className="edu-spacer"></div>

          <div className="edu-card edu-left">
            <div className="edu-level">Higher Secondary</div>
            <h3>Govt. HSS Thanakkal</h3>
            <p>Higher Secondary</p>
          </div>
        </div>

        {/* CENTER LINE */}
        <div className="edu-line">
          <div className="edu-dot"></div>
          <div className="edu-line-seg"></div>
          <div className="edu-dot"></div>
          <div className="edu-line-seg"></div>
          <div className="edu-dot"></div>
          <div className="edu-line-seg"></div>
          <div className="edu-dot"></div>
        </div>

        {/* RIGHT */}
        <div>
          <div className="edu-card">
            <div className="edu-level">Diploma</div>
            <h3>Central Polytechnic College, Thiruvananthapuram</h3>
            <p>Diploma in Computer Engineering</p>
          </div>

          <div className="edu-spacer"></div>

          <div className="edu-card">
            <div className="edu-level">Higher Secondary</div>
            <h3>Govt. HSS Elampa</h3>
            <p>Higher School</p>
          </div>
        </div>

      </div>
    </section>
  )
}