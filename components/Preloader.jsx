"use client";
import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [mounted, setMounted] = useState(false);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Se já foi exibido nesta sessão, não roda novamente
    if (sessionStorage.getItem('site_preloaded')) {
      setHidden(true);
      return;
    }

    // Marca como exibido
    sessionStorage.setItem('site_preloaded', 'true');

    // Ativa a animação CSS com delay mínimo para garantir que o DOM pintou a barra em 0%
    const startTimer = setTimeout(() => {
      setActive(true);
    }, 50);

    // Após 3 segundos de carregamento contínuo:
    const fadeTimer = setTimeout(() => {
      setFading(true);
    }, 3100);

    // Após o fade out (600ms), remove do DOM
    const removeTimer = setTimeout(() => {
      setHidden(true);
    }, 3700);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  // Evita flash durante SSR e quando já finalizado
  if (!mounted || hidden) return null;

  return (
    <div className={`preloader-overlay ${fading ? 'fade-out' : ''}`}>
      <div className="preloader-content">
        <img
          src="/assets/logo.svg"
          alt="Nadilson Gomes Advocacia"
          className="preloader-logo"
        />
        <div className="preloader-bar-bg">
          <div className={`preloader-bar-fill ${active ? 'is-animating' : ''}`} />
        </div>
      </div>
    </div>
  );
}
