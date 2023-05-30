'use client'
import Container from "./Container";
import Image from "next/image";
import imagePlanet from "../../public/image/planet.gif"
import Button from "./Button";
import Link from "next/link";
import MyLink from "./MyLink";

const Main = () => {
    return (
        <Container id="main" bg heightFull>
            <div className="grid lg:grid-cols-2 h-full grid-cols-1 gap-12">
                <div className="self-end lg:self-center flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
                    <span className="font-bold text-sky-300">
                        HELLO WORLD 👋
                    </span>
                    <h1 className="font-bold sm:text-6xl text-4xl whitespace-nowrap text-zinc-50">
                        Matheus Freitas
                    </h1>
                    <h2 className="font-bold sm:text-2xl text-lg text-zinc-400">
                        Densenvolvedor web front-end.
                    </h2>
                    <div className="flex gap-6 mt-6">
                        <MyLink 
                            href="#contact"
                            text="FALE COMIGO"
                            textCenter
                        />
                        <Button
                            onClick={() => {}}
                            text="BAIXAR CV"
                        />
                    </div>
                </div>
                <div className="lg:place-self-center flex flex-col items-center gap-3 px-6 transition-all hover:transform-1">
                    <Image src={imagePlanet} alt="image" width={400} height={400}/>
                    <div className="w-full max-w-xs h-9 bg-black rounded-[100%]" />
                </div>
            </div>
        </Container>
    )
}

export default Main;