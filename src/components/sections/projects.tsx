"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye, Filter, Zap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { useScrollAnimation } from "@/hooks/useInView";
import Image from "next/image";

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const { ref, inView } = useScrollAnimation(0.2);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Card
        className="h-full overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
            {/* Imagen del proyecto */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100"
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex space-x-4">
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary rounded-full text-primary-foreground hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                )}
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-secondary rounded-full text-secondary-foreground hover:bg-secondary/90 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5" />
                  </motion.a>
                )}
              </div>
            </motion.div>

            {project.featured && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  Destacado
                </span>
              </div>
            )}

            {/* Badge de categoría */}
            <div className="absolute top-4 left-4">
              <span
                className={`px-3 py-1 text-xs font-medium rounded-full ${
                  project.category === "web"
                    ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                    : "bg-green-500/20 text-green-400 border border-green-500/30"
                }`}
              >
                {project.category === "web" ? "Web" : "Automatización"}
              </span>
            </div>
          </div>
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Resultados para automatizaciones */}
          {project.results && project.results.length > 0 && (
            <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <h4 className="text-sm font-medium text-green-400 mb-2 flex items-center">
                <Zap className="w-4 h-4 mr-1" />
                Resultados Obtenidos:
              </h4>
              <ul className="text-xs text-green-300 space-y-1">
                {project.results.map((result, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="w-1 h-1 bg-green-400 rounded-full mr-2"></span>
                    {result}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>

        <CardFooter className="p-6 pt-0">
          <div className="flex space-x-2 w-full">
            {project.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(project.liveUrl, "_blank")}
              >
                <Eye className="w-4 h-4 mr-2" />
                Ver Proyecto
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => window.open(project.githubUrl, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                Código
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function Projects() {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState<
    "all" | "web" | "automation"
  >("all");

  const webProjects = projects.filter((project) => project.category === "web");
  const automationProjects = projects.filter(
    (project) => project.category === "automation"
  );

  const categories = [
    { value: "all", label: "Todos", icon: Filter },
    { value: "web", label: "Proyectos Web", icon: Globe },
    { value: "automation", label: "Automatizaciones", icon: Zap },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Proyectos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Explora una selección de mis trabajos más recientes y destacados.
            Cada proyecto representa un desafío único y una solución innovadora.
          </p>

          {/* Filtros de categoría */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={
                  activeCategory === category.value ? "default" : "outline"
                }
                size="sm"
                onClick={() =>
                  setActiveCategory(
                    category.value as "all" | "web" | "automation"
                  )
                }
                className="flex items-center space-x-2"
              >
                <category.icon className="w-4 h-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Proyectos Web */}
        {(activeCategory === "all" || activeCategory === "web") && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Globe className="w-6 h-6 text-blue-500 mr-3" />
              <h3 className="text-2xl font-bold text-blue-500">
                Proyectos Web
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/30 to-transparent ml-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {webProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Automatizaciones */}
        {(activeCategory === "all" || activeCategory === "automation") && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={sectionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <Zap className="w-6 h-6 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-green-500">
                Automatizaciones n8n / Make
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-green-500/30 to-transparent ml-4"></div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {automationProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}

        {/* Mensaje cuando no hay proyectos */}
        {((activeCategory === "web" && webProjects.length === 0) ||
          (activeCategory === "automation" &&
            automationProjects.length === 0)) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No se encontraron proyectos en esta categoría.
            </p>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open("https://github.com/404arias", "_blank")}
            className="group"
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-200" />
            Ver más en GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
