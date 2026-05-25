"use client";

import { useEffect, useRef, useState } from "react";

interface LoaderVideoProps {
  onFinish: () => void;
}

export default function LoaderVideo({
  onFinish,
}: LoaderVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    const handleEnded = () => {
      setFadeOut(true);

      setTimeout(() => {
        onFinish();
      }, 800);
    };

    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("ended", handleEnded);
    };
  }, [onFinish]);

  return (
    <div
      className={`video-loader ${fadeOut ? "fade-out" : ""}`}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="loader-video"
      >
        <source
          src="/videos/loader.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}