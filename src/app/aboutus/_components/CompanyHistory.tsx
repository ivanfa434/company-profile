"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const CompanyHistory = () => {
  return (
    <section className="bg-gray-100">
      <div className="relative h-[500px] w-full overflow-hidden">
        <Image
          src="/company_masthead_2.jpg"
          alt="Company Banner"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0  bg-opacity-40"></div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-orange-400">
            ABOUT US
          </h1>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-4xl mx-auto px-6 text-center mt-10"
      >
        <p className="text-lg text-gray-700 pb-10 leading-relaxed">
          Didirikan pada tahun <strong>1972</strong>, perusahaan kami telah
          berkembang menjadi salah satu pemimpin inovasi dalam industri
          teknologi musik. Dengan visi menghadirkan solusi terbaik bagi para
          musisi dan pencinta teknologi audio, kami terus mengembangkan
          produk-produk berkualitas tinggi.
        </p>
      </motion.div>
    </section>
  );
};

export default CompanyHistory;
