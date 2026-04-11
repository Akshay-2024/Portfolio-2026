import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" id="intro">

      {/* SCROLL INDICATOR */}
      <div style={{ position: "absolute", top: "120px", right: 0 }}>
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>

      {/* LEFT TEXT */}
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

        <div className="cta-row">
          <button className="btn-primary">Download Resume</button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <div className="hero-photo-frame">
          <Image
            src="/profile.jpg"
            alt="Akshay"
            width={400}
            height={500}
            className="hero-photo"
          />
        </div>
      </div>

    </section>
  );
}