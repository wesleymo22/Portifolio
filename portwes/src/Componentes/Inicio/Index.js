import './Inicio.css'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'

const Inicio = () => {
    return (
        <section id='inicio'>
            <div className='conteudo'>
                <h1>Wesley Moraes</h1>
                <h2>Desenvolvedor Front-End</h2>
                <div className='icones'>
                    <FaLinkedin className='icone' href='https://www.linkedin.com/in/wesleymo22/'/>
                    <FaGithub className='icone'/>
                    <FaWhatsapp className='icone'/>
                </div>
                <a href="https://www.linkedin.com/in/wesleymo22/">Baixar Curriculo</a>
            </div>
            <div className='imagem'>
                <img src="Imagens/homem.png" alt="homem" />
            </div>
        </section>
    )
}

export default Inicio
