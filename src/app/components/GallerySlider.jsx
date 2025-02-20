import { useState } from "react";
import Image from "next/image";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import glr1 from "../Asset/Assethome/Gallery1.png";
import glr2 from "../Asset/Assethome/Gallery2.png";
import glr3 from "../Asset/Assethome/Gallery3.png";

const images = [glr1, glr2, glr3];

const GallerySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [direction, setDirection] = useState(0);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const getVisibleImages = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    const next = (currentIndex + 1) % images.length;
    return [images[prev], images[currentIndex], images[next]];
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center overflow-hidden">
      {/* Tombol Left */}
      <button
        className="absolute left-0 text-[#C59E5F] p-2 bg-black bg-opacity-50 rounded-full z-10"
        onClick={prevSlide}
      >
        <CircleArrowLeft size={32} />
      </button>

      {/* Container Gambar dengan Animasi */}
      <div className="flex items-center justify-center w-full gap-4">
        <AnimatePresence initial={false} custom={direction}>
          {getVisibleImages().map((src, index) => (
            <motion.div
              key={index}
              className={`relative flex-shrink-0 transition-all duration-500 ${{
                1: "brightness-100 scale-105",
                0: "brightness-50 scale-90",
                2: "brightness-50 scale-90",
              }[index]}`}
              style={{
                width: index === 1 ? "400px" : "300px",
                height: index === 1 ? "300px" : "250px",
              }}
              initial={{ x: direction * 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -direction * 100, opacity: 0 }}
              transition={{ type: "tween", duration: 0.5 }}
            >
              <Image
                src={src}
                alt={`Gallery ${index + 1}`}
                width={400}
                height={300}
                className="object-cover w-full h-full rounded-lg"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Tombol Right */}
      <button
        className="absolute right-0 text-[#C59E5F] p-2 bg-black bg-opacity-50 rounded-full z-10"
        onClick={nextSlide}
      >
        <CircleArrowRight size={32} />
      </button>
    </div>
  );
};

export default GallerySlider;
