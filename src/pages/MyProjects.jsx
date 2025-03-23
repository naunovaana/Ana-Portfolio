import ProjectsCard from "../components/ProjectsCard.jsx";

export default function MyProjects() {
    const knowledgeData = [
        {
            title: "Portfolio Website",
            paragraph: "This is the code for the resume project you are currently viewing.",
            image: "/diary.png",
            link: "https://github.com/naunovaana/Ana-Portfolio",
        },
        {
            title: "My Doctor",
            paragraph: "This project is about finding the best doctor in Macedonia that fulfills your needs.",
            image: "/mydoctor.png",
            link: "https://github.com/naunovaana/My-Doctor",
        },
        {
            title: "Book shop",
            paragraph: "This project is about developing a website for an Ecommerce Shop(Book Shop).",
            image: "/bookshop.png",
            link: "https://github.com/naunovaana/Book-Shop",
        },
        {
            title: "Sutlijash",
            paragraph: "This is a project for events in Kochani and its area and I worked on it during my internship.",
            image: "/sutlijash.png",
        },
    ];

    return (
        <div className="flex items-center flex-col p-8 py-5 pb-36 bg-walpaper md:bg-cover bg-center bg-wave">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-charcoal tracking-widest mb-6 ml-10 pb-10 px-16 py-5 text-center">
                Latest Projects
            </h1>
            <div className="flex flex-wrap justify-center gap-6 py-10">
                {knowledgeData.map((item, index) => (
                    <ProjectsCard key={index} {...item} />
                ))}
            </div>
        </div>
    );
}
