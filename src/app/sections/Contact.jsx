import logo1 from '../../assets/images/logo1.png';
import logo2 from '../../assets/images/logo2.png';
import logo3 from '../../assets/images/logo3.png';
import logo4 from '../../assets/images/logo4.png';
import logo5 from '../../assets/images/logo5.png';
import logo6 from '../../assets/images/logo6.png';

const Contact = () => {
  return (
    <section
      id='contact'
      className='container relative max-w-4xl mx-auto min-h-screen flex-center px-5 bg-white text-black'
    >
      <div className='pb-10'>
        <div className='text-center'>
          <h3>Habilidades</h3>
          <p className='px-2 mt-3 text-gray-500'>
            ¡He desarrollado diferentes hablidades con diferentes lenguajes de programacion
            si bien no considero que algunos sean mas fuertes que otros si considero que tengo
            un conocominento aceptable en los siguientes lenguajes de programación! :
            
          </p>
        </div>
        <div className='mt-12 flex justify-around'>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo1} alt='Logo 1' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>JavaSCript</p>
          </div>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo2} alt='Logo 2' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Dart</p>
          </div>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo3} alt='Logo 3' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Python</p>
          </div>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo4} alt='Logo 4' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Html</p>
          </div>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo5} alt='Logo 5' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>Java</p>
          </div>
          {}
          <div className='flex flex-col items-center'>
            <img src={logo6} alt='Logo 6' className='h-20 w-20 mb-2' />
            <p className='text-sm text-black'>React</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
