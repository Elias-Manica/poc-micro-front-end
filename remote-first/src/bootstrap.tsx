import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  TranslationProvider,
  i18nInstance,
  useTranslation,
} from '../../iris-translate/dist';

const App = () => {
  const { t } = useTranslation();

  React.useEffect(() => {
    const handleLanguageChange = (event: CustomEvent<{ language: string }>) => {
      const newLanguage = event.detail.language;
      i18nInstance.changeLanguage(newLanguage);
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
    <TranslationProvider>
      <div style={{ backgroundColor: 'orange' }}>
        <div>Application B remota</div>
        <p>Palavra para mudar: {t('welcome')}</p>
      </div>
    </TranslationProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export default App;
