"use client";
import React from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";

function TestimonialCard({ text, image, name, role }) {
  return (
    <article className="tm-card">
      {/* Aspas decorativas ao fundo */}
      <Quote className="tm-quote-bg" size={48} strokeWidth={1.25} fill="currentColor" aria-hidden="true" />

      {/* Estrelas */}
      <div className="tm-stars" aria-label="Avaliação 5 de 5 estrelas">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} color="#c8a65a" fill="#c8a65a" />
        ))}
      </div>

      {/* Depoimento */}
      <p className="tm-text">“{text}”</p>

      {/* Autor */}
      <footer className="tm-footer">
        <img src={image} alt={name} width={48} height={48} className="tm-avatar" loading="lazy" />
        <div>
          <span className="tm-name">
            {name}
            <BadgeCheck size={16} color="#c8a65a" aria-label="Cliente verificado" />
          </span>
          <span className="tm-role">{role}</span>
        </div>
      </footer>
    </article>
  );
}

/**
 * Marquee horizontal infinito em CSS puro (GPU).
 * - direction: "left" | "right"
 * - duration: segundos para uma volta completa
 * Pausa automaticamente ao passar o mouse.
 */
export function TestimonialsMarquee({ testimonials, direction = "left", duration = 50 }) {
  // Duplicamos a lista para o loop fechar perfeitamente em -50%
  const duplicated = [...testimonials, ...testimonials];

  return (
    <div className="tm-marquee">
      <div
        className={`tm-track ${direction === "right" ? "tm-right" : ""}`}
        style={{ "--tm-duration": `${duration}s` }}
      >
        {duplicated.map((t, i) => (
          <div className="tm-item" key={i} aria-hidden={i >= testimonials.length ? "true" : undefined}>
            <TestimonialCard {...t} />
          </div>
        ))}
      </div>
    </div>
  );
}
