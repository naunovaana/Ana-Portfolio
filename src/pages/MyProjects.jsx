import ProjectsCard from "../components/ProjectsCard.jsx";

export default function MyProjects() {
  const projects = [
    {
      title: "Portfolio Website",
      paragraph:
        "A personal portfolio built with React and Tailwind showcasing my projects and skills.",
      link: "https://github.com/naunovaana/Ana-Portfolio",
      image: "/portfolio.png",
    },
    {
      title: "My Doctor",
      paragraph:
        "A platform for finding and filtering doctors in Macedonia based on user needs.",
      link: "https://github.com/naunovaana/My-Doctor",
      image: "/mydoctor.png",
    },

    // UI/UX PROJECTS
    // {
    //   title: "UI/UX Case Study – Mobile App",
    //   paragraph:
    //     "User-centered mobile app design focused on usability, clean layout, and visual hierarchy.",
    //   figmaLink:
    //     "https://www.figma.com/design/lVGy36IlGxb7iGncpXzQkE/Practice--Chat-App-Homepage-Design--Copy-?node-id=107-2&t=wR42wDUwmRAQv4sR-1",
    //   image: "/figma1.png",
    // },
    {
      title: "UI/UX Case Study – Website",
      paragraph:
        "Website design created in Figma focusing on modern UI, responsiveness, and user flow.",
      figmaLink:
        "https://www.figma.com/design/lVGy36IlGxb7iGncpXzQkE/Practice--Chat-App-Homepage-Design--Copy-?node-id=107-2&t=wR42wDUwmRAQv4sR-1",
      webflowLink: "https://chat-app-d9a4fe.webflow.io/",
      image: "/figma1.png",
    },

    // NON-VISUAL PROJECTS
    {
      title: "Python Analytics",
      paragraph:
        "Data analysis project focused on data processing, visualization, and insights generation.",
      link: "https://drive.google.com/file/d/1l0TDfnLa_zVIEqPtFQYTseSqhraiYiJO/view",
    },
    {
      title: "Book Shop",
      paragraph:
        "An e-commerce book store with product listing and cart functionality.",
      link: "https://github.com/naunovaana/Book-Shop",
    },
    {
      title: "ZeroId",
      paragraph:
        "Internship project for buying eSIM cards for countries around the world.",
    },
  ];

  const imageProjects = projects.filter((p) => p.image);
  const textProjects = projects.filter((p) => !p.image);

  return (
    <section className="w-full py-28 bg-[#F7EFEA] text-black">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADING */}
        <h2 className="font-poppins text-4xl lg:text-5xl font-semibold text-center mb-4">
          Latest Projects
        </h2>

        <div className="w-16 h-[2px] bg-black mx-auto mb-12 opacity-20"></div>

        {/* TOP: IMAGE PROJECTS */}
        <div className="flex flex-wrap justify-center gap-6">
          {imageProjects.map((item, index) => (
            <ProjectsCard key={index} {...item} />
          ))}
        </div>

        {/* DIVIDER */}
        {textProjects.length > 0 && (
          <>
            <div className="w-full h-[1px] bg-black/10 my-12"></div>

            <p className="text-sm text-black/40 text-center mb-6 font-roboto">
              Additional Projects
            </p>

            {/* BOTTOM: COMPACT PROJECTS */}
            <div className="flex flex-wrap justify-center gap-4">
              {textProjects.map((item, index) => (
                <ProjectsCard key={index} {...item} compact />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
