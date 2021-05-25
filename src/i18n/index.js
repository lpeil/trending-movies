import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import resources from './resources';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    preload: ['pt', 'en'],
    whitelist: ['pt', 'en'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
