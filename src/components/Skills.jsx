import { useTranslation } from "react-i18next";
import { TECHNICAL_SKILLS } from "../constants";
import { motion } from "framer-motion";
import { GiPuzzle } from "react-icons/gi";
import {
  FaBookReader,
  FaBrain,
  FaComments,
  FaSyncAlt,
  FaUserClock,
  FaUsersCog,
} from "react-icons/fa";
import { LiaSearchPlusSolid } from "react-icons/lia";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
};

const Skills = () => {
  const { t } = useTranslation();

  const soft_skills_translated = [
    {
      name: t("skills.soft_skills.soft2"),
      icon: <GiPuzzle className="text-4xl text-yellow-500" />,
    },
    {
      name: t("skills.soft_skills.soft3"),
      icon: <FaBrain className="text-4xl text-red-300" />,
    },
    {
      name: t("skills.soft_skills.soft4"),
      icon: <FaBookReader className="text-4xl text-blue-200" />,
    },
    {
      name: t("skills.soft_skills.soft5"),
      icon: <FaUsersCog className="text-4xl text-gray-400" />,
    },
    {
      name: t("skills.soft_skills.soft6"),
      icon: <FaComments className="text-4xl text-blue-400" />,
    },
    {
      name: t("skills.soft_skills.soft7"),
      icon: <FaSyncAlt className="text-4xl text-green-200" />,
    },
    {
      name: t("skills.soft_skills.soft8"),
      icon: <FaUserClock className="text-4xl text-blue-200" />,
    },
    {
      name: t("skills.soft_skills.soft9"),
      icon: <LiaSearchPlusSolid className="text-4xl text-blue-600" />,
    },
  ];

  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">
        {t("skills.heading")}
      </h2>
      <motion.div
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <h3 className="mb-6 w-fit border-b-2 border-yellow-400 self-center text-center text-2xl lg:text-3xl">
          {t("skills.technical")}
        </h3>
        <motion.div
          className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={itemVariants}
        >
          {TECHNICAL_SKILLS.map((skill, index) => (
            <div key={index} className="mb-8 flex items-center">
              {skill.icon}
              <h4 className="px-4 text-xl lg:text-2xl">{skill.name}</h4>
            </div>
          ))}
        </motion.div>

        <h3 className="mt-12 mb-6  w-fit border-b-2 border-yellow-400 self-center  text-2xl lg:text-3xl">
          {t("skills.soft")}
        </h3>
        <motion.div
          className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          variants={itemVariants}
        >
          {soft_skills_translated.map((skill, index) => (
            <div key={index} className="mb-8 flex items-center">
              {skill.icon}
              <h4 className="px-4 text-xl lg:text-2xl">{skill.name}</h4>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Skills;
