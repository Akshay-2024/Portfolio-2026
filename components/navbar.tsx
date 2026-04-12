"use client"
import { useState } from "react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav>
      <Link href="/" className="nav-logo">AS/</Link>

      {/* HAMBURGER */}
      <div className="nav-toggle" onClick={() => setOpen(!open)}>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
        <span className={open ? "line open" : "line"}></span>
      </div>

      {/* LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><Link href="#intro" onClick={() => setOpen(false)}>About</Link></li>
        <li><Link href="#skills" onClick={() => setOpen(false)}>Skills</Link></li>
        <li><Link href="#education" onClick={() => setOpen(false)}>Education</Link></li>
        <li><Link href="#experience" onClick={() => setOpen(false)}>Experience</Link></li>
        <li><Link href="#collections" onClick={() => setOpen(false)}>Collections</Link></li>
        <li><Link href="#projects" onClick={() => setOpen(false)}>Projects</Link></li>
        <li><Link href="#contact" onClick={() => setOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}