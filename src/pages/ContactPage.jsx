import ContactForm from "../components/ContactForm.jsx";

export default function ContactPage() {
    return (
        <div className="flex flex-col pb-10 pt-10 lg:px-0 px-5">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-center italic tracking-widest pb-16">
                That's all folks!
            </h1>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0">
                <div className="flex pt-10 items-center justify-center md:w-[40%]">
                    <img
                        src="/spotlight5.png"
                        className="md:h-[400px] lg:h-[500px] w-auto hidden md:block"
                        alt="Spotlight"
                    />
                </div>
                <ContactForm/>
            </div>
        </div>
    );
}
