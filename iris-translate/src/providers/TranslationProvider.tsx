import React, { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nInstance from '../i18n';

type TranslationProviderProps = {
  children: ReactNode;
  additionalResources?: {
    [lng: string]: { translation: { [key: string]: string } };
  };
};

const TranslationProvider: React.FC<TranslationProviderProps> = ({
  children,
  additionalResources,
}) => {
  React.useEffect(() => {
    if (additionalResources) {
      Object.keys(additionalResources).forEach((lng) => {
        Object.keys(additionalResources[lng]).forEach((ns) => {
          //@ts-ignore
          i18nInstance.addResources(lng, ns, additionalResources[lng][ns]);
        });
      });
    }
  }, [additionalResources]);

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
};

export default TranslationProvider;
