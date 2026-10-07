"use client";
import React from "react";
import { motion } from "motion/react";
import { TestimonialsMarquee } from "./ui/testimonials-marquee";

const testimonials = [
  {
    text: "O Dr. Nadilson e sua equipe resolveram minha aposentadoria em tempo recorde. Fui tratado com muito respeito e profissionalismo do início ao fim.",
    image: "https://i.pravatar.cc/150?img=11",
    name: "João Pereira",
    role: "Aposentado",
  },
  {
    text: "A expertise da equipe no direito empresarial foi fundamental para a reestruturação da minha clínica. Soluções jurídicas impecáveis.",
    image: "https://i.pravatar.cc/150?img=5",
    name: "Dra. Larissa Freitas",
    role: "Médica Empreendedora",
  },
  {
    text: "Atendimento humanizado e transparente! Estava há anos tentando resolver um problema de inventário e eles destravaram tudo com muita agilidade.",
    image: "https://i.pravatar.cc/150?img=12",
    name: "Carlos Alberto",
    role: "Cliente Cível",
  },
  {
    text: "Gostei muito da facilidade de ser atendida de forma 100% digital. Moro em outro estado e a equipe conduziu meu processo previdenciário perfeitamente.",
    image: "https://i.pravatar.cc/150?img=9",
    name: "Mariana Silveira",
    role: "Professora",
  },
  {
    text: "Um escritório que realmente defende o cliente. Reverteram uma dívida indevida que eu tinha com o banco em poucos meses de atuação.",
    image: "https://i.pravatar.cc/150?img=13",
    name: "Roberto Almeida",
    role: "Empresário",
  },
  {
    text: "Segurança e ética do início ao fim. O time de direito de família foi essencial num momento delicado da minha vida. Recomendo de olhos fechados.",
    image: "https://i.pravatar.cc/150?img=10",
    name: "Juliana Castro",
    role: "Cliente Cível",
  },
  {
    text: "Eles dominam completamente as regras do INSS! Me ajudaram a conseguir um benefício que eu já tinha dado como perdido. Gratidão enorme.",
    image: "https://i.pravatar.cc/150?img=14",
    name: "Sérgio Moraes",
    role: "Trabalhador Rural",
  },
  {
    text: "A assessoria jurídica permanente deles tem salvo minha empresa de diversos passivos trabalhistas. O custo-benefício é excelente.",
    image: "https://i.pravatar.cc/150?img=15",
    name: "André Farias",
    role: "CEO",
  },
  {
    text: "Agilidade impressionante e um canal de comunicação sempre aberto. Sempre soube em que pé estava o meu processo. Parabéns a toda a equipe.",
    image: "https://i.pravatar.cc/150?img=16",
    name: "Patrícia Souza",
    role: "Cliente Trabalhista",
  },
];

// Duas fileiras com conteúdos diferentes
const row1 = testimonials.slice(0, 5);
const row2 = testimonials.slice(5).concat(testimonials.slice(0, 1));

export default function TestimonialsSection() {
  return (
    <section
      id="depoimentos"
      className="relative"
      style={{ backgroundColor: "#f5f3ee", padding: "8rem 0", overflow: "hidden" }}
    >
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center w-full px-4"
          style={{ marginBottom: "4.5rem" }}
        >
          <span className="badge-tag mx-auto mb-6" style={{ justifyContent: "center" }}>
            Depoimentos
          </span>

          <h2
            className="areas-main-title mx-auto text-center"
            style={{ color: "#15181d", maxWidth: "800px", marginBottom: "1.5rem" }}
          >
            O que nossos clientes dizem sobre nós
          </h2>

          <p
            className="text-center mx-auto"
            style={{ color: "var(--text-sec)", fontSize: "1.15rem", maxWidth: "600px", margin: 0 }}
          >
            A satisfação e o sucesso dos nossos clientes são a maior prova da
            qualidade e dedicação do nosso trabalho.
          </p>
        </motion.div>
      </div>

      {/* Fileiras horizontais com fade nas laterais */}
      <div
        style={{
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <TestimonialsMarquee testimonials={row1} direction="left" duration={55} />
        <TestimonialsMarquee testimonials={row2} direction="right" duration={60} />
      </div>
    </section>
  );
}
