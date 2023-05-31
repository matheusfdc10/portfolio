import Container from "./Container"
import Image from "next/image";

const About = () => {
    return (
        <Container id="about" >
            <div className="grid lg:grid-cols-2 h-full grid-cols-1 items-center justify-items-center gap-12 sm:pt-8">
                <Image
                    alt="image"
                    src="https://github.com/matheusfdc10.png"
                    width={350}
                    height={350}
                    className="rounded-[50%] shadow-2xl transform transition-all hover:scale-105"
                    style={{ boxShadow: '0 0 2rem black'}}
                />
                <div className="-order-1 lg:order-1">
                    <h2 className="text-4xl text-sky-300 font-bold text-center lg:text-start">
                        Sobre
                    </h2>
                    <p className="text-base text-zinc-50 mt-8 break-all">
                        Sou um Desenvolvedor Front-end Júnior com amplo conhecimento em diversas tecnologias, incluindo ReactJS, NextJS, TailwindCSS, Styled-components, ExpressJS, NestJS, Prisma, MongoDB e outras. Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Estácio de Sá e estou constantemente aprimorando minhas habilidades. Meu objetivo é me tornar um desenvolvedor full stack, expandindo minha expertise para além do front-end. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente.
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default About;