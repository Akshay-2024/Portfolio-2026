"use client"

import { useState, useEffect, useCallback } from "react"

const photos = [
  { src: "/photos/p26.png", alt: "photo26" },
  { src: "/photos/p25.jpeg", alt: "photo25" },
  { src: "/photos/p24.jpeg", alt: "photo24" },
  { src: "/photos/p23.jpeg", alt: "photo23" },
  { src: "/photos/p22.jpeg", alt: "photo22" },
  { src: "/photos/p0.jpg", alt: "photo0" },
  { src: "/photos/p1.jpeg", alt: "photo1" },
  { src: "/photos/p2.jpeg", alt: "photo2" },
  { src: "/photos/p3.jpeg", alt: "photo3" },
  { src: "/photos/p4.jpeg", alt: "photo4" },
  { src: "/photos/p5.jpeg", alt: "photo5" },
  { src: "/photos/p6.jpeg", alt: "photo6" },
  { src: "/photos/p7.jpeg", alt: "photo7" },
  { src: "/photos/p8.jpeg", alt: "photo8" },
  { src: "/photos/p9.jpeg", alt: "photo9" },
  { src: "/photos/p10.jpeg", alt: "photo10" },
  { src: "/photos/p11.jpeg", alt: "photo11" },
  { src: "/photos/p12.jpeg", alt: "photo12" },
  { src: "/photos/p13.png", alt: "photo13" },
  { src: "/photos/p14.jpg", alt: "photo14" },
  { src: "/photos/p15.jpg", alt: "photo15" },
  { src: "/photos/p16.jpg", alt: "photo16" },
  { src: "/photos/p17.jpg", alt: "photo17" },
  { src: "/photos/p18.png", alt: "photo18" },
  { src: "/photos/p19.png", alt: "photo19" },
  { src: "/photos/p21.jpg", alt: "photo21" },
]

