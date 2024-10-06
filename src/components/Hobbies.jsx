/* eslint-disable react/prop-types */
import { useState } from "react";
import HobbieAccordion from "./HobbieAccordion";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CgGym } from "react-icons/cg";
import { GiBookCover, GiMeditation } from "react-icons/gi";
import { BsFillMusicPlayerFill } from "react-icons/bs";

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
  const { t } = useTranslation();

  const HOBBIES = [
    {
      title: t("hobbies.title1"),
      description: t("hobbies.description1"),
      icon: <CgGym className="text-4xl " />,
    },
    {
      title: t("hobbies.title2"),
      description: t("hobbies.description2"),
      icon: <GiBookCover className="text-6xl" />,
    },
    {
      title: t("hobbies.title3"),
      description: t("hobbies.description3"),
      icon: <BsFillMusicPlayerFill className="text-6xl " />,
    },
    {
      title: t("hobbies.title4"),
      description: t("hobbies.description4"),
      icon: <GiMeditation className="text-6xl " />,
    },
  ];

  return (
    <motion.div
      id="hobbies"
      className="container mx-auto w-3/4 mt-20 py-16 tracking-tighter"
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
        {t("hobbies.heading")}
      </motion.h2>

      <motion.p
        className="mb-8 leading-relaxed text-lg lg:text-xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {t("hobbies.paragraph")}:
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
