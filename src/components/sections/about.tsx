"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Coffee, Award } from "lucide-react";
import { Experience, Education } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { personalInfo, experience, education } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/useInView";
import Image from "next/image";

const TimelineItem = ({
  item,
  index,
  type,
}: {
  item: Experience | Education;
  index: number;
  type: "experience" | "education";
}) => {
  const { ref, inView } = useScrollAnimation(0.2);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-8 ${
        isEven ? "flex-row" : "flex-row-reverse"
      }`}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <div className={`w-full md:w-5/12 ${isEven ? "pr-8" : "pl-8"}`}>
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg">
              {type === "experience" ? (item as Experience).title : (item as Education).degree}
            </CardTitle>
            <p className="text-primary font-medium">
              {type === "experience" ? (item as Experience).company : (item as Education).school}
            </p>
            <p className="text-sm text-muted-foreground flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {item.period}
            </p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">{item.description}</p>
            {(item as Experience).technologies && (
              <div className="flex flex-wrap gap-2">
                {(item as Experience).technologies!.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="relative flex items-center justify-center w-2 md:w-2/12">
        <div className="absolute h-full w-0.5 bg-border"></div>
        <motion.div
          className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
        />
      </div>

      <div className="w-full md:w-5/12"></div>
    </motion.div>
  );
};

export function About() {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation(0.1);
  const { ref: statsRef, inView: statsInView } = useScrollAnimation(0.3);

  const stats = [
    { label: "Años de experiencia", value: "1+", icon: Award },
    { label: "Proyectos completados", value: "10", icon: Coffee },
    { label: "Tecnologías dominadas", value: "15+", icon: Award },
    { label: "Tazas de café", value: "∞", icon: Coffee },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sobre <span className="text-primary">mí</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Conoce más sobre mi experiencia, educación y la pasión que me
            impulsa a crear soluciones digitales innovadoras.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={sectionInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="h-full">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-primary/60 p-1">
                    <div className="w-full h-full rounded-full bg-background overflow-hidden">
                      <Image
                        src={personalInfo.avatar}
                        alt={personalInfo.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-2">
                    {personalInfo.name}
                  </h3>
                  <p className="text-primary text-center font-medium">
                    {personalInfo.title}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="w-5 h-5 mr-3 text-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Coffee className="w-5 h-5 mr-3 text-primary" />
                    <span>{personalInfo.availability}</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-center">
                    &quot;El código es poesía en movimiento, y cada proyecto es una
                    oportunidad de crear algo extraordinario.&quot;
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="lg:col-span-2">
            <motion.div
              ref={statsRef}
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-4 bg-background rounded-lg border border-border/50 hover:shadow-md transition-shadow duration-300"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="prose prose-lg dark:prose-invert max-w-none"
            >
              <p className="text-muted-foreground leading-relaxed">
                Mi primer contacto con el desarrollo web comenzó hace más de 3
                años, al iniciar la carrera de Ingeniería Informática en la
                universidad. Desde entonces descubrí mi interés por crear
                soluciones digitales. Sin embargo, ha sido en el último año
                donde he consolidado mi experiencia práctica trabajando con las
                tecnologías que hoy presento en mi portafolio, enfocándome en
                desarrollar proyectos funcionales y experiencias digitales que
                combinan rendimiento y usabilidad.v
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cuando no estoy programando, puedes encontrarme explorando
                nuevas tecnologías, contribuyendo a proyectos open source, o
                disfrutando de una buena taza de café mientras planeo mi próximo
                proyecto innovador.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Experiencia Profesional
            </motion.h3>
            <div className="relative">
              {experience.map((exp, index) => (
                <TimelineItem
                  key={exp.id}
                  item={exp}
                  index={index}
                  type="experience"
                />
              ))}
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={sectionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-2xl font-bold mb-8 text-center"
            >
              Educación & Certificaciones
            </motion.h3>
            <div className="relative">
              {education.map((edu, index) => (
                <TimelineItem
                  key={edu.id}
                  item={edu}
                  index={index}
                  type="education"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
