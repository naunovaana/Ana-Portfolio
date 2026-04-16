import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function AboutMe() {
  return (
    <section className="w-full py-28">
      {/* container */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* TITLE */}
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold tracking-tight mb-6">
          About Me
        </h2>

        {/* LINE */}
        <div className="w-16 h-[2px] bg-black mx-auto mb-10 opacity-20"></div>

        {/* TEXT */}
        <p className="font-roboto text-base lg:text-lg leading-relaxed text-gray-600 mb-6">
          I am a Frontend Developer focused on building responsive,
          user-friendly web applications using modern technologies like React
          and Tailwind CSS. I enjoy turning ideas into clean and functional
          interfaces that provide a smooth user experience.
        </p>

        <p className="font-roboto text-base lg:text-lg leading-relaxed text-gray-600 mb-10">
          Alongside development, I have a strong interest in UI/UX design, where
          I focus on creating intuitive layouts, improving usability, and paying
          attention to visual detail. I enjoy bridging the gap between design
          and code to build meaningful digital experiences.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* PRIMARY → Contact */}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-black text-white font-poppins text-sm lg:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            Contact Me
          </Link>

          {/* GHOST → CV */}
          <a
            href="/Ana_Naunova_CV.pdf"
            download="Ana_Naunova_CV"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-black text-black font-poppins text-sm lg:text-base transition-all duration-300 hover:bg-black hover:text-white"
          >
            Download CV
            <FontAwesomeIcon icon={faArrowUpFromBracket} />
          </a>
        </div>
      </div>
    </section>
  );
}
