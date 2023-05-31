import Image from "next/image";
import Container from "./Container"
import image from '../../public/image/img-airbnb.png'
import { AiFillEye } from 'react-icons/ai'
import { BsGithub } from 'react-icons/bs'

const list = [
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: image,
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['React', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    }
]

const Project = () => {
    return (
        <Container id="project">
            <h2 className="text-4xl text-sky-300 font-bold text-center mb-12 self-end">
                Projetos
            </h2>
            <div className="
                grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-12 transition-all
            ">
                {list.map((item, index) => (
                    <div key={index} className="group bg-dark-2 p-6 flex flex-col items-center gap-3 rounded-lg place-content-center shadow-zinc-950 shadow-lg transition-all hover:scale-105">
                        <div className="aspect-auto relative">
                            <Image
                                alt="imge"
                                src={item.image}
                                className="w-full group-hover:opacity-75 transition-all"
                            />
                            <div className="group-hover:block hidden absolute z-auto w-full h-full top-0 transition-all">
                                <div className="flex gap-3 justify-center items-center h-full">

                                    <a href={item.urlGithub} target="_blank">
                                        <div
                                            title="GitHub"
                                            className="rounded-full bg-dark-2 hover:bg-sky-300 border-2 border-sky-300 p-2 text-sky-300 hover:text-zinc-950 shadow-zinc-950 shadow-md active:scale-95 cursor-pointer"
                                        >
                                            <BsGithub href={item.urlGithub} size={40}/>
                                        </div>
                                    </a>
                                    {item.urlSite && (
                                        <a href={item.urlSite} target="_blank">
                                            <div
                                                title="Site"
                                                className="rounded-full bg-dark-2 hover:bg-sky-300 border-2 border-sky-300 p-2 text-sky-300 hover:text-zinc-950 shadow-zinc-950 shadow-md active:scale-95 cursor-pointer"
                                            >
                                                <AiFillEye size={40}/>
                                            </div>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                        <p className="text-xl text-center text-zinc-50">
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