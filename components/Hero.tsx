import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="intro">

      <div className="scroll-indicator-wrap">
        <div className="scroll-indicator">
          <div className="scroll-dot"></div>
        </div>
      </div>

      <div className="hero-text">
        <p className="hero-eyebrow">Hi, I am</p>

        <h1 className="hero-name">
          AKSHAY<br />S
        </h1>

        <p className="hero-title">Photographer | Developer</p>

        <p className="hero-bio">
          I am a passionate and creative individual with a strong interest in
          technology and digital design. I have a keen aptitude for graphic
          designing, programming, and web design.
        </p>

        <div className="cta-row">
          <a href="/Akshay S resume.pdf" download>
            <button className="btn-primary">Download Resume</button>
          </a>
          <Link href="#contact">
            <button className="btn-outline">Contact Me</button>
          </Link>
        </div>

        <div className="contactSocials">
          <a href="https://www.instagram.com/ak.s.ay/?__pwa=1" className="socialItem" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/akshay-s-992aa431b" className="socialItem" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://github.com/Akshay-2024" className="socialItem" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://www.facebook.com/akshay.kulathinkara.7/" className="socialItem" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://x.com/_Akshay_s__" className="socialItem" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-photo-frame">
          <Image
            src="/profile2.png"
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