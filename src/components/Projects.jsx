import { PROJECTS } from "../constants";
import ProjectCard from "./ProjectCard";
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
  return (
    <div className="container mx-auto" id="projects">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        Personal Projects
      </motion.h2>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Explore a selection of my projects, showcasing my skills. Each project
        demonstrates my ability to solve problems, implement modern
        technologies, and deliver solutions that meet user needs. Dive in to see
        how I bring ideas to life through code.
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
