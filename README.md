# 🚀 Portfolio Web Moderno

Un portafolio web profesional construido con las últimas tecnologías web, diseñado para desarrolladores que buscan destacar con una presencia digital excepcional.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12-ff69b4)

## ✨ Características Principales

### 🎨 Diseño y UX
- **Hero Section Impactante**: Con animaciones de partículas interactivas usando tsParticles
- **Modo Oscuro/Claro**: Transición suave entre temas con persistencia local
- **Cursor Personalizado**: Efectos visuales únicos para una experiencia premium
- **Animaciones Fluidas**: Microinteracciones con Framer Motion en cada componente
- **Navbar Glassmorphism**: Navegación sticky con efecto de desenfoque

### 🏗️ Secciones Completas
- **Hero**: Presentación con efectos de typing animation y partículas
- **Sobre Mí**: Timeline interactivo de experiencia y educación
- **Proyectos**: Grid responsivo con efectos hover 3D y filtros
- **Skills**: Iconos animados con barras de progreso y tooltips
- **Contacto**: Formulario funcional con validación Zod y envío simulado

### 🚀 Tecnologías Avanzadas
- **Next.js 14**: App Router, Server Components, optimización automática
- **TypeScript**: Tipado fuerte en todo el proyecto
- **Tailwind CSS v4**: Diseño utility-first con componentes shadcn/ui
- **Framer Motion**: Animaciones performantes y gestos táctiles
- **React Hook Form + Zod**: Validación robusta de formularios
- **Intersection Observer**: Animaciones activadas por scroll

### 🔧 Características Técnicas
- **SEO Optimizado**: Metadata completa, sitemap, robots.txt
- **PWA Ready**: Manifest y configuración para aplicación web progresiva
- **Responsive Design**: Adaptable desde móviles hasta desktop
- **Performance**: Optimizado para Core Web Vitals
- **Accesibilidad**: Cumple estándares WCAG 2.1

## 🛠️ Stack Tecnológico

| Categoría | Tecnología | Versión | Propósito |
|-----------|------------|---------|-----------|
| **Framework** | Next.js | 14.x | React framework con SSR/SSG |
| **Lenguaje** | TypeScript | 5.x | Tipado estático |
| **Estilos** | Tailwind CSS | 4.x | Framework CSS utility-first |
| **UI Components** | shadcn/ui | Latest | Componentes accesibles |
| **Animaciones** | Framer Motion | 12.x | Animaciones y gestos |
| **Partículas** | tsParticles | 3.x | Efectos de partículas |
| **Formularios** | React Hook Form | 7.x | Manejo de formularios |
| **Validación** | Zod | 4.x | Schema validation |
| **Íconos** | Lucide React | Latest | Biblioteca de íconos |

## 🚀 Instalación y Configuración

### Prerequisitos
- Node.js 18+ 
- npm, yarn o pnpm

### 1. Clonación e Instalación
```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/portfolio-web.git
cd portfolio-web

# Instalar dependencias
npm install
# o
yarn install
# o
pnpm install
```

### 2. Configuración de Desarrollo
```bash
# Ejecutar servidor de desarrollo
npm run dev
# o
yarn dev
# o
pnpm dev
```

El servidor se iniciará en `http://localhost:3000`

### 3. Personalización

#### Datos Personales
Edita el archivo `src/data/portfolio.ts` con tu información:

```typescript
export const personalInfo = {
  name: 'Tu Nombre Completo',
  title: 'Tu Título Profesional',
  tagline: 'Tu eslogan personal',
  description: 'Descripción profesional...',
  avatar: '/images/tu-avatar.jpg',
  location: 'Tu ubicación',
  availability: 'Tu disponibilidad'
}
```

