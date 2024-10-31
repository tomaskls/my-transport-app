import { useTranslation } from 'react-i18next';

export function Navigation() {
  const { t } = useTranslation();

  return (
    <div className="hidden md:flex space-x-4">
      <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.home')}</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.services')}</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.about')}</a>
      <a href="#" className="text-gray-600 hover:text-gray-900">{t('nav.contact')}</a>
    </div>
  );
}