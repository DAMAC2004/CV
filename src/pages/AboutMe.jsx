import Footer from "../components/Footer";
import BarNav from "../components/BarNav";

export default function AboutMe() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <BarNav />

      {/* Contenido principal */}
      <main className="flex-grow max-w-3xl mx-auto mt-20 px-4 sm:px-6 py-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
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
      <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-6 max-w-6xl mx-auto mb-10">
        {[
          {
            title: "Fortalezas",
            color: "purple",
            items: [
              "Organización",
              "Disciplina",
              "Trabajo en equipo",
              "Aprendizaje continuo"
            ]
          },
          {
            title: "Habilidades",
            color: "purple",
            items: [
              "Resolución de problemas",
              "Enfoque analítico",
              "Adaptabilidad",
              "Compartir conocimientos"
            ]
          },
          {
            title: "Enfoque",
            color: "purple",
            items: [
              "Calidad en resultados",
              "Mejora continua",
              "Colaboración efectiva",
              "Entrega en plazos"
            ]
          },
          {
            title: "Desafíos",
            color: "purple",
            items: [
              "Autoexigencia excesiva",
              "Dificultad para delegar",
              "Sensibilidad al fracaso",
              "Tendencia al aislamiento bajo presión"
            ]
          }
        ].map((section, idx) => (
          <div
            key={idx}
            className={`w-full p-6 bg-white shadow-lg rounded-xl border-l-4 border-${section.color}-500`}
          >
            <h3 className={`text-xl font-bold mb-3 text-${section.color}-700`}>{section.title}</h3>
            <ul className={`space-y-2 text-${section.color}-900`}>
              {section.items.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
