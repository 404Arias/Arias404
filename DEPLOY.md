# 🚀 Guía de Deploy - Portfolio Web

## ✅ Estado del Proyecto

Tu portfolio está **100% listo para deploy** con todas las características implementadas:

### ✨ Características Implementadas
- ✅ Next.js 14 with App Router
- ✅ TypeScript completo
- ✅ TailwindCSS + shadcn/ui
- ✅ Framer Motion animaciones
- ✅ Partículas interactivas
- ✅ Modo oscuro/claro
- ✅ Cursor personalizado
- ✅ Formulario con validación Zod
- ✅ SEO optimizado
- ✅ Responsive design
- ✅ Código sin errores de lint

## 🎯 Opciones de Deploy

### 1. **Vercel (Recomendado) - Deploy Automático**

```bash
# Opción A: Deploy desde GitHub
1. Sube el código a GitHub
2. Ve a https://vercel.com
3. Conecta tu repositorio
4. Deploy automático ✨

# Opción B: Deploy directo con CLI
npm install -g vercel
vercel login
vercel --prod
```

### 2. **Netlify**

```bash
# Build el proyecto
npm run build

# Sube la carpeta .next a Netlify
# O conecta tu repo GitHub en netlify.com
```

### 3. **Railway**

```bash
# Conecta tu repo en railway.app
# Deploy automático desde Git
```

## 🛠️ Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Servidor local (localhost:3001)
npm run build        # Build de producción
npm run start        # Servidor de producción local
npm run lint         # Verificar código
npm run preview      # Deploy de prueba a Vercel
npm run deploy       # Deploy a producción Vercel
```

## 📝 Personalización Final

### 1. **Datos Personales**
Edita `src/data/portfolio.ts`:
```typescript
export const personalInfo = {
  name: "Tu Nombre Aquí",
  title: "Tu Título Profesional", 
  // ... resto de datos
}
```

### 2. **Imágenes**
Reemplaza las imágenes en `public/images/`:
- `Perfil.jpg` - Tu foto de perfil
- `therapymentor.png` - Captura de tu proyecto 1
- `image.png` - Captura de tu proyecto 2
- `project3.jpg` - Captura de tu proyecto 3

### 3. **Favicon**
Reemplaza:
- `public/favicon-192x192.png`
- `public/favicon-512x512.png`

### 4. **Dominio Personalizado (Opcional)**
En Vercel/Netlify:
1. Ve a Project Settings
2. Domains → Add Domain
3. Configura DNS según instrucciones

## 🔧 Configuración de Deploy

### Vercel (Automática)
```json
// vercel.json ya configurado
{
  "buildCommand": "npm run build",
  "framework": "nextjs"
}
```

### Variables de Entorno (Si necesitas)
En Vercel Dashboard > Settings > Environment Variables:
```
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

## 🌟 Post-Deploy

### 1. **Testing**
- [ ] Verifica todas las secciones
- [ ] Prueba modo oscuro/claro
- [ ] Test formulario de contacto
- [ ] Verifica animaciones
- [ ] Prueba en móviles

### 2. **SEO**
- [ ] Actualiza meta descriptions
- [ ] Verifica Open Graph
- [ ] Configura Google Analytics (opcional)
- [ ] Envía sitemap a Google Search Console

### 3. **Performance**
- [ ] Verifica Core Web Vitals en PageSpeed Insights
- [ ] Optimiza imágenes si es necesario
- [ ] Monitorea tiempo de carga

## 🐛 Troubleshooting

### Error de Build
```bash
# Limpia y reinstala
rm -rf .next node_modules
npm install
npm run build
```

### Imágenes no cargan
- Verifica que estén en `public/images/`
- Nombres exactos en `portfolio.ts`
- Formatos soportados: .jpg, .png, .webp

### Animaciones lentas
- Reduce partículas en `hero.tsx`
- Ajusta duración en Framer Motion

## 🎉 ¡Ya estás listo!

Tu portfolio incluye:
- 🎨 **Diseño profesional** con animaciones fluidas
- 📱 **Completamente responsive**
- ⚡ **Optimizado para performance**
- 🔍 **SEO optimizado**
- 🌙 **Modo oscuro/claro**
- ✨ **Efectos visuales avanzados**

### 🚀 Deploy Ahora:
```bash
# Deploy inmediato a Vercel
npm run deploy
```

¡Tu portfolio está listo para impresionar! 🎯