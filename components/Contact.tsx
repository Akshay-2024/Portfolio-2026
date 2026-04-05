export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <p className="section-label">Lets Talk</p>

      <h2 className="section-title">
        CONTACT<br />ME
      </h2>

      <div className="contact-form">

        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>

        <button className="btn-primary">
          Send Message
        </button>

      </div>
    </section>
  )
}