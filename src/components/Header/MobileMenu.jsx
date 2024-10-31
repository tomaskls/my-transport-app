import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export function MobileMenu({ isOpen, onLinkClick, menuRef }) {
  const { t } = useTranslation();

  if (!isOpen) return null;

  return (
    <div 
      ref={menuRef}
      className="fixed top-16 right-0 md:hidden bg-white shadow-lg z-50 w-48 py-2 rounded-bl-lg"
    >
      <nav className="flex flex-col">
        <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onLinkClick}>{t('nav.home')}</a>
        <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onLinkClick}>{t('nav.services')}</a>
        <a href="#" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onLinkClick}>{t('nav.about')}</a>
        <a href="#contacts" className="px-4 py-2 text-gray-600 hover:bg-gray-100" onClick={onLinkClick}>{t('nav.contact')}</a>
      </nav>
    </div>
  );
}

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onLinkClick: PropTypes.func.isRequired,
  menuRef: PropTypes.object.isRequired
};