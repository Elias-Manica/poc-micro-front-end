import React from 'react';
import ReactDOM from 'react-dom/client';

import './host.css';

import App from 'MFEComponents/App';

import {
  TranslationProvider,
  i18nInstance,
  useSwitchLanguage,
  useTranslation,
} from '../../iris-translate/dist';

const additionalResources = {
  en: {
    translation: {
      additionalKey: 'Additional English Translation',
    },
  },
  ptbr: {
    translation: {
      additionalKey: 'Tradução Adicional em Português',
    },
  },
};

const HostApp: React.FC = () => {
  const { t } = useTranslation();

  const changeLanguage = (language: string) => {
    i18nInstance.changeLanguage(language);
    useSwitchLanguage(language);
    window.dispatchEvent(
      new CustomEvent('languageChange', { detail: { language } })
    );
  };

  return (
    <TranslationProvider additionalResources={additionalResources}>
      <div className='aplicacao-host'>
        <p className='shared-class'>aplicação A principal</p>
        <button
          onClick={() => {
            changeLanguage(i18nInstance.language === 'en' ? 'ptbr' : 'en');
          }}
        >
          Mudar o idioma para{' '}
          {i18nInstance.language === 'en' ? 'português 🇧🇷' : 'inglês 🇺🇸'}
        </button>
        <p>Palavra para alternar: {t('welcome')}</p>
        <p>Palavra adicional: {t('additionalKey')}</p>
        <App />
      </div>
    </TranslationProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<HostApp />);
