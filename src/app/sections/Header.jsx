// Header.jsx
const Header = () => {
  return (
    <header className='fixed xl:block w-full py-4 lg:px-0 px-5 z-[999] duration-300' style={{ backgroundColor: 'white' }}>
      <nav className='flex justify-between items-center max-w-6xl mx-auto px-2'>
        <div className='flex gap-4 items-center'>
          <div className='bg-primary text-white rounded-full size-10 text-xl grid place-items-center'>
            J
          </div>
          <div>
            <h4 className='font-bold text-lg uppercase'>Julian</h4>
            <p className='text-xs'>Perfil</p>
          </div>
        </div>
        <ul className='gap-10 md:flex hidden hover:*:text-primary *:duration-200'>
          <li>
            <a href='#home'>Sobre Mi </a>
          </li>
          <li>
            <a href='#about'>Mis aficiones</a>
          </li>
          <li>
            <a href='#projects'>Proyectos</a>
          </li>
          <li>
            <a href='#contact' style={{ color: 'black' }}>Habilidades-Contactos</a> {/* Cambio de color del enlace */}
          </li>
        </ul>
        <div className='flex items-center gap-6'>
          <a href='#contact'>
            <button className='btn btn-outline md:!flex !hidden' style={{ color: 'black' }}>
              <i className='fa-regular fa-paper-plane'></i> ¡Contactame!
            </button>
          </a>
          <span id='menubar' className='cursor-pointer md:hidden text-xl'>
            <i className='fa-solid fa-bars'></i>
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
