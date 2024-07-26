import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider, useTranslation } from 'react-i18next';
import remoteInstance from './services/instanceI18n';

const App = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<{ language: string }>) => {
      const newLanguage = event.detail.language;
      remoteInstance.changeLanguage(newLanguage);
    };

    const eventListener: EventListener = (event) => {
      handleLanguageChange(event as CustomEvent<{ language: string }>);
    };

    window.addEventListener('languageChange', eventListener);

    return () => {
      window.removeEventListener('languageChange', eventListener);
    };
  }, []);

  return (
    <I18nextProvider i18n={remoteInstance}>
      <div style={{ backgroundColor: 'orange' }}>
        <div>Application B remota</div>
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
