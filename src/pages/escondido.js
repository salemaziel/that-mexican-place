import React from 'react';
import Layout from '../components/layout/Layout';
//import S1Hero from '../components/PageComponents/Home/s1Hero';
import S1Hero from '../components/s1Hero';

//import S2HoursLocation from '../components/PageComponents/Home/s2HoursLocation';
import S2HoursLocation from '../components/s2HoursLocation';

import BG from '../images/wood-bg.jpg';
import { LocalBusinessJsonLd, GatsbySeo } from 'gatsby-plugin-next-seo';
import { Helmet } from 'react-helmet-async';

const Escondido = () => {
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
                <script>
                    {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P7TD4BSV');`}
                </script>
            </Helmet>
            <GatsbySeo
                title="That Mexican Place - Escondido"
                description="That Mexican Place is a Mexican restaurant located at Escondido. Mexican food near Escondido."
                canonical="https://thatmexicanplace.net/escondido"
                openGraph={{
                    url: 'https://thatmexicanplace.net/escondido',
                    title: 'That Mexican Place - Escondido',
                    locale: 'en_US',
                    description:
                        'That Mexican Place is a Mexican restaurant located at Escondido. Mexican food near Escondido.',
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
                id="https://thatmexicanplace.net/escondido"
                name="That Mexican Place - Escondido"
                description="That Mexican Place is a Mexican restaurant located at Escondido. Mexican food near Escondido."
                url="https://thatmexicanplace.net/escondido"
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

            <Layout showPhoneNumber showNav={false}>
                {/*<S1Hero
                    bgImage={BG}
                    Title="That Mexican Place - Escondido"
                    Description="California Made, With Mexican Roots"
                    location="escondido"
                />*/}
                <S1Hero
                    bgImage={BG}
                    Title="That Mexican Place"
                    Description="California Made, With Mexican Roots"
                    locationName="Escondido Location"
                    locationAddress="200 W El Norte Pkwy Suite 9, Escondido, CA 92026"
                    locationPhoneNumber="(760) 743-3783"
                    menuButtonAttributes={{
                        'id': 'glfButton1',
                        'data-glf-cuid': 'fcc9622a-6d23-4af1-895b-5ff1021ff7b0',
                        'data-glf-ruid': '83c6af9e-70c9-4dc6-b2e8-223c37d5f648',
                    }}
                />

                {/*<S2HoursLocation hours={businessHours} />*/}


                <S2HoursLocation
                    hours={businessHours}
                    mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.8302429052183!2d-117.09370068470827!3d33.13982408086392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dbf4b028a9c805%3A0x2f75747a6e44876c!2sThat%20Mexican%20Place!5e0!3m2!1sen!2sus!4v1612178335240!5m2!1sen!2sus"
                    googleMapsLink="https://www.google.com/maps/dir//That+Mexican+Place,+200+W+El+Norte+Pkwy,+Escondido,+CA+92026/@33.1398241,-117.0937007,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x80dbf4b028a9c805:0x2f75747a6e44876c!2m2!1d-117.091512!2d33.1398241"
                    address="200 W El Norte Pkwy Suite 9, Escondido, CA 92026"
                    phoneNumber="(760) 743-3783"
                />
            </Layout>
        </>
    );
};

export default Escondido;