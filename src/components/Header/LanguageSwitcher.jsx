import { useTranslation } from 'react-i18next';
import { LanguageButton } from './LanguageButton';

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="flex space-x-2">
      <LanguageButton 
        lang="LT" 
        onClick={changeLanguage} 
        active={i18n.language.toUpperCase() === 'LT'} 
      />
      <LanguageButton 
        lang="EN" 
        onClick={changeLanguage} 
        active={i18n.language.toUpperCase() === 'EN'} 
      />
      <LanguageButton 
        lang="RU" 
        onClick={changeLanguage} 
        active={i18n.language.toUpperCase() === 'RU'} 
      />
    </div>
  );
}