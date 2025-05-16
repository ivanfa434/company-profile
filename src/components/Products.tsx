"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa";

export default function ProductsServices() {
  const [videoUrl, setVideoUrl] = useState<string | null>(null);

  const categories = [
    {
      title: "JUPITER-X",
      image: "/jupiterx.jpg",
      items: [
        "Jupiter-Xm menggabungkan desain Roland klasik dan kualitas rakitan premium dengan mesin synth baru yang bertenaga.",
      ],
    },
    {
      title: "GO:KEYS 3",
      image: "/gokeys.jpg",
      items: [
        "Instrumen powerful yang menyenangkan dengan interface yang mudah digunakan, sound ZEN-Core Roland, fitur pengiring otomatis, dan rekaman internal.",
      ],
    },
    {
      title: "V-Drums x Roland Cloud",
      image: "/vdrum.jpg",
      items: [
        "Dengan V-Drums, Anda bisa mengakses potensi sonic sesungguhnya dari modul melalui Roland Cloud.",
      ],
    },
    {
      title: "GO:MIXER PRO-X",
      image: "/promo_fv.jpg",
      items: [
        "Mixer audio compact dengan kualitas profesional untuk perangkat mobile Anda.",
      ],
      youtube: "https://www.youtube.com/watch?v=1wBXT-DdR8Q",
    },
    {
      title: "SH-4d Desktop Synthesizer | Carl Craig Performance",
      image: "/promo_fv_sh-4d.jpg",
      items: ["Carl Craig mencoba SH-4D, membawa Anda dalam perjalanan sonic."],
      youtube: "https://www.youtube.com/watch?v=NDTeRFOTNRg",
    },
    {
      title: "GP-6 Baby Grand Piano Performance",
      image: "/promo_fv_gp-6.jpg",
      items: [
        "Dengarkan warna tonal kompleks dari grand piano kelas-concert ini.",
      ],
      youtube: "https://www.youtube.com/watch?v=1zmgLdnVV8c",
    },
  ];

  const convertToEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1];
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  const openVideo = (videoLink: string) => {
    setVideoUrl(convertToEmbedUrl(videoLink));
  };

  const closeVideo = () => {
    setVideoUrl(null);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-orange-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        PRODUCTS & SERVICES
      </motion.h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            whileHover={{ scale: 1 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover"
              />
              {category.youtube && (
                <div
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-opacity-40 hover:bg-opacity-60 transition"
                  onClick={() => openVideo(category.youtube!)}
                >
                  <FaPlay className="text-white text-6xl" />
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{category.items[0]}</p>
              <button className="mt-4 text-sm font-semibold text-gray-900 hover:text-purple-800 transition">
                ➤ FIND OUT MORE
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
      {videoUrl && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-70 z-50">
          <button
            className="absolute top-5 right-5 text-black text-3xl font-bold rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-500 transition cursor-pointer"
            onClick={closeVideo}
          >
            ✖
          </button>
          <div className="relative w-full max-w-4xl px-4">
            <div className="relative w-full pb-[56.25%]">
              {" "}
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
