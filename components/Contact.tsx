"use client";
import { useState } from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Proper typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Proper typing
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <section className="section contact-section" id="contact">
      <p className="section-label">Lets Talk</p>

      <h2 className="section-title">
        CONTACT<br />ME
      </h2>

      <div className="contact-container">

        {/* ✅ FORM */}
        <form className="contact-form" onSubmit={sendMessage}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ SOCIALS */}
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
          <a href="mailto:akshay20119@gmail.com" className="socialItem">
            <MdEmail />
          </a>
        </div>

      </div>
    </section>
  );
}