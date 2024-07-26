import i18nInstance from '../i18n';

const useSwitchLanguage = (languageId: string) => {
  console.log(languageId, ' useSwitchLanguage');
  return i18nInstance.changeLanguage(languageId);
};

export default useSwitchLanguage;
