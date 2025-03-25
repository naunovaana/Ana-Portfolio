import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDesktop, faServer, faDatabase, faCodeBranch} from '@fortawesome/free-solid-svg-icons';
import SkillsCard from "../components/SkillsCard.jsx"; // Add FontAwesome Icons

export default function MyKnowledge() {
    const knowledgeData = [
        {
            title: "Frontend Development",
            paragraph:
                "Proficient in frontend development with knowledge in HTML, CSS, TailwindCSS, JavaScript, TypeScript and React.js.",
            icon: <FontAwesomeIcon icon={faDesktop} className="w-16 h-16 text-rose"/>, // Frontend Icon
        },
        {
            title: "Backend Development",
            paragraph:
                "Experienced in Node.js and Java Spring Boot, developing efficient and secure REST APIs for seamless data processing.",
            icon: <FontAwesomeIcon icon={faServer} className="w-16 h-16 text-rose"/>, // Backend Icon
        },
        {
            title: "Database Management",
            paragraph:
                "Skilled in designing, querying, and managing relational databases using MySQL and PostgreSQL.",
            icon: <FontAwesomeIcon icon={faDatabase} className="w-16 h-16 text-rose"/>, // Database Icon
        },
        {
            title: "Version Control",
            paragraph:
                "Comfortable using Git for version control and collaborating on projects via GitHub.",
            icon: <FontAwesomeIcon icon={faCodeBranch} className="w-16 h-16 text-rose"/>, // Version Control Icon
        },
    ];

    return (
        <div className="w-full flex flex-col px-2 py-20 bg-beige ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-widest mb-6 pb-10 text-center">
                My Knowledge
            </h1>
            <div className="flex flex-col md:flex-row justify-evenly gap-6 w-full px-4 ">
                {knowledgeData.map((item, index) => (
                    <SkillsCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
