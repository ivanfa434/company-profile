"use client";

import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Harsh P.", role: "Product Designer", rating: 4.9, text: "Thanks to pagedone, I feel more informed and confident about my investment decisions than ever before.", image: "/user1.jpg" },
  { name: "Jane D", role: "CEO", rating: 4.9, text: "Pagedone has made it possible for me to stay on top of my portfolio and make informed decisions quickly and easily.", image: "/user2.jpg" },
  { name: "Michael R.", role: "Software Engineer", rating: 5.0, text: "Using pagedone has streamlined my workflow tremendously. Highly recommended!", image: "/user3.jpg" },
  { name: "Alice W.", role: "Entrepreneur", rating: 4.8, text: "A fantastic tool that keeps me updated and on top of my investments.", image: "/user4.jpg" },
  { name: "David K.", role: "Investor", rating: 5.0, text: "Absolutely love using pagedone. It has changed the way I manage my finances.", image: "/user5.jpg" },
  { name: "Samantha L.", role: "Business Analyst", rating: 4.9, text: "Pagedone is an amazing platform that helps me make smart financial decisions.", image: "/user6.jpg" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };
    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);
    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl md:text-5xl font-bold text-orange-400 text-center">CUSTOMER TESTIMONIAL</h2>
      <div className="overflow-hidden relative mt-10">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `-${(currentIndex % testimonials.length) * (100 / slidesToShow)}%` }}
          transition={{ ease: "easeInOut", duration: 0.5 }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="min-w-full sm:min-w-[33.33%] p-4">
              <motion.div
                className={`border rounded-lg shadow-md p-6 transition-all ${index === currentIndex ? "border-orange-400" : "border-gray-300"}`}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-500" />
                  <span className="ml-2 font-semibold text-orange-400">{testimonial.rating}</span>
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full mr-3" />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <motion.span
              key={index}
              className={`h-3 w-3 rounded-full ${index === currentIndex ? "bg-orange-400" : "bg-gray-300"}`}
              whileHover={{ scale: 1.3 }}
            ></motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}