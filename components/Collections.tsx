import Link from 'next/link'

export default function Collections() {
  return (
    <section className="section" id="collections">
      <p className="section-label">Gallery</p>

      <h2 className="section-title">
        MY<br />COLLECTIONS
      </h2>

      <div className="collections-grid">

        <Link href="/certificates" className="collection-card">
          <div className="collection-img-placeholder">🏆</div>
          <div className="collection-info">
            <h3>Certificates</h3>
            <span>17 achievements</span>
          </div>
        </Link>

        <Link href="/photos" className="collection-card">
          <div className="collection-img-placeholder">📷</div>
          <div className="collection-info">
            <h3>Photos</h3>
            <span>12 captures</span>
          </div>
        </Link>

        <Link href="/videos" className="collection-card">
          <div className="collection-img-placeholder">🎬</div>
          <div className="collection-info">
            <h3>Videos</h3>
            <span>10 films</span>
          </div>
        </Link>

        <Link href="/posters" className="collection-card">
          <div className="collection-img-placeholder">🎨</div>
          <div className="collection-info">
            <h3>Posters</h3>
            <span>9 designs</span>
          </div>
        </Link>

      </div>
    </section>
  )
}