import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className='dark:bg-slate-700 bg-slate-100 text-center py-2'>
      <p className='text-black'>&copy; 2024 Julian Escobar</p>
      <ul className='flex justify-center gap-5 py-4 text-sm'>
        <li>
          <a href='#home' className='text-black'>Sobre mi</a>
        </li>
        <li>
          <a href='#about' className='text-black'>Mis aficiones</a>
        </li>
        <li>
          <a href='#projects' className='text-black'>Proyectos</a>
        </li>
        <li>
          <a href='#contact' className='text-black'>Habilidades-contactos</a>
        </li>
      </ul>
      <div className='flex justify-center gap-4'>
        <a href='https://www.facebook.com/juliescobar.figeroa' className='text-xl text-black'>
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href='https://github.com/Julian-Escobar22' className='text-xl text-black'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href='https://www.linkedin.com/in/julian-escobar-a0aa5b304/' className='text-xl text-black'>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
