"use client";

import dynamic from "next/dynamic";

export const HeroDitherLoader = dynamic(
  () =>
    import("./hero-dither-background").then(
      (module) => module.HeroDitherBackground
    ),
  {
    ssr: false,
    loading: () => (
      <div
        className="absolute inset-0 -z-20 bg-[#F97216]"
        aria-hidden="true"
      />
    ),
  }
);
