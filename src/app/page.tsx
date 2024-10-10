import Link from "next/link";
import RoadmapCard from "../components/roadmap";
import roadmaps from '@/data/roadmaps'

export default function Home() {
  const informaticaCategory = roadmaps.find(category => category.category === 'Informática');
  const informaticaRoadmaps = informaticaCategory ? informaticaCategory.items : [];

  const FinanceCategory = roadmaps.find(category => category.category === 'Finanzas');
  const FinanceRoadmaps = FinanceCategory ? FinanceCategory.items : [];

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-[50px] px-[50px] py-[80px] md:flex-row">
        <div className="w-full max-w-[750px] justify-center items-center hidden md:flex">
          <img src="/replacement-image.svg" alt="One image" className="rounded-[15px]" />
        </div>
        <div className="w-full">
          <p className="text-lg"><b>Lorem ipsum dolor sit amet.</b></p>
          <h1 className="text-5xl pt-[10px] pb-[25px]"><b>Lorem, ipsum dolor.</b></h1>
          <p className="text-second-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur qui sint veritatis! Culpa praesentium voluptates hic, rerum aut eveniet harum iusto. Beatae atque quam reprehenderit quis blanditiis placeat consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odit tempora hic tenetur non in, id libero recusandae quis expedita adipisci sunt architecto numquam commodi similique, iure veritatis repudiandae voluptates.</p>
          <p className="text-second-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi quibusdam minus odit dolor rem perferendis doloremque fuga unde totam ipsa ullam delectus vero enim quas quidem, molestias minima nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam et debitis vel repellat laudantium neque eum quas. Sequi, enim. Non, eligendi quam. Debitis, suscipit dolores veniam corrupti iusto mollitia.</p>
          <Link href='/roadmaps' className="inline-block bg-black text-white py-[15px] px-[45px] rounded-[10px] mt-[25px] text-lg border-[1px] md:hover:bg-white md:hover:text-black md:hover:border-black">Lorem, ipsum.</Link>
        </div>
      </section>
      
      <section className="py-[80px] px-[50px]">
        <h2 className="text-center text-5xl mb-[25px]"><b>Los #1 en Blogpost's</b></h2>
        <div className="flex flex-row flex-wrap gap-[25px] justify-center items-center">
          {informaticaRoadmaps.map((roadmap, index) => (
            <RoadmapCard 
              key={index}
              title={roadmap.name}
              previewContent={roadmap.previewContent} 
            />
          ))}
        </div>
        <div className="flex justify-center items-center">
          <Link href='/roadmaps' className="inline-block bg-black text-white py-[15px] px-[45px] rounded-[10px] mt-[25px] text-lg border-[1px] md:hover:bg-white md:hover:text-black md:hover:border-black">Lorem, ipsum.</Link>
        </div>
      </section>

      <section className="py-[80px] px-[50px] text-center">
        <div className="max-w-[750px] mx-auto">
          <p className="text-lg"><b>Lorem ipsum dolor sit amet.</b></p>
          <h1 className="text-5xl pt-[10px] pb-[25px]"><b>Lorem, ipsum dolor.</b></h1>
          <p className="text-second-gray">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio atque quod nemo minus itaque suscipit aut recusandae iste, ducimus odio qui fuga temporibus natus quisquam deserunt sit aspernatur! Modi, quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut omnis harum, impedit labore quas modi itaque est. Ea cupiditate pariatur explicabo placeat impedit hic, tempore doloribus voluptates repellendus aliquam voluptatibus?</p>
          <ul className="w-full md:w-[70%] mx-auto text-start text-lg flex flex-col justify-center items-start gap-[10px] my-[25px]">
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>Lorem, ipsum dolor</b><span className="text-second-gray"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, velit.</span></p>
            </li>
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>Lorem, ipsum dolor</b><span className="text-second-gray"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, velit.</span></p>
            </li>
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>Lorem, ipsum dolor</b><span className="text-second-gray"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, velit.</span></p>
            </li>
            <li className="flex justify-start items-start gap-[10px]">
              <img src="/check.svg" alt="Beneficios" className="w-[60px]" />
              <p><b>Lorem, ipsum dolor</b><span className="text-second-gray"> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, velit.</span></p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
