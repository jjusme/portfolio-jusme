import { useTranslation } from "react-i18next";

/* eslint-disable react/no-unescaped-entities */
const DSALearn = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="leading-relaxed mb-2">{t("projects.project4")}</p>

      <p className="leading-loose italic font-semibold">
        {t("projects.technologies")}:
      </p>
      <ul className="list-outside list-disc ml-2">
        <li>Vite</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>React Router</li>
        <li>React Hooks</li>
        <li>Context API</li>
        <li>CodePen Embedding</li>
      </ul>
    </div>
  );
};

export default DSALearn;
