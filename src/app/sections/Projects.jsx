import { useState } from 'react';
import Pro1 from './../../assets/images/pro1.jpg';
import Pro2 from './../../assets/images/pro2.jpg';
import Pro3 from './../../assets/images/pro3.jpg';

const projects = [
  { id: 1, image: Pro1, title: 'Ecommerce Mobile', subtitle: 'Ecommerce Mobile', description: 'Una aplicacion mobile desarrollada en flutter con dart, que permitia la visualización de automoviles y motos a la venta de un concesionario.' },
  { id: 2, image: Pro2, title: 'API Streaming', subtitle: 'API Streaming', description: 'Proyecto realizado usando Apis con javaScript y un frontend enfocado a angular, permitiendo el consumo de peliculas y series' },
  { id: 3, image: Pro3, title: 'Recetario Restaurante', subtitle: 'Recetario Restaurante', description: 'Un Proyecto desarollado con java que permitia la creación, eliminación y visualización detallada de recetas para un restaurante.' },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseCard = () => {
    setSelectedProject(null);
  };

  return (
    <section id='projects' className='container min-h-screen flex-center bg-purple-landing'>
      <div className='text-center text-white'>
        <h3>Mis Proyectos</h3>
        <p className='px-2 mt-3'>
          ¡He desarollado diferentes proyectos en mi tiempo de estudio algunos mas complejos que otros pero que sin duda alguna 
          todos me han aportado algo importante, los proyectos mas recientes que he desarrolado corresponden a trabajos finales los cuales 
          me han servido para aprender diferentes lenguajes de programacion y otros temas como el desarrollo mobile!
        </p>

        <br />
        <div className='grid mx-auto md:grid-rows-2 md:grid-cols-2 max-w-4xl md:px-0 px-10 gap-4'>
          <div className='group'>
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className='w-full h-auto object-cover border-4 dark:border-white rounded-md cursor-pointer group-hover:grayscale transition duration-1000'
              onClick={() => handleImageClick(projects[0])}
            />
            <p className='text-white text-center mt-2'>{projects[0].subtitle}</p>
          </div>
          <div className='group row-span-2'>
            <img
              src={projects[2].image}
              alt={projects[2].title}
              className='w-full h-auto object-cover border-4 dark:border-white rounded-md cursor-pointer group-hover:grayscale transition duration-1000 mt-8' // Ajuste del margen superior aquí
              onClick={() => handleImageClick(projects[2])}
            />
            <p className='text-white text-center mt-2'>{projects[2].subtitle}</p>
          </div>
          <div className='group'>
            <img
              src={projects[1].image}
              alt={projects[1].title}
              className='w-full h-auto object-cover border-4 dark:border-white rounded-md cursor-pointer group-hover:grayscale transition duration-1000'
              onClick={() => handleImageClick(projects[1])}
            />
            <p className='text-white text-center mt-2'>{projects[1].subtitle}</p>
          </div>
        </div>

        {selectedProject && (
          <div className='fixed inset-0 bg-black bg-opacity-75 flex-center z-50'>
            <div className='bg-white rounded-lg p-6 relative max-w-sm w-full'>
              <button
                className='absolute top-2 right-2 text-gray-500 hover:text-gray-800'
                onClick={handleCloseCard}
              >
                &times;
              </button>
              <img src={selectedProject.image} alt={selectedProject.title} className='w-full h-auto rounded-md' />
              <h4 className='mt-4 text-2xl font-bold text-black'>{selectedProject.title}</h4>
              <p className='mt-2 text-gray-700'>{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
