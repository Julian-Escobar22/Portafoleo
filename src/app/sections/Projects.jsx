import Pro1 from './../../assets/images/pro1.jpg';
import Pro2 from './../../assets/images/pro2.jpg';
import Pro3 from './../../assets/images/pro3.jpg';

const Projects = () => {
  return (
    <section id='projects' className='container min-h-screen flex-center'>
      <div className='text-center text-balance'>
        <h3>My Projects</h3>
        <p className='px-2 mt-3 text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime itaque
          totam, ut asperiores placeat saepe earum molestias deleniti,
          repudiandae animi sit laudantium aliquam delectus assumenda numquam
          ab. Dolorum, illo laborum!
        </p>

        <br />
        <div className='flex-center gap-4'>
          <button className='btn btn-filled'>Website</button>
          <button className='btn btn-outline'>Mobile App</button>
          <button className='btn btn-outline'>Figma</button>
        </div>
        <br />
        <div className='*:w-full grid mx-auto md:grid-rows-2 md:grid-cols-2 max-w-4xl md:px-0 px-10 *:h-full *:object-cover *:border-4 *:dark:border-white *:rounded-md gap-4 *:cursor-pointer group hover:*:!grayscale-0 *:hover:grayscale *:duration-1000'>
          <img className='' src={Pro1} alt='' />
          <img src={Pro3} className='row-span-2' alt='' />
          <img src={Pro2} className='' alt='' />
        </div>
      </div>
    </section>
  );
};

export default Projects;
