import CardProject from "./CardProject";

const list = [
    {
        title: 'Lousa digital',
        image: 'img-board.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/board',
        urlSite: 'https://board-rho-gules.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Convex', 'Liveblocks', 'Shadcn-ui', 'Clerk-auth']
    },
    {
        title: 'Cardápio digital',
        image: 'img-cardapio-digital.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/cardapio-digital-menu',
        urlSite: 'https://cardapio-digital-menu.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'API', 'Axios']
    },
    {
        title: 'Cardápio digital Admin',
        image: 'img-cardapio-digital-admin.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/cardapio-digital-admin',
        urlSite: 'https://cardapio-digital-admin.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'API', 'Axios', 'MongoDB', 'Prisma']
    },
    {
        title: 'Discord Clone',
        image: 'img-discord.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/discord-clone',
        urlSite: 'https://discord-clone-production-039e.up.railway.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'API', 'Prisma', "MongoDB", "Socket-io", "Chadcnui"]
    },
    {
        title: 'E-commerce Store',
        image: 'img-ecommerce-store.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/ecommerce-store',
        urlSite: 'https://ecommerce-store-nu-weld.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'API']
    },
    {
        title: 'E-commerce Admin',
        image: 'img-ecommerce-admin.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/ecommerce-admin',
        urlSite: 'https://ecommerce-admin-ashy.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MySQL']
    },
    {
        title: 'Gênio | IA Saas',
        image: 'img-ia-saas.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/ia-saas',
        urlSite: 'https://genio-ia-saas.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'Openai-api', 'MongoDB']
    },
    {
        title: 'Meu Portfólio',
        image: 'img-portfolio.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/portfolio',
        urlSite: 'https://portfolio-matheusfdc.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS']
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
        title: 'Clone do Messenger',
        image: 'img-messenger.png',
        description: 'Clone do Messenger com Next.js e Typescript',
        urlGithub: 'https://github.com/matheusfdc10/messenger-clone',
        urlSite: 'https://messenger-clone-five.vercel.app',
        topics: ['ReactJS', 'NextJS', 'Typescript', 'TailwindCSS', 'Prisma', 'MongoDB' ]
    },
    {
        title: 'Shows do RockInRio e Lollapalooza',
        image: 'img-shows.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/shows-react',
        urlSite: 'https://show-react01.netlify.app/',
        topics: ['ReactJS', 'Typescript', 'Styled-Components', 'Firebase' ]
    },
    {
        title: 'PokeNext',
        image: 'img-pokenext.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/pokenext',
        urlSite: 'https://pokenext-chi-vert.vercel.app/',
        topics: ['NextJS', 'CSS', 'API' ]
    },
    {
        title: 'Biblioteca Árvore',
        image: 'img-biblioteca.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/biblioteca-react',
        urlSite: 'https://biblioteca-react-alpha.vercel.app/',
        topics: ['ReactJS', 'Styled-Components', 'Typescript', 'API' ]
    },
    {
        title: 'Clone do WhatsApp',
        image: 'img-whatsapp.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/clone-whatsapp',
        urlSite: 'https://clone-whatsapp-delta.vercel.app/',
        topics: ['ReactJS', 'Styled-Components', 'Firebase' ]
    },
    {
        title: 'Cardápio online',
        image: 'img-cardapio.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/cardapio-react-web',
        urlSite: 'https://cardapiorestaurante.vercel.app/',
        topics: ['ReactJS', 'Styled-Components', 'Express', 'JWT', 'BcryptJS', 'Multer', 'MongoDB']
    },
    {
        title: 'AluraTube',
        image: 'img-aluratube.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/aluratube',
        urlSite: 'https://aluratube-gamma-virid.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'Styled-Components', 'Supabase']
    },
    {
        title: 'Desfazer e refazer',
        image: 'img-desfazer.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/desfazer-refazer',
        urlSite: 'https://desfazer-refazer.vercel.app/',
        topics: ['ReactJS', 'CSS3', 'Typescript']
    },
    {
        title: 'Portal do Locatário',
        image: 'img-portal-locatario.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/Portal-imobiliaria',
        urlSite: 'https://portal-imobiliaria.vercel.app/login',
        topics: ['ReactJS', 'Styled-Components']
    },
    {
        title: 'Sistema para salvar repositorios do GitHub',
        image: 'img-repo-github.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/sistema-de-login-repositorio-front',
        urlSite: 'https://sistema-de-login-repositorio-front.vercel.app/login',
        topics: ['ReactJS', 'Styled-Components', 'Express', 'JWT', 'BcryptJS', 'MongoDB']
    },
    {
        title: 'Pokedex',
        image: 'img-pokedex.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/pokedex',
        urlSite: 'https://pokedex-psi-two.vercel.app/',
        topics: ['ReactJS', 'Styled-Components', 'API', 'Axios']
    },
    {
        title: 'Campeões do League of Legends',
        image: 'img-lol.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/league-of-legends',
        urlSite: 'https://league-of-legends-kappa.vercel.app/',
        topics: ['ReactJS', 'Styled-Components', 'API', 'Axios']
    },
    {
        title: 'Calculadora',
        image: 'img-calculadora.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/react-calculadora',
        urlSite: 'https://react-calculadora-ten.vercel.app/',
        topics: ['ReactJS', 'CSS3']
    },
    {
        title: 'CRUD',
        image: 'img-crud-next.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/next_crud',
        urlSite: 'https://next-crud-xi-eight.vercel.app/',
        topics: ['ReactJS', 'NextJS', 'TailwindCSS', 'Firebase']
    },
    {
        title: 'Happy Orphanage',
        image: 'img-happy-orphanage.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/happy-orphanage/blob/main/index.html',
        urlSite: '',
        topics: ['HTML', 'CSS3', 'JavaScript']
    },
    {
        title: 'Flappy Bird',
        image: 'img-flappy-bird.png',
        description: '',
        urlGithub: 'https://github.com/matheusfdc10/flappy-bird',
        urlSite: 'https://flappy-bird-kappa.vercel.app/',
        topics: ['HTML', 'CSS3', 'JavaScript']
    },
]

const Project = () => {
    return (
        <section id="project" className='bg-dark-1 min-h-[calc(100vh-5rem)] px-7 sm:px-12 pt-8 pb-20'>
            <div className='max-w-[1440px] m-auto grid h-full grid-cols-1 gap-9'>
                <h2 className="text-4xl text-sky-300 font-bold text-center sm:my-8 my-4 self-end">
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
            </div>
        </section>
    )
}

export default Project;