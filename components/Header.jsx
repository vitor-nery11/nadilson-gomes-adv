"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Briefcase, FileText, Percent, Users, Scale, Home, ShoppingBag, CheckSquare, Shield, Gavel, Info, Star, MapPin } from 'lucide-react';

import MobileNav from './MobileNav';

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <MobileNav />
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${!isHome ? 'solid' : ''}`} id="header" style={{ overflow: 'visible' }}>
      <div className="header-container" style={{ position: 'relative' }}>
        <div className="logo">
          <Link href="/" className="logo-link">
            <img src="/assets/logo.svg" alt="NG" className="logo-svg" />
            <span className="logo-text">NADILSON GOMES<br />ADVOCACIA</span>
          </Link>
        </div>
        
        <nav className={`nav ${menuOpen ? 'active' : ''}`} id="nav">
          <ul className="nav-list">
            <li><Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>Início</Link></li>
            
            {/* Dropdown O Escritório */}
            <li 
              className="nav-dropdown-item" 
              onMouseEnter={() => setSobreOpen(true)}
              onMouseLeave={() => setSobreOpen(false)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <Link href="/sobre" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => setMenuOpen(false)}>
                O Escritório <ChevronDown size={16} />
              </Link>
              
              <div 
                className={`mega-menu-wrapper ${sobreOpen ? 'show' : ''}`}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '1.5rem',
                  display: sobreOpen ? 'block' : 'none',
                  opacity: sobreOpen ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 100,
                  pointerEvents: sobreOpen ? 'auto' : 'none'
                }}
              >
                <div 
                  className="mega-menu"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '1.5rem',
                    width: '600px',
                    position: 'relative'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '8px solid #ffffff' }}></div>

                  <Link href="/historia" className="mega-item" style={{ alignItems: 'flex-start' }} onClick={() => setSobreOpen(false)}>
                    <div style={{ marginTop: '2px' }}><Info size={20} color="var(--brand)" /></div>
                    <div>
                      <div style={{ fontWeight: '500', color: '#15181d', marginBottom: '4px' }}>Nossa História</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dark-sec)', lineHeight: '1.4' }}>Conheça a trajetória e os valores que guiam o nosso escritório.</div>
                    </div>
                  </Link>

                  

                  <Link href="/equipe" className="mega-item" style={{ alignItems: 'flex-start' }} onClick={() => setSobreOpen(false)}>
                    <div style={{ marginTop: '2px' }}><Users size={20} color="var(--brand)" /></div>
                    <div>
                      <div style={{ fontWeight: '500', color: '#15181d', marginBottom: '4px' }}>Nossa Equipe</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dark-sec)', lineHeight: '1.4' }}>Conheça os profissionais por trás das nossas soluções.</div>
                    </div>
                  </Link>

                  <Link href="/sobre#diferenciais" className="mega-item" style={{ alignItems: 'flex-start' }} onClick={() => setSobreOpen(false)}>
                    <div style={{ marginTop: '2px' }}><Star size={20} color="var(--brand)" /></div>
                    <div>
                      <div style={{ fontWeight: '500', color: '#15181d', marginBottom: '4px' }}>Diferenciais</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dark-sec)', lineHeight: '1.4' }}>Por que somos a escolha certa para a sua defesa e consultoria.</div>
                    </div>
                  </Link>

                  <Link href="/sobre" className="mega-item" style={{ alignItems: 'flex-start' }} onClick={() => setSobreOpen(false)}>
                    <div style={{ marginTop: '2px' }}><MapPin size={20} color="var(--brand)" /></div>
                    <div>
                      <div style={{ fontWeight: '500', color: '#15181d', marginBottom: '4px' }}>Unidades & Contato</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-dark-sec)', lineHeight: '1.4' }}>Onde estamos e como agendar uma reunião com nossa equipe.</div>
                    </div>
                  </Link>
                </div>
              </div>
            </li>
            
            {/* Dropdown Áreas de Atuação */}
            <li 
              className="nav-dropdown-item" 
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              style={{ position: 'relative', display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <Link href="/areas" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '4px' }} onClick={() => setMenuOpen(false)}>
                Áreas de Atuação <ChevronDown size={16} />
              </Link>
              
              {/* Mega Menu Pop-up */}
              <div 
                className={`mega-menu-wrapper ${dropdownOpen ? 'show' : ''}`}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  paddingTop: '1.5rem',
                  display: dropdownOpen ? 'block' : 'none',
                  opacity: dropdownOpen ? 1 : 0,
                  transition: 'opacity 0.3s ease',
                  zIndex: 100,
                  pointerEvents: dropdownOpen ? 'auto' : 'none'
                }}
              >
                <div 
                  className="mega-menu"
                  style={{
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    borderRadius: '16px',
                    padding: '2rem',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '2rem',
                    width: '800px',
                    position: 'relative'
                  }}
                >
                  <div style={{ position: 'absolute', top: '-8px', left: '50%', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderBottom: '8px solid #ffffff' }}></div>

                  {/* Coluna 1 */}
                  <div className="mega-col">
                    <h4 style={{ color: 'var(--brand)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Empresas & Negócios</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Briefcase size={16} color="var(--brand)" /> Empresarial & Societário</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><FileText size={16} color="var(--brand)" /> Contratos Comerciais</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Percent size={16} color="var(--brand)" /> Tributário & Fiscal</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Users size={16} color="var(--brand)" /> Trabalho Corporativo</Link></li>
                    </ul>
                  </div>

                  {/* Coluna 2 */}
                  <div className="mega-col">
                    <h4 style={{ color: 'var(--brand)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Patrimônio & Família</h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Scale size={16} color="var(--brand)" /> Direito Civil</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Users size={16} color="var(--brand)" /> Família e Sucessões</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Home size={16} color="var(--brand)" /> Direito Imobiliário</Link></li>
                      <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><ShoppingBag size={16} color="var(--brand)" /> Direito do Consumidor</Link></li>
                    </ul>
                  </div>

                  {/* Coluna 3 */}
                  <div className="mega-col" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <h4 style={{ color: 'var(--brand)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>Direito Público</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><CheckSquare size={16} color="var(--brand)" /> Direito Eleitoral</Link></li>
                        <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Shield size={16} color="var(--brand)" /> Direito Penal</Link></li>
                        <li><Link href="/areas" className="mega-item" onClick={() => setDropdownOpen(false)}><Gavel size={16} color="var(--brand)" /> Resolução de Conflitos</Link></li>
                      </ul>
                    </div>
                    
                    <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                      <Link href="/areas" style={{ color: 'var(--brand)', fontSize: '0.9rem', fontWeight: '500', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }} onClick={() => setDropdownOpen(false)}>
                        Ver todas as áreas &rarr;
                      </Link>
                    </div>
                  </div>
                  
                </div>
              </div>
            </li>
            
            <li><Link href="/contato" className="nav-link" onClick={() => setMenuOpen(false)}>Contato</Link></li>
          </ul>
        </nav>

        <div className="header-action">
          <a href="https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20uma%20demanda%20a%20tratar.%20Gostaria%20de%20falar%20com%20a%20equipe.&type=phone_number&app_absent=0&utm_source=ig" target="_blank" className="btn btn-outline-brand">Fale conosco</a>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={24} color="#f4f1ea" /> : <Menu size={24} color="#f4f1ea" />}
        </button>
      </div>
    </header>
    </>
  );
}
