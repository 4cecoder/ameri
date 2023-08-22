// Navbar.tsx
import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface NavLink {
    name: string;
    url: string;
}
const navLinks: NavLink[] = [
    { name: 'Home', url: '#' },
    { name: 'Services', url: '#' },
    { name: 'Contact', url: '#' },
    { name: 'Materials', url: '#' },
    { name: 'Recent Projects', url: '#' },
    { name: 'Floor Plans', url: '#' },
    { name: 'Testimonials', url: '#' },
    { name: 'Energy Savings', url: '#' },
    { name: 'Dealership Opportunities', url: '#' },
    { name: 'News', url: '#' },
    { name: 'More Information', url: '#' },
];

interface NavbarProps {
    menuOpen: boolean;
    toggleMenu: () => void;
}

const Navbar: FC<NavbarProps> = ({ menuOpen, toggleMenu }) => (
    <div className={`fixed -top-10 -right-14 transform ${menuOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out transition-all duration-300 mt-32 h-screen w-3/12  mr-14 pl-6 bg-slate-800 rounded p-2 text-2xl z-10`}>
        <button
            className={`lg:hidden ml-auto focus:outline-none ${menuOpen ? "block" : "hidden"
                } bg-gray-900 p-2 rounded`}
            onClick={toggleMenu}
        >
            <FontAwesomeIcon icon={faBars} color="white" />
        </button>
        <ul className="navbar-nav ml-auto mt-16">
            {navLinks.map((link, index) => (
                <li key={index} className="nav-item m-2">
                    <a className="nav-link" href={link.url}>
                        {link.name}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

export default Navbar;




