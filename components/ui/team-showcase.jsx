"use client";
import React, { useState, useEffect } from 'react';
import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { cn } from '../../lib/utils';

// Membros para o Showcase Desktop (3 Momentos)
const MOMENTOS = [
  // MOMENTO 1
  [
    {
      id: '1',
      name: 'Nadilson Gomes',
      role: 'SÓCIO FUNDADOR',
      image: '/assets/advogado_1.jpg',
      social: { instagram: 'https://instagram.com/nadilsongomes', linkedin: '#' },
    },
    {
      id: '2',
      name: 'Carolina Almeida',
      role: 'ADVOGADA ASSOCIADA',
      image: '/assets/advogada_1.jpg',
      social: { instagram: '#' },
    },
    {
      id: '3',
      name: 'Rafael Costa',
      role: 'DIREITO PÚBLICO',
      image: '/assets/advogado_2.jpg',
      social: { linkedin: '#' },
    }
  ],
  // MOMENTO 2
  [
    {
      id: '4',
      name: 'Marina Silva',
      role: 'PREVIDENCIÁRIO',
      image: '/assets/advogada_marina.jpg',
      social: { linkedin: '#' },
    },
    {
      id: '5',
      name: 'João Pedro',
      role: 'COORDENADOR CÍVEL',
      image: '/assets/advogado_joao.jpg',
      social: { twitter: '#', linkedin: '#' },
    },
    {
      id: '6',
      name: 'Fernanda Lima',
      role: 'DIREITO DO TRABALHO',
      image: '/assets/advogada_fernanda.jpg',
      social: { instagram: '#' },
    }
  ],
  // MOMENTO 3
  [
    {
      id: '7',
      name: 'Lucas Mendes',
      role: 'DIREITO EMPRESARIAL',
      image: '/assets/advogado_lucas.jpg',
      social: { linkedin: '#' },
    },
    {
      id: '8',
      name: 'Amanda Souza',
      role: 'DIREITO DO CONSUMIDOR',
      image: '/assets/advogada_amanda.jpg',
      social: { instagram: '#' },
    },
    {
      id: '9',
      name: 'Pedro Henrique',
      role: 'ADMINISTRATIVO',
      image: '/assets/advogado_1.jpg',
      social: { twitter: '#' },
    }
  ]
];

// Dados dos cards para o Marquee Duplo Mobile (fiel à referência)
const MOBILE_ROW1 = [
  { name: 'Nadilson Gomes', role: 'Sócio Fundador', image: '/assets/advogado_1.jpg' },
  { name: 'Carolina Almeida', role: 'Advogada', image: '/assets/advogada_1.jpg' },
  { name: 'Rafael Costa', role: 'Advogado', image: '/assets/advogado_2.jpg' },
  { name: 'Marina Silva', role: 'Advogada', image: '/assets/advogada_marina.jpg' },
];

const MOBILE_ROW2 = [
  { name: 'João Pedro', role: 'Advogado', image: '/assets/advogado_joao.jpg' },
  { name: 'Fernanda Lima', role: 'Advogada', image: '/assets/advogada_fernanda.jpg' },
  { name: 'Lucas Mendes', role: 'Advogado', image: '/assets/advogado_lucas.jpg' },
  { name: 'Amanda Souza', role: 'Advogada', image: '/assets/advogada_amanda.jpg' },
];

// Multiplicado para loop infinito 100% contínuo
const ROW1_ITEMS = [...MOBILE_ROW1, ...MOBILE_ROW1, ...MOBILE_ROW1, ...MOBILE_ROW1];
const ROW2_ITEMS = [...MOBILE_ROW2, ...MOBILE_ROW2, ...MOBILE_ROW2, ...MOBILE_ROW2];

