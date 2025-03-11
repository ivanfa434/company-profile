"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const CompanyOverview = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const data = [
    {
      year: "1972",
      img: "/factory1.png",
      hoverImg: "/videogif2.gif",
      desc: "Roland Factory in 1972",
    },
    {
      year: "2010",
      img: "/factory2.jpg",
      hoverImg: "/videogif3.gif",
      desc: "Roland Factory in 2010",
    },
    {
      year: "2020",
      img: "/factory3.jpg",
      hoverImg: "/videogif1.gif",
      desc: "Roland Factory in 2020",
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
      className="relative mx-auto px-4 py-10"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-orange-400">Membentuk Masa Depan Musik Digital</h2>
        <p className="text-base md:text-lg lg:text-xl text-gray-700 mt-4">
          Sejak didirikan pada tahun 1972, Roland Corporation telah menjadi pemimpin dalam industri alat musik elektronik. <br />
          Dari keyboard profesional hingga synthesizer canggih, produk kami digunakan oleh musisi, produser, dan kreator di seluruh dunia.
        </p>
      </div>
      
      {/* Card Section */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map(({ year, img, hoverImg, desc }, index) => (
          <motion.div
            key={year}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="relative cursor-pointer overflow-hidden rounded-lg shadow-lg"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="w-full h-[300px] md:h-[400px] bg-cover bg-center transition-all duration-500"
              style={{ backgroundImage: `url(${hoveredIndex === index ? hoverImg : img})` }}
            />
            <div className="absolute inset-0 flex items-end p-6 bg-opacity-40">
              <div className="text-white">
                <h1 className="font-bold text-2xl md:text-4xl">{year}</h1>
                <p className="text-base md:text-lg">{desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default CompanyOverview;
