"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return (
    <nav className="flex items-center justify-between bg-black text-white p-4 relative">
      {/* Logo */}
      <Link href="/" passHref>
        <Image src="/roland-logo.png" alt="logo" width={187} height={40} priority />
      </Link>

      {/* Button untuk Mobile */}
      <button
        className="md:hidden block text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Overlay saat menu terbuka */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-black text-white shadow-lg transform transition-transform duration-300 z-50 
          ${isOpen ? "translate-x-0" : "translate-x-full"} md:relative md:flex md:w-auto md:h-auto md:translate-x-0 md:shadow-none`}
      >
        {/* Tombol Close di dalam menu */}
        <button
          className="absolute top-4 right-4 md:hidden text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {/* Link Navigasi */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 p-6 md:p-0 w-full mt-12 md:mt-0">
          {["Home", "About Us", "Product", "Teams"].map((item, index) => (
            <Link
              key={index}
              href={`/${item.toLowerCase().replace(" ", "")}`}
              className="block py-3 md:py-0 hover:text-orange-400 transition text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
