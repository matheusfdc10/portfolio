import Container from "./Container"
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, } from 'react-icons/di'
import { SiStyledcomponents, SiPrisma, SiMongodb, SiTailwindcss, SiExpress, SiNestjs } from 'react-icons/si'
import { TbBrandNextjs,  } from 'react-icons/tb'

const list = [
    {
        title: 'JavaScript',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiJavascript size={120} />,
    },
    {
        title: 'CSS3',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiCss3 size={120} />,
    },
    {
        title: 'HTML5',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiHtml5 size={120} />,
    },
    {
        title: 'Node.JS',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiNodejs size={120} />,
    },
    {
        title: 'ReactJS',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
    {
        title: 'NextJS',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <TbBrandNextjs size={120} />,
    },
    {
        title: 'TailwindCSS',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <SiTailwindcss size={120} />,
    },
    {
        title: 'Styled-Components',
        description: 'O Styled Components é uma biblioteca do React e do React Native que nos permite criar componentes de estilo ao escrever códigos CSS dentro de um arquivo JavaScript.',
        icon: <SiStyledcomponents size={120} />,
    },
    {
        title: 'Express',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <SiExpress size={120} />,
    },
    {
        title: 'NestJS',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <SiNestjs size={120} />,
    },
    {
        title: 'Prisma',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <SiPrisma size={120} />,
    },
    {
        title: 'MongoDB',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <SiMongodb size={120} />,
    },
]

const Knowledge = () => {
    return (
        <Container id="knowledge" bg>
            <h2 className="text-4xl text-sky-300 font-bold text-center mb-12 self-end">
                Conhecimentos
            </h2>
            <div className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12  
            ">
                {list.map((item, index) => (
                    <div key={index} title={item.title} className="bg-dark-1 p-6 flex flex-col items-center gap-3 rounded-lg shadow-zinc-950 shadow-xl transition-all hover:bg-dark-0">
                        {item.icon}
                        <h3 className="text-center text-2xl font-semibold text-zinc-50">
                            {item.title}
                        </h3>
                        <p className="text-zinc-400 break-all">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Knowledge;