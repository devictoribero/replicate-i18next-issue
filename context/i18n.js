import { createContext, useContext, useEffect, useState } from "react";
import i18n from "i18next";

const I18NextContext = createContext();

export const useT = () => {
  const c = useContext(I18NextContext);

  return (val, options) => c.t(val, options);
};

export function I18nextProvider({ children }) {
  const [instance, setIstance] = useState()

  useEffect(() => {
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
    }).then(() => setIstance(i18n));
  }, [])

  if (!instance) return null

  return (
    <I18NextContext.Provider value={instance}>{children}</I18NextContext.Provider>
  );
}