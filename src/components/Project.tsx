
import Container from "./Container"
import CardProject from "./CardProject";

const list = [
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
        title: 'Biblioteca Ávore',
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