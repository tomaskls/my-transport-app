import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export function MetaData() {
  const [currentMetaData, setCurrentMetaData] = useState({});
  const { i18n } = useTranslation();

  const getMetaData = (language) => {
    switch (language) {
      case 'LT':
        return {
          title: 'Oro uosto transportas | Pagrindinis',
          description: 'Patikimas oro uosto transporto paslaugų teikėjas',
          keywords: 'oro uostas, transportas, pervežimas, Lietuva'
        };
      case 'EN':
        return {
          title: 'Airport Transfer | Home',
          description: 'Reliable airport transfer service provider',
          keywords: 'airport, transfer, transportation, Lithuania'
        };
      case 'RU':
        return {
          title: 'Трансфер в аэропорт | Главная',
          description: 'Надежный поставщик услуг трансфера в аэропорт',
          keywords: 'аэропорт, трансфер, транспорт, Литва'
        };
      default:
        return {
          title: 'Airport Transfer | Home',
          description: 'Reliable airport transfer service provider',
          keywords: 'airport, transfer, transportation, Lithuania'
        };
    }
  };

  useEffect(() => {
    const currentLang = i18n.language.toUpperCase();
    const newMetaData = getMetaData(currentLang);
    setCurrentMetaData(newMetaData);
  }, [i18n.language]);

  return (
    <Helmet>
      <html lang={i18n.language.toLowerCase()} />
      <title>{currentMetaData.title}</title>
      <meta name="description" content={currentMetaData.description} />
      <meta name="keywords" content={currentMetaData.keywords} />
    </Helmet>
  );
}