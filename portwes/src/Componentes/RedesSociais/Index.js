import './RedesSociais.css'
import { FaLinkedin, FaGithub, FaWhatsapp, FaInstagram } from 'react-icons/fa'

const RedesSociais = () => {
    return (
        <div className='icones'>
            <a href='https://www.linkedin.com/in/wesleymo22/'>
                <FaLinkedin className='icone' />
            </a>
            <a href="https://www.instagram.com/wesleymo22/">
                <FaInstagram className='icone' />
            </a>
            <a href="https://github.com/wesleymo22">
                <FaGithub className='icone' />
            </a>
            <a href="http://wa.me/+5511997397199">
                <FaWhatsapp className='icone' />
            </a>
        </div>
    )
}

export default RedesSociais
