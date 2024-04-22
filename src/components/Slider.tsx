"use client";

import Image from "next/image";
import { useCallback } from "react";
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

interface SliderProps {
  images: string[];
}

const Slider = ({ images }: SliderProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 5000 })
  ]);

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])

  return (
    <div className="relative bg-gray-900 p-8 rounded-xl">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3 xl:2-1/4 mx-4">
              <Image
                src={image}
                alt={`Image ${index}`}
                className="w-full h-auto"
                width={600}
                height={600}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="absolute left-4 text-white md:text-gray-900 text-xl md:-left-10 top-1/2 transition-all ease-in-out duration-200 md:text-4xl hover:opacity-85 hover:text-5xl md:active:text-4xl -translate-x-1/2 -translate-y-1/2" onClick={scrollPrev}><IoIosArrowDropleftCircle /></button>
      <button className="absolute right-4 text-white md:text-gray-900 text-xl md:-right-10 top-1/2 transition-all ease-in-out duration-200 md:text-4xl hover:opacity-85 hover:text-5xl md:active:text-4xl translate-x-1/2 -translate-y-1/2" onClick={scrollNext}><IoIosArrowDroprightCircle /></button>
    </div>
  );
};

export default Slider;