#### Proyectos
Actualiza el array `projects` en `src/data/portfolio.ts`:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Nombre del Proyecto',
    description: 'Descripción detallada...',
    image: '/images/proyecto1.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    githubUrl: 'https://github.com/tu-usuario/proyecto',
    liveUrl: 'https://proyecto.vercel.app',
    featured: true
  }
  // ... más proyectos
]
```

#### Habilidades
Configura tus skills en `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    icon: 'react',
    level: 95,
    category: 'frontend'
  }
  // ... más habilidades
]
```

### 4. Configuración de Email (Opcional)

Para habilitar el envío real de emails, integra con EmailJS:

1. Registrate en [EmailJS](https://www.emailjs.com/)
2. Instala el SDK: `npm install @emailjs/browser`
3. Actualiza el componente Contact con tus credenciales

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run start        # Servidor de producción
npm run lint         # Linter ESLint
npm run lint:fix     # Corregir errores de lint automáticamente
```

## 🚀 Despliegue

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# O conecta tu repositorio GitHub directamente en vercel.com
```

### Netlify
```bash
# Build del proyecto
npm run build

# Subir la carpeta 'out' a Netlify
```

### Docker
```dockerfile
# Usa la imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm ci --only=production

# Copia el código fuente
COPY . .

# Construye la aplicación
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Inicia la aplicación
CMD ["npm", "start"]
```

## 🎨 Personalización Avanzada

### Colores y Tema
Modifica los colores en `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      }
      // ... más colores personalizados
    }
  }
}
```

### Animaciones Personalizadas
Agrega nuevas animaciones en `src/app/globals.css`:

```css
@keyframes tuAnimacion {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.animate-tu-animacion {
  animation: tuAnimacion 2s ease-in-out infinite;
}
```

### Nuevas Secciones
Para agregar secciones:

1. Crea el componente en `src/components/sections/`
2. Agrega la importación en `src/app/page.tsx`
3. Actualiza la navegación en `src/components/layout/navbar.tsx`

## 🔧 Estructura del Proyecto

```
portfolio-web/
├── public/
│   ├── images/          # Imágenes estáticas
│   ├── robots.txt       # SEO
│   └── manifest.json    # PWA config
├── src/
│   ├── app/            # App Router (Next.js 14)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── manifest.ts
│   ├── components/     # Componentes React
│   │   ├── sections/   # Secciones principales
│   │   ├── layout/     # Layout components
│   │   └── ui/         # UI components reutilizables
│   ├── data/          # Datos estáticos
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilidades
│   └── types/         # Definiciones TypeScript
├── components.json    # shadcn/ui config
├── tailwind.config.ts # Tailwind config
└── tsconfig.json     # TypeScript config
```

## 📱 Responsive Breakpoints

| Dispositivo | Breakpoint | Clases Tailwind |
|-------------|------------|-----------------|
| Mobile | < 640px | `default` |
| Tablet | >= 640px | `sm:` |
| Laptop | >= 768px | `md:` |
| Desktop | >= 1024px | `lg:` |
| Large Desktop | >= 1280px | `xl:` |
| Extra Large | >= 1536px | `2xl:` |

## 🧪 Testing (Futuras Implementaciones)

```bash
# Instalar dependencias de testing
npm install -D @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom

# Ejecutar tests
npm run test
```

## 🚀 Performance Tips

1. **Imágenes**: Usa `next/image` para optimización automática
2. **Fonts**: Incluye fuentes en el bundle para evitar layout shifts
3. **Lazy Loading**: Implementa carga diferida para secciones below-the-fold
4. **Bundle Analysis**: Usa `@next/bundle-analyzer` para analizar el tamaño

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [Next.js](https://nextjs.org/) - El framework React para producción
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utility-first
- [shadcn/ui](https://ui.shadcn.com/) - Componentes reutilizables
- [Framer Motion](https://www.framer.com/motion/) - Librería de animaciones
- [Lucide](https://lucide.dev/) - Biblioteca de íconos
- [Vercel](https://vercel.com/) - Plataforma de despliegue

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!

📫 **Contacto**: [tu-email@dominio.com](mailto:tu-email@dominio.com)
🌐 **Demo Live**: [https://tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)