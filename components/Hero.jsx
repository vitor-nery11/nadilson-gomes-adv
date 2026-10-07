"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const slides = [
  {
    img: '/assets/nadilson-gomes.png',
    title: 'Direito com estratégia, experiência e atendimento próximo.',
    text: 'Atuação jurídica de excelência, com atendimento personalizado para defender os seus direitos em todo o Brasil.'
  },
  {
    img: '/assets/nadilson_sede.png',
    title: 'Estrutura sólida e moderna para proteger seus interesses.',
    text: 'Um ambiente preparado para oferecer total discrição, conforto e soluções jurídicas de alto nível para você ou sua empresa.'
  },
  {
    img: '/assets/nadilson_carol.png',
    title: 'Especialistas implacáveis na busca pelo seu melhor resultado.',
    text: 'Uma equipe multidisciplinar altamente qualificada, pronta para lidar com a complexidade do seu caso com agilidade e ética.'
  }
];

export default function Hero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slides.length);
    }, 5000); // Troca a cada 5 segundos
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="inicio" className="hero" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background Carousel */}
      {slides.map((slide, idx) => (
        <div
          key={`bg-${idx}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: '65% center',
            opacity: idx === currentIdx ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            zIndex: 0
          }}
        />
      ))}

      {/* Overlay to ensure text readability */}
      <div className="hero-overlay" style={{ zIndex: 1 }}></div>

      {/* Content */}
      <div className="hero-container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-content" style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
          <div style={{ gridArea: '1 / 1', display: 'grid', gridTemplateColumns: '1fr' }}>
          {slides.map((slide, idx) => (
            <div 
              key={`content-${idx}`}
              style={{
                gridArea: '1 / 1',
                width: '100%',
                opacity: idx === currentIdx ? 1 : 0,
                transform: idx === currentIdx ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                pointerEvents: idx === currentIdx ? 'auto' : 'none'
              }}
            >
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.text}</p>
            </div>
          ))}
          
          </div>
          
          <div className="hero-actions" style={{ position: 'relative', zIndex: 3, marginTop: '2rem' }}>
            <a href="https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20uma%20demanda%20a%20tratar.%20Gostaria%20de%20falar%20com%20a%20equipe.&type=phone_number&app_absent=0&utm_source=ig" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Fale com um advogado <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
