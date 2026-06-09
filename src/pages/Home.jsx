import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Commitment from '../components/Commitment';
import Quote from '../components/Quote';
import InstagramGrid from '../components/InstagramGrid';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Commitment />
      <Quote />
      <InstagramGrid />
      <CtaSection />
    </main>
  );
};

export default Home;
