"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const timelineData = [
  {
    year: "1972",
    events: [
      "TR-33/TR-55/TR-77 Rhythm Machines - The first Roland-branded product",
      "Established in Osaka with a capital stock of 33 million yen.",
      "Sales offices open in Tokyo and Osaka.",
    ],
  },
  {
    year: "1973",
    events: [
      "SH-1000 Synthesizer - Roland's first synthesizer",
      "MEG Electronics Corporation (later BOSS Corporation) is established in Osaka.",
      "First participation at the NAMM Show in the USA.",
      "The Hamamatsu factory is completed.",
      "First participation at the Gakki Fair in Japan.",
    ],
  },
  {
    year: "1980",
    events: [
      "TR-808 Rhythm Machine - Achieved legendary status around the world.",
    ],
  },
  {
    year: "1983",
    events: [
      "MSQ-700 Sequencer - The world's first MIDI sequencer.",
      "JX-3P Synthesizer - Roland's first synthesizer with MIDI support.",
    ],
  },
  {
    year: "1997",
    events: [
      "V-Drums TD-10K Electronic Drums - Highly praised for natural feel and tone.",
    ],
  },
  {
    year: "2014",
    events: [
      "FA-08 Synthesizer - A synthesizer workstation with effortless real-time power.",
    ],
  },
];

const Timeline = () => {
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  return (
    <div className="p-20 min-h-full flex flex-col items-center bg-gray-50">
      <h1 className="text-3xl md:text-5xl font-bold text-orange-400 mb-8">
        Roland Product History
      </h1>

      <div className="relative w-full max-w-4xl">
        <div className="absolute left-5 top-0 bottom-0 w-1 bg-gray-300 rounded-full"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className="relative flex items-start mb-6"
            whileHover={{ scale: 1.02 }}
            onClick={() =>
              setSelectedYear(selectedYear === item.year ? null : item.year)
            }
          >
            <div className="absolute -left-3 top-5">
              <FaCircle className="text-blue-500 text-lg" />
            </div>

            <Card className="flex-1 p-5 ml-10 bg-white rounded-lg shadow-lg cursor-pointer">
              <CardContent>
                <h2 className="text-2xl font-semibold text-gray-900">
                  {item.year}
                </h2>
                <AnimatePresence>
                  {selectedYear === item.year && (
                    <motion.ul
                      initial={{ opacity: 0, y: -10, height: 0 }}
                      animate={{ opacity: 1, y: 0, height: "auto" }}
                      exit={{ opacity: 0, y: -10, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 list-disc list-inside text-gray-600 overflow-hidden"
                    >
                      {item.events.map((event, i) => (
                        <li key={i} className="text-lg">
                          {event}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
