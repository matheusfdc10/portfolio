'use client'
import Container from "./Container"
import { DiReact, DiJavascript, DiCss3, DiHtml5, DiNodejs, } from 'react-icons/di'
import { SiStyledcomponents, SiPrisma, SiMongodb, SiTailwindcss, SiExpress, SiNestjs } from 'react-icons/si'
import { TbBrandNextjs,  } from 'react-icons/tb'
import CardKnowledge from "./CardKnowledge"

const list = [
    {
        title: 'JavaScript',
        description: 'JavaScript é uma linguagem de programação dinâmica e versátil que permite adicionar interatividade e funcionalidades a sites e aplicativos. Ela é executada no navegador do usuário e pode manipular elementos da página, responder a eventos, realizar validações de formulários e muito mais. Com o JavaScript, é possível criar experiências de usuário dinâmicas e interativas. Além disso, o JavaScript também é utilizado no desenvolvimento de aplicativos móveis e servidores.',
        icon: DiJavascript,
    },
    {
        title: 'HTML5',
        description: 'HTML, ou Hypertext Markup Language, é a linguagem padrão utilizada para criar a estrutura e o conteúdo de páginas web. Com o HTML, é possível definir a hierarquia dos elementos, como títulos, parágrafos, imagens, links e tabelas. Ele fornece uma estrutura semântica que descreve o significado e a organização do conteúdo da página.',
        icon: DiHtml5,
    },
    {
        title: 'CSS3',
        description: 'CSS, ou Cascading Style Sheets, é uma linguagem de estilo utilizada para definir a aparência e o layout dos elementos em uma página web. Com o CSS, é possível controlar cores, fontes, tamanhos, espaçamentos e posicionamentos dos elementos HTML. Ele permite separar a estrutura (HTML) do estilo (CSS), tornando a manutenção e a atualização do design de um site mais fácil e eficiente. O CSS é amplamente utilizado para criar interfaces atraentes e responsivas, melhorando a experiência visual e a usabilidade dos sites.',
        icon: DiCss3,
    },
    {
        title: 'Node.JS',
        description: 'Node.js é um ambiente de tempo de execução JavaScript do lado do servidor que permite executar código JavaScript fora do navegador. Ele é escalável, eficiente e baseado em eventos, o que o torna adequado para o desenvolvimento de aplicativos de rede e servidores web de alto desempenho. O Node.js é amplamente utilizado para criar aplicativos web e APIs, e possui um vasto ecossistema de módulos e bibliotecas disponíveis.',
        icon: DiNodejs,
    },
    {
        title: 'ReactJS',
        description: 'React é uma biblioteca JavaScript utilizada para construir interfaces de usuário interativas e reativas. Com seu modelo de programação baseado em componentes reutilizáveis, eficiência na atualização do DOM e princípio da unidirecionalidade de dados, o React simplifica o desenvolvimento de aplicativos web modernos e escaláveis.',
        icon: DiReact,
    },
    {
        title: 'NextJS',
        description: 'Next.js é um framework JavaScript de código aberto que se baseia no React e é usado para criar aplicativos da web do lado do servidor (SSR) e do lado do cliente (CSR).',
        icon: TbBrandNextjs,
    },
    {
        title: 'TailwindCSS',
        description: 'Tailwind CSS é um framework de design utilitário que fornece classes CSS prontas para uso, permitindo criar interfaces de usuário responsivas e personalizáveis de forma rápida e eficiente. Com sua abordagem modular e flexível, o Tailwind CSS simplifica a estilização de projetos, resultando em um código CSS mais conciso e fácil de manter.',
        icon: SiTailwindcss,
    },
    {
        title: 'Styled-Components',
        description: 'Styled Components é uma biblioteca de CSS-in-JS para React e React Native. Ele permite que você escreva estilos CSS diretamente em seus componentes, oferecendo facilidade de uso, reutilização e encapsulamento. Com recursos avançados, como interpolação de propriedades e temas, o Styled Components simplifica o processo de estilização e melhora a organização do código em projetos React.',
        icon: SiStyledcomponents,
    },
    {
        title: 'Express',
        description: 'Express é um framework popular e altamente versátil para o desenvolvimento de aplicativos web e APIs usando Node.js. Sua principal vantagem é a capacidade de construir rapidamente aplicativos escaláveis, aproveitando sua sintaxe simples e uma camada de middleware poderosa.',
        icon: SiExpress,
    },
    {
        title: 'NestJS',
        description: 'NestJS é um framework de desenvolvimento de aplicativos Node.js construído com base no conceito de arquitetura de aplicativos server-side (backend) em camadas. Ele oferece uma abordagem modular e escalável para a construção de aplicativos web robustos e escaláveis.',
        icon: SiNestjs,
    },
    {
        title: 'Prisma',
        description: 'Prisma é uma ferramenta de desenvolvimento de banco de dados que simplifica a interação com bancos de dados e acelera o desenvolvimento de aplicativos. Com seu ORM moderno, suporte a várias bases de dados, geração automática de modelos de dados e recursos avançados.',
        icon: SiPrisma,
    },
    {
        title: 'MongoDB',
        description: 'MongoDB é um banco de dados NoSQL flexível e escalável, que utiliza um modelo de dados baseado em documentos. Com sua capacidade de lidar com grandes volumes de dados, flexibilidade na modelagem e consulta de dados, além de recursos avançados de escalabilidade e recuperação de falhas, o MongoDB é amplamente utilizado para o armazenamento eficiente e a manipulação de dados em aplicativos modernos.',
        icon: SiMongodb,
    },
]

const Knowledge = () => {

    return (
        <section id="knowledge" className='bg-dark-2 min-h-screen px-7 sm:px-12 pt-8 pb-20'>
            <div className='max-w-[1440px] m-auto grid h-full grid-cols-1 gap-9'>
                <h2 className="text-4xl text-sky-300 font-bold text-center sm:my-8 my-4 self-end">
                    Conhecimentos
                </h2>
                <div className="
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-12  
                ">
                    {list.map((item, index) => (
                        <CardKnowledge
                            key={`${item.title} - ${index}`}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Knowledge;