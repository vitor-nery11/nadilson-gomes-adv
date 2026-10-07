// Force scroll to top on reload (Aggressive)
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

if (window.location.hash) {
  window.history.replaceState('', document.title, window.location.pathname + window.location.search);
}

window.addEventListener('DOMContentLoaded', () => {
  window.scrollTo(0, 0);
});

window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 10);
});


// Preloader Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        if (preloader) {
            preloader.classList.add('fade-out');
            document.body.classList.remove('no-scroll');
            if (typeof initHeroAnimations === 'function') initHeroAnimations();
            if (typeof ScrollTrigger !== 'undefined') setTimeout(() => ScrollTrigger.refresh(), 100);
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    }, 2000); // 2 seconds
});

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const nav = document.getElementById('nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            const icon = nav.classList.contains('active') ? 'x' : 'menu';
            mobileMenuBtn.innerHTML = `<i data-feather="${icon}"></i>`;
            feather.replace();
        });

        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('active')) {
                    nav.classList.remove('active');
                    mobileMenuBtn.innerHTML = `<i data-feather="menu"></i>`;
                    feather.replace();
                }
            });
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // Carousel Drag to Scroll
    const carousel = document.querySelector('.areas-carousel');
    if (carousel) {
        let isDown = false;
        let startX;
        let scrollLeft;

        carousel.style.cursor = 'grab';

        carousel.addEventListener('mousedown', (e) => {
            isDown = true;
            carousel.style.cursor = 'grabbing';
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
            carousel.style.scrollSnapType = 'none';
        });

        carousel.addEventListener('mouseleave', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
            carousel.style.scrollSnapType = 'x mandatory';
        });

        carousel.addEventListener('mouseup', () => {
            isDown = false;
            carousel.style.cursor = 'grab';
            carousel.style.scrollSnapType = 'x mandatory';
        });

        carousel.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 2;
            carousel.scrollLeft = scrollLeft - walk;
        });

        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');

        if (prevBtn && nextBtn) {
            prevBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: -344, behavior: 'smooth' });
            });

            nextBtn.addEventListener('click', () => {
                carousel.scrollBy({ left: 344, behavior: 'smooth' });
            });
        }
    }

    // Interactive Map & Floating Card (Modelo Harrison Leite)
    const officesData = {
        'Teixeira de Freitas': {
            name: 'Teixeira de Freitas',
            isSede: true,
            phone: '(73) 99824-9898',
            phoneLink: 'tel:73998249898',
            address: 'Av. Presidente Getúlio Vargas, nº 3345, Sala 201, Centro, Teixeira de Freitas – Bahia, CEP. 45985-200',
            desc: 'Sede do escritório, com estrutura executiva de atendimento no Extremo Sul da Bahia.',
            mapLink: 'https://maps.google.com/?q=Av.+Presidente+Getúlio+Vargas+3345+Teixeira+de+Freitas+Bahia'
        },
        'Camacã': {
            name: 'Camacã',
            isSede: false,
            phone: '(73) 3283-2282',
            phoneLink: 'tel:7332832282',
            address: 'Av. dos Pioneiros, nº 312, Sala 104, Ed. Empresarial Anísio Loureiro, Centro, Camacã – Bahia, CEP. 45880-000',
            desc: 'Unidade de atendimento especializada, com suporte jurídico regional no Sul da Bahia.',
            mapLink: 'https://maps.google.com/?q=Av.+dos+Pioneiros+312+Camacã+Bahia'
        },
        'Eunápolis': {
            name: 'Eunápolis',
            isSede: false,
            phone: '(73) 99811-6333',
            phoneLink: 'tel:73998116333',
            address: 'Rua Paulino Mendes Lima, nº 541, 1º Andar, Centro, Eunápolis – Bahia, CEP. 45820-440',
            desc: 'Atendimento especializado para demandas cíveis, empresariais e previdenciárias.',
            mapLink: 'https://maps.google.com/?q=Rua+Paulino+Mendes+Lima+541+Eunápolis+Bahia'
        },
        'Guaratinga': {
            name: 'Guaratinga',
            isSede: false,
            phone: '(73) 99811-6333',
            phoneLink: 'tel:73998116333',
            address: 'Rua Marcionílio Chaves, nº 479, 1º andar, Novo Horizonte, Guaratinga – Bahia, CEP. 45840-000',
            desc: 'Unidade dedicada ao suporte jurídico ágil, preventivo e contencioso.',
            mapLink: 'https://maps.google.com/?q=Rua+Marcionílio+Chaves+479+Guaratinga+Bahia'
        },
        'Ilhéus': {
            name: 'Ilhéus',
            isSede: false,
            phone: '(73) 98122-1843',
            phoneLink: 'tel:73981221843',
            address: 'Av. Osvaldo Cruz, nº 74, Sala 914, Ed. Premier, Centro, Ilhéus – Bahia, CEP. 45652-130',
            desc: 'Escritório no litoral sul baiano, com atuação perante a Justiça Estadual e Federal.',
            mapLink: 'https://maps.google.com/?q=Av.+Osvaldo+Cruz+74+Ilhéus+Bahia'
        },
        'Itabuna': {
            name: 'Itabuna',
            isSede: false,
            phone: '(73) 98122-1843',
            phoneLink: 'tel:73981221843',
            address: 'Rua Francisco Silva Rocha, nº 79, Centro, Itabuna – Bahia, CEP. 45600-30',
            desc: 'Escritório central no polo cacaueiro, com ampla presença no Sul do estado.',
            mapLink: 'https://maps.google.com/?q=Rua+Francisco+Silva+Rocha+79+Itabuna+Bahia'
        },
        'Itamaraju': {
            name: 'Itamaraju',
            isSede: false,
            phone: '(73) 99820-9494',
            phoneLink: 'tel:73998209494',
            address: 'Praça Castelo Branco, nº 528, 2º Andar, Centro, Itamaraju – Bahia, CEP. 45836-000',
            desc: 'Atendimento jurídico de proximidade para pessoas físicas e empresas da região.',
            mapLink: 'https://maps.google.com/?q=Praça+Castelo+Branco+528+Itamaraju+Bahia'
        },
        'Prado': {
            name: 'Prado',
            isSede: false,
            phone: '(73) 99820-9494',
            phoneLink: 'tel:73998209494',
            address: 'Rua Jacy Medeiros, nº 50, Centro, Prado – Bahia, CEP. 45980-000',
            desc: 'Presença jurídica na Costa das Baleias, atendendo cidadãos e o setor produtivo.',
            mapLink: 'https://maps.google.com/?q=Rua+Jacy+Medeiros+50+Prado+Bahia'
        },
        'Salvador': {
            name: 'Salvador',
            isSede: false,
            phone: '(71) 98810-3188',
            phoneLink: 'tel:71988103188',
            address: 'Av. Tancredo Neves, nº 2.539, Sala 1809, Ed. CEO, Salvador – Bahia, CEP. 41.820-774',
            desc: 'Unidade na capital, com atuação contenciosa estratégica e nos Tribunais Superiores.',
            mapLink: 'https://maps.google.com/?q=Av.+Tancredo+Neves+2539+Salvador+Bahia'
        },
        'Rio de Janeiro': {
            name: 'Rio de Janeiro',
            isSede: false,
            phone: '(21) 3148-9180',
            phoneLink: 'tel:2131489180',
            address: 'Av. das Américas, nº 12.900, Bloco 02, Loja 123, Barra da Tijuca, Rio de Janeiro – RJ, CEP. 22790-702',
            desc: 'Polo de representação no Sudeste para contratos, causas cíveis e Direito Empresarial.',
            mapLink: 'https://maps.google.com/?q=Av.+das+Américas+12900+Barra+da+Tijuca+Rio+de+Janeiro'
        }
    };

    const mapContainer = document.getElementById('mapContainer');
    const mapTooltip = document.getElementById('mapTooltip');
    const tooltipCity = document.getElementById('tooltipCity');
    const tooltipPhone = document.getElementById('tooltipPhone');
    const tooltipAddress = document.getElementById('tooltipAddress');
    const tooltipDesc = document.getElementById('tooltipDesc');
    const tooltipCallBtn = document.getElementById('tooltipCallBtn');
    const tooltipMapBtn = document.getElementById('tooltipMapBtn');

    if (mapContainer && mapTooltip) {
        const svg = mapContainer.querySelector('svg');
        const points = mapContainer.querySelectorAll('.map-point');
        const locationCards = document.querySelectorAll('.location-card');

        // Create target pulse ring inside SVG, inserted as FIRST child so it sits behind the dots
        let targetRing = null;
        if (svg) {
            targetRing = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            targetRing.setAttribute('class', 'map-target-ring');
            targetRing.style.pointerEvents = 'none';
            svg.insertBefore(targetRing, svg.firstChild);

            // Default target on Teixeira de Freitas (Sede)
            const sedeCircle = mapContainer.querySelector('.map-point[data-city="Teixeira de Freitas"] .sede-dot');
            if (sedeCircle) {
                targetRing.setAttribute('cx', sedeCircle.getAttribute('cx'));
                targetRing.setAttribute('cy', sedeCircle.getAttribute('cy'));
            }
        }

        function activateOffice(cityName, pointElement) {
            const data = officesData[cityName];
            if (!data) return;

            // Fill tooltip data
            const badgeHtml = data.isSede ? ' <span class="loc-badge">sede</span>' : '';
            tooltipCity.innerHTML = `${data.name}${badgeHtml}`;
            tooltipPhone.textContent = data.phone;
            tooltipAddress.textContent = data.address;
            tooltipDesc.textContent = data.desc;
            tooltipCallBtn.href = data.phoneLink;
            tooltipMapBtn.href = data.mapLink;

            // Refresh icons inside tooltip
            feather.replace();

            // Highlight point class
            points.forEach(p => p.classList.remove('active'));
            if (pointElement) pointElement.classList.add('active');

            // Move target pulse ring
            if (targetRing && pointElement) {
                const circle = pointElement.querySelector('.city-dot, .sede-dot');
                if (circle) {
                    targetRing.setAttribute('cx', circle.getAttribute('cx'));
                    targetRing.setAttribute('cy', circle.getAttribute('cy'));
                    targetRing.style.display = 'block';
                }
            }

            // Calculate position of the point inside mapContainer
            if (pointElement) {
                const circle = pointElement.querySelector('.city-dot, .sede-dot');
                const pointRect = circle ? circle.getBoundingClientRect() : pointElement.getBoundingClientRect();
                const containerRect = (mapContainer.querySelector('.map-sticky-wrapper') || mapContainer).getBoundingClientRect();

                const computedStyle = window.getComputedStyle(mapContainer);
                const pl = parseFloat(computedStyle.paddingLeft) || 0;
                const pt = parseFloat(computedStyle.paddingTop) || 0;
                const x = pointRect.left + pointRect.width / 2 - containerRect.left - pl;
                const y = pointRect.top - containerRect.top - pt;

                // Position tooltip above point
                const tooltipWidth = 320;
                const clampedX = Math.max(tooltipWidth / 2 + 15, Math.min(x, containerRect.width - tooltipWidth / 2 - 15));
                const clampedY = y - 6;

                mapTooltip.style.left = `${clampedX}px`;
                mapTooltip.style.top = `${clampedY}px`;
            }

            mapTooltip.classList.add('active');

            // Synchronize with left list: highlight card
            locationCards.forEach(card => {
                const title = card.querySelector('.loc-title');
                if (title && title.textContent.includes(data.name)) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });
        }

        // Keep tooltip open when hovering on the tooltip itself
        let hideTimeout;
        mapTooltip.addEventListener('mouseenter', () => {
            clearTimeout(hideTimeout);
            mapTooltip.classList.add('active');
        });

        mapTooltip.addEventListener('mouseleave', () => {
            mapTooltip.classList.remove('active');
            if (targetRing) targetRing.style.display = 'none';
            points.forEach(p => p.classList.remove('active'));
        });

        // Hover on map points
        points.forEach(point => {
            point.addEventListener('mouseenter', () => {
                clearTimeout(hideTimeout);
                const cityName = point.getAttribute('data-city');
                activateOffice(cityName, point);
            });

            point.addEventListener('mouseleave', () => {
                hideTimeout = setTimeout(() => {
                    mapTooltip.classList.remove('active');
                    if (targetRing) targetRing.style.display = 'none';
                    points.forEach(p => p.classList.remove('active'));
                }, 200);
            });

            point.addEventListener('click', () => {
                const cityName = point.getAttribute('data-city');
                locationCards.forEach(card => {
                    const title = card.querySelector('.loc-title');
                    if (title && title.textContent.includes(cityName)) {
                        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                });
            });
        });

        // Hover on left list cards syncs with map
        locationCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                const title = card.querySelector('.loc-title');
                if (!title) return;
                
                for (const city of Object.keys(officesData)) {
                    if (title.textContent.includes(city)) {
                        const matchingPoint = mapContainer.querySelector(`.map-point[data-city="${city}"]`);
                        if (matchingPoint) {
                            activateOffice(city, matchingPoint);
                        }
                        break;
                    }
                }
            });

            card.addEventListener('mouseleave', () => {
                mapTooltip.classList.remove('active');
                if (targetRing) targetRing.style.display = 'none';
                points.forEach(p => p.classList.remove('active'));
            });
        });
    }
});

