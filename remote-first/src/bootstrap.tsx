import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider, useTranslation } from 'react-i18next';
import remoteInstance from './services/instanceI18n';
import useSwitchLanguage from './services/change-language';

const App = () => {
  const { t } = useTranslation();
  return (
    <I18nextProvider i18n={remoteInstance}>
      <div style={{ backgroundColor: 'orange' }}>
        <div>Application B remota</div>
        <button
          onClick={() => {
            useSwitchLanguage(remoteInstance.language === 'en' ? 'ptbr' : 'en');
          }}
        >
          (REMOTE) Mudar o idioma para{' '}
          {remoteInstance.language === 'en' ? 'Portugues 🇧🇷' : 'Ingles 🇺🇸'}
        </button>
        <p>Palavra para mudar: {t('welcome')}</p>
      </div>
    </I18nextProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export default App;
