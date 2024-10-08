import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();

    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Šiauliai Transfers</h3>
              <p>{t('footer.description')} </p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">{t('footer.contacts')}</h3>
              <p>Tel: +37060287970</p>
              <p>El. paštas: siauliaitransfers@gmail.com</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">{t('footer.follow_us')}</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-facebook fa-2x"></i></a>
                <a href="#" className="text-white hover:text-blue-400"><i className="fab fa-twitter fa-2x"></i></a>
                <a href="#" className="text-white hover:text-pink-400"><i className="fab fa-instagram fa-2x"></i></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2023 Oro uosto transportas. Visos teisės saugomos.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;