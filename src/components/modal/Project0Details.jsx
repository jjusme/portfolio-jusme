/* eslint-disable react/no-unescaped-entities */
const Project0Details = () => {
  return (
    <div>
      <p className="leading-relaxed mb-2">
        Pizza ordering web app with clean UI, smooth animations, and robust
        state management.
      </p>

      <p className="leading-loose  italic font-semibold">
        Key technologies and topics:
      </p>
      <ul className="list-outside list-disc ml-2">
        <li>
          <span className="font-semibold">Vite:</span> For the development and
          build setup.
        </li>
        <li>
          <span className="font-semibold">React:</span> To build the user
          interface.
        </li>
        <li>
          <span className="font-semibold">Tailwind CSS:</span> For styling and
          responsive design.
        </li>
        <li>
          <span className="font-semibold">React Router:</span> To handle in-app
          navigation.
        </li>
        <li>
          <span className="font-semibold">Redux Toolkit:</span> For state and
          lifecycle management.
        </li>
        <li>
          <span className="font-semibold">Redux Thunk:</span> Middleware, used
          to manage async functions.
        </li>
        <li>
          <span className="font-semibold">Framer Motion:</span> To add smooth
          animations.
        </li>
        <li>
          <span className="font-semibold">REST API:</span> To fetch and manage
          data with CRUD requests.
        </li>
        <li>
          <span className="font-semibold">RegEx:</span> To validate phone
          number.
        </li>
      </ul>

      <p className="leading-loose mt-4  italic font-semibold">Key Features:</p>
      <ul className="list-outside list-disc ml-2">
        <li>
          <span className="font-semibold">Order Management:</span> Users can
          create, update, and manage their pizza orders.
        </li>
        <li>
          <span className="font-semibold">Dynamic Pricing:</span> Prices are
          adjusted based on order priority.
        </li>

        <li>
          <span className="font-semibold">Order Search:</span> User can quickly
          navigate to the order page and check their order status.
        </li>
        <li>
          <span className="font-semibold">GPS integration:</span> Address can be
          obtained with a "Get Position" button, which utilizes user GPS.
        </li>
      </ul>
    </div>
  );
};

export default Project0Details;
