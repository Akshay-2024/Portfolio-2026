"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { certificates } from "@/data/certificate"; // ✅ fixed




type Certificate = {
  title: string;
  issuer: string;
  year: number;
  category: string;
  image: string;
};

export default function CertificatesPage() {
  const [yearFilter, setYearFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [yearOpen, setYearOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  

/* 👇 ADD HERE */
useEffect(() => {
  const handleClickOutside = () => {
    setYearOpen(false);
    setCategoryOpen(false);
  };

  window.addEventListener("click", handleClickOutside);
  return () => window.removeEventListener("click", handleClickOutside);
}, []);
  const filteredCertificates = certificates.filter((cert: Certificate) => {
    return (
      (yearFilter === "all" || cert.year === Number(yearFilter)) &&
      (categoryFilter === "all" || cert.category === categoryFilter)
    );
  });

  // ✅ define OUTSIDE JSX
  const uniqueYears = Array.from(
  new Set(certificates.map((c: Certificate) => c.year))
) as number[];

  return (
    <section className="section">
      <p className="section-label">Achievements</p>
      <h2 className="section-title">CERTIFICATES</h2>

      {/* 🔥 Filters */}
      <div className="filters">

  {/* YEAR DROPDOWN */}
  <div className="dropdown"
    onClick={(e) => e.stopPropagation()}>
    <span className="label">Year</span>

    <div
      className="dropdown-btn"
      onClick={() => setYearOpen(!yearOpen)}
    >
      {yearFilter === "all" ? "All Years" : yearFilter}
      <span className="arrow">▾</span>
    </div>

    {yearOpen && (
      <div className="dropdown-menu">
        <div onClick={() => { setYearFilter("all"); setYearOpen(false); }}>
          All Years
        </div>

        {uniqueYears.map((year) => (
          <div
            key={year}
            onClick={() => {
              setYearFilter(String(year));
              setYearOpen(false);
            }}
          >
            {year}
          </div>
        ))}
      </div>
    )}
  </div>


  {/* CATEGORY DROPDOWN */}
  <div className="dropdown"
    onClick={(e) => e.stopPropagation()}>
    <span className="label">Category</span>

    <div
      className="dropdown-btn"
      onClick={() => setCategoryOpen(!categoryOpen)}
    >
      {categoryFilter === "all" ? "All Categories" : categoryFilter}
      <span className="arrow">▾</span>
    </div>

    {categoryOpen && (
      <div className="dropdown-menu">
        {[
          "all",
          "Hackathon",
          "Workshop",
          "Internship",
          "Course",
          "Event",
          "Volunteering",
          
        ].map((cat) => (
          <div
            key={cat}
            onClick={() => {
              setCategoryFilter(cat);
              setCategoryOpen(false);
            }}
          >
            {cat === "all" ? "All Categories" : cat}
          </div>
        ))}
      </div>
    )}
  </div>

</div>

      {/* 🔥 Grid */}
      <div className="cert-grid">
        {filteredCertificates.map((cert: Certificate, index: number) => (
          <div className="cert-card" key={index}>
            <Image
              src={cert.image}
              alt={cert.title}
              width={400}
              height={250}
              sizes="(max-width: 768px) 100vw, 400px"
              className="cert-img"
            />
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p>{cert.issuer} · {cert.year}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}