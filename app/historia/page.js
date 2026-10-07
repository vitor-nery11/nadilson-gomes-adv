"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HistorySection from '../../components/HistorySection';

export default function Historia() {
  return (
    <>
      <Header />
      
      <main className="areas-page-wrapper" style={{ minHeight: '100vh', paddingTop: '8rem' }}>
        <div className="areas-page-container">
          
          <div className="areas-header-block">
            <h1 className="areas-page-title">Nossa História</h1>
            <p className="areas-page-subtitle">
              Conheça nossa trajetória, missão e o que nos move na advocacia.
            </p>
          </div>

          <HistorySection />

        </div>
      </main>

      <Footer />
    </>
  );
}
