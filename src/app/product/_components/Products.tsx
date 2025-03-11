"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Roland TD-17KVX",
    price: "Rp 25.000.000",
    image: "/td-17kvx.jpg",
    desc: "Drum elektronik dengan feel alami dan fitur coaching.",
  },
  {
    id: 2,
    name: "Roland FP-30X",
    price: "Rp 10.500.000",
    image: "/fp-30x.jpg",
    desc: "Piano digital portabel dengan suara realistis dan Bluetooth.",
  },
  {
    id: 3,
    name: "Roland V-02HD MK II",
    price: "Rp 6.800.000",
    image: "/v-02hd.jpg",
    desc: "Switcher video kompak untuk produksi live streaming.",
  },
  {
    id: 4,
    name: "Roland JC-40",
    price: "Rp 14.200.000",
    image: "/jc-40.jpg",
    desc: "Amplifier gitar dengan efek chorus ikonik dari Roland.",
  },
  {
    id: 5,
    name: "Roland Juno-DS88",
    price: "Rp 17.500.000",
    image: "/juno-ds88.jpg",
    desc: "Synthesizer 88-key dengan suara ekspresif dan ringan.",
  },
  {
    id: 6,
    name: "Roland TR-8S",
    price: "Rp 12.900.000",
    image: "/tr-8s.png",
    desc: "Drum machine modern dengan suara analog dan digital hybrid.",
  },
  {
    id: 7,
    name: "Roland GO:LIVECAST",
    price: "Rp 3.400.000",
    image: "/go-livecast.jpg",
    desc: "Studio siaran portabel untuk kreator konten dan podcaster.",
  },
  {
    id: 8,
    name: "Roland VT-4",
    price: "Rp 4.900.000",
    image: "/vt-4.jpg",
    desc: "Voice Transformer dengan efek vokal canggih untuk performa live.",
  },
  {
    id: 9,
    name: "Roland SPD-SX",
    price: "Rp 11.300.000",
    image: "/spd-sx.jpg",
    desc: "Sampling pad dengan trigger dinamis dan penyimpanan besar.",
  },
  {
    id: 10,
    name: "Roland A-49",
    price: "Rp 3.100.000",
    image: "/a-49.jpg",
    desc: "MIDI controller keyboard dengan feel responsif dan ringan.",
  },
  {
    id: 11,
    name: "Roland AC-33",
    price: "Rp 8.600.000",
    image: "/ac-33.jpg",
    desc: "Amplifier akustik dengan fitur looping dan suara jernih.",
  },
  {
    id: 12,
    name: "Roland RC-500",
    price: "Rp 5.200.000",
    image: "/rc-500.jpg",
    desc: "Looper pedal stereo dengan overdub tanpa batas dan efek kreatif.",
  },
  {
    id: 13,
    name: "Roland JUPITER-X",
    price: "Rp 43.500.000",
    image: "/jupiterx.jpg",
    desc: "Synthesizer yang menggabungkan desain klasik Roland dan kualitas build premium dengan mesin synth baru yang kuat, mampu mereproduksi suara analog legendaris seperti JUPITER-8, JUNO-106, dan SH-101, serta suara digital seperti XV-5080 dan piano RD. Dilengkapi dengan fitur I-Arpeggio yang cerdas dan kemampuan untuk melayer hingga 5 bagian, termasuk drum.",
  },
  {
    id: 14,
    name: "Roland GO:KEYS 3",
    price: "Rp 5.000.000",
    image: "/gokeys.jpg",
    desc: "Keyboard portabel dengan antarmuka yang mudah digunakan, dilengkapi dengan sound engine ZEN-Core Roland, fitur pengiring otomatis, dan kemampuan rekaman internal. Cocok untuk pemula dan musisi yang ingin berkreasi di mana saja.",
  },
  {
    id: 15,
    name: "V-Drums x Roland Cloud",
    price: "Rp 30.000.000",
    image: "/vdrum.jpg",
    desc: "Dengan V-Drums, Anda dapat mengakses potensi sonik sesungguhnya dari modul melalui Roland Cloud, memberikan akses ke berbagai suara drum dan fitur tambahan untuk meningkatkan pengalaman bermain drum elektronik Anda.",
  },
  {
    id: 16,
    name: "Roland GO:MIXER PRO-X",
    price: "Rp 2.000.000",
    image: "/promo_fv.jpg",
    desc: "Mixer audio kompak dengan kualitas profesional untuk perangkat mobile Anda, memungkinkan perekaman audio berkualitas tinggi untuk video, live streaming, dan produksi musik di mana saja.",
  },
  {
    id: 17,
    name: "Roland SH-4d Desktop Synthesizer",
    price: "Rp 8.500.000",
    image: "/promo_fv_sh-4d.jpg",
    desc: "Synthesizer desktop dengan workflow hands-on dan alat sintesis mendalam untuk merancang suara masa lalu, sekarang, dan masa depan. Dilengkapi dengan berbagai mesin sintesis dan sequencer yang kuat.",
  },
  {
    id: 18,
    name: "Roland GP-6 Baby Grand Piano",
    price: "Rp 75.000.000",
    image: "/promo_fv_gp-6.jpg",
    desc: "Piano grand digital dengan desain elegan dan suara piano akustik yang kaya, menawarkan pengalaman bermain piano yang autentik dengan teknologi digital canggih.",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Rina",
    text: "Produk berkualitas! Sangat puas dengan gitar yang saya beli.",
  },
  {
    id: 2,
    name: "Dian",
    text: "Pelayanan luar biasa! Drum set yang saya beli memiliki suara yang mantap.",
  },
  {
    id: 3,
    name: "Budi",
    text: "Keyboardnya enak banget dipakai, suara jernih dan nyaman dimainkan.",
  },
];

const Products = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 md:px-16 lg:px-32">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-orange-400">PRODUCTS & SERVICES</h2>
        <p className="text-lg text-gray-600 mt-4">
          Temukan berbagai alat musik dan perlengkapan audio berkualitas tinggi.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: product.id * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-xl mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.desc}</p>
            <p className="text-orange-400 font-semibold text-lg">
              {product.price}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold text-center text-orange-400"
        >
          CUSTOMER TESTIMONIAL
        </motion.h3>
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-md w-80 text-center"
            >
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <h4 className="font-semibold mt-2">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
