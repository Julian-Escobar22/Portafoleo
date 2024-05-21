import Image1 from './../../assets/images/Image1.jpeg';
import Image2 from './../../assets/images/Image2.jpeg';
import Image3 from './../../assets/images/Image3.jpeg';
import Image4 from './../../assets/images/Image4.jpeg';

const About = () => {
  return (
    <section id='about' className='container min-h-screen flex-center flex-col bg-purple-landing'>
      <div className='text-center text-white mt-10'>
        <h3>Mis aficiones</h3>
      </div>
      <div className='text-center text-white'>
        <p className='px-2 mt-3'>
          Me apasioan muchas cosas las cuales realizo con relativa constancia, una parte de fundamental en mi vida ha sido el deporte 
          principalmente enfocado en el futbol, me encanta practicar este deporte con continuidad y tambien verlo profesionalmente
          , otra de mis pasiones son las motos siendo amante de las comepeticiones como moto GP o competiciones de enduro, tambien me gusta
          viajar al rededor del mundo o de colombia conociendo lugares nuevos asi como sus culturas, por otra parte me gustan temas como la 
          ciencia o la astronomia los cuales despiertan en mi curiosidad o interes por saber mas con respecto a estos temas.
        </p>
      </div>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        {/* Imagen 1 */}
        <div>
          <img src={Image1} alt='Image 1' className='w-full h-auto rounded-lg' style={{ maxWidth: '250px', maxHeight: '1000x' }} />
        </div>
        {/* Imagen 2 */}
        <div>
          <img src={Image2} alt='Image 2' className='w-full h-auto rounded-lg' style={{ maxWidth: '250px', maxHeight: '1000px' }} />
        </div>
        {/* Imagen 3 */}
        <div>
          <img src={Image3} alt='Image 3' className='w-full h-auto rounded-lg' style={{ maxWidth: '250px', maxHeight: '1000px' }} />
        </div>
        {/* Imagen 4 */}
        <div>
          <img src={Image4} alt='Image 4' className='w-full h-auto rounded-lg' style={{ maxWidth: '250px', maxHeight: '1000px' }} />
        </div>
      </div>
    </section>
  );
};

export default About;
