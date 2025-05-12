import Footer from '../components/Footer'
import BarNav from "../components/BarNav"
import gmail from '../assets/gmail.png'
import telefono from '../assets/telefono.png'
import ubicacion from '../assets/ubicacion.png'
import githublogo from '../assets/github.png'

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Navbar */}
            <BarNav />

            {/* Contenido principal */}
            <main className="flex-grow max-w-3xl mx-auto my-8 px-4">
                <h2 className="text-3xl font-bold text-center mb-8 text-purple-800">Información de Contacto</h2>
                
                <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center justify-between bg-purple-100 rounded-xl p-4 shadow-md flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
                        <div>
                            <p className="font-semibold text-purple-800">Email</p>
                            <p className="text-purple-900">david040904@gmail.com</p>
                        </div>
                        <img src={gmail} alt="Email" className="w-10 h-10" />
                    </div>

                    {/* Teléfono */}
                    <div className="flex items-center justify-between bg-purple-100 rounded-xl p-4 shadow-md flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
                        <div>
                            <p className="font-semibold text-purple-800">Teléfono</p>
                            <p className="text-purple-900">+52 56 1894 6445</p>
                        </div>
                        <img src={telefono} alt="Teléfono" className="w-10 h-10" />
                    </div>

                    {/* Ubicación */}
                    <div className="flex items-center justify-between bg-purple-100 rounded-xl p-4 shadow-md flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
                        <div>
                            <p className="font-semibold text-purple-800">Ubicación</p>
                            <p className="text-purple-900">Teapa, Tabasco, México</p>
                        </div>
                        <img src={ubicacion} alt="Ubicación" className="w-10 h-10" />
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center justify-between bg-purple-100 rounded-xl p-4 shadow-md flex-grow max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl border-l-4 border-purple-500">
                        <div>
                            <p className="font-semibold text-purple-800">GitHub</p>
                            <a
                                href="https://github.com/DAMAC2004"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-purple-900 underline hover:text-purple-600"
                            >
                                github.com/DAMAC2004
                            </a>
                        </div>
                        <img src={githublogo} alt="GitHub" className="w-10 h-10" />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
