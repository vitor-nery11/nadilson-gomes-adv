"use client";
import React from 'react';
import { motion } from 'motion/react';
import TeamShowcase from './ui/team-showcase';

export default function TeamSectionHome() {
  return (
    <section id="equipe" style={{ backgroundColor: "#ffffff", padding: "8rem 0" }}>
      <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 2rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: '4rem' }}
        >
          <span className="badge-tag mb-6">Nossa Equipe</span>
          <h2 className="areas-main-title" style={{ color: "#15181d", maxWidth: "800px", marginBottom: "1.5rem" }}>
            Especialistas dedicados a entregar os melhores resultados
          </h2>
          <p style={{ color: "var(--text-sec)", fontSize: "1.15rem", maxWidth: "600px", margin: 0 }}>
            Conheça os profissionais que combinam experiência, técnica e visão estratégica para defender os seus interesses.
          </p>
        </motion.div>

        <TeamShowcase />
      </div>
    </section>
  );
}
