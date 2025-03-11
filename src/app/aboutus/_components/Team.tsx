"use client";

import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Masahiro Minowa",
    role: "CEO dan Direktur Perwakilan",
    description:
      "Masahiro Minowa menjabat sebagai CEO dan Direktur Perwakilan Roland Corporation sejak 30 Juni 2024. Dengan pengalaman lebih dari 20 tahun di industri teknologi musik, beliau memimpin perusahaan dengan visi untuk menghubungkan kreativitas dengan teknologi.",
    image: "/img_officer_masahiro.jpg",
  },
  {
    name: "Yasunobu Suzuki",
    role: "Direktur",
    description:
      "Yasunobu Suzuki adalah Direktur di Roland Corporation. Beliau bertanggung jawab dalam pengembangan inovasi dan teknologi perusahaan, memastikan setiap produk memenuhi standar kualitas tertinggi.",
    image: "/img_officer_yasunobu.jpg",
  },
  {
    name: "Toshihiko Oinuma",
    role: "Direktur Independen Luar",
    description:
      "Toshihiko Oinuma menjabat sebagai Direktur Independen Luar sejak 2020. Dengan keahlian di bidang teknik audio, beliau memberikan pandangan dan arahan strategis untuk pengembangan produk-produk unggulan.",
    image: "/img_officer_06.jpg",
  },
  {
    name: "Brian K. Heywood",
    role: "Direktur Luar",
    description:
      "Brian K. Heywood telah menjadi Direktur Luar sejak 31 Oktober 2014. Dengan pengalaman luas dalam strategi pemasaran global, beliau membantu perusahaan memperluas jangkauan pasar dan meningkatkan kehadiran global Roland.",
    image: "/img_officer_brian.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-orange-400">Company Team</h2>
        <p className="mt-3 text-lg text-gray-600">
          Kami bangga memiliki tim yang terdiri dari individu berbakat dengan berbagai latar belakang keahlian.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="h-full shadow-lg rounded-2xl overflow-hidden transform hover:scale-105 transition-all duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Team;