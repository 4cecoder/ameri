// Header.tsx
import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    menuOpen: boolean;
    toggleMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ menuOpen, toggleMenu }) => (
    <header>
        <nav className="bg-gray-800 w-1/1 m-0 p-0 w-screen">
            <div className="container mx-auto">
                <div className="flex items-center justify-between py-4">
                    <a className="navbar-brand" href="#">
                        <img
                            src="http://www.ameripanelsc.com/assets/images/logo.15054702.jpg"
                            alt="AmeriPanel Logo"
                            className="img-fluid rounded-2xl "
                            style={{ maxWidth: "250px" }}
                        />
                    </a>
                    <button
                        className=" ml-3 focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className={`w-6 h-6 z-10 ${menuOpen ? "text-white" : "text-gray-300"
                                }`}
                        />
                    </button>
                    <Navbar menuOpen={menuOpen} toggleMenu={toggleMenu} />
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
