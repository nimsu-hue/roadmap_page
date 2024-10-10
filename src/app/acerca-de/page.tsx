export default function AcercaDe() {
    return (
        <>
            <section className="flex flex-col justify-center items-center gap-[50px] px-[50px] py-[80px] md:flex-row">
                <div className="w-full">
                    <h1 className="text-4xl pb-[25px]"><b>Lorem, ipsum dolor.</b></h1>
                    <p className="text-second-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi quibusdam minus odit dolor rem perferendis doloremque fuga unde totam ipsa ullam delectus vero enim quas quidem, molestias minima nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam et debitis vel repellat laudantium neque eum quas. Sequi, enim. Non, eligendi quam. Debitis, suscipit dolores veniam corrupti iusto mollitia.</p>
                    <p className="text-second-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur qui sint veritatis! Culpa praesentium voluptates hic, rerum aut eveniet harum iusto. Beatae atque quam reprehenderit quis blanditiis placeat consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odit tempora hic tenetur non in, id libero recusandae quis expedita adipisci sunt architecto numquam commodi similique, iure veritatis repudiandae voluptates.</p>
                </div>
                <div className="w-full max-w-[750px] flex justify-center items-center">
                    <img src="/replacement-image.svg" alt="One image" className="rounded-[15px]" />
                </div>
            </section>
            <section className="flex flex-col justify-center items-center gap-[50px] px-[50px] py-[80px] md:flex-row">
                <div className="w-full block md:hidden">
                    <h1 className="text-4xl pb-[25px]"><b>Lorem, ipsum dolor.</b></h1>
                    <p className="text-second-gray">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti reiciendis obcaecati debitis numquam perferendis, nisi ipsa quod nihil quam, temporibus eos vel accusantium veniam adipisci aliquid quae magnam modi sint!</p>
                </div>
                <div className="w-full max-w-[750px] flex justify-center items-center">
                    <img src="/replacement-image.svg" alt="One image" className="rounded-[15px]" />
                </div>
                <div className="w-full">
                    <h1 className="text-4xl pb-[25px] hidden md:block"><b>Lorem, ipsum dolor.</b></h1>
                    <p className="hidden md:block text-second-gray">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro consequatur qui sint veritatis! Culpa praesentium voluptates hic, rerum aut eveniet harum iusto. Beatae atque quam reprehenderit quis blanditiis placeat consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, odit tempora hic tenetur non in, id libero recusandae quis expedita adipisci sunt architecto numquam commodi similique, iure veritatis repudiandae voluptates.</p>
                    <p className="text-second-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quasi quibusdam minus odit dolor rem perferendis doloremque fuga unde totam ipsa ullam delectus vero enim quas quidem, molestias minima nam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, totam et debitis vel repellat laudantium neque eum quas. Sequi, enim. Non, eligendi quam. Debitis, suscipit dolores veniam corrupti iusto mollitia.</p>
                </div>
            </section>
        </>
    );
}