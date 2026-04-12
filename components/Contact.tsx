import { FaInstagram, FaLinkedin, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="section-label">Lets Talk</p>

      <h2 className="section-title">
        CONTACT<br />ME
      </h2>

      {/* 👇 NEW WRAPPER */}
      <div className="contact-container">

        {/* LEFT: FORM */}
        <div className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button className="btn-primary">
            Send Message
          </button>
        </div>

          {/* RIGHT: SOCIALS */}
          <div className="contactSocials">
            <a href="https://www.instagram.com/ak.s.ay/?__pwa=1" className="socialItem" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/akshay-s-992aa431b" className="socialItem" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Akshay-2024" className="socialItem" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
             <a href="https://www.facebook.com/akshay.kulathinkara.7/" className="socialItem" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://x.com/_Akshay_s__" className="socialItem" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="mailto:akshaysingh2024@gmail.com" className="socialItem">
              <MdEmail />
            </a>
          </div>

      </div>
    </section>
  )
}