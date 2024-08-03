const Project2Details = () => {
  return (
    <div>
      <p className="leading-relaxed font-semibold mb-2">
        AluraFlix is a video platform application designed to showcase and
        manage video content in various categories.
      </p>
      <p className="leading-loose">Key technologies and topics used:</p>
      <ul className="list-inside list-disc ml-2">
        <li>
          <span className="font-semibold">React:</span> To build the user
          interface.
        </li>
        <li>
          <span className="font-semibold">Context API:</span> For state
          management and sharing data across components.
        </li>
        <li>
          <span className="font-semibold">CSS Modules:</span> For scoped and
          modular styling.
        </li>
        <li>
          <span className="font-semibold">React Router:</span> For navigation
          and routing.
        </li>
        <li>
          <span className="font-semibold">My JSON Server:</span> To simulate a
          backend for storing video data.
        </li>
        <li>
          <span className="font-semibold">Responsive Design:</span> Ensuring the
          app works well on various devices.
        </li>
      </ul>

      <p className="leading-loose mt-4">Key Features:</p>
      <ul className="list-inside list-disc ml-2">
        <li>Video categorization and management</li>
        <li>CRUD operations for video content</li>
      </ul>

      <p className="leading-loose mt-4">Challenges Overcome:</p>
      <ul className="list-inside list-disc ml-2">
        <li>Implementing video editing and deletion functionality</li>
        <li>Integrating a mock backend for data storage</li>
      </ul>
    </div>
  );
};

export default Project2Details;
