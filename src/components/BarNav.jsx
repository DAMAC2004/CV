import { NavLink } from 'react-router' 

export default function navBar(){
    return(
        <>
            <nav className="bg-purple-700 text-white p-4 flex justify-between items-center">
                <div className="font-bold text-lg">Mi CV</div>
                <ul className="flex space-x-4">
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "underline" : ""}>Inicio</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutme" className={({ isActive }) => isActive ? "underline" : ""}>Experiencia</NavLink>
                    </li>
                    <li>
                        <NavLink to="/conctact" className={({ isActive }) => isActive ? "underline" : ""}>Contacto</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}