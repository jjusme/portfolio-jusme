/* eslint-disable react/no-unescaped-entities */
const Project3Details = () => {
  return (
    <div>
      <p className="leading-relaxed font-semibold mb-2">
        This App is designed to help beginners understand and practice DSA
        through interactive lessons and exercises.
      </p>
      <p className="leading-loose">Key technologies and topics used:</p>
      <ul className="list-inside list-disc ml-2">
        <li>
          <span className="font-semibold">Vite:</span> For the development.
        </li>
        <li>
          <span className="font-semibold">React:</span> To build the user
          interface.
        </li>
        <li>
          <span className="font-semibold">Tailwind CSS:</span> For styling.
        </li>
        <li>
          <span className="font-semibold">React Router:</span> For navigation.
        </li>
        <li>
          <span className="font-semibold">React Hooks:</span> For state and
          lifecycle management.
        </li>
        <li>
          <span className="font-semibold">Context API:</span> To manage and
          share state across the app.
        </li>
        <li>
          <span className="font-semibold">CodePen Embedding:</span> Live code
          examples with CodePen.
        </li>
      </ul>
    </div>
  );
};

export default Project3Details;
