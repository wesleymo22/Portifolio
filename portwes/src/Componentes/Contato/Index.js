import RedesSociais from '../RedesSociais/Index';
import { FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import './Contato.css'


const Contato = () => {
  return (
    <section id='contato'>
      <div className='dados'>
        <h2>Contato</h2>
        <h3>Telefone</h3>
        <p>
          <a href="tel:11997397199">
            <FaWhatsapp className="contato-icone" />
            (11) 99739-7199
          </a>
        </p>
        <h3>Endereço</h3>
        <p>
          <FaMapMarkerAlt className="contato-icone" />
          R Ibipitanga 922, Pq Continental 3 Guaruhos SP
        </p>
        <h3>Email</h3>
        <p><AiOutlineMail className="contato-icone"/>wesleymo22@gmail.com</p>
        <h3>Redes Sociais</h3>
        <RedesSociais />
      </div>
      <div className='formulario'>

      </div>
    </section>

  );
}

export default Contato;