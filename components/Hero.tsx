export default function Hero() {
  return (
    <section className="hero" id="intro">
      <div style={{ position: "absolute", top: "120px", right: 0 }}>
       <div className="scroll-indicator">
        <div className="scroll-dot"></div>
       </div>
      </div>

      <div className="hero-text">
        <p className="hero-eyebrow">I am</p>

        <h1 className="hero-name">
          AKSHAY<br />S
        </h1>

        <p className="hero-title">Photographer | Developer</p>

        <p className="hero-bio">
          I am a passionate and creative individual with a strong interest in
          technology and digital design. I have a keen aptitude for graphic
          designing, programming, and web design.
        </p>
<br />
        {/* <div className="hero-socials">
          <a href="#instagram" className="social-btn">in</a>
          <a href="#twitter" className="social-btn">ig</a>
          <a href="#facebook" className="social-btn">fb</a>
          <a href="#github" className="social-btn">gh</a>
        </div> */}

        <div className="cta-row">
          <button className="btn-primary">Download Resume</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>

      <div className="hero-image">
        <div>
          <div className="hero-photo-frame">
           <div className="hero-photo-placeholder">
  <div className="photo-initials"></div>
</div>
          </div>
        </div>
      </div>
    </section>
  )
}