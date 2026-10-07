import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import NumbersSection from '../components/NumbersSection';
import AreasHome from '../components/AreasHome';
import TimelineSection from '../components/TimelineSection';
import TeamSectionHome from '../components/TeamSectionHome';
import TestimonialsSection from '../components/TestimonialsSection';
import CtaSection from '../components/CtaSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NumbersSection />
        <AreasHome />
        <TimelineSection />
        <TeamSectionHome />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
