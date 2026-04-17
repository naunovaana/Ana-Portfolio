import { useState } from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", to: "hero" },
    { name: "Knowledge", to: "knowledge" },
    { name: "About Me", to: "about-me" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 bg-peach-gradient text-black font-sansation sticky">
      <div className="flex justify-between items-center max-w-7xl mx-auto pt-5 pb-5">
        <p className="text-xl font-sansation text-black font-bold">
          NAUNOV<span className="text-white font-thin italic">ANA</span>
        </p>

        {/* Desktop */}
        <ul className="hidden md:flex space-x-8 text-md">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                className="hover:text-white transition-colors cursor-pointer"
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
            <FontAwesomeIcon icon={faTimes} size="lg" className="text-white" />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              size="xl"
              className="text-[#D57B63] hover:text-white"
            />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="fixed top-0 right-0 w-full h-full bg-[#1C1A20] text-white z-50 shadow-lg">
          <div className="flex justify-end p-4">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <FontAwesomeIcon icon={faTimes} size="lg" />
            </button>
          </div>
          <ul className="space-y-6 text-lg px-4 py-20 flex flex-col items-center">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="hover:text-[#D57B63] hover:text-xl transition-colors cursor-pointer"
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
