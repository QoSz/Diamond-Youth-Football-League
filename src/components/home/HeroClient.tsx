'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

export function HeroCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[1, 2, 3].map((item) => (
          <CarouselItem key={item}>
            <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full p-1">
              <Image
                src="/images/Hero-Image.jpg"
                alt={`Young footballer in action ${item}`}
                fill
                priority
                className="object-cover rounded-[1.618rem]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 hover:text-[#FF4500]" />
      <CarouselNext className="right-2 hover:text-[#FF4500]" />
    </Carousel>
  );
} 