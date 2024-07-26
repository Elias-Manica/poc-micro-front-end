import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from '../i18n';

interface TranslationProviderProps {
  children: ReactNode;
  additionalResources?: Record<string, any>;
}

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
  additionalResources,
}) => {
  if (additionalResources) {
    for (const [lang, resources] of Object.entries(additionalResources)) {
      i18nInstance.addResources(lang, 'translation', resources.translation);
    }
  }

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default TranslationProvider;
