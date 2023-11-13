
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className='bg-dark-1 min-h-[calc(100vh-5rem)] px-7 sm:px-12 pb-20 pt-16 lg:pt-20 grid'>
            <div className='max-w-[1440px] m-auto mt-4 sm:mt-0 grid lg:grid-cols-2 h-full grid-cols-1 gap-12 content-center justify-items-center items-center'>
                <Image
                    alt="image"
                    src="https://github.com/matheusfdc10.png"
                    width={400}
                    height={400}
                    className="rounded-[50%] shadow-2xl shadow-neutral-950 transform transition-all hover:scale-105"
                />
                <div className="-order-1 lg:order-1">
                    <h2 className="text-4xl text-sky-300 font-bold text-center lg:text-start">
                        Sobre
                    </h2>
                    <p className="text-base text-zinc-50 mt-8  text-justify">
                        Sou um Desenvolvedor Front-end Júnior com amplo conhecimento em diversas tecnologias, incluindo ReactJS, NextJS, TailwindCSS, Styled-components, ExpressJS, NestJS, Prisma, MongoDB, Python e outras. Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e estou constantemente aprimorando minhas habilidades. Meu objetivo é me tornar um desenvolvedor full stack, expandindo minha expertise para além do front-end. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default About;