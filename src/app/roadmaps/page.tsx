import RoadmapCard from "../../components/roadmap";
import roadmaps from "@/data/roadmaps";

export default function Roadmaps() {
    const informaticaCategory = roadmaps.find(category => category.category === 'Informática');
    const informaticaRoadmaps = informaticaCategory ? informaticaCategory.items : [];

    const FinanceCategory = roadmaps.find(category => category.category === 'Finanzas');
    const FinanceRoadmaps = FinanceCategory ? FinanceCategory.items : [];

    return (
        <>
            <section className="pt-[80px] px-[50px]">
                <h1 className="text-center text-5xl mb-[25px]"><b>Full Roadmaps</b></h1>
            </section>
            <section className="py-[25px] px-[50px]">
                <div className="relative border-t border-t-second-gray bg-gray my-[50px]">
                    <span className="bg-black text-white h-[40px] py-[5px] px-[10px] rounded-[5px] flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 -top-[25px]">Los #1 en Blogpost's</span>
                </div>
                <div className="flex flex-row flex-wrap gap-[25px] justify-center items-center">
                    {informaticaRoadmaps.map((roadmap, index) => (
                        <RoadmapCard
                            key={index}
                            title={roadmap.name}
                            previewContent={roadmap.previewContent}
                        />
                    ))}
                </div>
            </section>
            <section className="py-[25px] px-[50px]">
                <div className="relative border-t border-t-second-gray bg-gray my-[50px]">
                    <span className="bg-black text-white h-[40px] py-[5px] px-[10px] rounded-[5px] flex justify-center items-center absolute left-1/2 transform -translate-x-1/2 -top-[25px]">Finanzas e Inversiones</span>
                </div>
                <div className="flex flex-row flex-wrap gap-[25px] justify-center items-center">
                    {FinanceRoadmaps.map((roadmap, index) => (
                        <RoadmapCard
                            key={index}
                            title={roadmap.name}
                            previewContent={roadmap.previewContent}
                        />
                    ))}
                </div>
            </section>
        </>
    );
}
