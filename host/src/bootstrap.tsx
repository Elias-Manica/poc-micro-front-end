import React from 'react';
import ReactDOM from 'react-dom/client';

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

  return (
    <TranslationProvider additionalResources={additionalResources}>
      <div style={{ backgroundColor: 'green' }}>
        <p>aplicação A principal</p>
        <button
          onClick={() => {
            console.log(i18nInstance.language, ' i18nInstance');
            useSwitchLanguage('en');
          }}
        >
          Mudar o idioma para Inglês
        </button>
        <button
          onClick={() => {
            console.log(i18nInstance.language, ' i18nInstance');
            useSwitchLanguage('ptbr');
          }}
        >
          Mudar o idioma para Português
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
