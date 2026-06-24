"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "./ui/carousel";
import Image from "next/image";

export interface mauerImg {
  src: string;
  alt: string;
  source: string;
}

interface ImageCarousselProps {
  images: mauerImg[];
}

export function ImageCaroussel({ images }: ImageCarousselProps) {
  return (
    <Carousel>
      <CarouselContent className="-ml-1">
        {images.map((image, index) => (
          <CarouselItem key={index} className="basis-full pl-1">
            <div className="relative w-full min-h-[60vh] rounded-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <p className="mb-4 text-sm">{image.source}</p>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}