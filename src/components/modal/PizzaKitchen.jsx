import { useTranslation } from "react-i18next";

/* eslint-disable react/no-unescaped-entities */
const PizzaKitchen = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="leading-relaxed mb-2">{t("projects.project3")}</p>

      <p className="leading-loose  italic font-semibold">
        {t("projects.technologies")}:
      </p>
      <ul className="list-inside list-disc ml-2">
        <li>Vite</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>React Router</li>
        <li>Redux Toolkit</li>
        <li>Redux Thunk</li>
        <li>Framer Motion</li>
        <li>REST APIs</li>
        <li>RegEx</li>
      </ul>
    </div>
  );
};

export default PizzaKitchen;
