import PropTypes from 'prop-types';

export function LanguageButton({ lang, onClick, active }) {
  return (
    <button 
      className={`px-2 py-1 text-sm font-medium ${active ? 'bg-gray-200' : 'hover:bg-gray-200'} rounded`}
      onClick={() => onClick(lang)}
    >
      {lang}
    </button>
  );
}

LanguageButton.propTypes = {
  lang: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
};