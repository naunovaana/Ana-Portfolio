export default function SkillsCard({title, paragraph, icon}) {
    return (
        <div
            className="bg-peach-gradient p-4 rounded-lg shadow-lg w-full sm:w-[300px] lg:w-[230px] xl:w-[300px] 2xl:w-[400px] overflow-hidden flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-4 hover:ring-rose-300">

            <div className="w-20 h-20 flex items-center justify-center mt-4">
                {icon}
            </div>
            <h1 className="text-charcoal text-xl sm:text-2xl font-semibold mt-4 py-2">
                {title}
            </h1>
            <p className="text-olive mt-2 text-lg sm:text-xl pb-4 italic">
                {paragraph}
            </p>
        </div>
    );
}
