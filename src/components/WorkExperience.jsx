/* eslint-disable react/no-unescaped-entities */

import project1 from "../assets/upload.jpg";
import project2 from "../assets/uplearning.jpg";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

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

const WorkExperience = () => {
  const { t } = useTranslation();

  const responsibilities = t("work.responsibilities", {
    returnObjects: true,
  });

  return (
    <motion.div
      className="container mx-auto"
      id="experience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
        {t("work.heading")}
      </h2>
      <div className="lg:w-3/4 mx-auto text-lg lg:text-xl">
        <p className="mb-4 leading-relaxed">{t("work.description")}</p>
        <ul className="list-disc pl-8">
          {responsibilities.map((responsibility, index) => (
            <li key={index} className="mb-2">
              {responsibility}
            </li>
          ))}
        </ul>

        <div className="my-12">
          <h4 className="text-xl font-semibold">{t("work.client_contact")}</h4>
          <p className="text-gray-600">
            {t("work.website")}:
            <a
              href="https://uploadht.com/"
              className="text-blue-500 underline ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              uploadht.com
            </a>
          </p>
          <p className="text-gray-600">{t("work.phone")}: +52 762 115 3580</p>
          <p className="text-gray-600">
            {t("work.email")}:
            <a
              href="mailto:info@uploadht.com"
              className="text-blue-500 underline ml-1"
            >
              info@uploadht.com
            </a>
          </p>
        </div>
      </div>

      <div className="lg:w-3/4 mx-auto">
        <h3 className="text-xl lg:text-2xl leading-relaxed font-semibold mt-5">
          {t("work.projects_overview")}
        </h3>
        <p className="mb-8  text-lg lg:text-xl">{t("work.overview_intro")}</p>

        <h2 className="text-2xl font-bold text-center text-gray-500 dark:text-gray-100">
          {t("work.project1.title")}
        </h2>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src={project1}
            className="p-5"
            title="Screenshot of the login page"
            alt="School Management Software"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              {t("work.project1.descript")}:
            </h3>
            <p className="leading-relaxed font-normal mb-4 text-lg lg:text-xl">
              {t("work.project1.description")}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              {t("work.project1.technologies")}:
            </h3>
            <ul className="list-disc list-inside ml-3 mb-4  text-lg lg:text-xl">
              <li>HTML, CSS, JavaScript</li>
              <li>Bootstrap</li>
              <li>Dropzone</li>
              <li>Flatpickr</li>
              <li>Toastr</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              {t("work.project1.role")}:
            </h3>
            <p className="leading-relaxed font-normal  text-lg lg:text-xl">
              {t("work.project1.role_description")}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-500 dark:text-gray-100">
          {t("work.project2.title")}
        </h2>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src={project2}
            className="p-5"
            title="Screenshot of the Up Learning homepage"
            alt="Up Learning"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">
              {t("work.project2.descript")}:
            </h3>
            <p className="leading-relaxed font-normal mb-4  text-lg lg:text-xl">
              {t("work.project2.description")}
            </p>

            <h3 className="text-xl font-semibold mb-2">
              {t("work.project2.technologies")}:
            </h3>
            <ul className="list-disc list-inside ml-3 mb-4  text-lg lg:text-xl">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Font Awesome</li>
              <li>REST APIs</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">
              {t("work.project2.role")}:
            </h3>
            <p className="leading-relaxed font-normal  text-lg lg:text-xl">
              {t("work.project2.role_description")}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
