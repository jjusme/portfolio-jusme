import { useTranslation } from "react-i18next";

const AuthMaster = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="leading-relaxed mb-2">{t("projects.project1")}</p>

      <p className="leading-loose  italic font-semibold">Backend:</p>
      <ul className="list-outside list-disc ml-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL2</li>
        <li>bcryptjs</li>
        <li>jsonwebtoken</li>
        <li>cors</li>
      </ul>

      <p className="leading-loose mt-4  italic font-semibold">Frontend:</p>
      <ul className="list-outside list-disc ml-2">
        <li>Vite:</li>
        <li>React</li>
        <li>React Router</li>
        <li>Bootstrap and React-Bootstrap</li>
        <li>Axios</li>
      </ul>
    </div>
  );
};

export default AuthMaster;
