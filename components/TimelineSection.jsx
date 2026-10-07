"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Target, Users, Map } from 'lucide-react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const timelineData = [
  {
    icon: <ShieldCheck size={24} color="var(--brand)" />,
    title: "+10 Anos de Experiência e Solidez",
    text: "Somos um escritório com mais de uma década de atuação na prestação de serviços advocatícios especializados em direito previdenciário, cível e trabalhista. Contamos com sedes físicas na Bahia e no Rio de Janeiro."
  },
  {
    icon: <Target size={24} color="var(--brand)" />,
    title: "Serviço Personalizado e Focado em Êxito",
    text: "Nosso objetivo é sempre fornecer soluções céleres e eficazes para as demandas de nossos clientes, estabelecendo uma aliança ética e profissional para a obtenção de êxito e a total seguridade do seu direito."
  },
  {
    icon: <Users size={24} color="var(--brand)" />,
    title: "Equipe de Especialistas Qualificados",
    text: "Dispomos de uma equipe de advogados e colaboradores com profundo conhecimento prático e teórico. Atuamos com rigor tanto na esfera administrativa quanto na via judicial, proporcionando uma experiência satisfatória."
  },
  {
    icon: <Map size={24} color="var(--brand)" />,
    title: "Atendimento Nacional (Presencial ou Digital)",
    text: "A contratação dos nossos serviços pode ser presencial, nas diversas cidades em que estamos, ou por nossos canais de comunicação digitais. Atendemos com a mesma primazia em todo o território nacional através dos processos virtuais."
  }
];

export default function TimelineSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Anima a linha descendo conforme o scroll
    gsap.to(".timeline-progress", {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: ".timeline-wrapper",
        start: "top center",
        end: "bottom center",
        scrub: true,
      }
    });

    // Anima cada item (fade in e deslize para cima)
    const items = gsap.utils.toArray(".timeline-item");
    items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 80%", // Dispara quando o topo do item atinge 80% da tela
          toggleClass: "active", // Adiciona a classe active para acender a bolinha
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section ref={containerRef} id="diferenciais" className="timeline-section section-light">
      <div className="container">
        
        <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <span className="badge-tag" style={{ justifyContent: 'center' }}>Nossa História</span>
          <h2 className="areas-main-title" style={{ color: '#15181d', textAlign: 'center' }}>Por que o nosso escritório é a escolha certa para você?</h2>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-line">
            <div className="timeline-progress"></div>
          </div>
          
          <div className="timeline-items">
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="timeline-title">
                    <span className="timeline-icon">{item.icon}</span>
                    <span>{item.title}</span>
                  </h3>
                  <p className="timeline-text">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
