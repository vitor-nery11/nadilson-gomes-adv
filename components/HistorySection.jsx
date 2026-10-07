"use client";
import React from 'react';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function HistorySection() {
  return (
    <section className="history-section" style={{ marginTop: '4rem', marginBottom: '6rem' }}>
      <style>{`
        .history-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: center;
        }
        @media (max-width: 992px) {
          .history-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          .history-images {
            order: -1;
          }
        }
      `}</style>
      
      <div className="history-grid">
        <div className="history-content">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '300', marginBottom: '1.5rem', color: '#15181d', letterSpacing: '-0.5px' }}>Nossa Trajetória</h2>
          <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
            Fundado por <strong>Nadilson Gomes</strong> e <strong>Caroline Gomes</strong>, nosso escritório nasceu com a missão de entregar uma advocacia de altíssima excelência, pautada na transparência e no foco implacável em resultados.
          </p>
          <p style={{ color: '#666', lineHeight: '1.8', fontSize: '1.05rem', marginBottom: '3rem' }}>
            Com mais de uma década de sólida atuação, expandimos nossas fronteiras e hoje contamos com unidades estratégicas, oferecendo suporte jurídico abrangente para pessoas físicas e jurídicas em âmbito nacional, garantindo segurança em cada passo jurídico.
          </p>
          
          <div className="history-values" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'rgba(200, 166, 90, 0.1)', borderRadius: '12px', color: 'var(--brand)' }}>
                <Target size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.4rem', color: '#15181d', fontSize: '1.1rem' }}>Nossa Missão</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>Proporcionar segurança jurídica plena e soluções eficientes, atuando como o maior escudo na garantia dos direitos dos nossos clientes.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'rgba(200, 166, 90, 0.1)', borderRadius: '12px', color: 'var(--brand)' }}>
                <Eye size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.4rem', color: '#15181d', fontSize: '1.1rem' }}>Nossa Visão</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>Ser a referência em advocacia estratégica e personalizada no Brasil, unindo a tradição do Direito com a inovação e o pragmatismo moderno.</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'flex-start' }}>
              <div style={{ padding: '12px', backgroundColor: 'rgba(200, 166, 90, 0.1)', borderRadius: '12px', color: 'var(--brand)' }}>
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 style={{ fontWeight: '600', marginBottom: '0.4rem', color: '#15181d', fontSize: '1.1rem' }}>Nossos Valores</h4>
                <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.5' }}>Ética inegociável, máxima transparência, compromisso inflexível com o êxito e um atendimento humanizado e exclusivo.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="history-images" style={{ position: 'relative' }}>
          <img 
            src="/assets/historia_card_luxo.jpg" 
            alt="Sede e Trajetória do Escritório" 
            style={{ width: '100%', borderRadius: '24px', objectFit: 'cover', aspectRatio: '4/5', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }} 
          />
          {/* Detalhe decorativo Dourado */}
          <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '200px', height: '200px', border: '2px solid var(--brand)', borderRadius: '24px', zIndex: '-1', opacity: '0.5' }}></div>
        </div>
      </div>
    </section>
  );
}
