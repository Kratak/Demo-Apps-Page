import i18next from 'i18next';
import en from './locales/en/';
import pl from './locales/pl/';

let t: (message: string, interpolation?: object) => any;

export { t };

export default i18next.init(
  {
    interpolation: {
      escapeValue: false,
    },
    whitelist: ["pl", "en"],
    lng: localStorage.getItem('i18nextLng')||'pl',
    resources: {
      pl: {
        translation: pl,
      },
      en: {
        translation: en,
      },
    },
    detection: {
      order: ["localStorage"],
    },
  },
  (err, translate) => {
    t = translate;
  }
);
