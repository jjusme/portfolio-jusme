/* eslint-disable react/prop-types */

import { useState } from "react";
import { HOBBIES } from "../constants";
import HobbieAccordion from "./HobbieAccordion";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const Hobbies = () => {
  const [currentOpen, setCurrentOpen] = useState(0);

  return (
    <motion.div
      id="hobbies"
      className="container mx-auto max-w-3xl mt-20 py-16 tracking-tighter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2
        className="mb-12 text-4xl text-center font-semibold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hobbies
      </motion.h2>

      <motion.p
        className="mb-8  text-lg leading-relaxed"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Outside of work, my hobbies are a major source of my creativity and
        inspiration. <br /> Here are some of my main hobbies that keep me
        motivated and full of fresh idea:
      </motion.p>

      <div className="border border-gray-900 rounded-lg divide-y divide-gray-900">
        {HOBBIES.map((hobbie, index) => (
          <HobbieAccordion
            key={index}
            i={index}
            title={hobbie.title}
            description={hobbie.description}
            icon={hobbie.icon}
            currentOpen={currentOpen}
            setCurrentOpen={setCurrentOpen}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Hobbies;
