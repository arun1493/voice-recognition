import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const EN_US = "en_US";

const configureI18n = () => {
  i18n.use(initReactI18next).init({
    lng: EN_US,
    fallbackLng: EN_US,
    resources: {
      [EN_US]: {
        translation: require("../locales/en_US.json")
      }
    }
  });
};

export { configureI18n };
