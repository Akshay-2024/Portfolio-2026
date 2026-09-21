"use client";

import { useEffect, useState } from "react";

interface SecondaryLoaderProps {
  type: "certificates" | "photos" | "videos" | "posters";
  label?: string;
  title?: string;
}

export default function SecondaryLoader({ type, label, title }: SecondaryLoaderProps) {
  const [progress, setProgress] = useState(15);

  useEffect(() => {
    // Scroll to top immediately
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Animated loader progress bar from 15% to 100%
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 22 + 15);
        return Math.min(prev + step, 100);
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  const getMeta = () => {
    switch (type) {
      case "certificates":
        return {
          label: label || "Achievements",
          title: title || "CERTIFICATES",
        };
      case "photos":
        return {
          label: label || "Gallery",
          title: title || "PHOTOGRAPHY",
        };
      case "videos":
        return {
          label: label || "Showcase",
          title: title || "VIDEOGRAPHY",
        };
      case "posters":
        return {
          label: label || "Creative",
          title: title || "POSTERS",
        };
      default:
        return { label: "Collection", title: "PORTFOLIO" };
    }
  };

  const meta = getMeta();

  return (
    <main className="secondary-loader-page">
      {/* Top sticky progress bar overlay */}
      <div className="secondary-progress-sticky">
        <div className="secondary-progress-track">
          <div
            className="secondary-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="secondary-loader-container">
        {/* Header section with status badge & percentage */}
        <div className="secondary-loader-header">
          <div>
            <p className="section-label">{meta.label}</p>
            <h2 className="section-title" style={{ marginBottom: 0 }}>
              {meta.title}
            </h2>
          </div>

          <div className="secondary-loader-badge">
            <span className="secondary-loader-text">LOADING COLLECTION</span>
            <span className="secondary-loader-percent">{progress}%</span>
          </div>
        </div>

        {/* Skeleton Grid placeholders matching the target page layout */}
        {type === "certificates" && (
          <div className="certificates-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="certificate-skeleton-card" key={index}>
                <div className="skeleton certificate-image-skeleton" />
                <div className="certificate-content-skeleton">
                  <div className="skeleton certificate-title-skeleton" />
                  <div className="skeleton certificate-text-skeleton" />
                  <div className="skeleton certificate-text-skeleton short" />
                </div>
              </div>
            ))}
          </div>
        )}

        {type === "photos" && (
          <div className="photo-skeleton-grid">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="photo-skeleton-card skeleton" key={index} />
            ))}
          </div>
        )}

        {type === "videos" && (
          <div className="video-skeleton-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                className={`video-skeleton-card skeleton ${
                  index % 3 === 2 ? "wide" : "tall"
                }`}
                key={index}
              />
            ))}
          </div>
        )}

        {type === "posters" && (
          <div className="poster-skeleton-grid">
            {Array.from({ length: 6 }).map((_, index) => (
              <div className="poster-skeleton-card skeleton" key={index} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
