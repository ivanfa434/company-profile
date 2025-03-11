"use client"

import { motion } from "framer-motion";

import { FaLightbulb, FaUsers, FaMedal, FaHandshake } from "react-icons/fa";

const variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Culture = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2 className="text-4xl font-bold text-orange-400" variants={variants}>
          Culture
        </motion.h2>
        <motion.p className="text-lg text-gray-600 mt-4" variants={variants}>
          Kami percaya bahwa inovasi lahir dari lingkungan kerja yang mendukung kreativitas dan kolaborasi.
        </motion.p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[ 
          { icon: <FaLightbulb className="text-orange-500 text-5xl mb-4" />, title: "Kreativitas dan Inovasi", text: "Kami selalu mencari cara baru untuk menghadirkan solusi terbaik bagi pelanggan." },
          { icon: <FaUsers className="text-blue-500 text-5xl mb-4" />, title: "Kolaborasi", text: "Kami bekerja sebagai satu tim, berbagi ide, dan mendukung satu sama lain dalam mencapai tujuan bersama." },
          { icon: <FaMedal className="text-green-500 text-5xl mb-4" />, title: "Keunggulan dan Kualitas", text: "Setiap produk yang kami hasilkan melalui proses yang ketat untuk memastikan performa terbaik." },
          { icon: <FaHandshake className="text-purple-500 text-5xl mb-4" />, title: "Komitmen terhadap Pelanggan", text: "Kami mendengarkan masukan pelanggan dan berusaha memberikan pengalaman terbaik dalam setiap interaksi." }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={variants}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center"
          >
            {item.icon}
            <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Culture;
