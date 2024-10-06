import { useTranslation } from "react-i18next";

const UserGen = () => {
  const { t } = useTranslation();

  return (
    <div>
      <p className="leading-relaxed mb-2">{t("projects.project2")}</p>

      <p className="leading-loose  italic font-semibold">Backend:</p>
      <ul className="list-outside list-disc ml-2">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Faker.js</li>
        <li>cors</li>
        <li>Seedrandom</li>
        <li>JSON2CSV</li>
      </ul>

      <p className="leading-loose mt-4  italic font-semibold">Frontend:</p>
      <ul className="list-outside list-disc ml-2">
        <li>Vite</li>
        <li>React</li>
        <li>Axios</li>
        <li>React Infinite Scroll Component</li>
      </ul>
    </div>
  );
};

export default UserGen;
