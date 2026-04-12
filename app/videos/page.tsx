export default function VideosPage() {
  return (
    <section className="section" id="videos">
      <p className="section-label">Showcase</p>

      <h2 className="section-title">
        VIDEOGRAPHY
      </h2>

      <div className="video-grid">

        {/* Vertical Video */}
        <div className="video-card tall">
          <video src="/videos/v1.mp4" controls />
        </div>

        <div className="video-card tall">
          <video src="/videos/v2.mp4" controls />
        </div>

        <div className="video-card tall">
          <video src="/videos/v3.mp4" controls />
        </div>
        <div className="video-card tall">
          <video src="/videos/v4.mp4" controls />
        </div>
        <div className="video-card tall">
          <video src="/videos/v5.mp4" controls />
        </div>
        <div className="video-card tall">
          <video src="/videos/v6.mp4" controls />
        </div>
        <div className="video-card tall">
          <video src="/videos/v7.mp4" controls />
        </div>

         {/* Vertical */}
        <div className="video-card tall">
          <video src="/videos/v10.mp4" controls />
        </div>

        {/* Horizontal */}
        <div className="video-card wide">
          <video src="/videos/v8.mp4" controls />
        </div>

        <div className="video-card wide">
          <video src="/videos/v9.mp4" controls />
        </div>
        
        
      </div>
    </section>
  )
}