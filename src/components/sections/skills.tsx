'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, Code, Server, Settings, Palette } from 'lucide-react'
import { SkillIcon } from '@/components/ui/skill-icon'
import { skills } from '@/data/portfolio'
import { useScrollAnimation } from '@/hooks/useInView'

const categories = [
  { value: 'all', label: 'Todas', icon: Zap },
  { value: 'frontend', label: 'Frontend', icon: Code },
  { value: 'backend', label: 'Backend', icon: Server },
  { value: 'tools', label: 'Herramientas', icon: Settings },
  { value: 'design', label: 'Diseño', icon: Palette },
]

export function Skills() {
  const { ref: sectionRef, inView: sectionInView } = useScrollAnimation(0.1)
  const [activeCategory, setActiveCategory] = useState('all')
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory)

  const getCategoryStats = () => {
    const categorySkills = activeCategory === 'all' ? skills : filteredSkills
    const avgLevel = Math.round(categorySkills.reduce((acc, skill) => acc + skill.level, 0) / categorySkills.length)
    return {
      count: categorySkills.length,
      avgLevel,
      topSkill: categorySkills.reduce((max, skill) => skill.level > max.level ? skill : max, categorySkills[0])
    }
  }

  const stats = getCategoryStats()

  return (
    <section id="skills" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mis <span className="text-primary">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Tecnologías y herramientas que domino para crear experiencias digitales excepcionales. 
            Siempre en constante aprendizaje y evolución.
          </p>

          {/* Stats Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={sectionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-2xl mx-auto"
          >
            <div className="bg-background rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-primary">{stats.count}</div>
              <div className="text-sm text-muted-foreground">
                {activeCategory === 'all' ? 'Tecnologías' : 'En categoría'}
              </div>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-primary">{stats.avgLevel}%</div>
              <div className="text-sm text-muted-foreground">Nivel promedio</div>
            </div>
            <div className="bg-background rounded-xl p-4 border border-border/50">
              <div className="text-2xl font-bold text-primary">{stats.topSkill?.level}%</div>
              <div className="text-sm text-muted-foreground">Nivel más alto</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.value
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-background text-muted-foreground hover:text-primary border border-border/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Icon className="w-4 h-4" />
                <span>{category.label}</span>
              </motion.button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div layout className="relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              layout
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={`${skill.id}-${activeCategory}`}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <SkillIcon
                    name={skill.name}
                    icon={skill.icon}
                    level={skill.level}
                    category={skill.category}
                    index={index}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Skill Level Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <div className="bg-background rounded-xl p-6 border border-border/50 max-w-4xl mx-auto">
            <h3 className="text-lg font-semibold mb-4 text-center">Nivel de Experiencia</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { range: '90-100%', label: 'Experto', color: 'from-green-500 to-emerald-500' },
                { range: '75-89%', label: 'Avanzado', color: 'from-blue-500 to-cyan-500' },
                { range: '60-74%', label: 'Intermedio', color: 'from-yellow-500 to-orange-500' },
                { range: '40-59%', label: 'Básico', color: 'from-red-500 to-pink-500' },
              ].map((level, index) => (
                <motion.div
                  key={level.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={sectionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${level.color}`} />
                  <div>
                    <div className="text-sm font-medium">{level.label}</div>
                    <div className="text-xs text-muted-foreground">{level.range}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}