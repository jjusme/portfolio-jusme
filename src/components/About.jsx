import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto" id="about">
      <motion.h2
        className="mt-20 text-center text-4xl font-semibold"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {t("about.heading")}
      </motion.h2>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {t("about.paragraph1")}
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {t("about.paragraph2")}
      </motion.p>

      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.7 }}
        viewport={{ once: true }}
      >
        {t("about.paragraph3")}
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.3 }}
        viewport={{ once: true }}
      >
        {t("about.paragraph4")}
      </motion.p>
      <motion.p
        className="p-4 text-2xl leading-relaxed"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
      >
        {t("about.paragraph5")}
      </motion.p>
    </div>
  );
};

export default About;
