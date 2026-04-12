export default function CertificatesPage() {
  return (
    <section className="section" id="certificates">
      <p className="section-label">Achievements</p>

      <h2 className="section-title">
        CERTIFICATES
      </h2>

      <div className="cert-grid">

        <div className="cert-card">
          <img src="Certificates/Tkm Hackathon.jpg" alt="Certificate 1" />
          <div className="cert-content">
            <h3>Participated 20 Hour Hackathon</h3>
            <p>ISTE TKMCE · 2025</p>
          </div>
        </div>

        <div className="cert-card">
          <img src="/Certificates/Offenso Cyber workshop.jpg" alt="Certificate 2" />
          <div className="cert-content">
            <h3>Cyber Security Workshop</h3>
            <p>Issued by Offenso Hackers Acadamy · 2025</p>
          </div>
        </div>

        <div className="cert-card">
          <img src="/Certificates/UNIX & Linux.jpg" alt="Certificate 3" />
          <div className="cert-content">
            <h3>Complete UNIX & Linux OS Fundamentals Training</h3>
            <p>Issued by Infosys · 2025</p>
          </div>
        </div>

      </div>
    </section>
  )
}