import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import LogoPerson from './../../assets/images/person.png';

const Hero = () => {
  return (
    <section
      id='home'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark bg-purple-landing'
    >
      <div className='w-full pt-20 grid md:grid-cols-6 h-full items-center max-w-6xl justify-around'>
        <div className='lg:col-span-3 md:text-center text-center'>
          <div>
            <h5 className='font-medium text-white'>Hola bienvenidos</h5>
            <h1 className='sm:text-5xl text-4xl dark:text-white !leading-normal relative font-medium'>
              Soy <span className='text-white'>Julian</span> <br /> ingeniería de Software
            </h1>
          </div>
          <div className='md:w-96 md:mx-auto flex mt-9 gap-2 dark:text-gray-300'>
            <FontAwesomeIcon icon={['fab', 'border-all']} className='text-primary mt-0.5 md:inline-block hidden' />
            <p className='text-xs text-balance leading-5 max-w-md px-2 text-white'>
              Estudiante de ingeniería de Software de quinto semestre en la universidad cooperativa de colombia, me apasiona el desarrollo 
              en la parte de backend y siempre me he caracterizado por tener disciplina y constancia en la aplicación de mis objetivos buscando
              generar un impacto en cada uno de los proyectos o trabajos que realizo, bienvenido a mi portafolio aqui encontraras una muestra 
              de mi trabajo y una escencia de mi. 
            </p>
          </div>
          <div className='flex items-center justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9'>
            <p className='font-medium text-white'>Encuentrame aqui </p>
            <div className='flex justify-end gap-3'>
              <a href='https://github.com/Julian-Escobar22' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href='https://www.linkedin.com/in/julian-escobar-a0aa5b304/' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href='https://www.facebook.com/juliescobar.figeroa' target='_blank' rel='noopener noreferrer' className='social-icon'>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </div>
          </div>
        </div>
        <div className='lg:col-span-3 md:col-span-3 flex justify-center items-center'>
          <div className='bg-white rounded-lg p-3'>
            <img
              src={LogoPerson}
              className='w-30 md:w-auto'
              alt=''
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
