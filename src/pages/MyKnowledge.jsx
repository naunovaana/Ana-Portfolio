import SkillsCard from "../components/SkillsCard.jsx";

export default function MyKnowledge() {
    const knowledgeData = [
        {
            title: "Frontend Development",
            paragraph:
                "Proficient in frontend development with knowledge in HTML, CSS, TailwindCSS, JavaScript, TypeScript and React.js.",
            image: "/frontend.webp",
        },
        {
            title: "Backend Development",
            paragraph:
                "Experienced in Node.js and Java Spring Boot, developing efficient and secure REST APIs for seamless data processing.",
            image: "/backend.png",
        },
        {
            title: "Database Management",
            paragraph:
                "Skilled in designing, querying, and managing relational databases using MySQL and PostgreSQL.",
            image: "/database.png",
        },
        {
            title: "Version Control",
            paragraph:
                "Comfortable using Git for version control and collaborating on projects via GitHub.",
            image: "/version_ctrl.png",
        },
    ];

    return (
        <div className="w-full flex flex-col items-center px-2 py-10 bg-movie-poster lg:bg-no-repeat lg:bg-cover">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-widest mb-6 pb-10 text-center">
                My Knowledge
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
                {knowledgeData.map((item, index) => (
                    <SkillsCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
