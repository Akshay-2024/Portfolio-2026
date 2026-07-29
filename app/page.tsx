"use client";

import { useEffect, useState } from "react";

import LoaderVideo from "@/components/LoaderVideo";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import TechStack from "@/components/TechStack";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Collections from "@/components/Collections";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const [showLoader, setShowLoader] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const visited = sessionStorage.getItem("portfolio-loaded");

    if (!visited) {
      setShowLoader(true);
    }
  }, []);

  const handleLoaderFinish = () => {
    sessionStorage.setItem("portfolio-loaded", "true");
    setShowLoader(false);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  if (showLoader) {
    return <LoaderVideo onFinish={handleLoaderFinish} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <TechStack />
      <Education />
      <Experience />
      <Collections />
      <Projects />
      <Contact />
    </>
  );
}