import Link from "next/link";
import slugify from "./slugify";

interface RoadmapCardProps {
    title: string;
    previewContent: string;
}

const RoadmapCard: React.FC<RoadmapCardProps> = (props) => {
    return (
        <div className="max-w-[500px] max-h-[250px] rounded-[10px] p-[10px] shadow-lg">
            <h2 className="text-xl"><b>{props.title}</b></h2>
            <p className="text-second-gray">{props.previewContent}</p>
            <Link href={`/roadmaps/${slugify(props.title)}`} className="inline-block bg-black text-white py-[5px] px-[15px] rounded-[5px] mt-[15px]">Empezar</Link>
        </div>
    );
}

export default RoadmapCard;
