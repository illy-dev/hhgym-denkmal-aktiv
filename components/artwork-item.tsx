"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface ArtworkItemProps {
  src: string;
  alt: string;
}

export function ArtworkItem({ src, alt }: ArtworkItemProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative w-full aspect-square transition-all duration-700 ${
        isVisible ? "animate-fade-up" : "opacity-0 translate-y-4"
      }`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover rounded-lg"
      />
    </div>
  );
}
