import {Link} from "react-scroll";

export default function AboutMe() {
    return (
        <div
            className="flex flex-col lg:flex-row justify-center items-center py-16 lg:py-32 px-5 space-y-10 lg:space-y-0 lg:space-x-10 text-charcoal">
            <div className="flex justify-center w-full lg:w-1/2">
                <img
                    src="/aboutme.png"
                    alt="About Me"
                    className="w-full h-auto max-w-xs lg:max-w-md"
                />
            </div>
            <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4">
                <h1 className="text-3xl md:text-4xl lg:text-5xl pb-4 tracking-widest text-charcoal text-center">
                    About Me
                </h1>
                <div className="text-center italic text-charcoal pb-4">
                    <p className="text-lg md:text-xl">
                        Passionate about transforming ideas into reality through code. I thrive in
                        collaborative environments, where problem-solving and creativity meet to deliver innovative
                        solutions. Familiar with agile methodologies, I adapt quickly to changing requirements and
                        contribute effectively to iterative development cycles. Always eager to expand my skills and
                        stay at the forefront of technology.
                    </p>
                </div>
                <Link
                    to="contact"
                    smooth={true}
                    duration={500}
                    className="bg-rose hover:bg-olive text-lg md:text-xl border-2 border-charcoal shadow-xl px-6 py-2 rounded-full cursor-pointer"
                >
                    Contact Me
                </Link>
            </div>
        </div>
    );
}
