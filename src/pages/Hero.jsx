import Navbar from "../components/Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function Hero() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <img
        src="/heroportfolio1.jpg"
        alt="Hero"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}
