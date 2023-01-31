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
                    <h3>HTML</h3>
                </li>
                <li>
                    <IoLogoCss3 className="logo logo-css"/>
                    <h3>CSS</h3>
                </li>
                <li>
                    <IoLogoJavascript className="logo logo-javascript"/>
                    <h3>JavaScript</h3>
                </li>
                <li>
                    <FaReact className="logo logo-react"/>
                    <h3>React</h3>
                </li>
                <li>
                    <FaBootstrap className="logo logo-bootstrap"/>
                    <h3>Boostrap</h3>
                </li>
            </ul>
        </section>
    )
}

export default Habilidades