// --- GSAP ANIMATIONS ---
document.addEventListener('DOMContentLoaded', () => {
    if (typeof gsap !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
        initScrollAnimations();
    }
});

function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out" });
    gsap.from(".hero-title", { y: 30, opacity: 0, duration: 1, ease: "power3.out", delay: 0.2 });
    gsap.from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.4 });
    // hero btn animation removed
}

function initScrollAnimations() {

  // Differentials Timeline & Glow
  const diffItems = document.querySelectorAll('.diff-item');
  const isMobile = window.innerWidth <= 992;
  
  if (diffItems.length > 0) {
    gsap.to('.diff-line-progress', {
      scrollTrigger: {
        trigger: '.diff-timeline-container',
        start: 'top 60%',
        end: 'bottom 70%',
        scrub: 1, // smooth scrub
        onUpdate: (self) => {
          const progress = self.progress;
          // Calculate which card should glow based on progress
          // There are 4 cards. 0-0.25 (card 1), 0.25-0.50 (card 2), etc.
          const activeIndex = Math.min(Math.floor(progress * diffItems.length), diffItems.length - 1);
          
          diffItems.forEach((item, index) => {
            if (index <= activeIndex && progress > 0) {
              item.classList.add('active-glow');
            } else {
              item.classList.remove('active-glow');
            }
          });
        }
      },
      width: isMobile ? '100%' : '100%',
      height: isMobile ? '100%' : '100%',
      ease: 'none'
    });
  }

    // General text reveals
    gsap.utils.toArray('.badge-tag').forEach(badge => {
        gsap.from(badge, {
            scrollTrigger: { trigger: badge, start: "top 85%", once: true },
            y: 20, opacity: 0, duration: 0.8, ease: "power3.out"
        });
    });

    gsap.utils.toArray('.section-title, .areas-main-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: { trigger: title, start: "top 85%", once: true },
            y: 30, opacity: 0, duration: 1, ease: "power3.out"
        });
    });

    gsap.utils.toArray('.section-text, .areas-main-text').forEach(text => {
        gsap.from(text, {
            scrollTrigger: { trigger: text, start: "top 85%", once: true },
            y: 20, opacity: 0, duration: 0.8, ease: "power3.out"
        });
    });



    // Differentials list items
    gsap.from('.diff-item', {
        scrollTrigger: { trigger: '.differentials-grid', start: "top 80%", once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out"
    });

    // Team marquee
    gsap.from('.marquee-container', {
        scrollTrigger: { trigger: '.team-section', start: "top 80%", once: true },
        y: 40, opacity: 0, duration: 1, ease: "power3.out"
    });

    // Location map and list
    gsap.from('.locations-list .location-card', {
        scrollTrigger: { trigger: '.locations-grid', start: "top 80%", once: true },
        x: -30, opacity: 0, duration: 0.8, stagger: 0.1, ease: "power3.out"
    });

    // Map points pop-in
    gsap.from('.map-point', {
        scrollTrigger: { trigger: '.locations-map-container', start: "top 80%", once: true },
        scale: 0, opacity: 0, transformOrigin: "center center", duration: 0.5, stagger: 0.05, ease: "back.out(1.7)"
    });

    // CTA Card
    gsap.from('.cta-card', {
        scrollTrigger: { trigger: '.cta-card', start: "top 85%", once: true },
        y: 50, opacity: 0, duration: 1, ease: "power3.out"
    });
}
