import Footer from "../components/Footer";
import BarNav from "../components/BarNav";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <BarNav />

      {/* Contenido principal */}
      <main className="flex-grow max-w-3xl mx-auto mt-20 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
        <h2 className="text-3xl font-bold text-purple-700 mb-4">Acerca de Mí</h2>
        <p className="text-gray-700 leading-relaxed">
          Soy una persona altamente comprometida con los proyectos en los que participo, con un enfoque meticuloso en la planificación y ejecución. Me destaco por mi capacidad de aprendizaje continuo y mi disposición para enfrentar nuevos retos, lo que me permite adaptarme rápidamente a distintas tecnologías y metodologías de trabajo.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Entre mis fortalezas se encuentran la organización, la disciplina y la autoexigencia, lo que garantiza que entregue resultados de calidad en los plazos establecidos. Además, tengo facilidad para compartir conocimientos y trabajar en equipo, fomentando un ambiente colaborativo donde el aprendizaje mutuo es una prioridad.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
          Por otro lado, debido a mi alto nivel de exigencia personal, en ocasiones puedo sobrecargarme de trabajo o ser demasiado crítico con mis propios resultados. No obstante, he desarrollado estrategias para gestionar mejor la presión y mantener un equilibrio entre la eficiencia y el bienestar personal.
        </p>

        <p className="text-gray-700 leading-relaxed mt-4">
            Soy una excelente elección para cualquier equipo de trabajo gracias a mi enfoque analítico, mi capacidad para resolver problemas de manera estructurada y mi compromiso con la mejora continua.
        </p>
      </main>

      {/* Sección de Fortalezas, Habilidades, Enfoque y Desafíos */}
        <section className="mt-5 grid md:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {/* Fortalezas */}
          <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Fortalezas</h3>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-center"><span className="mr-2">•</span>Organización</li>
              <li className="flex items-center"><span className="mr-2">•</span>Disciplina</li>
              <li className="flex items-center"><span className="mr-2">•</span>Trabajo en equipo</li>
              <li className="flex items-center"><span className="mr-2">•</span>Aprendizaje continuo</li>
            </ul>
          </div>

          {/* Habilidades */}
          <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Habilidades</h3>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-center"><span className="mr-2">•</span>Resolución de problemas</li>
              <li className="flex items-center"><span className="mr-2">•</span>Enfoque analítico</li>
              <li className="flex items-center"><span className="mr-2">•</span>Adaptabilidad</li>
              <li className="flex items-center"><span className="mr-2">•</span>Compartir conocimientos</li>
            </ul>
          </div>

          {/* Enfoque */}
          <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Enfoque</h3>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-center"><span className="mr-2">•</span>Calidad en resultados</li>
              <li className="flex items-center"><span className="mr-2">•</span>Mejora continua</li>
              <li className="flex items-center"><span className="mr-2">•</span>Colaboración efectiva</li>
              <li className="flex items-center"><span className="mr-2">•</span>Entrega en plazos</li>
            </ul>
          </div>

          {/* Desafíos */}
          <div className="flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
            <h3 className="text-xl font-bold mb-3 text-purple-700">Desafíos</h3>
            <ul className="space-y-2 text-purple-900">
              <li className="flex items-center"><span className="mr-2">•</span>Autoexigencia excesiva</li>
              <li className="flex items-center"><span className="mr-2">•</span>Dificultad para delegar</li>
              <li className="flex items-center"><span className="mr-2">•</span>Sensibilidad al fracaso</li>
              <li className="flex items-center"><span className="mr-2">•</span>Tendencia al aislamiento bajo presión</li>
            </ul>
          </div>
        </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

