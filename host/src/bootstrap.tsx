import React from 'react';
import ReactDOM from 'react-dom/client';

import Button from 'MFEComponents/Button';
import App from 'MFEComponents/App';

import { I18nextProvider, useTranslation } from 'react-i18next';
import hostInstance from './services/instanceI18n';
import useSwitchLanguage from './services/change-language';

const HostApp: React.FC = () => {
  const { t } = useTranslation();

  return (
    <I18nextProvider i18n={hostInstance}>
      <div style={{ backgroundColor: 'green' }}>
        <p>aplicação A principal</p>
        <button
          onClick={() => {
            useSwitchLanguage(hostInstance.language === 'en' ? 'ptbr' : 'en');
          }}
        >
          Mudar o idioma para{' '}
          {hostInstance.language === 'en' ? 'Portugues' : 'Ingles'}
        </button>
        <p>Palavra para alternar: {t('welcome')}</p>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button />
        </div>
        <App />
      </div>
    </I18nextProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<HostApp />);
