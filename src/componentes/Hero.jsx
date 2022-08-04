import React from "react";
import VideoHero from "../media/coverVideo.mp4";

export default function Hero() {
  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center relative">
      <video
        id="video"
        className="w-full h-screen object-cover"
        src={VideoHero}
        autoPlay
        loop
        muted
      />

      <div className="w-full h-screen bg-black/30 absolute top-0 left-0 text-white flex items-center justify-center text-3xl md:text-6xl font-semibold">
        {" "}
        Bienvenido a mi website{" "}
      </div>
    </div>
  );
}
