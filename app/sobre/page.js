"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import OfficeMapSection from '../../components/OfficeMapSection';

export default function Sobre() {
  return (
    <>
      <Header />
      
      <main className="areas-page-wrapper">
        <div className="areas-page-container">
          
          {/* Header Block matching the reference aesthetic */}
          <div className="areas-header-block">
            <h1 className="areas-page-title">O Escritório</h1>
            <p className="areas-page-subtitle">
              Estrutura de excelência, solidez jurídica e atendimento estratégico em âmbito nacional.
            </p>
          </div>

          {/* Large Hero Card - Destaque Visual */}
          <div className="areas-hero-card">
            <img 
              src="/assets/escritorio_hero_banner.jpg" 
              alt="Sede NG Empresarial - Nadilson Gomes Caroline Gomes Advocacia" 
              className="areas-hero-card-img" 
            />
          </div>

          {/* Mapa Interativo das Unidades */}
          <OfficeMapSection />

          

          

        </div>
      </main>

      <Footer />
    </>
  );
}
