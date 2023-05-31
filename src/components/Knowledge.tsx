import Container from "./Container"
import { DiReact } from 'react-icons/di'

const list = [
    {
        title: 'React',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
    {
        title: 'React',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
    {
        title: 'React',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
    {
        title: 'React',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
    {
        title: 'React',
        description: 'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.',
        icon: <DiReact size={120} />,
    },
]

const Knowledge = () => {
    return (
        <Container id="knowledge" bg>
            <h2 className="text-4xl text-sky-300 font-bold text-center mb-12 self-end">
                Conhecimentos
            </h2>
            <div className="
                grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8  
            ">
                {list.map((item, index) => (
                    <div key={index} className="bg-dark-1 p-6 flex flex-col items-center gap-3 rounded-lg shadow-zinc-950 shadow-xl transition-all hover:bg-dark-0">
                        {item.icon}
                        <h3 className="text-center text-3xl font-medium text-zinc-50">
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