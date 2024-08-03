import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About
      </motion.h2>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        I am passionate about creating digital experiences that are both
        beautiful and functional. With a background in civil engineering, I have
        a solid foundation in problem-solving and critical thinking.
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
      >
        Merging my technical skills with my creative vision, I develop
        innovative solutions to build dynamic, responsive, and accessible
        websites that tell stories tailored to my clients&apos; needs. And I
        take pride in writing clean, efficient code and best practices.
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7 }}
        viewport={{ once: true }}
      >
        My curiosity and commitment to continuous learning enable me to grow
        personally and professionallyI stay up-to-date with technological and
        design trends by constantly exploring new tools, techniques and
        methodologies. I am dedicated to bringing practical and innovative
        solutions to every challenge.
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        As a team player, I possess excellent communication and collaboration
        skills. I enjoy working in dynamic environments where ideas can be
        freely exchanged and creativity is encouraged.
      </motion.p>
    </div>
  );
};

export default About;
