import React from 'react';
import Link from 'next/link';
import { CheckCircle, Globe, PhoneCall, Mail, MapPin, MessageCircle, Briefcase } from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20uma%20demanda%20a%20tratar.%20Gostaria%20de%20falar%20com%20a%20equipe.&type=phone_number&app_absent=0&utm_source=ig';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Branding */}
          <div className="footer-brand-col">
            <div style={{ marginBottom: '1.5rem' }}>
              <Link href="/" className="logo-link" style={{ textDecoration: 'none' }}>
                <img src="/assets/logo.svg" alt="NG" className="logo-svg" />
                <span className="logo-text">NADILSON GOMES<br />ADVOCACIA</span>
              </Link>
            </div>
            <p className="footer-slogan">
              Estratégia e excelência jurídica em todo o território nacional. Defendendo seus interesses com rigor técnico, ética inegociável e compromisso com resultados concretos.
            </p>
            <div className="footer-badges">
              <div className="footer-badge">
                <CheckCircle size={14} color="var(--brand)" /> Inscrição OAB/BA nº 35.768
              </div>
              <div className="footer-badge">
                <Globe size={14} color="var(--brand)" /> Atuação em Âmbito Nacional
              </div>
            </div>
          </div>
          
          {/* Áreas de Atuação */}
          <div className="footer-nav-col">
            <h4 className="footer-heading"><span className="gold-dash"></span> ÁREAS DE ATUAÇÃO</h4>
            <ul className="footer-links bullet-links">
              <li><Link href="/areas">Direito Previdenciário</Link></li>
              <li><Link href="/areas">Direito Empresarial & Societário</Link></li>
              <li><Link href="/areas">Direito Civil & Contratos</Link></li>
              <li><Link href="/areas">Direito Tributário & Fiscal</Link></li>
              <li><Link href="/areas">Direito Imobiliário</Link></li>
              <li><Link href="/areas">Direito do Trabalho Corporativo</Link></li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="footer-nav-col">
            <h4 className="footer-heading"><span className="gold-dash"></span> NAVEGAÇÃO</h4>
            <ul className="footer-links">
              <li><Link href="/">Início</Link></li>
              <li><Link href="/sobre">O Escritório</Link></li>
              <li><Link href="/areas">Áreas de Atuação</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          
          {/* Canais de Contato */}
          <div className="footer-contact-col">
            <h4 className="footer-heading"><span className="gold-dash"></span> CANAIS DE CONTATO</h4>
            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-icon"><PhoneCall size={20} /></div>
                <div className="contact-info">
                  <span className="contact-label">LIGUE OU CONVERSE</span>
                  <a href="tel:5573998249898" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                    (73) 99824-9898
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <div className="contact-info">
                  <span className="contact-label">CORRESPONDÊNCIA OFICIAL</span>
                  <a href="mailto:contato@nadilsongomes.com.br" className="contact-value" style={{ textDecoration: 'none', color: 'inherit' }}>
                    contato@nadilsongomes.com.br
                  </a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={20} /></div>
                <div className="contact-info">
                  <span className="contact-label">SEDE PRINCIPAL</span>
                  <span className="contact-value">
                    Av. Pres. Getúlio Vargas, 3345 - Sala 201, Centro<br />
                    Teixeira de Freitas - BA, CEP 45985-200<br />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-sec)', fontWeight: 'normal' }}>
                      Segunda à Sexta • 08h às 18h
                    </span>
                  </span>
                </div>
              </div>
            </div>
            
            <h5 className="social-heading">CONECTE-SE CONOSCO</h5>
            <div className="footer-social-row">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle size={20} /></a>
              <a href="https://www.instagram.com/nadilsongomes/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
              <a href="https://www.jusbrasil.com.br" target="_blank" rel="noopener noreferrer" aria-label="Jusbrasil"><Briefcase size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copy">
            &copy; 2026 Nadilson Gomes Advocacia. Todos os direitos reservados.
          </div>
          <div className="footer-legal">
            <Link href="/sobre">Termos de Uso</Link>
            <Link href="/contato">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
