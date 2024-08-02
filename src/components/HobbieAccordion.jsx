/* eslint-disable react/prop-types */

const HobbieAccordion = ({
  i,
  title,
  description,
  icon,
  currentOpen,
  setCurrentOpen,
}) => {
  const showText = i === currentOpen; /* revised state */

  function handleShowText() {
    setCurrentOpen(!showText ? i : null);
  }

  return (
    <div
      key={i}
      onClick={handleShowText}
      className={`flex flex-col  cursor-pointer  `}
    >
      <div
        className={`flex py-4 px-8 justify-between items-center ${
          showText ? "bg-gray-900" : "bg-transparent"
        }`}
      >
        <p className="text-lg font-semibold">{title}</p>
        <p className="text-xl font-semibold">{!showText ? "+" : "-"}</p>
      </div>

      {showText && (
        <div className="flex items-center gap-8 py-4 px-8">
          <span>{icon}</span>
          <p className="text-gray-300 text-lg">{description}</p>
        </div>
      )}
    </div>
  );
};

export default HobbieAccordion;
