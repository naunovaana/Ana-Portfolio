import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faServer, faDatabase, faCodeBranch, faChartBar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import SkillsCard from "../components/SkillsCard.jsx";

export default function MyKnowledge() {
    const knowledgeData = [
        {
            title: "Frontend Development",
            paragraph:
                "Proficient in frontend development with knowledge in HTML, CSS, TailwindCSS, JavaScript, TypeScript and React.js.",
            icon: <FontAwesomeIcon icon={faDesktop} className="w-16 h-16 text-rose" />,
        },
        {
            title: "Backend Development",
            paragraph:
                "Experienced in Node.js and Java Spring Boot, developing efficient and secure REST APIs for seamless data processing.",
            icon: <FontAwesomeIcon icon={faServer} className="w-16 h-16 text-rose" />,
        },
        {
            title: "Database Management",
            paragraph:
                "Skilled in designing, querying, and managing relational databases using MySQL and PostgreSQL.",
            icon: <FontAwesomeIcon icon={faDatabase} className="w-16 h-16 text-rose" />,
        },
        {
            title: "Data Analytics",
            paragraph: (
                <>
                    Familiar with Python for data analysis using Pandas, NumPy, Seaborn, as well as SQL, Power BI, and Excel for insights and reporting.
                    <br />
                    <a
                        href="/Data-Analyst-Course-Certificate.jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-2 text-sm text-rose hover:underline"
                    >
                        <FontAwesomeIcon icon={faChartBar} className="w-4 h-4" />
                        View Certificate
                    </a>
                </>
            ),
            icon: <FontAwesomeIcon icon={faChartBar} className="w-16 h-16 text-rose" />,
        },
        {
            title: "Version Control",
            paragraph:
                "Comfortable using Git for version control and collaborating on projects via GitHub.",
            icon: <FontAwesomeIcon icon={faCodeBranch} className="w-16 h-16 text-rose" />,
        },
    ];

    const [startIndex, setStartIndex] = useState(0);
    const visibleCards = knowledgeData.slice(startIndex, startIndex + 3);

    const canGoBack = startIndex > 0;
    const canGoForward = startIndex + 3 < knowledgeData.length;

    return (
        <div className="w-full flex flex-col px-2 py-20 bg-beige">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-widest mb-6 pb-10 text-center">
                My Knowledge
            </h1>

            {/* Mobile layout */}
            <div className="flex flex-wrap justify-center gap-6 w-full px-4 lg:hidden">
                {knowledgeData.map((item, index) => (
                    <SkillsCard key={index} {...item} />
                ))}
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:flex justify-center items-center gap-4 px-4">
                <button
                    onClick={() => setStartIndex(startIndex - 1)}
                    disabled={!canGoBack}
                    className={`p-3 rounded-full ${canGoBack ? 'bg-rose text-warmWhite' : 'bg-olive text-charcoal cursor-not-allowed'}`}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>

                <div className="flex gap-6">
                    {visibleCards.map((item, index) => (
                        <SkillsCard key={index} {...item} />
                    ))}
                </div>

                <button
                    onClick={() => setStartIndex(startIndex + 1)}
                    disabled={!canGoForward}
                    className={`p-3 rounded-full ${canGoForward ? 'bg-rose text-warmWhite' : 'bg-olive text-charcoal cursor-not-allowed'}`}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </button>
            </div>
        </div>
    );
}
