import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uz from '../locales/en/translation.json';
import en from '../locales/en/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uz: { translation: uz }
    },
    lng: 'uz', // O'zbek tilini standart qilib qo'yish
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
