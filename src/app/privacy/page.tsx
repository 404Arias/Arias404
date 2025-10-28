import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidad - Arias404',
  description: 'Política de privacidad y protección de datos del portafolio de Arias404',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Política de Privacidad</h1>
          
          <p className="text-muted-foreground mb-8">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES')}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Información que Recopilamos</h2>
            <p className="mb-4">
              En este portafolio web, recopilamos información de las siguientes maneras:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Información de contacto:</strong> Cuando utilizas el formulario de contacto, recopilamos tu nombre, email y mensaje.</li>
              <li><strong>Información técnica:</strong> Recopilamos datos técnicos como dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia.</li>
              <li><strong>Cookies:</strong> Utilizamos cookies para mejorar la experiencia del usuario y analizar el tráfico del sitio.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Responder a tus consultas y comunicaciones</li>
              <li>Mejorar el funcionamiento y diseño del sitio web</li>
              <li>Analizar el uso del sitio para optimizar la experiencia del usuario</li>
              <li>Cumplir con obligaciones legales y regulatorias</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Compartir Información</h2>
            <p className="mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en los siguientes casos:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cuando sea requerido por ley o proceso legal</li>
              <li>Para proteger nuestros derechos legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar el sitio web (bajo acuerdos de confidencialidad)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Seguridad de los Datos</h2>
            <p className="mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceso no autorizado</li>
              <li>Alteración, divulgación o destrucción no autorizada</li>
              <li>Pérdida accidental</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Tus Derechos</h2>
            <p className="mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Acceder a tu información personal</li>
              <li>Rectificar información inexacta</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Limitar el procesamiento de tu información</li>
              <li>Portabilidad de datos</li>
              <li>Oponerte al procesamiento</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Cookies y Tecnologías Similares</h2>
            <p className="mb-4">
              Utilizamos cookies para mejorar tu experiencia en el sitio web. Puedes controlar las cookies a través de la configuración de tu navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Retención de Datos</h2>
            <p className="mb-4">
              Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, a menos que la ley requiera un período de retención más largo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Transferencias Internacionales</h2>
            <p className="mb-4">
              Si transfieres información desde fuera de Paraguay, ten en cuenta que procesamos la información en Paraguay. Al proporcionar información, consientes la transferencia y procesamiento de esa información en Paraguay.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Cambios a esta Política</h2>
            <p className="mb-4">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios significativos publicando la nueva política en esta página y actualizando la fecha de "última actualización".
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Contacto</h2>
            <p className="mb-4">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información personal, puedes contactarme en:
            </p>
            <div className="bg-secondary/20 p-4 rounded-lg">
              <p><strong>Email:</strong> mathi.fer069@gmail.com</p>
              <p><strong>Teléfono:</strong> +595 986 281 167</p>
              <p><strong>Ubicación:</strong> Asunción, Paraguay</p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Esta política de privacidad cumple con las regulaciones de protección de datos aplicables y las mejores prácticas de la industria.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
