"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
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
      <Link href="/" passHref>
        <Image src="/roland-logo.png" alt="logo" width={187} height={40} priority />
      </Link>

      <button
        className="md:hidden block text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    <div
        className={`absolute top-0 right-0 w-3/4 h-screen bg-black text-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:flex md:w-auto md:h-auto md:translate-x-0 md:shadow-none transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col md:flex-row items-center md:space-x-6 p-6 md:p-0 w-full me-4">
          <Link href="/" className="block py-3 md:py-0 hover:text-orange-400 transition" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/aboutus" className="block py-3 md:py-0 hover:text-orange-400 transition" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="/product" className="block py-3 md:py-0 hover:text-orange-400 transition" onClick={() => setIsOpen(false)}>
            Product
          </Link>
          <Link href="/teams" className="block py-3 md:py-0 hover:text-orange-400 transition" onClick={() => setIsOpen(false)}>
            Teams
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
