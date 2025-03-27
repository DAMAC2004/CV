import BarNav from "../components/BarNav";
import Footer from "../components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BarNav />

      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-center py-12 m-10 rounded-3xl shadow-lg">
        <img 
          src="/src/assets/pfp.bmp" 
          alt="Foto de perfil" 
          className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg"
        />
        <h1 className="text-4xl font-bold mt-4">David Aaron May Cruz</h1>
        <h2 className="text-2xl font-light">Ingeniero Informático</h2>
        <p className="mt-2 bg-white text-gray-800 px-4 py-1 inline-block rounded-lg shadow-md">
          Sueldo Sugerido: <strong>$20,000 MXN</strong>
        </p>
      </header>

      {/* Contenido Principal */}
      <main className="flex-grow max-w-3xl mx-auto my-8 p-6 space-y-8">
        
        {/* Experiencia Laboral */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Experiencia Laboral</h2>
          
          <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-purple-500 mb-6">
            <h3 className="text-xl font-semibold text-purple-700">SGAE (Sistema de Gestión Académica Escolar)</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-2">
              <li>Automatización de procesos para una escuela secundaria.</li>
              <li>Herramientas para agilizar la calificación de profesores.</li>
              <li>Funcionalidades que facilitan la estancia académica de los alumnos.</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg border-l-4 border-indigo-500">
            <h3 className="text-xl font-semibold text-indigo-700">SafeSteps (Bastón Inteligente)</h3>
            <ul className="list-disc ml-6 text-gray-700 mt-2">
              <li>Módulo adaptable con IA para cualquier bastón.</li>
              <li>Mayor seguridad para los usuarios.</li>
              <li>Detección de caídas con un 99% de precisión.</li>
            </ul>
          </div>
        </section>

        {/* Tecnologías */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Tecnologías</h2>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "Python", "C#", "Java", "Android", "PHP", "SQL", "React + Vite"].map((tech, index) => (
              <span key={index} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg text-sm font-semibold shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Cursos */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Cursos</h2>
          
          {["Python con Django", "HTML, CSS, JS con Bootstrap", "Implementación de Python con HTML y CSS"].map((curso, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border-l-4 border-blue-500 mb-4">
              <h3 className="text-lg font-semibold text-blue-700">{curso}</h3>
            </div>
          ))}
        </section>

        {/* Educación */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Educación</h2>

          {["Instituto Tecnológico Superior de la Región Sierra (TecNM)", "COBATAB Plantel 9"].map((escuela, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-lg border-l-4 border-green-500 mb-4">
              <h3 className="text-lg font-semibold text-green-700">{escuela}</h3>
            </div>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