export default function TeamShowcase() {
  const [hoveredId, setHoveredId] = useState(null);
  const [momentoIdx, setMomentoIdx] = useState(0);

  // Auto-play no Desktop
  useEffect(() => {
    const timer = setInterval(() => {
      setMomentoIdx((prev) => (prev + 1) % MOMENTOS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const members = MOMENTOS[momentoIdx];

  const col1 = members.filter((_, i) => i % 3 === 0);
  const col2 = members.filter((_, i) => i % 3 === 1);
  const col3 = members.filter((_, i) => i % 3 === 2);

  return (
    <div className="w-full font-sans select-none">
      
      {/* ─── DESKTOP VIEW (≥ lg) PRESERVADA ─── */}
      <div className="hidden lg:flex flex-col gap-12 max-w-7xl mx-auto py-4">
        {/* Indicadores de Momento Desktop */}
        {MOMENTOS.length > 1 && (
          <div className="flex justify-center gap-4 mb-4">
            {MOMENTOS.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setMomentoIdx(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${momentoIdx === idx ? 'w-12 bg-[#c8a65a]' : 'w-4 bg-gray-300 hover:bg-gray-400'}`}
                aria-label={`Momento ${idx + 1}`}
              />
            ))}
          </div>
        )}

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full">
          {/* Colunas de Fotos Desktop */}
          <div className="flex gap-4 md:gap-6 flex-shrink-0 justify-center">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              {col1.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[240px] md:h-[340px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4 mt-[30px] sm:mt-[50px] md:mt-[80px]">
              {col2.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[160px] h-[220px] sm:w-[200px] sm:h-[280px] md:w-[260px] md:h-[360px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-4 mt-[15px] sm:mt-[25px] md:mt-[40px]">
              {col3.map((member) => (
                <PhotoCard
                  key={member.id}
                  member={member}
                  className="w-[140px] h-[200px] sm:w-[180px] sm:h-[260px] md:w-[240px] md:h-[340px]"
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>

          {/* Lista de Nomes Desktop */}
          <div className="flex flex-col gap-8 w-full max-w-md">
            <div className="transition-all duration-500 ease-in-out flex flex-col gap-12" key={momentoIdx} style={{ animation: 'fadeIn 0.5s ease' }}>
              {members.map((member) => (
                <MemberRow
                  key={member.id}
                  member={member}
                  hoveredId={hoveredId}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── MOBILE VIEW (< lg): MARQUEE DUPLO (CONFORME IMAGEM DE REFERÊNCIA) ─── */}
      <div className="block lg:hidden w-full overflow-hidden pt-2 pb-6">
        
        {/* Linha 1: Move para a Esquerda */}
        <div className="team-marquee-container mb-6">
          <div className="team-marquee-track team-track-left">
            {ROW1_ITEMS.map((member, idx) => (
              <TeamMarqueeCard key={`r1-${idx}`} member={member} />
            ))}
          </div>
        </div>

        {/* Linha 2: Move para a Direita */}
        <div className="team-marquee-container">
          <div className="team-marquee-track team-track-right">
            {ROW2_ITEMS.map((member, idx) => (
              <TeamMarqueeCard key={`r2-${idx}`} member={member} />
            ))}
          </div>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}}
      />
    </div>
  );
}

{/* ─── CARD INDIVIDUAL DO MARQUEE MOBILE (EXATAMENTE IGUAL À IMAGEM ANEXADA) ─── */}
function TeamMarqueeCard({ member }) {
  return (
    <div className="w-[124px] flex-shrink-0 flex flex-col text-left select-none">
      {/* Foto vertical arredondada (formato e raio de curvatura da referência) */}
      <div className="w-[124px] h-[152px] rounded-[20px] overflow-hidden bg-[#f5f3ee]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover object-top"
          loading="lazy"
        />
      </div>

      {/* Nome e Cargo logo abaixo da foto com espaçamento aprimorado */}
      <div className="mt-[18px] px-0.5">
        <h4 className="text-[13px] font-semibold text-[#1e2329] leading-tight tracking-tight">
          {member.name}
        </h4>
        <p className="text-[11.5px] text-[#717680] font-normal leading-tight mt-1">
          {member.role}
        </p>
      </div>
    </div>
  );
}

{/* ─── COMPONENTES DESKTOP (PRESERVADOS INTACTOS) ─── */}
function PhotoCard({ member, className, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl bg-[#f5f3ee] cursor-pointer flex-shrink-0 transition-all duration-500 ease-in-out',
        className,
        isDimmed ? 'opacity-40 scale-[0.98]' : 'opacity-100 scale-100 shadow-2xl',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
      style={{ animation: 'fadeIn 0.5s ease' }}
    >
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="transition-all duration-700"
          style={{
            filter: isActive ? 'brightness(1.05) contrast(1.05)' : 'brightness(0.85)',
            objectPosition: member.position || 'center',
            transform: member.scale ? `scale(${member.scale})` : 'scale(1)',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0
          }}
        />
      )}
    </div>
  );
}

function MemberRow({ member, hoveredId, onHover }) {
  const isActive = hoveredId === member.id;
  const isDimmed = hoveredId !== null && !isActive;
  const hasSocial = member.social?.twitter || member.social?.linkedin || member.social?.instagram;

  return (
    <div
      className={cn(
        'cursor-pointer transition-all duration-300',
        isDimmed ? 'opacity-40' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="flex items-center gap-4">
        <span
          className={cn(
            'h-4 rounded-[5px] flex-shrink-0 transition-all duration-300',
            isActive ? 'bg-[#c8a65a] w-8' : 'bg-[#c8a65a]/30 w-4',
          )}
        />
        <span
          className={cn(
            'text-2xl md:text-3xl font-bold leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-[#15181d]' : 'text-[#15181d]/80',
          )}
        >
          {member.name}
        </span>

        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-2 ml-2 transition-all duration-300',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-4 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full text-[#71717a] bg-gray-100 hover:text-white hover:bg-[#c8a65a] transition-all duration-200 hover:scale-110"
              >
                <FaTwitter size={16} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full text-[#71717a] bg-gray-100 hover:text-white hover:bg-[#c8a65a] transition-all duration-200 hover:scale-110"
              >
                <FaLinkedinIn size={16} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 rounded-full text-[#71717a] bg-gray-100 hover:text-white hover:bg-[#c8a65a] transition-all duration-200 hover:scale-110"
              >
                <FaInstagram size={16} />
              </a>
            )}
          </div>
        )}
      </div>

      <p className="mt-2 pl-[48px] text-sm md:text-md font-semibold uppercase tracking-[0.2em] text-[#c8a65a]">
        {member.role}
      </p>
    </div>
  );
}
