import { useTranslation } from 'react-i18next';
function Hero() {
  const { t } = useTranslation();
    return (
      <section className="relative bg-gray-900 text-white py-32 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('hero.title')}</h1>
          <p className="text-xl mb-8">{t('hero.subtitle')}</p>
          <a href="tel:+37060287970" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center mr-4">
            <i className="fas fa-phone-alt mr-2"></i>{t('hero.cta')}
          </a>
          <div className="mt-4 space-x-4">
            <a href="#" className="text-white hover:text-blue-300"><i className="fab fa-viber fa-2x"></i></a>
            <a href="#" className="text-white hover:text-green-300"><i className="fab fa-whatsapp fa-2x"></i></a>
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;