import './CardProjetos.css'
import { AiFillGithub } from "react-icons/ai"

const CardProjetos = ({id, titulo, descricao, tecnologias, imagem, git, link}) => {
    return (
        <div className='cardprojetos' key={id}>
            <div className="cabecalho">
                <a href={link}><img src={imagem} alt={titulo} /></a>
                
            </div>
            <div className="rodape">
                <a href={link}><h3>{titulo}</h3></a>
                <a href={git} className="git-link"><AiFillGithub className='git'/>Github link</a>
                <h4>{descricao}</h4>
                <h5>{tecnologias}</h5>
            </div>
        </div>
    )
}

export default CardProjetos
