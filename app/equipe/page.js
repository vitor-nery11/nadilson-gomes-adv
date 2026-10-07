"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TeamSection from '../../components/TeamSection';

export default function Equipe() {
  return (
    <>
      <Header />
      <main className="areas-page-wrapper" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="areas-page-container" style={{ paddingBottom: '4rem' }}>
          <TeamSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
