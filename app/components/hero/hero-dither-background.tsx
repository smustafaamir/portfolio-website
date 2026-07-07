"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Dither from "./dither";

const HERO_DITHER_WAVE_COLOR = [
  0.9764705882352941, 0.45098039215686275, 0.08627450980392157,
] as [number, number, number];

const DITHER_BACKGROUND = {
  light: [1, 1, 1] as [number, number, number],
  dark: [0, 0, 0] as [number, number, number],
};

const FALLBACK_CLASS = "absolute inset-0 -z-20 bg-[#F97216]";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

type DitherMotionConfig = {
  disableAnimation: boolean;
  enableMouseInteraction: boolean;
};

function getMotionConfig(): DitherMotionConfig {
  const isLargeScreen = window.matchMedia("(min-width: 1024px)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  return {
    disableAnimation: prefersReducedMotion || !isLargeScreen,
    enableMouseInteraction: isLargeScreen && !prefersReducedMotion,
  };
}

export function HeroDitherBackground() {
  const { resolvedTheme } = useTheme();
  const [canRenderWebGL, setCanRenderWebGL] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState<[number, number, number]>(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("dark")
        ? DITHER_BACKGROUND.dark
        : DITHER_BACKGROUND.light
  );
  const [motionConfig, setMotionConfig] = useState<DitherMotionConfig>({
    disableAnimation: true,
    enableMouseInteraction: false,
  });

  useEffect(() => {
    if (!resolvedTheme) return;
    setBackgroundColor(
      resolvedTheme === "dark"
        ? DITHER_BACKGROUND.dark
        : DITHER_BACKGROUND.light
    );
  }, [resolvedTheme]);

  useEffect(() => {
    setCanRenderWebGL(supportsWebGL());
    setMotionConfig(getMotionConfig());

    const largeScreenQuery = window.matchMedia("(min-width: 1024px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updateMotionConfig = () => {
      setMotionConfig(getMotionConfig());
    };

    largeScreenQuery.addEventListener("change", updateMotionConfig);
    reducedMotionQuery.addEventListener("change", updateMotionConfig);

    return () => {
      largeScreenQuery.removeEventListener("change", updateMotionConfig);
      reducedMotionQuery.removeEventListener("change", updateMotionConfig);
    };
  }, []);

  if (!canRenderWebGL) {
    return <div className={FALLBACK_CLASS} aria-hidden="true" />;
  }

  return (
    <div
      className="absolute inset-0 -z-20 size-full lg:pointer-events-auto pointer-events-none"
      aria-hidden="true"
    >
      <Dither
        waveColor={HERO_DITHER_WAVE_COLOR}
        backgroundColor={backgroundColor}
        disableAnimation={motionConfig.disableAnimation}
        enableMouseInteraction={motionConfig.enableMouseInteraction}
      />
    </div>
  );
}
