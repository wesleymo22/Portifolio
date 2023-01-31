import './Inicio.css'
import RedesSociais from '../RedesSociais/Index'

const Inicio = () => {
    return (
        <section id='inicio'>
            <div className='conteudo'>
                <h1>Wesley Moraes</h1>
                <h2>Desenvolvedor Front-End</h2>
                <RedesSociais />
                <a className="botao-curriculo" href="https://drive.google.com/file/d/1cPStoGaw4yuXFCzb5lPZETR8QGWudNs7/view?usp=share_link">Baixar Curriculo</a>
            </div>
            <div className='imagem'>
                <img src="Imagens/Home.png" alt="Wesley foto" />
            </div>
        </section>
    )
}

export default Inicio
