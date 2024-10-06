import { useTranslation } from "react-i18next";
// import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import AuthMaster from "./modal/AuthMaster";
import UserGen from "./modal/UserGen";
import PizzaKitchen from "./modal/PizzaKitchen";
import DSALearn from "./modal/DSALearn";

import imgAuthmaster from "../assets/authmaster.jpg";
import imgUserGen from "../assets/usergen.jpg";
import imgPizza from "../assets/juniorspizza.jpg";
import imgDSA from "../assets/dsaApp.jpg";

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

const itemVariants = {
  hidden: { opacity: 0, y: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const Projects = () => {
  const { t } = useTranslation();

  const PROJECTS = [
    {
      title: "AuthMaster",
      subtitle: t("projects.subtitle1"),
      thumbnail: imgAuthmaster,
      previewLink: "https://authmaster-user-management.vercel.app/",
      repoLink: "https://github.com/JusmeJr93/user-management-app",
      details: <AuthMaster />,
    },
    {
      title: "UserGen Pro",
      subtitle: t("projects.subtitle2"),
      thumbnail: imgUserGen,
      previewLink: "https://user-gen-pro.vercel.app/",
      repoLink: "https://github.com/JusmeJr93/random-user-data-generator",
      details: <UserGen />,
    },
    {
      title: "Junior's Pizza Kitchen",
      subtitle: t("projects.subtitle3"),
      thumbnail: imgPizza,
      previewLink: "https://juniors-pizza-kitchen.vercel.app/",
      repoLink: "https://github.com/JusmeJr93/juniors-pizza-kitchen",
      details: <PizzaKitchen />,
    },
    {
      title: "DSA Learning App",
      subtitle: t("projects.subtitle4"),
      thumbnail: imgDSA,
      previewLink: "https://dsa-learning-with-js.vercel.app/",
      repoLink: "https://github.com/JusmeJr93/dsa-learning-with-js",
      details: <DSALearn />,
    },
  ];

  return (
    <div className="container mx-auto" id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {t("projects.heading")}
      </motion.h2>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {t("projects.description")}
      </motion.p>

      <div className="flex justify-center">
        <motion.div
          className="flex justify-center gap-16 flex-wrap md:justify-between"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
