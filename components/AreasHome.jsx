import React from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Users, ShoppingBag, CheckSquare, Briefcase } from 'lucide-react';

export default function AreasHome() {
  return (
    <section id="areas" className="section-light areas" style={{ paddingTop: '2rem' }}>
      <div className="container">
        <div className="areas-header">
          <div className="areas-header-left">
            <span className="badge-tag">Atuação</span>
            <h2 className="areas-main-title">Como podemos ajudar<br />nossos clientes?</h2>
            <p className="areas-subtitle">Atendimento jurídico estratégico, com equipes dedicadas e visão multidisciplinar em cada caso.</p>
          </div>
          <div className="areas-header-right">
            <a href="https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20todas%20as%20%C3%A1reas%20de%20atua%C3%A7%C3%A3o%20e%20os%20servi%C3%A7os%20do%20escrit%C3%B3rio.&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="areas-link-all" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Ver todas as áreas <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="areas-carousel-wrapper">
        <div className="areas-carousel">
          {/* Contratos */}
          <div className="carousel-card">
            <div className="card-image-wrapper">
              <img src="/assets/contratos.png" alt="Contratos" className="card-image" />
            </div>
            <h3 className="area-title">Contratos</h3>
            <p className="area-text">Assessoria jurídica especializada para elaboração, revisão e negociação de contratos.</p>
          </div>
          
          {/* Direito de Família */}
          <div className="carousel-card">
            <div className="card-image-wrapper">
              <img src="/assets/direito_familia.png" alt="Direito de Família" className="card-image" />
            </div>
            <h3 className="area-title">Direito de Família</h3>
            <p className="area-text">Apoio em questões familiares, divórcios, pensão alimentícia e guarda de menores.</p>
          </div>
          
          {/* Direito do Consumidor */}
          <div className="carousel-card">
            <div className="card-image-wrapper">
              <img src="/assets/direito_consumidor.png" alt="Direito do Consumidor" className="card-image" />
            </div>
            <h3 className="area-title">Direito do Consumidor</h3>
            <p className="area-text">Orientação e atuação jurídica em situações envolvendo relações de consumo.</p>
          </div>
          
          {/* Direito Eleitoral */}
          <div className="carousel-card">
            <div className="card-image-wrapper">
              <img src="/assets/direito_eleitoral.png" alt="Direito Eleitoral" className="card-image" />
            </div>
            <h3 className="area-title">Direito Eleitoral</h3>
            <p className="area-text">Consultoria e representação jurídica para candidatos, partidos e campanhas eleitorais.</p>
          </div>
          
          {/* Direito Empresarial */}
          <div className="carousel-card">
            <div className="card-image-wrapper">
              <img src="/assets/direito_empresarial.png" alt="Direito Empresarial" className="card-image" />
            </div>
            <h3 className="area-title">Direito Empresarial</h3>
            <p className="area-text">Soluções jurídicas para o ciclo de vida completo do seu negócio e operações societárias.</p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
