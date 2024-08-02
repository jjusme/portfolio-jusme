import Modal from "react-modal";

/* eslint-disable react/prop-types */
const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Project Details"
      className="modal fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 p-4"
      overlayClassName="overlay"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-bold text-center mb-3 text-gray-900 dark:text-gray-100">
          {project.title}
        </h2>
        <p className="text-base text-gray-800 dark:text-gray-300">
          {project.details}
        </p>
        <button
          onClick={onRequestClose}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ProjectModal;
