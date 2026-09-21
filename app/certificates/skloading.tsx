export default function skloading() {
  return (
    <main className="certificates-page">
      <div className="certificates-container">
        {/* Heading skeleton */}
        <div className="skeleton title-skeleton" />
        <div className="skeleton subtitle-skeleton" />

        {/* Certificate cards */}
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
      </div>
    </main>
  );
}