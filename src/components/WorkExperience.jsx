/* eslint-disable react/no-unescaped-entities */

import project1 from "../assets/upload.jpg";
import project2 from "../assets/uplearning.jpg";
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
      <div className="lg:w-1/2 mx-auto">
        <p className="mb-4 text-lg leading-relaxed">
          I worked on several projects, as a Freelance Frontend Developer, for
          the technology company
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
      </div>

      <div className="lg:w-1/2 mx-auto">
        <h3 className="text-xl leading-relaxed font-semibold mt-5">
          Projects Overview
        </h3>
        <p className="mb-8">
          While I have worked on numerous projects with that company, due to
          client privacy, intellectual property rights, non-disclosure
          agreements (NDAs) and security concerns, I am unable to share detailed
          information and repositories of many of these projects.
          <br />
          However, here are two projects that I am allowed to partially
          showcase:
        </p>

        <h2 className="text-2xl font-bold text-center text-gray-500 dark:text-gray-100">
          Project 1: School Management Software
        </h2>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src={project1}
            className="p-5"
            title="Screenshot of the login page"
            alt="School Management Software"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Description:</h3>
            <p className="leading-relaxed font-normal mb-4">
              A comprehensive School Management Software (SMS) application
              designed to streamline various administrative tasks within a
              school environment. It includes features for secure login,
              advanced reporting, file management, and dynamic data
              representation.
            </p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside ml-3 mb-4">
              <li>HTML, CSS, JavaScript</li>
              <li>Bootstrap</li>
              <li>Dropzone</li>
              <li>Flatpickr</li>
              <li>FormValidation</li>
              <li>Toastr</li>
              <li>SVG for UI components</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Role:</h3>
            <p className="leading-relaxed font-normal">
              As a frontend developer, I was responsible for designing and
              implementing the user interface, integrating various features such
              as secure login and file management, and ensuring a smooth user
              experience with robust validation and error handling.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-500 dark:text-gray-100">
          Project 2: Up Learning
        </h2>

        <div className="flex flex-col items-center justify-center gap-3">
          <img
            src={project2}
            className="p-5"
            title="Screenshot of the Up Learning homepage"
            alt="Up Learning"
          />
          <div className="p-5">
            <h3 className="text-xl font-semibold mb-2">Description:</h3>
            <p className="leading-relaxed font-normal mb-4">
              Up Learning is an e-learning platform designed to provide
              educational content in Haitian Creole. The application features a
              user-friendly interface for accessing courses, a responsive layout
              for all devices, and integration with social media for community
              engagement. The platform includes modules for user registration,
              course management, and interactive learning.
            </p>

            <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
            <ul className="list-disc list-inside ml-3 mb-4">
              <li>HTML, CSS, JavaScript</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Font Awesome</li>
              <li>Various APIs for content and user management</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Role:</h3>
            <p className="leading-relaxed font-normal">
              As a frontend developer, I was responsible for designing and
              implementing the user interface, ensuring responsive design across
              devices, integrating user authentication and progress tracking,
              implementing video streaming and interactive course modules. I
              also worked on creating interactive elements and optimizing the
              platform for better user engagement and accessibility.
            </p>
          </div>
        </div>
      </div>

      {/* <h2 className="text-2xl font-bold text-center mt-5 text-gray-500 dark:text-gray-100">
        2. Uplearning Web Application
      </h2>
      <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
        <img src={project2} className="w-96  p-5" alt="Uplearning" />
        <div className=" p-5">
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
      </div> */}
    </motion.div>
  );
};

export default WorkExperience;
