export default function SkillsCard({ title, paragraph, icon }) {
  return (
    <div className="bg-[#F3E6DD] text-[#1f1f1f] p-6 rounded-2xl w-full sm:w-[300px] lg:w-[260px] xl:w-[300px] transition-all duration-300 shadow-md hover:shadow-2xl hover:-translate-y-2 border border-black/10">
      {/* ICON */}
      <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4 opacity-90">
        {icon}
      </div>

      {/* TITLE */}
      <h2 className="text-xl font-poppins font-semibold text-center mb-3">
        {title}
      </h2>

      {/* TEXT */}
      <p className="text-sm lg:text-base font-roboto text-center leading-relaxed text-black/80">
        {paragraph}
      </p>
    </div>
  );
}
