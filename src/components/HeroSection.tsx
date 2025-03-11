"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Herosection = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  useEffect(() => {
    return () => {
      plugin.current.stop();
    };
  }, []);

  const images = ["/gambarhome1.jpg", "/gambarhome2.jpg", "/gambarhome3.jpg", "/gambarhome4.jpg"];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="relative w-full h-screen overflow-hidden"
    >
      <Carousel plugins={[plugin.current]} className="w-full h-screen">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="w-full h-screen">
              <img src={image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      
      <div className="absolute inset-0 flex items-center justify-center text-white text-center px-4 bg-opacity-50">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold">Jelajahi Dunia Musik Bersama Roland</h3>
          <p className="text-base md:text-lg lg:text-xl mt-4">
            Nikmati pengalaman musik terbaik dengan Produk Roland.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Herosection;