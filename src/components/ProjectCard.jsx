/* eslint-disable react/prop-types */

import { useState } from "react";
import ProjectModal from "./modal/ProjectModal";

const ProjectCard = ({ project }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="w-96 h-[26rem]  rounded-xl overflow-hidden shadow-lg bg-white md:w-[28rem] md:h-[26rem]">
      <img
        className="w-full h-2/3 object-fill"
        src={project.thumbnail}
        alt={project.title}
      />
      <div className="px-6 py-2 bg-gray-100 ">
        <div className="font-bold text-xl text-gray-950 mb-2">
          {project.title}
        </div>
        <p className="text-black text-base">
          {project.subtitle}{" "}
          <button
            onClick={openModal}
            title="Clic for more details"
            className="text-blue-500 underline hover:font-bold "
          >
            More Details
          </button>
        </p>
      </div>
      <div className="flex justify-between px-6 pt-2 pb-3 bg-gray-100">
        <a
          href={project.previewLink}
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Preview
        </a>
        <a
          href={project.repoLink}
          className="inline-block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>

      {/*More details Modal */}
      <ProjectModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        project={project}
      />
    </div>
  );
};

export default ProjectCard;
