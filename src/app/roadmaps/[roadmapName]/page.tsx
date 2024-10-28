'use client';

import { FC } from 'react';
import roadmaps from "@/data/roadmaps";
import slugify from '@/components/slugify';
import { useParams } from 'next/navigation';

interface RoadmapPageProps {}

const RoadmapPage: FC<RoadmapPageProps> = () => {
    const { roadmapName } = useParams();

    const roadmap = roadmaps
        .flatMap(category => category.items)
        .find((r) => slugify(r.name) === roadmapName);

    if (!roadmap) {
        return <p>Roadmap no encontrado</p>;
    }

    return (
        <>
            <section className="py-[80px] px-[50px] text-second-gray">
                <div className="max-w-[750px] mx-auto">
                    <p className="flex justify-start items-center gap-[10px]">
                        <a href="/roadmaps">Roadmaps</a>
                        <span>/</span>
                        <a href={`/roadmaps/${slugify(roadmap.name)}`}>{roadmap.name}</a>
                    </p>
                    <div className="my-[25px] flex flex-col justify-center items-center gap-[10px]">
                        <h1 className="text-5xl text-black text-center"><b>{roadmap.name}</b></h1>
                        <div className="flex justify-center items-center gap-[20px]">
                            <p>10 Octubre 2024</p>
                            <span>·</span>
                            <p>Por Blitzkreig</p>
                        </div>
                    </div>
                    <div className='bg-gray rounded-[15px] p-[15px]'>
                        <h2 className='text-3xl'><b>Índice</b></h2>
                        <ul className='pl-[25px]'>
                            <li><b className='text-lg'><a href="">Tema</a></b></li>
                            <li>
                                <b className='text-lg'><a href="">Tema</a></b>
                                <ul className='pl-[25px]'>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                </ul>
                            </li>
                            <li><b className='text-lg'><a href="">Tema</a></b></li>
                            <li>
                                <b className='text-lg'><a href="">Tema</a></b>
                                <ul className='pl-[25px]'>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                    <li className=''><b><a href="">SubTema</a></b></li>
                                </ul>
                            </li>
                            <li><b className='text-lg'><a href="">Tema</a></b></li>
                            <li><b className='text-lg'><a href="">Tema</a></b></li>
                            <li><b className='text-lg'><a href="">Tema</a></b></li>
                        </ul>
                    </div>
                    <section className='my-[15px]'>
                        <h2 className='text-3xl'><b>Acerca de este Roadmap</b></h2>
                        <p className="my-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure culpa suscipit quas. Ratione non itaque necessitatibus rem, eligendi temporibus possimus ex neque excepturi? Corporis, quisquam? Molestiae sed aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia ut quos accusamus sed, saepe eaque, fugiat odio doloribus quidem minus enim incidunt nesciunt ex! Id veritatis numquam consequuntur beatae.</p>
                    </section>
                    <section className='my-[15px]'>
                        <h2 className='text-3xl'><b>La realidad de Aprender {roadmap.name}</b></h2>
                        <p className="my-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure culpa suscipit quas. Ratione non itaque necessitatibus rem, eligendi temporibus possimus ex neque excepturi? Corporis, quisquam? Molestiae sed aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia ut quos accusamus sed, saepe eaque, fugiat odio doloribus quidem minus enim incidunt nesciunt ex! Id veritatis numquam consequuntur beatae.</p>
                    </section>
                    <section className='my-[15px]'>
                        <h2 className='text-3xl'><b>Aprendiendo a Aprender</b></h2>
                        <p className="my-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure culpa suscipit quas. Ratione non itaque necessitatibus rem, eligendi temporibus possimus ex neque excepturi? Corporis, quisquam? Molestiae sed aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia ut quos accusamus sed, saepe eaque, fugiat odio doloribus quidem minus enim incidunt nesciunt ex! Id veritatis numquam consequuntur beatae.</p>
                        <img src="/replacement-image.svg" alt="" className="my-[15px] max-w-[75%] mx-auto" />
                        <div className="my-[15px]">
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea, corrupti, nemo veniam dolore tempore facere quia, ab similique sint eos repudiandae dolorem quis. Totam aliquam odio repudiandae illo? Quidem, impedit.</p>
                            <ul className='list-disc pl-[50px] my-[15px]'>
                                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus adipisci!.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit amet..</li>
                                <li>Lorem ipsum dolor sit amet consectetur.</li>
                                <li>Lorem ipsum dolor sit amet..</li>
                            </ul>
                        </div>
                    </section>
                    <section className='my-[15px]'>
                        <h2 className='text-3xl'><b>Resumen Final</b></h2>
                        <p className="my-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure culpa suscipit quas. Ratione non itaque necessitatibus rem, eligendi temporibus possimus ex neque excepturi? Corporis, quisquam? Molestiae sed aliquid rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quia ut quos accusamus sed, saepe eaque, fugiat odio doloribus quidem minus enim incidunt nesciunt ex! Id veritatis numquam consequuntur beatae.</p>
                    </section>
                </div>
            </section>
        </>
    );
}

export default RoadmapPage;
