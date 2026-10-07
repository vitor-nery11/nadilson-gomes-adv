"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, ChevronDown, ChevronRight, MessageCircle,
  Info, Users, Star, MapPin,
  Briefcase, FileText, Percent, Scale, Home, ShoppingBag, CheckSquare, Shield, Gavel,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=5573998249898&text=Ol%C3%A1%21%20Vim%20atrav%C3%A9s%20do%20site%20e%20tenho%20uma%20demanda%20a%20tratar.%20Gostaria%20de%20falar%20com%20a%20equipe.&type=phone_number&app_absent=0&utm_source=ig';

const ESCRITORIO = [
  { href: '/historia', label: 'Nossa História', icon: Info },
  { href: '/equipe', label: 'Nossa Equipe', icon: Users },
  { href: '/sobre#diferenciais', label: 'Diferenciais', icon: Star },
  { href: '/sobre', label: 'Unidades & Contato', icon: MapPin },
];

const AREAS = [
  { label: 'Empresarial & Societário', icon: Briefcase },
  { label: 'Contratos Comerciais', icon: FileText },
  { label: 'Tributário & Fiscal', icon: Percent },
  { label: 'Trabalho Corporativo', icon: Users },
  { label: 'Direito Civil', icon: Scale },
  { label: 'Família e Sucessões', icon: Users },
  { label: 'Direito Imobiliário', icon: Home },
  { label: 'Direito do Consumidor', icon: ShoppingBag },
  { label: 'Direito Eleitoral', icon: CheckSquare },
  { label: 'Direito Penal', icon: Shield },
  { label: 'Resolução de Conflitos', icon: Gavel },
];

export default function MobileNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [open, setOpen] = useState(false);
  const [section, setSection] = useState(null); // 'escritorio' | 'areas' | null

  const close = () => {
    setOpen(false);
    setSection(null);
  };

  // Trava o scroll da página e fecha com ESC
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && close();
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const toggleSection = (name) => setSection((s) => (s === name ? null : name));

  return (
    <div className={`m-nav ${open ? 'is-open' : ''}`}>
      {/* Fundo escurecido */}
      <div className="m-nav-backdrop" onClick={close} aria-hidden="true" />

      {/* Barra flutuante */}
      <div className={`m-nav-bar ${isHome ? 'm-nav-translucent' : ''}`}>
        <Link href="/" className="m-nav-logo" onClick={close} aria-label="Início">
          <img src="/assets/logo.svg" alt="Nadilson Gomes Advocacia" />
        </Link>

        <button
          className="m-nav-toggle"
          onClick={() => (open ? close() : setOpen(true))}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          <Menu className="m-icon-menu" size={24} />
          <X className="m-icon-close" size={24} />
        </button>
      </div>

      {/* Pop-up */}
      <nav className="m-nav-popup" aria-hidden={!open}>
        <ul className="m-nav-list">
          <li>
            <Link href="/" className="m-nav-link" onClick={close}>
              Início <ChevronRight size={18} />
            </Link>
          </li>

          <li>
            <button
              className={`m-nav-link ${section === 'escritorio' ? 'is-active' : ''}`}
              onClick={() => toggleSection('escritorio')}
              aria-expanded={section === 'escritorio'}
            >
              O Escritório <ChevronDown size={18} className="m-chevron" />
            </button>
            <div className={`m-collapse ${section === 'escritorio' ? 'show' : ''}`}>
              <div className="m-collapse-inner">
                {ESCRITORIO.map(({ href, label, icon: Icon }) => (
                  <Link key={label} href={href} className="m-sub-link" onClick={close}>
                    <Icon size={16} /> {label}
                  </Link>
                ))}
              </div>
            </div>
          </li>

          <li>
            <button
              className={`m-nav-link ${section === 'areas' ? 'is-active' : ''}`}
              onClick={() => toggleSection('areas')}
              aria-expanded={section === 'areas'}
            >
              Áreas de Atuação <ChevronDown size={18} className="m-chevron" />
            </button>
            <div className={`m-collapse ${section === 'areas' ? 'show' : ''}`}>
              <div className="m-collapse-inner">
                {AREAS.map(({ label, icon: Icon }) => (
                  <Link key={label} href="/areas" className="m-sub-link" onClick={close}>
                    <Icon size={16} /> {label}
                  </Link>
                ))}
                <Link href="/areas" className="m-sub-link m-sub-all" onClick={close}>
                  Ver todas as áreas &rarr;
                </Link>
              </div>
            </div>
          </li>

          <li>
            <Link href="/contato" className="m-nav-link" onClick={close}>
              Contato <ChevronRight size={18} />
            </Link>
          </li>
        </ul>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="m-nav-cta" onClick={close}>
          <MessageCircle size={18} /> Fale conosco
        </a>
      </nav>
    </div>
  );
}
