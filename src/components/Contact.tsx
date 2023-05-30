'use client'
import Button from "./Button";
import Container from "./Container";
import Input from "./inputs/Input";
import Textarea from "./inputs/Textarea";

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'
import MyLink from "./MyLink";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

import { useRef } from 'react';
export const listContact = [
    {
        title: 'GitHub',
        href: 'https://github.com/matheusfdc10',
        icon: BsGithub
    },
    {
        title: 'Linkedin',
        href: 'https://www.linkedin.com/in/matheusfdc10/',
        icon: BsLinkedin
    },
    {
        title: 'WhatsApp',
        href: 'https://wa.me/5521997341766',
        icon: IoLogoWhatsapp
    },
    {
        title: 'Email',
        href: 'mailto: matheusfdc10@hotmail.com',
        icon: MdEmail
    }
]

export type FormProps = {
    name: string;
    email: string;
    message: string;
}

const Contact = () => {
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef<HTMLFormElement>(null)
    const {
        reset,
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FormProps | FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            message: ""
        }
    })

    
    const handleForm = (data: FormProps | FieldValues ) => {
        if (!form.current) return
        setIsLoading(true);

        emailjs.sendForm('service_ywrw6zk', 'template_6r4v32j', form.current, 'ZPUuEuMxpGJ5ZaS6u')
        .then((result) => {
            // console.log(result.text)
            toast.success('Mensagem enviada!', {
                style: {
                    backgroundColor: '#141414',
                }
            })
            reset();
        }, (error) => {
            // console.log(error.text);
            toast.error('ERRO', {
                style: {
                    backgroundColor: '#141414',
                    color: '#F43F5E',
                }
            })
        }).finally(() => setIsLoading(false))
    }

    return (
        <Container id="contact" bg heightFull>
            <div className="grid lg:grid-cols-3 h-full grid-cols-1 items-center justify-items-center lg:gap-16 gap-y-24">
                <div className="col-span-2 w-full">
                    <h2 className="text-4xl text-sky-300 font-bold mb-12 self-end">
                        Fale comigo!
                    </h2>
                    <form
                        ref={form}
                        onSubmit={handleSubmit(handleForm)}
                        className="flex flex-col gap-6"
                    >
                        <div className="flex flex-col sm:flex-row gap-6">
                            <Input
                                id="name"
                                label="Seu nome"
                                disable={isLoading}
                                register={register}
                                errors={errors}
                                required

                            />
                            <Input 
                                id="email"
                                type="email"
                                label="Seu email"
                                disable={isLoading}
                                register={register}
                                errors={errors}
                                required
                            />
                        </div>
                        <Textarea
                            id="message"
                            label="Mensagem"
                            disable={isLoading}
                            register={register}
                            errors={errors}
                            required
                        />
                        <div className="lg:self-start ">
                            <Button
                                onClick={() => {}}
                                text="Enviar mensagem"
                                type="submit"
                                disabled={isLoading}
                            />
                        </div>
                    </form>
                </div>
                <div className="w-full grid lg:grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  gap-6">
                    {listContact.map((contact) => (
                        <MyLink
                            key={contact.title}
                            text={contact.title}
                            icon={contact.icon}
                            href={contact.href}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default Contact;