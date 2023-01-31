import './Sobre.css'
import {BsPersonCircle} from 'react-icons/bs'

const Sobre = () => {
    return (
        <section id='sobre'>
            <div className='imagem'>
                <img src="Imagens/Sobre.png" alt="Wesley Foto" />
            </div>
            <div className='conteudo'>
                <h2>Sobre</h2>
                <p><b>Ola, Me chamo Wesley</b>, Apaixonado por tecnologia e desde criança gosto de descobrir o que há de mais novo no ramo de tecnologia</p>
                <p>Atuo na parte de Desenvolvimento Front-End desde 2022, Formado em Sistemas de Informaçao, possuo dominio nas seguintes linguagens <b>HTML 5, CSS 3, JavaScript e ReactJS</b></p>
                <p>Clique no botao abaixo para saber mais</p>
                <a href="https://www.linkedin.com/in/wesleymo22/">Link</a>
            </div>

        </section>
    )
}

export default Sobre