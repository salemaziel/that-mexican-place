import React from 'react';

import Layout from '../components/layout/Layout';
import HomePage from "../components/PageComponents/Home/HomePage"

import { LocalBusinessJsonLd } from 'gatsby-plugin-next-seo';

const Index = () => (
  <Layout>
    <LocalBusinessJsonLd
  type='Restaurant'
  id='https://thatmexicanplace.net'
  name="That Mexican Place"
  description="That Mexican Place is a Mexican restaurant located at Escondido, CA. Mexican food near Escondido."
  url='https://thatmexicanplace.net'
  telephone='+17607433783'
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
  images={[
    'https://thatmexicanplace.net/assets/img/logo-that-mexican-place.png',
  ]}
/>
    <HomePage />

  </Layout>
);

export default Index