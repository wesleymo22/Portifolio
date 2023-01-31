import './Habilidades.css'
import { AiFillHtml5 } from 'react-icons/ai'
import { IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { FaBootstrap, FaReact } from 'react-icons/fa'


const Habilidades = () => {
    return(
        <section id='habilidades'>
            <h2>Habilidades</h2>
            <ul>
                <li>
                    <AiFillHtml5 className="logo logo-html" />
                </li>
                <li>
                    <IoLogoCss3 className="logo logo-css"/>
                </li>
                <li>
                    <IoLogoJavascript className="logo logo-javascript"/>
                </li>
                <li>
                    <FaReact className="logo logo-react"/>
                </li>
                <li>
                    <FaBootstrap className="logo logo-bootstrap"/>
                </li>
            </ul>
        </section>
    )
}

export default Habilidades
