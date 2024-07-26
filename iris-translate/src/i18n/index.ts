import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './en/en.json';
import ptbrJSON from './pt-br/pt-br.json';

const resources = {
  en: { translation: enJSON },
  ptbr: { translation: ptbrJSON },
};

const i18nInstance = i18n.createInstance();

i18nInstance.use(initReactI18next).init({
  resources,
  lng: 'ptbr',
  fallbackLng: 'ptbr',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18nInstance;
