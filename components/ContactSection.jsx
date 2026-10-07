"use client";
import React from 'react';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-info-col">
          <span className="contact-subtitle">Fale Conosco</span>
          <h2 className="contact-title">Pronto para avançar?</h2>
          <p className="contact-desc">
            Nossa equipe de especialistas está à disposição para entender o seu cenário e apresentar as melhores soluções jurídicas para você ou sua empresa.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <Phone size={22} />
              </div>
              <div className="contact-method-text">
                <h4>Telefone / WhatsApp</h4>
                <a href="tel:5573998249898">(73) 99824-9898</a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <Mail size={22} />
              </div>
              <div className="contact-method-text">
                <h4>E-mail</h4>
                <a href="mailto:contato@nadilsonadv.com.br">contato@nadilsonadv.com.br</a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="contact-icon-wrapper">
                <Clock size={22} />
              </div>
              <div className="contact-method-text">
                <h4>Atendimento</h4>
                <span>Seg - Sex, 08h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="contact-form-card">
            <h3>Envie uma mensagem</h3>
            <p>Retornaremos o seu contato o mais breve possível.</p>
            
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" id="nome" placeholder=" " required />
                <label htmlFor="nome">Nome completo</label>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">E-mail</label>
                </div>
                <div className="form-group">
                  <input type="tel" id="telefone" placeholder=" " required />
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                </div>
              </div>
              
              <div className="form-group">
                <select id="assunto" required defaultValue="">
                  <option value="" disabled hidden>Selecione um assunto...</option>
                  <option value="empresarial">Direito Empresarial</option>
                  <option value="civil">Direito Civil / Consumidor</option>
                  <option value="trabalhista">Direito Trabalhista</option>
                  <option value="outro">Outros / Dúvida Geral</option>
                </select>
              </div>

              <div className="form-group">
                <textarea id="mensagem" placeholder=" " rows="4" required></textarea>
                <label htmlFor="mensagem">Como podemos ajudar?</label>
              </div>

              <button type="submit" className="contact-submit-btn">
                <span>Enviar Mensagem</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
