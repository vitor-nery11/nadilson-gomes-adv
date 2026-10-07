"use client";
import React from "react";
import { motion } from "motion/react";
import { Quote } from "lucide-react";

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={`w-full ${className || ''}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-8 lg:gap-10 pb-8 lg:pb-10 w-full"
      >
        {[...new Array(2)].fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <div 
                className="rounded-[28px] w-full transition-transform duration-300 hover:scale-[1.02] flex flex-col relative overflow-hidden" 
                key={i}
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid rgba(200, 166, 90, 0.15)',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.06)'
                }}
              >
                {/* Cabeçalho com fundo levemente tintado */}
                <div 
                  className="flex items-center gap-4 px-8 py-6"
                  style={{ backgroundColor: 'rgba(200, 166, 90, 0.04)', borderBottom: '1px solid rgba(200, 166, 90, 0.1)' }}
                >
                  <img
                    width={52}
                    height={52}
                    src={image}
                    alt={name}
                    className="h-[52px] w-[52px] rounded-full object-cover flex-shrink-0"
                    style={{ border: '2px solid rgba(200, 166, 90, 0.4)' }}
                  />
                  <div className="flex flex-col">
                    <div className="font-bold tracking-tight text-[16px] text-[#15181d]">{name}</div>
                    <div className="text-[11px] text-[#c8a65a] font-bold uppercase tracking-widest mt-1">{role}</div>
                  </div>
                  {/* Aspas elegantes no canto */}
                  <div style={{ marginLeft: 'auto', opacity: 0.15 }}>
                    <Quote size={28} color="var(--brand)" fill="var(--brand)" />
                  </div>
                </div>

                {/* Corpo do card com muito espaço */}
                <div className="px-8 py-7">
                  <p style={{ color: '#374151', fontSize: '1rem', lineHeight: '1.85', fontWeight: '400', margin: 0 }}>
                    &quot;{text}&quot;
                  </p>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
