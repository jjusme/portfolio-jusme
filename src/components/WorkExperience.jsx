/* eslint-disable react/no-unescaped-entities */

import project1 from "../assets/upload.jpg";
import project2 from "../assets/uplearning.jpg";
import project3 from "../assets/crm.png";
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

/* const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}; */

const WorkExperience = () => {
  return (
    <motion.div
      className="container mx-auto"
      id="experience"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="mb-12 mt-20 text-center text-4xl font-semibold">
        Work Experience
      </h2>

      <p className="mb-4 text-lg leading-relaxed">
        As a Freelance Frontend Developer, I worked on several projects for the
        technology company
        <a
          href="https://uploadht.com/"
          target="_blank"
          className="text-blue-400 underline font-semibold mx-2"
          rel="noopener noreferrer"
        >
          Upload
        </a>
        for nearly 2 years where I was responsible for:
      </p>
      <ul className="list-disc list-inside ml-5">
        <li>Project Planning and Requirement Gathering.</li>
        <li>Write clean, efficient, and maintainable code.</li>
        <li>Coding responsive & user-friendly interfaces.</li>
        <li>Incorporate third-party services and libraries as needed.</li>
        <li>Identify and fix bugs and performance issues.</li>
        <li>Create and maintain project documentation.</li>
        <li>Collect and integrate feedback from clients.</li>
        <li>
          Work with other team members, such as backend developers, designers,
          and project managers.
        </li>
      </ul>

      <div className="my-12">
        <h4 className="text-xl font-semibold">Client Contact</h4>
        <p className="text-gray-600">
          Website:
          <a
            href="https://uploadht.com/"
            className="text-blue-500 underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            uploadht.com
          </a>
        </p>
        <p className="text-gray-600">Phone: +52 762 115 3580</p>
        <p className="text-gray-600">
          Email:
          <a
            href="mailto:info@uploadht.com"
            className="text-blue-500 underline ml-1"
          >
            info@uploadht.com
          </a>
        </p>
      </div>

      <h3 className="text-xl leading-relaxed font-semibold mt-5">
        Projects Overview
      </h3>
      <p className="mb-8">
        Due to confidentiality agreements, I am unable to share detailed
        information and repository of the projects, other than screenshots.
        <br />
        However, here are some highlights of my main tasks on these projects:
      </p>

      <h2 className="text-2xl font-bold text-center text-gray-500 dark:text-gray-100">
        1. School Management Software
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <img
          src={project1}
          className="w-96  p-5"
          alt="School Management Software"
        />
        <div className="w-1/2 p-5">
          <p className="leading-relaxed font-normal mb-2">
            I had the opportunity to work on a School Management Software (SMS)
            application for a school administration.
          </p>
          <ul className="list-disc list-inside ml-3">
            <li>Secured login and authentication features.</li>
            <li>
              Implement features to upload and download files as pdf and excel
              format.
            </li>
            <li>
              Represent data as Tables, Infographics, Charts and Graphs, Forms,
              Dashboard, Cards based on data category.
            </li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-5 text-gray-500 dark:text-gray-100">
        2. Uplearning Web Application
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <img src={project2} className="w-96  p-5" alt="Uplearning" />
        <div className="w-1/2 p-5">
          <p className="leading-relaxed font-normal mb-2">
            Uplearning is a technological e-learning platform in Haitian Creole
            aimed at providing educational resources.
          </p>
          <ul className="list-disc list-inside ml-3">
            <li>Developed a responsive user interface for multiple devices.</li>
            <li>Implemented video streaming and interactive course modules.</li>
            <li>Integrated user authentication and progress tracking.</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mt-5 text-gray-500 dark:text-gray-100">
        3. CRM Software
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <img src={project3} className="w-96  p-5" alt="CRM Software" />
        <div className="w-1/2 p-5">
          <p className="leading-relaxed font-normal mb-2">
            The CRM software was designed to help businesses manage their
            customer relationships effectively.
          </p>
          <ul className="list-disc list-inside ml-3">
            <li>
              Implemented features for managing customer data and interactions.
            </li>
            <li>Developed dashboards and reporting tools for data analysis.</li>
            <li>
              Ensured data security and compliance with industry standards.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkExperience;
