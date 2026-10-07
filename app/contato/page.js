"use client";
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Mail, Phone, ArrowRight } from 'lucide-react';

export default function Contato() {
  return (
    <>
      <Header />
      <main className="split-contact-page">
        <div className="split-contact-image">
          <div className="image-overlay">
            <h2>Nadilson Gomes<br/>& Caroline Gomes</h2>
            <p>Advocacia e Consultoria Jurídica</p>
          </div>
        </div>
        
        <div className="split-contact-content">
          <div className="split-contact-inner">
            <span className="sc-subtitle">Fale Conosco</span>
            <h1 className="sc-title">Inicie sua<br/>consultoria.</h1>
            <p className="sc-desc">
              Agende uma reunião com nossos especialistas. Estamos prontos para oferecer soluções jurídicas estratégicas, de forma ágil e personalizada para você e sua empresa.
            </p>

            <div className="sc-info-grid">
              <div className="sc-info-item">
                <Phone size={22} className="sc-icon" />
                <div>
                  <h5>Telefone / WhatsApp</h5>
                  <a href="tel:5573998249898">(73) 99824-9898</a>
                </div>
              </div>
              <div className="sc-info-item">
                <Mail size={22} className="sc-icon" />
                <div>
                  <h5>E-mail</h5>
                  <a href="mailto:contato@nadilsonadv.com.br">contato@nadilsonadv.com.br</a>
                </div>
              </div>
            </div>

            <form className="sc-form" onSubmit={(e) => e.preventDefault()}>
              <div className="sc-form-group">
                <input type="text" id="nome" placeholder=" " required />
                <label htmlFor="nome">Nome completo</label>
              </div>
              
              <div className="sc-form-row">
                <div className="sc-form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">E-mail corporativo ou pessoal</label>
                </div>
                <div className="sc-form-group">
                  <input type="tel" id="telefone" placeholder=" " required />
                  <label htmlFor="telefone">Telefone</label>
                </div>
              </div>

              <div className="sc-form-group">
                <textarea id="mensagem" placeholder=" " rows="2" required></textarea>
                <label htmlFor="mensagem">Como podemos ajudar?</label>
              </div>

              <button type="submit" className="sc-submit-btn">
                Enviar Mensagem <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
