/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  //to restrict scrolling to the modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4 overflow-y-auto"
      overlayClassName="overlay"
    >
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg max-w-lg w-full  max-h-screen overflow-y-auto md:mt-0">
        <h2 className="text-2xl font-bold text-center mb-3 text-gray-900">
          {project.title}
        </h2>
        <div className="text-base text-gray-800 ">{project.details}</div>
        <button
          onClick={onRequestClose}
          className="mt-4 self-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {t("projects.close_modal")}
        </button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
