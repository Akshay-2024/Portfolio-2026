"use client";

import { useSyncExternalStore } from "react";

import LoaderVideo from "@/components/LoaderVideo";
import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Collections from "@/components/Collections";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

function useHasVisited() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      if (typeof window === "undefined") return false;
      return sessionStorage.getItem("portfolio-loaded") === "true";
    },
    () => false
  );
}

export default function Home() {
  const hasVisited = useHasVisited();

  const handleLoaderFinish = () => {
    sessionStorage.setItem("portfolio-loaded", "true");
    window.location.reload();
  };

  // Show loader only first time
  if (!hasVisited) {
    return <LoaderVideo onFinish={handleLoaderFinish} />;
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Collections />
      <Projects />
      <Contact />
    </>
  );
}