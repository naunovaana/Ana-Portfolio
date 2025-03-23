import {useState} from "react";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {name: "Home", to: "hero"},
        {name: "Knowledge", to: "knowledge"},
        {name: "About Me", to: "about-me"},
        {name: "Projects", to: "projects"},
        {name: "Contact", to: "contact"},
    ];

    return (
        <nav className="bg-charcoal text-warmWhite px-6">
            <div className="flex justify-between items-center max-w-7xl mx-auto">
                <img src="/logo_navbar.png" alt="ana" className="w-[90px] h-[90px] object-contain"/>

                {/* Desktop */}
                <ul className="hidden md:flex space-x-8 text-lg">
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.to}
                                smooth={true}
                                duration={500}
                                className="hover:text-olive transition-colors cursor-pointer"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? (
                        <FontAwesomeIcon icon={faTimes} size="lg" className="text-warmWhite"/>
                    ) : (
                        <FontAwesomeIcon icon={faBars} size="lg" className="text-rose"/>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-full h-full bg-charcoal text-warmWhite z-50 shadow-lg">
                    <div className="flex justify-end p-4">
                        <button onClick={() => setIsOpen(false)} className="text-warmWhite">
                            <FontAwesomeIcon icon={faTimes} size="lg"/>
                        </button>
                    </div>
                    <ul className="space-y-6 text-lg px-4 py-20 flex flex-col items-center">
                        {links.map((link) => (
                            <li key={link.name}>
                                <Link
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    className="hover:text-olive hover:text-xl transition-colors cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isOpen && (
                <div
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 z-40"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
}
