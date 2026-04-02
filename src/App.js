import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Commitment from './components/Commitment';
import Quote from './components/Quote';
import InstagramGrid from './components/InstagramGrid';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Commitment />
        <Quote />
        <InstagramGrid />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
