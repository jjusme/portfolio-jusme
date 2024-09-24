const UserGen = () => {
  return (
    <div>
      <p className="leading-relaxed mb-2">
        Full-stack app to generate random user data. With customize parameters
        such as region, seed, and error rate, and easily export the generated
        data as a CSV file.
      </p>

      <p className="leading-loose  italic font-semibold">
        Backend technologies:
      </p>
      <ul className="list-outside list-disc ml-2">
        <li>
          <span className="font-semibold">Node.js:</span> For server-side
          scripting.
        </li>
        <li>
          <span className="font-semibold">Express:</span> Framework for building
          the server.
        </li>
        <li>
          <span className="font-semibold">Faker.js:</span> Library for
          generating fake data.
        </li>
        <li>
          <span className="font-semibold">cors:</span> Middleware for handling
          Cross-Origin Resource Sharing.
        </li>
        <li>
          <span className="font-semibold">Seedrandom:</span> Library for
          generating seeded random numbers.
        </li>
        <li>
          <span className="font-semibold">JSON2CSV:</span> Library for
          converting JSON data to CSV format.
        </li>
      </ul>

      <p className="leading-loose mt-4  italic font-semibold">
        Frontend technologies::
      </p>
      <ul className="list-outside list-disc ml-2">
        <li>
          <span className="font-semibold">Vite:</span> Build tool for fast
          development.
        </li>
        <li>
          <span className="font-semibold">React:</span> The core frontend
          framework.
        </li>
        <li>
          <span className="font-semibold">Axios:</span> To make HTTP requests to
          the backend API.
        </li>
        <li>
          <span className="font-semibold">
            React Infinite Scroll Component:
          </span>
          Library used to implement infinite scrolling functionality.
        </li>
      </ul>
    </div>
  );
};

export default UserGen;
