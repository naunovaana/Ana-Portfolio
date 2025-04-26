import Navbar from "../components/Navbar.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowUpFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    return (
        <div className="h-full w-full pb-24">
            <div className="flex justify-center flex-col items-center pt-4 pb-2 text-charcoal">
                <h3 className="italic rounded-full text-lg px-4">Hello</h3>
                <div
                    className="flex flex-col items-center font-bold tracking-widest uppercase w-fit text-3xl md:text-5xl lg:text-6xl">
                    <h1>I'm <span className="text-rose">Ana</span></h1>
                    <h1 className="typing-effect">
                        <span
                            className="block sm:inline">Full Stack</span>
                        <span className="block sm:inline"> Developer</span>
                    </h1>
                </div>
                <div
                    className="flex justify-between flex-col lg:flex-row text-xl pt-4 px-2 italic items-center lg:space-y-0 space-y-4">
                    <div className="text-center lg:text-left w-full lg:w-[30%]">
                        <p>
                            Driven by curiosity and fueled by creativity. I love turning complex problems into elegant
                            solutions and always seek opportunities to expand my knowledge.
                        </p>
                    </div>
                    <div className="flex flex-col items-center px-2 w-[80%] md:w-[60%] lg:w-[30%]">
                        <div>
                            <img src="/ana_avatar1.jpg" alt="ana" className="rounded-t-full"/>
                        </div>
                        <div
                            className="bg-rose hover:bg-olive px-6 py-2 rounded-b-full flex justify-center text-charcoal text-lg border border-charcoal w-full sm:w-[60%] md:w-[50%]">
                            <a
                                href="/Ana_Naunova_CV.pdf"
                                download="Ana Naunova CV"
                                className="flex items-center justify-center gap-2"
                            >
                                Portfolio <FontAwesomeIcon icon={faArrowUpFromBracket}/>
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-[30%] text-center lg:text-right rounded-l-full">
                        <p>
                            I’m on a journey to craft impactful digital experiences and continually strive to deliver
                            innovative solutions. Dive in and see what I’ve been working on.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}
