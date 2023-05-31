import MyLink from "./MyLink";
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const listContact = [
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

const ContactLiks = () => {
    return (
        <div className="w-full grid lg:grid-cols-1 md:grid-cols-4 sm:grid-cols-2 grid-cols-2  gap-6">
            {listContact.map((contact) => (
                <MyLink
                    key={contact.title}
                    text={contact.title}
                    icon={contact.icon}
                    href={contact.href}
                    site
                />
            ))}
        </div>
    )
}

export default ContactLiks;