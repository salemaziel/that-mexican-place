import React from 'react';

import Layout from '../components/layout/Layout';

import S1Hero from '../components/PageComponents/Home/s1Hero';
import S2HoursLocation from '../components/PageComponents/Home/s2HoursLocation';
import BG from '../images/wood-bg.jpg';

import { LocalBusinessJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  const businessHours = [
    { name: 'Sunday', hours: '8:00am - 10:00pm' },
    { name: 'Monday', hours: '8:00am - 10:00pm' },
    { name: 'Tuesday', hours: '8:00am - 10:00pm' },
    { name: 'Wednesday', hours: '8:00am - 10:00pm' },
    { name: 'Thursday', hours: '8:00am - 10:00pm' },
    { name: 'Friday', hours: '8:00am - 10:00pm' },
    { name: 'Saturday', hours: '8:00am - 10:00pm' },
  ];

  return (
    <>
   <Helmet>
        {/* Google Tag Manager */}
        <script>
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P7TD4BSV');`}
        </script>
        {/* End Google Tag Manager */}
      </Helmet>
      <GatsbySeo
        title="That Mexican Place"
        description="That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido."
        canonical="https://thatmexicanplace.net"
        openGraph={{
          url: 'https://thatmexicanplace.net',
          title: 'That Mexican Place',
          locale: 'en_US',
          description:
            'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
          images: [
            {
              url: 'https://www.thatmexicanplace.net/logo/logo.png',
              width: 800,
              height: 600,
              alt: 'That Mexican Place Logo',
            },
          ],
          site_name: 'That Mexican Place',
        }}
        twitter={{
          handle: '@thatmexicanplace',
          site: '@thatmexicanplace',
          cardType: 'summary_large_image',
        }}
      />
      <LocalBusinessJsonLd
        type="Restaurant"
        id="https://thatmexicanplace.net"
        name="That Mexican Place"
        description="That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido."
        url="https://thatmexicanplace.net"
        telephone="+17607433783"
        address={{
          streetAddress: '200 W El Norte Pkwy Suite 9',
          addressLocality: 'Escondido',
          addressRegion: 'CA',
          postalCode: '92026',
          addressCountry: 'US',
        }}
        geo={{
          latitude: '33.1398241',
          longitude: '-117.0937007',
        }}
        images={['https://thatmexicanplace.net/assets/img/logo-that-mexican-place.png']}
      />

      <Layout>
        <S1Hero
          bgImage={BG}
          Title="That Mexican Place"
          Description="California Made, With Mexican Roots"
        />
        <S2HoursLocation hours={businessHours} />
      </Layout>
    </>
  );
};

export default Index;
