import Link from "next/link";
import { certificates } from "@/data/certificate";

export default function Collections() {
  const certCount = certificates.length;

  const items = [
    {
      title: "Certificates",
      count: `${certCount} achievements`,
      icon: "🏆",
      href: "/certificates",
    },
    {
      title: "Photos",
      count: "12 captures",
      icon: "📷",
      href: "/photos",
    },
    {
      title: "Videos",
      count: "10 films",
      icon: "🎬",
      href: "/videos",
    },
    {
      title: "Posters",
      count: "9 designs",
      icon: "🎨",
      href: "/posters",
    },
  ];

  return (
    <section className="section" id="collections">
      <p className="section-label">Gallery</p>

      <h2 className="section-title">
        MY<br />COLLECTIONS
      </h2>

      <div className="collections-grid">
        {items.map((item, i) => (
          <Link href={item.href} key={i} className="collection-card">
            <div className="card-glow"></div>

            <div className="collection-icon">{item.icon}</div>

            <div className="collection-info">
              <h3>{item.title}</h3>
              <span>{item.count}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}