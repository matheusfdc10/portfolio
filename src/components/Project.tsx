import Image from "next/image";
import Container from "./Container"
import image from '../../public/image/img-airbnb.png'

const list = [
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
]

const Project = () => {
    return (
        <Container id="project">
            <h2 className="text-4xl text-sky-300 font-bold text-center mb-12 self-end">
                Projetos
            </h2>
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8  
            ">
                {list.map((item, index) => (
                    <div key={index} className="bg-dark-2 p-6 flex flex-col items-center gap-3 rounded-lg shadow-zinc-950 shadow-lg transition-all hover:transform-1">
                        <Image
                            alt="imge"
                            src={item.image}
                            className="w-full"
                        />
                        <p className="text-lg text-center text-zinc-50 break-all">
                            {item.title}
                        </p>
                        <span className="text-center text-zinc-400">
                            {item.topics.map((topic) => {
                                if (item.topics[0] === topic) {
                                    return (
                                        `${topic}`
                                    )
                                }
                                return (
                                    ` | ${topic}`
                                )
                            })}
                        </span>
                    </div>
                ))}
            </div>
        </Container>
    )
}

export default Project;