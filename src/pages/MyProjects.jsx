import ProjectsCard from "../components/ProjectsCard.jsx";

export default function MyProjects() {
  const projects = [
    {
      title: "Portfolio Website",
      paragraph:
        "A personal portfolio built with React and Tailwind showcasing my projects and skills.",
      link: "https://github.com/naunovaana/Ana-Portfolio",
    },
    {
      title: "My Doctor",
      paragraph:
        "A platform for finding and filtering doctors in Macedonia based on user needs.",
      link: "https://github.com/naunovaana/My-Doctor",
    },
    {
      title: "Book Shop",
      paragraph:
        "An e-commerce book store with product listing and cart functionality.",
      link: "https://github.com/naunovaana/Book-Shop",
    },
    {
      title: "Sutlijash",
      paragraph:
        "Internship project for event management in Kochani with dynamic content handling.",
      link: null,
    },
    {
      title: "Python Analytics",
      paragraph:
        "Data analysis project using Python, Pandas, NumPy, and visualization tools.",
      link: "https://drive.google.com/file/d/1l0TDfnLa_zVIEqPtFQYTseSqhraiYiJO/view",
    },
  ];

  return (
    <section className="w-full py-28 bg-[#F7EFEA] text-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* heading */}
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold text-center mb-4">
          Latest Projects
        </h2>

        <div className="w-16 h-[2px] bg-white/20 mx-auto mb-14"></div>

        {/* grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {projects.map((item, index) => (
            <ProjectsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
