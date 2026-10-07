"use client";
import React from 'react';

const STATS = [
  { label: 'Processos ativos', value: '+3.500' },
  { label: 'Anos de experiência', value: '+15' },
  { label: 'Clientes atendidos', value: '+12.000' },
];

export default function NumbersSection() {
  return (
    <section className="numbers-section section-light">
      <div className="container">
        <div className="numbers-header">
          <span className="badge-tag">Em números</span>
          <h2 className="areas-main-title" style={{ color: '#15181d' }}>
            Nosso trabalho<br />em números.
          </h2>
        </div>

        <div className="numbers-layout">
          {/* Vídeo - sem transform/will-change para o mix-blend-mode funcionar */}
          <div className="video-col">
            <video
              src="/assets/estatua_nadilson_scrub.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="numbers-video"
            />
          </div>

          {/* Cards de números */}
          <div className="cards-col">
            <div className="num-card num-card--dark">
              <p className="num-label">Em benefícios previdenciários e causas ganhas</p>
              <h3 className="num-value">+50 Mi</h3>
            </div>

            {STATS.map((s) => (
              <div key={s.label} className="num-card">
                <p className="num-label">{s.label}</p>
                <h3 className="num-value">{s.value}</h3>
              </div>
            ))}

            <div className="num-card num-card--brand">
              <p className="num-label">Taxa de sucesso e satisfação</p>
              <h3 className="num-value">98%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}