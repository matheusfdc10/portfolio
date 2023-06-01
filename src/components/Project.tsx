
import Container from "./Container"
import CardProject from "./CardProject";

const list = [
    {
        title: 'Clone do Airbnb',
        image: 'img-airbnb.png',
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: '',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: 'img-airbnb.png',
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: 'img-airbnb.png',
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Clone do Airbnb',
        image: 'img-airbnb.png',
        description: 'Clone do Airbnb com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/airbnb-next-mongodb',
        urlSite: 'https://airbnb-next-mongodb.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
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
                    <CardProject
                        key={`${item.title} - ${index}`}
                        data={item}
                    />
                ))}
            </div>
        </Container>
    )
}

export default Project;