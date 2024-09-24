const AuthMaster = () => {
  return (
    <div>
      <p className="leading-relaxed mb-2">
        Full-stack user management system to manage user accounts through
        actions such as registration, login, and updating user information.
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
          <span className="font-semibold">Express:</span> framework for building
          the server.
        </li>
        <li>
          <span className="font-semibold">MySQL2:</span> Database client for
          connecting to MySQL databases.
        </li>
        <li>
          <span className="font-semibold">bcryptjs:</span> Library for hashing
          passwords.
        </li>
        <li>
          <span className="font-semibold">jsonwebtoken:</span> For secure
          authentication.
        </li>
        <li>
          <span className="font-semibold">cors:</span> Middleware for handling
          Cross-Origin Resource Sharing.
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
          <span className="font-semibold">React Router:</span> For managing
          navigation within the application.
        </li>
        <li>
          <span className="font-semibold">Bootstrap and React-Bootstrap:</span>
          For styling and reusable UI components.
        </li>
        <li>
          <span className="font-semibold">Axios:</span> To make HTTP requests to
          the backend API.
        </li>
      </ul>
    </div>
  );
};

export default AuthMaster;
