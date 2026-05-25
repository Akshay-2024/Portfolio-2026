"use client";

import { useEffect, useState } from "react";

interface LoaderVideoProps {
  onFinish: () => void;
}

export default function LoaderVideo({
  onFinish,
}: LoaderVideoProps) {
  const [fadeOut, setFadeOut] = useState(false);

  const handleFinish = () => {
    setFadeOut(true);

    setTimeout(() => {
      onFinish();
    }, 500);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleFinish();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`video-loader ${fadeOut ? "fade-out" : ""}`}
    >
      <video
        autoPlay
        muted
        playsInline
        onEnded={handleFinish}
      >
        <source
          src="/videos/loader sign.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}