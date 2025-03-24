import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function ProjectsCard({ image, paragraph, title, link }) {
    return (
        <div className="relative group rounded-lg w-full sm:w-[300px] md:w-[300px] 2xl:w-[400px] overflow-hidden min-h-[400px] lg:h-[470px] border-black">
            <div
                className="absolute inset-0 bg-cover bg-center object-cover"
                style={{backgroundImage: `url(${image})`}}>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div
                    className="absolute inset-0 bg-charcoal/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center text-center p-6 z-10">
                    <h1 className="text-olive text-2xl font-bold mb-2">
                        {title} <FontAwesomeIcon icon={faArrowUpFromBracket} className="w-5 h-5" />
                    </h1>
                    <p className="text-olive text-xl italic flex items-center gap-2">
                        {paragraph}
                    </p>
                </div>
            </a>
            <div className="invisible p-6">
                <h1 className="text-2xl font-semibold">{title}</h1>
                <p className="text-xl italic">{paragraph}</p>
            </div>
        </div>
    );
}
