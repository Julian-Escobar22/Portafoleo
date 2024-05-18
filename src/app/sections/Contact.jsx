const Contact = () => {
  return (
    <section
      id='contact'
      className='container relative max-w-4xl mx-auto min-h-screen flex-center px-5'
    >
      <div className='pb-10'>
        <div className='text-center'>
          <h3>Contact Me</h3>
          <p className='px-2 mt-3 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            itaque totam, ut asperiores placeat saepe earum molestias deleniti,
            repudiandae animi sit laudantium aliquam delectus assumenda numquam
            ab. Dolorum, illo laborum!
          </p>
        </div>
        <div className='mt-12 md:relative flex flex-col gap-5 sm:max-w-full mx-auto max-w-xs'>
          <div className='dark:bg-slate-800 bg-slate-50 dark:text-gray-100 text-gray-800 rounded-lg shadow-xl mx-auto md:w-2/3 py-14 px-7 w-full'>
            <h3 className='font-semibold text-3xl'>
              Send Us A <br />
              <span className='text-primary'>Message</span>
            </h3>
            <form className='*:flex *:flex-col *:gap-1 mt-5 md:w-2/3 w-full'>
              <div className=''>
                <label>Name</label>
                <input type='text' id='name' placeholder='Enter your name' />
              </div>
              <div className=''>
                <label>Email Address</label>
                <input
                  type='email'
                  id='email'
                  placeholder='Enter your email address'
                />
              </div>
              <div className=''>
                <label>Message</label>
                <textarea id='msg' placeholder='Enter your message'></textarea>
              </div>
              <button className='btn btn-filled ml-auto'>Send to Us</button>
            </form>
          </div>
          <div className='dark:bg-gray-700 bg-white py-12 px-7 md:absolute lg:-right-9 right-28 rounded-xl shadow-xl md:w-2/5 h-5/6 top-28 w-full mx-auto'>
            <h3 className='font-semibold text-2xl border-b pb-4 border-gray-600'>
              Drop In Our <br />
              Office <span className='text-primary'>.</span>
            </h3>
            <div className='py-4'>
              <p className='text-xs text-gray-400 leading-5'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusamus nihil expedita voluptate corporis doloremque id,
                facilis
              </p>
              <ul className='*:flex *:gap-4 *:items-center *:mt-4'>
                <li>
                  <i className='fa-solid fa-location-dot'></i>
                  <div>
                    <h2>Ho Chi Mini City</h2>
                    <address className='text-xs'>
                      13P John doe Street,Us
                    </address>
                  </div>
                </li>
                <li>
                  <i className='fa-solid fa-envelope'></i>
                  <p>codeaprogram@gmail.com</p>
                </li>
                <li>
                  <i className='fa-solid fa-phone'></i>
                  <p>+123 456 7890</p>
                </li>
              </ul>
              <div className='flex items-center md:justify-end justify-center dark:text-gray-200 text-gray-600 gap-6 mt-9'>
                <p className='text-xs'>Follow Us</p>
                <div className='flex justify-end gap-3'>
                  <a href='#' className='social-icon'>
                    <i className='fa-brands fa-github'></i>
                  </a>
                  <a href='#' className='social-icon'>
                    <i className='fa-brands fa-linkedin'></i>
                  </a>
                  <a href='#' className='social-icon'>
                    <i className='fa-brands fa-facebook'></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
