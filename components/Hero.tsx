import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="hero" id="intro">
      <div className="hero-text">
        

        <p className="hero-eyebrow">Hi, I am</p>

        <h1 className="hero-name">
          AKSHAY S
        </h1>

        <p className="hero-title">Photographer & Developer</p>

        <p className="hero-bio">
          I am a passionate and creative individual with a strong interest in
          technology and digital design. Specializing in graphic design, programming,
          and web development to craft captivating digital experiences.
        </p>

        <div className="cta-row">
          <a href="/Akshay S resume.pdf" download className="btn-primary-wrap">
            <button className="btn-primary">Download Resume</button>
          </a>
          <Link href="#contact" className="btn-outline-wrap">
            <button className="btn-outline">Contact Me</button>
          </Link>
        </div>

        <div className="contactSocials">
          <a
            href="https://www.instagram.com/ak.s.ay/?__pwa=1"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/akshay-s-992aa431b"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Akshay-2024"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/akshay.kulathinkara.7/"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          <a
            href="https://x.com/_Akshay_s__"
            className="socialItem"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="hero-image">
        <div className="hero-photo-frame">
          <div className="photo-frame-glow"></div>
          <Image
            src="https://res.cloudinary.com/ak6fzdkq/image/upload/v1790012413/1000244228.png"
            alt="Akshay S"
            width={440}
            height={550}
            priority
            className="hero-photo"
          />
        </div>
      </div>

      
    </section>
  );
}