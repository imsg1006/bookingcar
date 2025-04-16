"use client";
import React from "react";
import { Boxes } from "../ui/LandingBox";
import { cn } from "../../../../lib/utils"

export function BackgroundBoxesDemo() {
  return (
    <div className="h-96 max-w-screen relative w-full overflow-hidden bg-black  flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-yellow-200 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes /> 
      <p className={cn("md:text-4xl text-6xl m-5 text-yellow-200 font-extrabold relative z-20")}>
      Carvo
      </p>
      <p className="text-center mt-2 text-amber-100 relative z-20">
      Seamless cab bookings with trusted drivers, real-time tracking, and unbeatable comfort
      </p>
    </div>
  );
}
