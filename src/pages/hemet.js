// src/pages/hemet.js

import React from 'react';
import Layout from '../components/layout/Layout';
//import S1Hero from '../components/PageComponents/Home/s1Hero';
//import S2HoursLocation from '../components/PageComponents/Home/s2HoursLocation';
import S1Hero from '../components/s1Hero';
import S2HoursLocation from '../components/s2HoursLocation';

import BG from '../images/wood-bg.jpg';
import { LocalBusinessJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import { Helmet } from 'react-helmet-async';

const Hemet = () => {
    const businessHours = [
        { name: 'Sunday', hours: '8:00am - 9:00pm' },
        { name: 'Monday', hours: '8:00am - 9:00pm' },
        { name: 'Tuesday', hours: '8:00am - 9:00pm' },
        { name: 'Wednesday', hours: '8:00am - 9:00pm' },
        { name: 'Thursday', hours: '8:00am - 9:00pm' },
        { name: 'Friday', hours: '8:00am - 9:00pm' },
        { name: 'Saturday', hours: '8:00am - 9:00pm' },
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
                title="That Mexican Place - Hemet"
                description="That Mexican Place is a Mexican restaurant located in Hemet. Mexican food near Hemet."
                canonical="https://thatmexicanplace.net/hemet"
                openGraph={{
                    url: 'https://thatmexicanplace.net/hemet',
                    title: 'That Mexican Place - Hemet',
                    locale: 'en_US',
                    description:
                        'That Mexican Place is a Mexican restaurant located in Hemet. Mexican food near Hemet.',
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
                id="https://thatmexicanplace.net/hemet"
                name="That Mexican Place - Hemet"
                description="That Mexican Place is a Mexican restaurant located at Hemet. Mexican food near Hemet."
                url="https://thatmexicanplace.net/hemet"
                telephone="+17607433783"
                address={{
                    streetAddress: '281 N Sanderson Ave Ste 281',
                    addressLocality: 'Hemet',
                    addressRegion: 'CA',
                    postalCode: '92545',
                    addressCountry: 'US',
                }}
                geo={{
                    latitude: '33.75093736181698',
                    longitude: '-117.0069696896293',
                }}
                images={['https://thatmexicanplace.net/assets/img/logo-that-mexican-place.png']}
            />

            <Layout showPhoneNumber showNav={false}>
                {/*<S1Hero
          bgImage={BG}
          Title="That Mexican Place - Hemet"
          Description="California Made, With Mexican Roots"
          location="hemet"
        />
        <S2HoursLocation hours={businessHours} />*/}

                <S1Hero
                    bgImage={BG}
                    Title="That Mexican Place"
                    Description="California Made, With Mexican Roots"
                    locationName="Hemet Location"
                    locationAddress="281 N Sanderson Ave Ste 281, Hemet, CA 92545"
                    locationPhoneNumber="(951) 305-6043"
                    menuButtonAttributes={{
                        onClick: () => console.log('Menu Clicked'),
                        id: 'demo',
                        'data-glf-cuid': 'demo',
                        'data-glf-ruid': 'demo',
                    }}
                />

                <S2HoursLocation
                    hours={businessHours}
                    mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829.3449255869809!2d-117.00767003035752!3d33.7508527134064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db670073ed869f%3A0x766267da4a7ccc3b!2sThat%20Mexican%20Place!5e0!3m2!1sen!2sus!4v1719830756368!5m2!1sen!2sus"
                    googleMapsLink="https://www.google.com/maps/dir//That+Mexican+Place,+281+N+Sanderson+Ave,+Hemet,+CA+92545/@33.7508527,-117.00767,19z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80db670073ed869f:0x766267da4a7ccc3b!2m2!1d-117.0068822!2d33.7507969"
                    address="281 N Sanderson Ave Ste 281, Hemet, CA 92545"
                    phoneNumber="(951) 305-6043"
                />
            </Layout>
        </>
    );
};

export default Hemet;
