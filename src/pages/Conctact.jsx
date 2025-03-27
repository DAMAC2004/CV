import Footer from '../components/Footer'
import BarNav from "../components/BarNav"

export default function Conctact(){
    return(
        <>
            <div className="flex flex-col min-h-screen">
                {/* Navbar */}
                <BarNav />

                {/* Contenido principal */}
                <main className="flex-grow max-w-3xl mx-auto my-8 p-4">
                    <section className="mb-4">
                        <h2 className="text-2xl font-bold mb-4">Información de Contacto</h2>
                        <ul className="list-disc ml-6">
                            <li><strong>Email:</strong> david040904@gmail.com</li>
                            <li><strong>Teléfono:</strong> +52 56 1894 6445</li>
                            <li><strong>Ubicación:</strong> Teapa, Tabasco, México</li>
                            <li><strong>GitHub:</strong> <a className='text-blue-700' href='https://github.com/DAMAC2004'>https://github.com/DAMAC2004</a></li>
                        </ul>
                    </section>
                </main>

                {/* Footer siempre abajo */}
                <Footer />
            </div>
        </>
    )
}