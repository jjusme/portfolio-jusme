import i18n from "i18next";
import en from "./locales/en.json";
import es from "./locales/es.json";
import { initReactI18next } from "react-i18next";

const resources = {
    en: { translation: en },
    es: { translation: es },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        fallbackLng: "en",
    });

export default i18n;