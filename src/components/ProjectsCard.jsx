import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsCard({ title, paragraph, link }) {
  return (
    <div className="w-full max-w-[340px] bg-[#D57B63]/25 border border-[#D57B63]/40 rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col justify-between">
      {/* CONTENT */}
      <div>
        <h3 className="font-poppins text-xl font-semibold mb-3 text-[#1C1A20]">
          {title}
        </h3>

        <p className="font-roboto text-sm lg:text-base text-[#1C1A20]/70 leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* LINK */}
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-poppins text-[#1C1A20] hover:opacity-70 transition"
        >
          View Project
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </a>
      ) : (
        <span className="mt-6 text-sm text-[#1C1A20]/40 font-poppins">
          No link available
        </span>
      )}
    </div>
  );
}
