import RoadmapCard from "../../components/roadmap";
import roadmaps from "@/data/roadmaps";

export default function Roadmaps() {
    const financeCategory = roadmaps.find(category => category.category === 'finanzas');
    const financeRoadmaps = financeCategory ? financeCategory.items : [];

    return (
        <>
            <section className="pt-[80px] px-[50px]">
                <h1 className="text-center text-5xl mb-[25px]"><b>Full Roadmaps</b></h1>
            </section>
            <section className="py-[25px] px-[50px]">
                <div className="relative border-t border-t-second-gray bg-gray my-[50px] z-10">
                    <span className="bg-black text-white h-[40px] py-[5px] px-[10px] rounded-[5px] flex justify-center items-center absolute z-20 left-1/2 transform -translate-x-1/2 -top-[25px]">Los #1 en IntelliMind</span>
                </div>
                <div className="flex flex-row flex-wrap gap-[25px] justify-center items-center">
                    {financeRoadmaps.map((roadmap, index) => (
                        <RoadmapCard
                            key={index}
                            title={roadmap.name}
                            previewContent={roadmap.previewContent}
                        />
                    ))}
                </div>
            </section>
            <section className="py-[25px] px-[50px]"></section>
        </>
    );
}
