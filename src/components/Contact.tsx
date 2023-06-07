'use client'
import Button from "./Button";
import Container from "./Container";
import Input from "./inputs/Input";
import Textarea from "./inputs/Textarea";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'

import { useRef } from 'react';
import ContactLiks from "./ContactLiks";

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
        <>
            <ToastContainer position='top-center' theme='dark'/>
            <section id="contact" className='bg-dark-2 min-h-screen px-7 sm:px-12 pt-8 pb-20 grid'>
                <div className='max-w-[1440px] m-auto grid lg:grid-cols-3 h-full w-full grid-cols-1 items-center justify-items-center  lg:gap-16 gap-y-10 mb-20'>
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
                    <ContactLiks />
                </div>
            </section>
        </>
    )
}

export default Contact;