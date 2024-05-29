const NavbarMobile = () => {
  return (
    <ul
      id='mobile-nav'
      className='gap-10 text-xl md:hidden bg-white text-black flex-center flex-col fixed w-full h-0 overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998]' // Cambio de color de fondo y texto
    >
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>About us</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact Us</a>
      </li>
      <a href='#contact'>
        <button className='btn btn-outline' style={{ color: 'black' }}> {/* Cambio de color del botón */}
          <i className='fa-regular fa-paper-plane'></i> 
        </button>
      </a>
    </ul>
  );
};

export default NavbarMobile;
