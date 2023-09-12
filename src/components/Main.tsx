'use client'
import Image from "next/image";
import TypewriterComponent from "typewriter-effect";
import imagePlanet from "../../public/images/planet.gif"
import MyLink from "./MyLink";

const Main = () => {
    return (
        <section id="main" className='bg-dark-2 min-h-screen px-7 sm:px-12 pt-8 pb-20 grid'>
            <div className='max-w-[1440px] m-auto mt-12 lg:mt-20 grid lg:grid-cols-2 h-full grid-cols-1 gap-12 w-full'>
                <div className="self-end lg:self-center flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
                    <div className="flex gap-2">
                        <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-300 to-sky-500">
                            HELLO WORLD
                        </span>
                        👋
                    </div>
                    <h1 className="font-bold sm:text-6xl text-4xl whitespace-nowrap text-zinc-50">
                        Matheus Freitas
                    </h1>
                    <div className="text-xl">
                        <TypewriterComponent 
                            options={{
                                strings: [
                                    "Desenvolvedor Web Front-end.",
                                ],
                                autoStart: true,
                                loop: true,
                                wrapperClassName: 'font-bold sm:text-2xl text-lg text-zinc-400'
                            }}
                        />
                    </div>
                    <div className="flex gap-6 mt-6">
                        <MyLink 
                            href="contact"
                            text="FALE COMIGO"
                            textCenter
                            offset={-80}
                        />
                        <MyLink 
                            href="https://drive.google.com/file/d/1XxJih1FFNsVLTRUFrMi5d6V3l-nwrxJV/view?usp=sharing"
                            text="BAIXAR CV"
                            textCenter
                            site
                        />
                    </div>
                </div>
                <div className="lg:place-self-center flex flex-col items-center gap-3 px-6 transition-all hover:scale-105">
                    <Image src={imagePlanet} alt="image" width={400} height={400} className="rounded-full shadow-md shadow-neutral-950"/>
                    <div className="w-full max-w-xs h-9 bg-neutral-950 rounded-[100%] shadow-sm shadow-neutral-950" />
                </div>
            </div>
        </section>
    )
}

export default Main;