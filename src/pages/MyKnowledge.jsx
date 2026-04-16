import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDesktop,
  faServer,
  faDatabase,
  faCodeBranch,
  faChartBar,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import SkillsCard from "../components/SkillsCard.jsx";

export default function MyKnowledge() {
  const knowledgeData = [
    {
      title: "Frontend Development",
      paragraph:
        "I build responsive and modern web interfaces using React, Tailwind CSS, and TypeScript, focusing on clean structure and usability.",
      icon: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="w-10 h-10 text-[#D57B63]"
        />
      ),
    },
    {
      title: "UI/UX Design",
      paragraph:
        "I focus on creating intuitive interfaces with strong visual hierarchy, consistency, and user-friendly layouts that improve overall experience.",
      icon: (
        <FontAwesomeIcon
          icon={faDesktop}
          className="w-10 h-10 text-[#D57B63]"
        />
      ),
    },
    {
      title: "Backend Development",
      paragraph:
        "Experience building REST APIs using Node.js and Java Spring Boot, with focus on performance and clean architecture.",
      icon: (
        <FontAwesomeIcon icon={faServer} className="w-10 h-10 text-[#D57B63]" />
      ),
    },
    {
      title: "Database Management",
      paragraph:
        "Designing and managing relational databases using MySQL and PostgreSQL with optimized queries and structure.",
      icon: (
        <FontAwesomeIcon
          icon={faDatabase}
          className="w-10 h-10 text-[#D57B63]"
        />
      ),
    },
    {
      title: "Data Analytics",
      paragraph: (
        <>
          Familiar with Python, Pandas, NumPy, SQL, Power BI, and Excel for data
          analysis and insights.
          <br />
          <a
            href="/Data-Analyst-Course-Certificate.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm text-[#D57B63] underline hover:opacity-70"
          >
            <FontAwesomeIcon
              icon={faChartBar}
              className="w-4 h-4 text-[#D57B63]"
            />
            View Certificate
          </a>
        </>
      ),
      icon: (
        <FontAwesomeIcon
          icon={faChartBar}
          className="w-10 h-10 text-[#D57B63]"
        />
      ),
    },
    {
      title: "Version Control",
      paragraph:
        "Using Git and GitHub for version control, collaboration, and structured project workflows.",
      icon: (
        <FontAwesomeIcon
          icon={faCodeBranch}
          className="w-10 h-10 text-[#D57B63]"
        />
      ),
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = knowledgeData.slice(startIndex, startIndex + 3);

  const canGoBack = startIndex > 0;
  const canGoForward = startIndex + 3 < knowledgeData.length;

  return (
    <section className="w-full py-28 bg-[#131217] text-[#F5F5F5]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* heading */}
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold text-center mb-4">
          My Knowledge
        </h2>

        <div className="w-16 h-[2px] bg-white/20 mx-auto mb-14"></div>

        {/* MOBILE */}
        <div className="flex flex-wrap justify-center gap-6 lg:hidden">
          {knowledgeData.map((item, index) => (
            <SkillsCard key={index} {...item} />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:flex items-center justify-center gap-6">
          {/* LEFT ARROW */}
          <button
            onClick={() => setStartIndex(startIndex - 1)}
            disabled={!canGoBack}
            className={`p-3 rounded-full border border-white/20 transition-all duration-300
              ${
                canGoBack
                  ? "hover:bg-[#D57B63] hover:border-[#D57B63] hover:text-black"
                  : "opacity-30 cursor-not-allowed"
              }`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>

          {/* CARDS */}
          <div className="flex gap-6">
            {visibleCards.map((item, index) => (
              <SkillsCard key={index} {...item} />
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => setStartIndex(startIndex + 1)}
            disabled={!canGoForward}
            className={`p-3 rounded-full border border-white/20 transition-all duration-300
              ${
                canGoForward
                  ? "hover:bg-[#D57B63] hover:border-[#D57B63] hover:text-black"
                  : "opacity-30 cursor-not-allowed"
              }`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </section>
  );
}
