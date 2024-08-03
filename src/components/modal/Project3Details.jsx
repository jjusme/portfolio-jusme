/* eslint-disable react/no-unescaped-entities */
const Project3Details = () => {
  return (
    <div>
      <p className="leading-relaxed font-semibold mb-2">
        The Expense Share App is designed to simplify the process of tracking
        and splitting expenses among friends, family, or colleagues.
      </p>
      <p className="leading-loose">Key technologies and topics used:</p>
      <ul className="list-inside list-disc ml-2">
        <li>
          <span className="font-semibold">React:</span> To build the user
          interface.
        </li>
        <li>
          <span className="font-semibold">Context API:</span> For managing
          global state.
        </li>
        <li>
          <span className="font-semibold">CSS Modules:</span> For
          component-specific styling.
        </li>
        <li>
          <span className="font-semibold">React Router:</span> For navigating
          between different pages.
        </li>
        <li>
          <span className="font-semibold">Firebase:</span> For backend services
          including authentication and database.
        </li>
        <li>
          <span className="font-semibold">Form Handling:</span> Efficiently
          managing user inputs and forms.
        </li>
        <li>
          <span className="font-semibold">Responsive Design:</span> Ensuring
          usability on both mobile and desktop devices.
        </li>
      </ul>

      <p className="leading-loose mt-4">Key Features:</p>
      <ul className="list-inside list-disc ml-2">
        <li>Expense tracking and splitting</li>
        <li>Interactive and easy-to-use interface</li>
      </ul>

      <p className="leading-loose mt-4">Challenges Overcome:</p>
      <ul className="list-inside list-disc ml-2">
        <li>Handling real-time data updates</li>
      </ul>
    </div>
  );
};

export default Project3Details;
