export default function SkillsCard({title, paragraph, image}) {
    return (
        <div
            className="bg-peach-gradient p-4 rounded-lg shadow-lg max-w-sm flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-rose-300 sm:hover:scale-105 sm:hover:shadow-2xl sm:hover:ring-4">
            <img
                src={image}
                alt={title}
                className="w-full h-48 sm:h-56 object-cover rounded-t-lg"
            />
            <h1 className="text-charcoal text-xl sm:text-2xl font-semibold mt-4 py-2">
                {title}
            </h1>
            <p className="text-olive mt-2 text-lg sm:text-xl pb-4 italic">
                {paragraph}
            </p>
        </div>
    );
}
