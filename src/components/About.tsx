
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
                        Sou um Desenvolvedor Full Stack com conhecimentos práticos em tecnologias modernas como ReactJS, NextJS, Angular, NestJS, PostgreSQL, MongoDB e Python e outras. Formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá. Estou constantemente buscando aperfeiçoar minhas habilidades e me atualizar com as melhores práticas. Meu objetivo é aplicar esse conhecimento em um ambiente profissional, contribuindo para o desenvolvimento de soluções eficientes e inovadoras, e crescer como profissional de tecnologia. Sou dedicado e proativo, sempre em busca de desafios que me permitam aprender e agregar valor às equipes e projetos.
                    </p>
                </div>
            </div>
        </section>
        
    )
}

export default About;