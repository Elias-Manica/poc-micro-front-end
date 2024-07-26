import hostInstance from './instanceI18n';

const useSwitchLanguage = (languageId: string) => {
  return hostInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
