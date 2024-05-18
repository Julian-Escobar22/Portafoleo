const About = () => {
  return (
    <section id='about' className='container min-h-screen flex-center'>
      <div className=''>
        <div className='text-center text-balance'>
          <h3>What I Know</h3>
          <p className='px-2 mt-3 text-gray-500'>
            Lorem ipsum, dolor quam recusandae molestias a consectetur illum aut
            iste dolore. sit amet consectetur adipisicing elit. Dicta eligendi
            voluptate eos rem maiores voluptas mollitia debitis natus impedit
            excepturi quasi, quam recusandae molestias a consectetur illum aut
            iste dolore.
          </p>
        </div>
        <div className='max-w-2xl grid md:grid-cols-1 gap-6 px-2 sm:grid-cols-3 *:text-lg *:sm:max-w-full *:max-w-sm hover:*:brightness-90 *:mx-auto *:sm:text-left *:text-center *:hover:cursor-pointer *:shadow-sm mt-10 mx-auto *:rounded-xl *:bg-gray-100 *:dark:bg-slate-800 *:p-7 *:flex *:md:flex-row *:flex-col *:items-center *:gap-12'>
          <div>
            <div className='*:text-primary'>
              <i className='fa-regular fa-object-ungroup'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Website Design
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
          <div>
            <div className='*:text-primary'>
              <i className='fa-solid fa-pen-nib'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Ui Ux Design
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
          <div>
            <div className='*:text-primary'>
              <i className='fa-solid fa-people-group'></i>
              <h6 className='font-semibold whitespace-nowrap mt-3'>
                Teams Play
              </h6>
            </div>
            <div>
              <p className='text-xs text-gray-600 dark:text-gray-400 leading-5 text-balance'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                corporis tempora possimus?
              </p>
            </div>
            <i className='fa-solid fa-arrow-up-long text-primary rotate-45 cursor-pointer'></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
