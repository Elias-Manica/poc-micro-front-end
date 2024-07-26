import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import ptJSON from '../i18n/pt-br/pt-br.json';
import enJSON from '../i18n/en/en.json';

const resources = {
  en: { translation: enJSON },
  ptbr: { translation: ptJSON },
};

const hostInstance = i18n.createInstance();

hostInstance.use(initReactI18next).init({
  resources,
  lng: 'ptbr',
  fallbackLng: 'ptbr',
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  react: {
    useSuspense: false,
  },
});

export default hostInstance;
