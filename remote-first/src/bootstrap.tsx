import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  TranslationProvider,
  i18nInstance,
  useTranslation,
} from '../../iris-translate/dist';

import './remote.css'

const App = () => {
  const { t } = useTranslation();

  const additionalResources = {
    en: {
      translation: {
        additionalKeyWord: 'Additional English Word',
      },
    },
    ptbr: {
      translation: {
        additionalKeyWord: 'Palavra Adicional em Português',
      },
    },
  };

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
    <TranslationProvider additionalResources={additionalResources}>
      <div className='remote-class'>
        <div className='shared-class'>Application B remota</div>
        <p>Palavra para mudar: {t('save')}</p>
        <p>Palavra adicional: {t('additionalKeyWord')}</p>
      </div>
    </TranslationProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />);

export default App;
