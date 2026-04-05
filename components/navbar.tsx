import Link from 'next/link'

export default function navbar() {
  return (
    <nav>
      <Link href="/" className="nav-logo">AS/</Link>

      <ul className="nav-links">
        <li><Link href="#intro">About</Link></li>
        <li><Link href="#skills">Skills</Link></li>
        <li><Link href="#education">Education</Link></li>
        <li><Link href="#experience">Experience</Link></li>
        <li><Link href="#collections">Collections</Link></li>
        <li><Link href="#projects">Projects</Link></li>
        <li><Link href="#contact">Contact</Link></li>
      </ul>
    </nav>
  )
}
