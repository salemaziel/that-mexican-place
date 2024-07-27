import React from 'react';

import Layout from '../components/layout/Layout';

import S1HomeHero from '../components/PageComponents/Home/s1HomeHero';
//import S2HoursLocation from '../components/PageComponents/Home/s2HoursLocation';
import BG from '../images/wood-bg.jpg';

import { LocalBusinessJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';

const Index2 = () => {
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
      <GatsbySeo
        title="That Mexican Place"
        description="That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido."
        canonical="https://thatmexicanplace.net"
        openGraph={{
          url: 'https://thatmexicanplace.net',
          title: 'That Mexican Place',
          locale: 'en_US',
          description: 'That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido.',
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
      <S1HomeHero
        bgImage={BG}
        Title="That Mexican Place"
        Description="California Made, With Mexican Roots"
      />
    </Layout>
    </>
  );
};

export default Index2;
