"use client";
import React, { useState } from 'react';
import { Search, Mail } from 'lucide-react';

const TEAM_DATA = [
  { id: 1, name: 'Nadilson Gomes', role: 'Sócio Fundador', email: 'nadilson@nadilsonadv.com.br', image: '/assets/nadilson-gomes.png' },
  { id: 2, name: 'Caroline Gomes', role: 'Sócia Fundadora', email: 'caroline@nadilsonadv.com.br', image: '/assets/nadilson_carol.png' },
  { id: 3, name: 'Gustavo Niella', role: 'Advogado Sênior', email: 'gustavo@nadilsonadv.com.br', image: '/assets/advogado_1.jpg' },
  { id: 4, name: 'Larissa Quadros', role: 'Advogada', email: 'larissa@nadilsonadv.com.br', image: '/assets/advogada_1.jpg' },
  { id: 5, name: 'Glaucia Matos', role: 'Controladoria Jurídica', email: 'glaucia@nadilsonadv.com.br', image: '/assets/advogada_amanda.jpg' },
  { id: 6, name: 'Rahyza Damasceno', role: 'Administrativo', email: 'rahyza@nadilsonadv.com.br', image: '/assets/advogada_fernanda.jpg' },
  { id: 7, name: 'Raquel Azevedo', role: 'Advogada', email: 'raquel@nadilsonadv.com.br', image: '/assets/advogada_marina.jpg' },
  { id: 8, name: 'Pedro Reis', role: 'Advogado', email: 'pedro@nadilsonadv.com.br', image: '/assets/advogado_joao.jpg' },
  { id: 9, name: 'Danilo Dourado', role: 'Advogado', email: 'danilo@nadilsonadv.com.br', image: '/assets/advogado_lucas.jpg' },
  { id: 10, name: 'João Dantas', role: 'Advogado', email: 'joao@nadilsonadv.com.br', image: '/assets/advogado_2.jpg' },
];

export default function TeamSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTeam = TEAM_DATA.filter(member => 
    member.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    member.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="team-section">
      <div className="team-header-block" style={{ marginBottom: "5rem" }}>
        <h2 className="areas-page-title">Nossa Equipe</h2>
        <p className="areas-page-subtitle">
          Profissionais altamente qualificados e dedicados à excelência jurídica.
        </p>
      </div>

      <div className="team-hero-banner">
        <img src="/assets/team_banner_new.jpg" alt="Equipe em ação" className="team-hero-img" />
      </div>

      <div className="team-search-container">
        <div className="team-search-input-wrapper">
          <Search size={16} className="team-search-icon" />
          <input 
            type="text" 
            placeholder="Buscar por nome ou cargo" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="team-grid">
        {filteredTeam.length > 0 ? (
          filteredTeam.map(member => (
            <div key={member.id} className="team-card">
              <div className="team-card-img-wrapper">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-card-info">
                <h4>{member.name}</h4>
                <p className="team-role">{member.role}</p>
                <a href={`mailto:${member.email}`} className="team-email">
                  <Mail size={12} />
                  <span>{member.email}</span>
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="team-no-results">Nenhum membro encontrado.</p>
        )}
      </div>
    </section>
  );
}
