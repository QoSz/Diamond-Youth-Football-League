'use client';

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function HeroCarousel() {
  // Use a smaller initial set of images for faster loading
  const [visibleImages, setVisibleImages] = useState<number[]>([1, 2, 3, 4, 5]);
  const totalImages = 22;
  const [api, setApi] = React.useState<CarouselApi>();

  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  // Load more images progressively as the user interacts with the carousel
  useEffect(() => {
    // After initial render, start loading the rest of the images in batches
    const timer = setTimeout(() => {
      const nextBatch = Array.from(
        { length: Math.min(10, totalImages - visibleImages.length) }, 
        (_, i) => i + visibleImages.length + 1
      );
      
      if (nextBatch.length > 0) {
        setVisibleImages(prev => [...prev, ...nextBatch]);
      }
    }, 5000); // Wait 5 seconds after initial load before loading more

    return () => clearTimeout(timer);
  }, [visibleImages]);

  // Handle slide change to potentially load more images
  const handleSlideChange = React.useCallback((index: number) => {
    // If we're approaching the end of loaded images, load more
    if (index >= visibleImages.length - 3 && visibleImages.length < totalImages) {
      const nextBatch = Array.from(
        { length: Math.min(5, totalImages - visibleImages.length) }, 
        (_, i) => i + visibleImages.length + 1
      );
      
      if (nextBatch.length > 0) {
        setVisibleImages(prev => [...prev, ...nextBatch]);
      }
    }
  }, [visibleImages, totalImages]);

  // Setup the slide change listener when the API is available
  React.useEffect(() => {
    if (!api) return;
    
    const onSelect = () => {
      const selectedIndex = api.selectedScrollSnap();
      handleSlideChange(selectedIndex);
    };
    
    api.on("select", onSelect);
    
    // Initial call to handle the first slide
    onSelect();
    
    return () => {
      api.off("select", onSelect);
    };
  }, [api, handleSlideChange]);

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      setApi={setApi}
    >
      <CarouselContent>
        {visibleImages.map((number) => (
          <CarouselItem key={number}>
            <div className="relative h-[250px] sm:h-[350px] lg:h-[450px] w-full p-1">
              <Image
                src={`https://placehold.co/1600x900?text=DYFL+Photo+${number}`}
                alt={`Diamond Youth Football League Photo ${number}`}
                fill
                priority={number <= 2}
                loading={number <= 5 ? "eager" : "lazy"}
                className="object-cover rounded-[1.618rem]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                quality={number <= 5 ? 85 : 75}
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