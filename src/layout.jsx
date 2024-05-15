import { useState } from 'react';
import './App.css';

const Layout = ({ children }) => {
  const [arrow, setArrow] = useState('wesite-remastered/vector_arrow.svg');

  return (
    <main className='fade-in'>
      <header>
        <img
          src='wesite-remastered/title.svg'
          alt='title'
          className='px-20 pt-6'
        />
      </header>
      <nav className='sticky top-1 uppercase my-4 px-6 py-3 bg-main'>
        <ul className='flex justify-around'>
          <li className='cursor-pointer font-medium hover:underline underline-offset-2 hover:text-accent'>
            <a href='/home'>Story</a>
          </li>
          <li className='cursor-pointer font-medium hover:underline underline-offset-2 hover:text-accent'>
            <a href='/about'>AR&nbsp;Kiosk</a>
          </li>
          <li className='cursor-pointer font-medium hover:underline underline-offset-2 hover:text-accent'>
            <a href='/contact'>Services</a>
          </li>
          <li className='cursor-pointer font-medium hover:underline underline-offset-2 hover:text-accent'>
            <a href='/home'>Achievements</a>
          </li>
          <li
            onMouseOver={() => setArrow('/line-arrow.svg')}
            onMouseLeave={() => setArrow('/vector_arrow.svg')}
            className='flex gap-x-1 cursor-pointer font-medium hover:underline underline-offset-2 hover:text-accent'
          >
            <a href='/about'>Get&nbsp;in&nbsp;touch</a>
            <img
              src={arrow}
              alt='arrow'
            />
          </li>
        </ul>
      </nav>
      {children}
      <footer className='px-20 py-2 flex flex-col justify-center items-center'>
        <div className='flex justify-between w-full items-baseline'>
          <h1 className='text-5xl'>Connect with us!</h1>
          <ul className='uppercase flex gap-x-3'>
            <li className='hover:underline underline-offset-2 text-accent'>
              <a
                target='_blank'
                href=''
              >
                Instagram
              </a>
            </li>
            <li className='hover:underline underline-offset-2 text-accent'>
              <a
                target='_blank'
                href=''
              >
                Discord
              </a>
            </li>
            <li className='hover:underline underline-offset-2 text-accent'>
              <a
                target='_blank'
                href=''
              >
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <svg
          width='5%'
          height='5%'
          viewBox='0 0 377 285'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='py-24'
        >
          <g clipPath='url(#clip0_2_3)'>
            <path
              d='M343.153 34.101C352.329 43.2568 361.364 52.5061 370.68 61.4752C375.642 66.2867 378.826 71.3785 375.83 78.3388C372.974 84.9254 367.309 86.2801 360.615 86.2801C299.334 86.1867 238.054 86.1867 176.773 86.1867C123.825 86.1867 70.8778 86.1867 17.9302 86.1867C16.1512 86.1867 14.0446 86.7473 12.7338 85.9998C8.7545 83.7109 4.0262 81.6555 1.63864 78.1052C-1.35751 73.7141 -0.0466962 68.2019 3.88575 64.2313C24.0161 44.051 44.0997 23.7772 64.6046 3.92394C67.2262 1.4014 72.1418 0.186847 75.9806 0.140134C151.353 -0.0934347 226.678 -0.0934347 302.05 0.186847C306.122 0.186847 311.038 2.56924 314.128 5.41878C324.146 14.5747 333.556 24.4779 343.2 34.101H343.153Z'
              fill='#998AE9'
            />
            <path
              d='M279.157 285C276.91 282.758 275.225 281.076 273.539 279.394C249.617 255.524 225.694 231.653 201.772 207.782C191.192 197.225 185.761 197.178 175.322 207.549C151.399 231.419 127.477 255.29 103.554 279.161C101.869 280.842 100.184 282.524 98.1239 284.58C96.2981 283.085 94.7532 281.964 93.4424 280.656C78.368 265.661 63.2468 250.619 48.2193 235.53C39.8862 227.169 39.933 220.956 48.3597 212.5C73.3588 187.509 98.2643 162.47 123.498 137.712C125.932 135.329 130.239 133.694 133.703 133.694C170.406 133.414 207.062 133.367 243.765 133.648C246.995 133.648 251.021 135.329 253.362 137.572C278.267 162.003 302.892 186.714 327.61 211.379C337.441 221.189 337.395 226.795 327.423 236.792C311.6 252.581 295.729 268.417 279.11 285H279.157Z'
              fill='#998AE9'
            />
          </g>
          <defs>
            <clipPath id='clip0_2_3'>
              <rect
                width='377'
                height='285'
                fill='white'
              />
            </clipPath>
          </defs>
        </svg>
        <div className='uppercase flex w-full text-[0.4rem] justify-between items-baseline pr-20'>
          <p>2024-Twinverse.in</p>
          <p className='space-x-10'>
            <a href=''>Privacy Policy</a>
            <a href=''>T&C</a>
          </p>
        </div>
      </footer>
    </main>
  );
};
export default Layout;
