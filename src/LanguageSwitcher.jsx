import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-[0.2rem] text-xs ms-4 border border-yellow-500 rounded p-1">
      <button
        title={i18n.language === "en" ? "English" : "Inglés"}
        onClick={() => changeLanguage("en")}
        className={`px-1 py-[0.1rem] rounded ${
          i18n.language === "en"
            ? "bg-yellow-500 text-white"
            : "bg-transparent text-gray-200 hover:bg-gray-700"
        }`}
      >
        EN
      </button>
      <button
        title={i18n.language === "en" ? "Spanish" : "Español"}
        onClick={() => changeLanguage("es")}
        className={`px-1 py-[0.1rem] rounded ${
          i18n.language === "es"
            ? "bg-yellow-500 text-white"
            : "bg-transparent text-gray-200 hover:bg-gray-700"
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
