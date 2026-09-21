"use client";

import { useState, useEffect } from "react";
import SecondaryLoader from "@/components/SecondaryLoader";

export default function VideosPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    const timer = setTimeout(() => {
      setLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SecondaryLoader type="videos" />;
  }

  return (
    <section className="section" id="videos">
      <p className="section-label">Showcase</p>

      <h2 className="section-title">
        VIDEOGRAPHY
      </h2>

      <div className="video-grid">

        {/* Vertical Video */}
       <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/SyM1EcUYJoA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/j0HEm5F_bMs" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/8tbALWAHJjE"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/FalzDaE1MpQ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        
        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/fLbi7GLsT4Q" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

       <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/4wvp9zoHonA" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>
       
        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/g3SuL6ravmA" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

         {/* Vertical */}
        <div className="video-card tall">
          <iframe
        src="https://www.youtube.com/embed/IrV78WuoffA" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        {/* Horizontal */}
        <div className="video-card wide">
          <iframe
        src="https://www.youtube.com/embed/JcyWqeGmXxo"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
        </div>

        <div className="video-card wide">
          <iframe
        src="https://www.youtube.com/embed/lEhZN-zqXLo" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
        ></iframe>
        </div>
        
        <div className="video-card wide">
          <iframe
        src="https://www.youtube.com/embed/Y2j0ip18edI" 
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        
        ></iframe>
        </div>
      
        
      </div>
    </section>
  )
}