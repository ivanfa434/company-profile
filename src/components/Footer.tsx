import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white">Roland</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/" className="hover:text-orange-400 transition">Home</Link></li>
              <li><Link href="/aboutus" className="hover:text-orange-400 transition">About Us</Link></li>
              <li><Link href="/teams" className="hover:text-orange-400 transition">Teams</Link></li>
              <li><Link href="/product" className="hover:text-orange-400 transition">Products</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-orange-400 transition"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-orange-400 transition"><FaInstagram size={20} /></a>
              <a href="#" className="hover:text-orange-400 transition"><FaYoutube size={20} /></a>
              <a href="#" className="hover:text-orange-400 transition"><FaTwitter size={20} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <p className="mt-4">Yogyakarta, Indonesia</p>
            <p>Email: roland@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-6 text-center text-sm">
          <p>&copy; 2025 RolandTheme. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
