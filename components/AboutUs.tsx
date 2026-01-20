"use client";

import { motion } from "framer-motion";
import { Users, Code, Gamepad2, Sparkles, ExternalLink } from "lucide-react";
import { TeamMember } from "@/types";
import Image from "next/image";

const features = [
  {
    icon: Gamepad2,
    title: "Desenvolvimento de Jogos",
    description: "Criamos experiências imersivas e envolventes",
  },
  {
    icon: Code,
    title: "Tecnologia de Ponta",
    description: "Utilizamos as melhores ferramentas e frameworks",
  },
  {
    icon: Sparkles,
    title: "Inovação",
    description: "Sempre buscando novas formas de contar histórias",
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Colaboração e paixão em cada projeto",
  },
];

interface AboutUsProps {
  teamMembers?: TeamMember[];
}

export default function AboutUs({ teamMembers = [] }: AboutUsProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-3 md:mb-4 font-[var(--font-orbitron)] px-4">
            Sobre Nós
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4 font-[var(--font-inter)]">
            O Team Staircase é um time apaixonado por desenvolvimento de jogos,
            dedicado a criar experiências únicas e memoráveis no universo digital.
            Nossa missão é transformar ideias em realidade através do projeto Mandora.
          </p>
        </motion.div>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 sm:p-7 md:p-8 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/10 hover:border-purple-500/50 hover:bg-slate-800/60 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 mb-4 sm:mb-5">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-3 font-[var(--font-orbitron)]">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base font-[var(--font-inter)]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Team Members */}
        {teamMembers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-12 sm:mt-16"
          >
            <h3 className="text-2xl sm:text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 sm:mb-8 text-center font-[var(--font-orbitron)] px-4">
              Nossa Equipe
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 rounded-full overflow-hidden border-2 border-slate-800 group-hover:border-cyan-500 transition-all duration-300">
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-purple-600 to-cyan-600 flex items-center justify-center">
                        <span className="text-lg sm:text-xl md:text-2xl text-white">
                          {member.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                  <h4 className="text-sm sm:text-base md:text-lg font-bold tracking-wider text-white mb-1 font-[var(--font-orbitron)]">
                    {member.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 mb-2 sm:mb-3 font-[var(--font-inter)]">{member.role}</p>
                  {member.socialLink && (
                    <a
                      href={member.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-xs transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" />
                      Perfil
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
