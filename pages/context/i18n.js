import { createContext, useContext } from "react";
import i18n from "i18next";

const I18NextContext = createContext();

export const useT = () => {
  const c = useContext(I18NextContext);

  return (val, options) => c.t(val, options);
};

export function I18nextProvider({ children }) {
  i18n.init({
    debug: true,
    resources: {
      "en-US": {
        translation: {
          "str_key_to_translate": "working"
        }
      }
    },
    lng: "en-US"
  });

  return (
    <I18NextContext.Provider value={i18n}>{children}</I18NextContext.Provider>
  );
}