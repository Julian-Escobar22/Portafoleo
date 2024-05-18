const NavbarMobile = () => {
  return (
    <ul
      id='mobile-nav'
      className='gap-10 text-xl md:hidden dark:bg-slate-800 bg-primary text-white flex-center flex-col fixed w-full h-0 overflow-hidden bottom-0 duration-200 rounded-t-3xl left-0 z-[998]'
    >
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>About Us</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact Us</a>
      </li>
      <a href='#contact'>
        <button className='btn btn-outline'>
          <i className='fa-regular fa-paper-plane'></i> Let's Talk
        </button>
      </a>
    </ul>
  );
};

export default NavbarMobile;
