import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Términos de Seguridad - Arias404',
  description: 'Términos de seguridad y protección de datos para desarrolladores y automatizaciones',
}

export default function SecurityTerms() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Términos de Seguridad</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Compromiso con la Seguridad</h2>
            <p className="mb-4">
              Como desarrollador full-stack y especialista en automatizaciones, me comprometo a mantener los más altos estándares de seguridad en todos los proyectos y servicios que desarrollo.
            </p>
            <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-green-400 mb-2">Principios de Seguridad</h3>
              <ul className="list-disc pl-6 text-green-300">
                <li>Protección de datos del cliente como prioridad máxima</li>
                <li>Implementación de mejores prácticas de seguridad</li>
                <li>Auditorías regulares de seguridad</li>
                <li>Transparencia en el manejo de datos</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Seguridad en Automatizaciones</h2>
            <p className="mb-4">En mis proyectos de automatización (n8n, Make.com, APIs), implemento:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Autenticación robusta:</strong> OAuth 2.0, API keys seguras, tokens JWT</li>
              <li><strong>Encriptación:</strong> Datos en tránsito y en reposo</li>
              <li><strong>Validación de entrada:</strong> Sanitización y validación de todos los datos</li>
              <li><strong>Logs de auditoría:</strong> Registro completo de actividades</li>
              <li><strong>Backup seguro:</strong> Respaldo encriptado de configuraciones</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Protección de Datos Sensibles</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-400 mb-2">Datos de Cliente</h3>
                <ul className="text-sm text-blue-300">
                  <li>• Información de contacto</li>
                  <li>• Datos de CRM</li>
                  <li>• Métricas de conversión</li>
                  <li>• Configuraciones de negocio</li>
                </ul>
              </div>
              <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-400 mb-2">Medidas de Protección</h3>
                <ul className="text-sm text-purple-300">
                  <li>• Encriptación AES-256</li>
                  <li>• Acceso basado en roles</li>
                  <li>• Monitoreo continuo</li>
                  <li>• Cumplimiento GDPR</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Integración con Meta Developer</h2>
            <p className="mb-4">
              Para proyectos que integran con Meta Developer (WhatsApp Business API, Facebook API), cumplo con:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Políticas de Meta:</strong> Cumplimiento estricto de las políticas de desarrollador</li>
              <li><strong>Webhook Security:</strong> Verificación de firmas y tokens</li>
              <li><strong>Rate Limiting:</strong> Respeto de límites de API</li>
              <li><strong>Data Handling:</strong> Manejo responsable de datos de usuario</li>
              <li><strong>Privacy Compliance:</strong> Cumplimiento de regulaciones de privacidad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Seguridad en APIs y Webhooks</h2>
            <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg mb-4">
              <h3 className="font-semibold text-yellow-400 mb-2">Mejores Prácticas Implementadas</h3>
              <ul className="text-yellow-300">
                <li>• Validación de certificados SSL/TLS</li>
                <li>• Implementación de HMAC para webhooks</li>
                <li>• Rate limiting y throttling</li>
                <li>• Sanitización de parámetros</li>
                <li>• Logging de seguridad</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Monitoreo y Respuesta a Incidentes</h2>
            <p className="mb-4">Implemento sistemas de monitoreo continuo que incluyen:</p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Alertas automáticas:</strong> Notificación inmediata de anomalías</li>
              <li><strong>Análisis de logs:</strong> Revisión regular de actividades</li>
              <li><strong>Plan de respuesta:</strong> Procedimientos claros para incidentes</li>
              <li><strong>Comunicación:</strong> Notificación transparente a clientes</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Cumplimiento Regulatorio</h2>
            <p className="mb-4">Mis servicios cumplen con:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-500/10 border border-gray-500/20 p-3 rounded-lg text-center">
                <h4 className="font-semibold text-gray-400">GDPR</h4>
                <p className="text-sm text-gray-300">Protección de datos EU</p>
              </div>
              <div className="bg-gray-500/10 border border-gray-500/20 p-3 rounded-lg text-center">
                <h4 className="font-semibold text-gray-400">CCPA</h4>
                <p className="text-sm text-gray-300">Privacidad California</p>
              </div>
              <div className="bg-gray-500/10 border border-gray-500/20 p-3 rounded-lg text-center">
                <h4 className="font-semibold text-gray-400">LGPD</h4>
                <p className="text-sm text-gray-300">Protección Brasil</p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Certificaciones y Estándares</h2>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>ISO 27001:</strong> Gestión de seguridad de la información</li>
              <li><strong>OWASP Top 10:</strong> Protección contra vulnerabilidades web</li>
              <li><strong>NIST Framework:</strong> Mejores prácticas de ciberseguridad</li>
              <li><strong>SOC 2:</strong> Controles de seguridad y disponibilidad</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Transparencia y Auditoría</h2>
            <p className="mb-4">
              Mantengo transparencia total en mis prácticas de seguridad:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Documentación completa de procesos de seguridad</li>
              <li>Auditorías regulares por terceros</li>
              <li>Reportes de seguridad disponibles bajo solicitud</li>
              <li>Política de divulgación responsable de vulnerabilidades</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contacto de Seguridad</h2>
            <p className="mb-4">
              Para reportar vulnerabilidades de seguridad o consultas relacionadas:
            </p>
            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
              <p><strong>Email de Seguridad:</strong> security@ariasdev.com</p>
              <p><strong>Email General:</strong> mathi.fer069@gmail.com</p>
              <p><strong>Teléfono:</strong> +595 986 281 167</p>
              <p className="text-sm text-red-300 mt-2">
                <strong>Nota:</strong> Para reportes de seguridad críticos, por favor incluye &quot;SECURITY&quot; en el asunto del email.
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Estos términos de seguridad están diseñados para cumplir con los requisitos de Meta Developer y otras plataformas de desarrollo, garantizando la máxima protección de datos y cumplimiento regulatorio.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
