import {FaMapMarkerAlt} from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="h-[18vh] grid border-t-2 border-zinc-300 gap-1">
            <p className="text-center self-end text-zinc-100">
                Feito com 💙 por Matheus Freitas 
            </p>
            <p className="text-center text-zinc-100 flex justify-center gap-1">
                <FaMapMarkerAlt size={18} className='items-center'/>
                Rio de Janeiro - BR | ©2023
            </p>
        </footer>
    )
}

export default Footer;