'use client'

import { motion } from 'framer-motion'
import { 
  Code, 
  FileText, 
  Database, 
  Palette, 
  Globe,
  Server,
  GitBranch,
  Box,
  Cloud,
  Figma,
  Layers
} from 'lucide-react'

const iconMap = {
  react: Code,
  nextjs: FileText,
  typescript: FileText,
  tailwind: Palette,
  vue: Code,
  nodejs: Server,
  python: Code,
  postgresql: Database,
  mongodb: Database,
  graphql: Database,
  git: GitBranch,
  docker: Box,
  aws: Cloud,
  vercel: Globe,
  figma: Figma,
  adobe: Layers,
}

interface SkillIconProps {
  name: string
  icon: string
  level: number
  category: string
  index: number
}

export function SkillIcon({ name, icon, level, category, index }: SkillIconProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Code
  
  const categoryColors = {
    frontend: 'from-blue-500 to-cyan-500',
    backend: 'from-green-500 to-emerald-500',
    tools: 'from-purple-500 to-violet-500',
    design: 'from-pink-500 to-rose-500',
  }

  const bgColor = categoryColors[category as keyof typeof categoryColors]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -90 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.05,
        rotateY: 10,
        z: 50
      }}
      className="group relative perspective-1000"
    >
      <div className="relative bg-background border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform-gpu hover:-translate-y-2">
        {/* Glow effect on hover */}
        <motion.div
          className={`absolute inset-0 rounded-xl bg-gradient-to-br ${bgColor} opacity-0 blur-xl`}
          whileHover={{ opacity: 0.2 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon container */}
        <div className="relative">
          <motion.div
            className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${bgColor} p-3 shadow-lg`}
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <Icon className="w-full h-full text-white" />
          </motion.div>

          {/* Skill name */}
          <h3 className="text-lg font-semibold text-center mb-3 group-hover:text-primary transition-colors duration-300">
            {name}
          </h3>

          {/* Progress bar */}
          <div className="relative h-2 bg-secondary rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${bgColor} rounded-full`}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: index * 0.1 + 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Level percentage */}
          <motion.div
            className="text-center mt-2 text-sm font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 1 }}
            viewport={{ once: true }}
          >
            <span className={`bg-gradient-to-r ${bgColor} bg-clip-text text-transparent`}>
              {level}%
            </span>
          </motion.div>

          {/* Floating particles on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className={`absolute w-1 h-1 bg-gradient-to-r ${bgColor} rounded-full`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                }}
                animate={{
                  y: [-5, -15, -5],
                  x: [0, 5, -5, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Tooltip */}
        <motion.div
          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium opacity-0 pointer-events-none"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {name} - {level}%
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-primary" />
        </motion.div>
      </div>
    </motion.div>
  )
}