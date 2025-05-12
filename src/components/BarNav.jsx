import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function BarNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Experiencia', path: '/aboutme' },
    { name: 'Contacto', path: '/conctact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-white/100 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo o nombre */}
        <NavLink to="/" className="text-xl md:text-2xl font-bold text-purple-700 hover:text-purple-900 transition-colors">
          David Aaron
        </NavLink>

        {/* Botón del menú móvil */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-purple-100 focus:outline-none"
          aria-label="Abrir menú"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-purple-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-base font-medium transition-colors hover:text-purple-700 ${
                  isActive ? 'text-purple-700 underline font-semibold' : 'text-gray-700'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Menú en pantallas pequeñas */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 animate-fade-in-down">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)} // Cierra el menú al hacer clic
                className={({ isActive }) =>
                  `block text-base font-medium transition-colors hover:text-purple-700 ${
                    isActive ? 'text-purple-700 underline font-semibold' : 'text-gray-700'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
