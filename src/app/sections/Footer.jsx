const Footer = () => {
  return (
    <footer className='dark:bg-slate-700 bg-slate-100 text-center py-2'>
      Copyright &copy; 2024
      <ul className='flex-center gap-5 py-4 text-sm'>
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
      </ul>
    </footer>
  );
};

export default Footer;
