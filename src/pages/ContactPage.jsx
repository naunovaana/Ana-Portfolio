import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
  return (
    <section className="w-full bg-[#131217] text-white pt-28 pb-5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="font-poppins text-4xl lg:text-5xl font-semibold">
            Let’s Work Together
          </h2>

          <p className="font-roboto text-white/60 mt-4 max-w-2xl mx-auto">
            If you have an opportunity, collaboration idea, or just want to
            connect — feel free to reach out.
          </p>
        </div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* LEFT INFO */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-4">
            <h3 className="font-poppins text-2xl font-semibold">
              Open to opportunities
            </h3>

            <p className="font-roboto text-white/70 leading-relaxed">
              I’m currently looking for junior frontend / UI-UX roles. I enjoy
              building clean, user-focused interfaces and real-world projects.
            </p>

            <div className="text-white/50 text-sm">
              Based in North Macedonia • Available remotely and onsite
            </div>
          </div>

          {/* FORM (UNCHANGED FUNCTIONALLY) */}
          <div className="lg:w-1/2 w-full">
            <ContactForm />
          </div>
        </div>

        {/* FOOTER INSIDE SECTION */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center text-white/40 text-sm">
          © {new Date().getFullYear()} Ana Naunova — Built with React & Tailwind
        </div>
      </div>
    </section>
  );
}