export default function PhotosPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = useCallback(() => setActiveIndex(null), [])

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [])

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length))
  }, [])

  useEffect(() => {
    if (activeIndex === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
    }

    document.addEventListener("keydown", handleKeyDown)
    document.body.style.overflow = "hidden"

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [activeIndex, close, showPrev, showNext])

  return (
    <section className="section" id="photos">
      <p className="section-label">Gallery</p>
      <h2 className="section-title">PHOTOGRAPHY</h2>

      <div className="photo-grid">
        {photos.map((photo, index) => (
          <div
            className="photo-card"
            key={photo.alt}
            onClick={() => setActiveIndex(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter") setActiveIndex(index)
            }}
          >
            <img src={photo.src} alt={photo.alt} />
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="photo-lightbox" onClick={close}>
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation()
              close()
            }}
            aria-label="Close preview"
          >
            ✕
          </button>

          <button
            className="lightbox-nav lightbox-prev"
            onClick={(e) => {
              e.stopPropagation()
              showPrev()
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <img
            src={photos[activeIndex].src}
            alt={photos[activeIndex].alt}
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="lightbox-nav lightbox-next"
            onClick={(e) => {
              e.stopPropagation()
              showNext()
            }}
            aria-label="Next photo"
          >
            ›
          </button>
        </div>
      )}

      <style jsx global>{`
        :root {
          /* Core palette */
          --black:        #000000;
          --black-rich:   #080807;
          --black-deep:   #0d0c0a;
          --black-card:   #111009;
          --black-raised: #181610;
          --black-border: #201e14;

          /* Gold spectrum */
          --gold-dim:     #7a6020;
          --gold-mid:     #b8922e;
          --gold:         #d4a843;
          --gold-bright:  #e8c060;
          --gold-shine:   #f5d878;
          --gold-pale:    #f9efc0;

          /* Text */
          --white:        #faf6ec;
          --cream:        #e8e0cc;
          --muted:        #7a7060;
          --subtle:       #3a3626;

          /* Fonts */
          --font-display: 'Playfair Display', Georgia, serif;
          --font-body:    'Cormorant Garamond', Georgia, serif;
          --font-mono:    'Space Mono', monospace;

          /* Shape */
          --radius:       16px;
          --radius-sm:    10px;

          /* Glows & shadows */
          --glow-gold:    0 0 40px rgba(212,168,67,0.18), 0 0 80px rgba(212,168,67,0.06);
          --shadow-card:  0 8px 40px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5);
          --shadow-raised:0 16px 60px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6);
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          background: var(--black-deep);
          background-image:
            radial-gradient(ellipse 80% 50% at 20% -10%, rgba(212,168,67,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 110%, rgba(212,168,67,0.04) 0%, transparent 55%);
          color: var(--white);
          font-family: var(--font-body);
          font-size: 18px;
          font-weight: 300;
          overflow-x: hidden;
        }

        body::before {
          content: '';
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 200px 200px;
        }

        .section {
          position: relative;
          z-index: 1;
          padding: 100px 24px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .section-label {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold-mid);
          margin-bottom: 12px;
        }

        .section-title {
          font-family: var(--font-display);
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 600;
          letter-spacing: 0.05em;
          color: var(--white);
          margin-bottom: 56px;
        }

        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 20px;
        }

        .photo-card {
          position: relative;
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: var(--black-card);
          border: 1px solid var(--black-border);
          box-shadow: var(--shadow-card);
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease;
          aspect-ratio: 4 / 5;
        }

        .photo-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: grayscale(15%) brightness(0.92);
          transition: filter 0.5s ease, transform 0.6s ease;
        }

        .photo-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: var(--radius-sm);
          box-shadow: inset 0 0 0 1px rgba(212,168,67,0);
          transition: box-shadow 0.4s ease;
          pointer-events: none;
        }

        .photo-card:hover {
          transform: translateY(-4px);
          border-color: var(--gold-dim);
          box-shadow: var(--shadow-raised), var(--glow-gold);
        }

        .photo-card:hover img {
          filter: grayscale(0%) brightness(1);
          transform: scale(1.04);
        }

        .photo-card:hover::after {
          box-shadow: inset 0 0 0 1px rgba(212,168,67,0.25);
        }

        .photo-lightbox {
          position: fixed;
          inset: 0;
          background: rgba(8, 8, 7, 0.94);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .lightbox-image {
          max-width: 88vw;
          max-height: 86vh;
          object-fit: contain;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-raised), var(--glow-gold);
          border: 1px solid var(--black-border);
        }

        .lightbox-close {
          position: absolute;
          top: 28px;
          right: 32px;
          background: var(--black-raised);
          border: 1px solid var(--black-border);
          color: var(--cream);
          font-family: var(--font-mono);
          font-size: 18px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .lightbox-close:hover {
          border-color: var(--gold);
          color: var(--gold-bright);
          box-shadow: var(--glow-gold);
        }

        .lightbox-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--black-raised);
          border: 1px solid var(--black-border);
          color: var(--cream);
          font-size: 28px;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .lightbox-nav:hover {
          border-color: var(--gold);
          color: var(--gold-bright);
          box-shadow: var(--glow-gold);
        }

        .lightbox-prev { left: 24px; }
        .lightbox-next { right: 24px; }

        /* ── RESPONSIVE ──────────────────────────────────────── */

        /* Tablet */
        @media (max-width: 900px) {
          .section {
            padding: 72px 20px;
          }

          .photo-grid {
            grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
            gap: 14px;
          }

          .section-title {
            margin-bottom: 40px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .section {
            padding: 56px 16px;
          }

          .section-label {
            font-size: 11px;
            letter-spacing: 0.25em;
          }

          .section-title {
            font-size: clamp(28px, 8vw, 40px);
            margin-bottom: 28px;
          }

          .photo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
          }

          .photo-card {
            border-radius: var(--radius-sm);
            aspect-ratio: 1 / 1;
          }

          /* Disable hover-lift on touch devices, keep tap feedback instead */
          .photo-card:hover {
            transform: none;
          }

          .photo-card:active {
            transform: scale(0.97);
            border-color: var(--gold-dim);
          }

          .photo-lightbox {
            padding: 0 8px;
          }

          .lightbox-image {
            max-width: 94vw;
            max-height: 78vh;
          }

          .lightbox-nav {
            width: 40px;
            height: 40px;
            font-size: 22px;
          }

          .lightbox-prev {
            left: 8px;
          }

          .lightbox-next {
            right: 8px;
          }

          .lightbox-close {
            top: 12px;
            right: 12px;
            width: 38px;
            height: 38px;
            font-size: 16px;
          }
        }

        /* Very small screens */
        @media (max-width: 380px) {
          .photo-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 8px;
          }

          .lightbox-nav {
            width: 34px;
            height: 34px;
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}