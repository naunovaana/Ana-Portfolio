import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";

export default function ProjectsCard({
  title,
  paragraph,
  image,
  link,
  figmaLink,
  webflowLink,
  compact,
}) {
  return (
    <div
      className={`rounded-2xl border border-[#D57B63]/40 bg-[#D57B63]/20 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col
      ${compact ? "max-w-[260px] p-4" : "max-w-[340px] overflow-hidden"}
    `}
    >
      {/* IMAGE (ONLY FOR NON-COMPACT) */}
      {image && !compact && (
        <div className="w-full h-[180px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      )}

      {/* CONTENT */}
      <div
        className={`${compact ? "" : "p-6"} flex flex-col justify-between flex-1`}
      >
        <div>
          <h3 className="font-poppins text-lg font-semibold mb-2 text-[#1C1A20]">
            {title}
          </h3>

          <p className="font-roboto text-sm text-[#1C1A20]/70 leading-relaxed">
            {paragraph}
          </p>
        </div>

        {/* LINKS */}
        <div className="mt-4 flex flex-col gap-2">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-poppins text-[#1C1A20] hover:opacity-70 flex items-center gap-2"
            >
              View Code
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </a>
          )}

          {figmaLink && (
            <a
              href={figmaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-poppins text-[#1C1A20] hover:opacity-70 flex items-center gap-2"
            >
              View Design
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </a>
          )}

          {webflowLink && (
            <a
              href={webflowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-poppins text-[#1C1A20] hover:opacity-70 flex items-center gap-2"
            >
              Live Site
              <FontAwesomeIcon icon={faArrowUpFromBracket} />
            </a>
          )}

          {!link && !figmaLink && !webflowLink && (
            <span className="text-sm text-[#1C1A20]/40">No link available</span>
          )}
        </div>
      </div>
    </div>
  );
}
