import Link from "next/link";
import RoadmapCard from "../components/roadmap";
import roadmaps from '@/data/roadmaps'

export default function Home() {
  const finanzasCategory = roadmaps.find(category => category.category === 'finanzas');
  const finanzasRoadmaps = finanzasCategory ? finanzasCategory.items : [];

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-[50px] px-[50px] py-[80px] md:flex-row">
        <div className="w-full max-w-[750px] justify-center items-center hidden md:flex">
          <img src="/Image.png" alt="" className="rounded-[15px]" />
        </div>
        <div className="w-full">
          <p className="text-lg"><b>INTELLIMIND, TU NUEVA RED DE APRENDIZAJE</b></p>
          <h1 className="text-4xl pt-[10px] pb-[25px]"><b>Una revolución ante los antiguos métodos de aprendizaje</b></h1>
          <p className="text-second-gray">IntelliMind es una plataforma de Educación 100% online y gratuita, donde podrás acceder a cientos de formaciones especificas, a diferencia de cualquier otra plataforma, IntelliMind se especializa en presentar roadmaps completos y 100% efectivos, que no solo te darán los cimientos básicos y fundamentales, también te ayudarán a poder vivir de ello.</p>
          <Link href='/roadmaps' className="inline-block bg-black text-white py-[15px] px-[45px] rounded-[10px] mt-[25px] text-lg border-[1px] md:hover:bg-white md:hover:text-black md:hover:border-black">Empieza a Aprender</Link>
        </div>
      </section>
      
      <section className="py-[80px] px-[50px]">
        <h2 className="text-center text-5xl mb-[25px]"><b>Los #1 en IntelliMind</b></h2>
        <div className="flex flex-row flex-wrap gap-[25px] justify-center items-center">
          {finanzasRoadmaps.map((roadmap, index) => (
            <RoadmapCard 
              key={index}
              title={roadmap.name}
              previewContent={roadmap.previewContent} 
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link href='/roadmaps' className="inline-block bg-black text-white py-[15px] px-[45px] rounded-[10px] mt-[25px] text-lg border-[1px] md:hover:bg-white md:hover:text-black md:hover:border-black">Empieza a aprender</Link>
        </div>
      </section>

      <section className="py-[80px] px-[50px] text-center">
        <div className="max-w-[750px] mx-auto">
          <h1 className="text-4xl pt-[10px] pb-[25px]"><b>Por qué elegir a IntelliMind?</b></h1>
          <p className="text-second-gray">Nos especializamos en ofrecerte roadmaps completos, no solo te proporcionamos una guía básica de lo que deberías de saber, te proporcionamos una guía muy extensa para que puedas aprender, practicar, y obtener maravillosos resultados de tu aprendizaje.</p>
          <ul className="w-full md:w-[75%] mx-auto text-start text-lg flex flex-col justify-center items-start gap-[10px] my-[25px]">
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>100% Online y Gratuito</b><span className="text-second-gray"> No tendrás que pagar ni un solo centavo ya que todo el contenido ha sido recolectado de plataformas online y gratuitas.</span></p>
            </li>
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>Roadmaps Completos y Estructurados</b><span className="text-second-gray"> Los roadmaps están lo suficiente bien estructurados para no perderte nada del contenido de calidad.</span></p>
            </li>
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>No Perderás Tiempo</b><span className="text-second-gray"> Nuestros roadmaps están estructurados de la mejor manera para que cada cosa que aprendas valga verdaderamente la pena, no te presentaremos contenido basura, estafas, mentiras o rellenos.</span></p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
