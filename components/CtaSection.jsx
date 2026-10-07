"use client";
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica.&type=phone_number&app_absent=0&utm_source=ig';

export default function CtaSection() {
  return (
    <section className="inicio-cta-section" id="contato">
      <div className="inicio-cta-container">
        <div className="inicio-cta-card">
          <img 
            src="/assets/cta_banner_bg.jpg" 
            alt="Orientação Jurídica - Nadilson Gomes Advocacia" 
            className="inicio-cta-bg-img" 
          />
          <div className="inicio-cta-overlay"></div>
          <div className="inicio-cta-content">
            <h2 className="inicio-cta-title">
              Precisa de orientação<br className="inicio-cta-br" /> jurídica?
            </h2>
            <p className="inicio-cta-desc">
              Fale com nossa equipe e explique o seu caso. Estamos prontos para oferecer a melhor estratégia para você.
            </p>
            <a 
              href={WHATSAPP_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inicio-cta-btn"
              title="Falar pelo WhatsApp com Nadilson Gomes Advocacia"
            >
              <MessageCircle size={20} strokeWidth={2.2} className="inicio-cta-btn-icon" />
              <span>Falar pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

