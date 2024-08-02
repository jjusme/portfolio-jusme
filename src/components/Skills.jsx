import { SOFT_SKILLS, TECHNICAL_SKILLS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
    },
  },
};

const Skills = () => {
  return (
    <div className="container mx-auto" id="skills">
      <h2 className="mb-12 mt-20 text-center text-4xl">Skills</h2>
      <motion.div
        className="mx-2 flex flex-col rounded-xl bg-gradient-to-b from-zinc-900 to-zinc-950 px-4 py-10 lg:px-20"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <h3 className="mb-6 w-fit border-b-2 border-yellow-400 self-center text-center text-2xl lg:text-3xl">
          Technical Skills
        </h3>
        <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {TECHNICAL_SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-8 flex items-center"
              variants={itemVariants}
            >
              {skill.icon}
              <h4 className="px-4 text-xl lg:text-2xl">{skill.name}</h4>
            </motion.div>
          ))}
        </div>

        <h3 className="mt-12 mb-6  w-fit border-b-2 border-yellow-400 self-center  text-2xl lg:text-3xl">
          Soft Skills
        </h3>
        <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {SOFT_SKILLS.map((skill, index) => (
            <motion.div
              key={index}
              className="mb-8 flex items-center"
              variants={itemVariants}
            >
              {skill.icon}
              <h4 className="px-4 text-xl lg:text-2xl">{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
