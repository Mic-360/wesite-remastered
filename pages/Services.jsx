import { useState } from 'react';
import LogoCreate from '../components/scene';

const Services = () => {
  const [player, setPlayer] = useState('./play.svg');
  const [arrow, setArrow] = useState('./return.svg');

  const handlePlayer = () => {
    setPlayer((prev) => (prev === './play.svg' ? './pause.svg' : './play.svg'));
  };

  return (
    <>
      <div className='h-96 w-full'>
        <LogoCreate />
      </div>
      <div className='flex flex-col justify-center items-center h-full py-10'>
        <img
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }
          src='./line-arrow.svg'
          alt='scroll arrow'
          className='mb-20 rotate-90 animate-pulse'
        />
      </div>
      <div className='bg-white text-black flex justify-around items-center p-10 py-20'>
        <div className='flex flex-col justify-between gap-y-44'>
          <div className='flex text-3xl items-baseline gap-1'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 42 41'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28.3072 41L34.6928 37.2237L23.8307 22.1859L42 24.2763V16.7237L23.8307 18.8141L34.6928 3.77632L28.3072 0L21 17.1957L13.6928 0L7.30721 3.77632L18.1693 18.8141L0 16.7237V24.2763L18.1693 22.1859L7.30721 37.2237L13.6928 41L21 23.8043L28.3072 41Z'
                fill='#998AE9'
              />
            </svg>
            <p className='text-left text-4xl'>
              We&apos;re shaping a new
              <br /> dimension with our
              <br /> cutting-edge 3-D AR
              <br /> Kiosk Technologies
            </p>
          </div>
          <p className='text-left pl-7'>
            Step into the future with our revolutionary 3-D <br /> Try-on Kiosk
            Technologies, designed to transform <br /> the experience landscape.
            dedicated to <br /> providing seamless interactions that empower
            <br />
            users to navigate spaces in fashion, art, and tech. <br /> Unlock
            new dimensions of 3-D interaction with <br />{' '}
            <span className='font-semibold'>Twinverse.</span>
          </p>
        </div>
        <div className='flex flex-col items-center justify-center mt-14'>
          <img
            onClick={handlePlayer}
            src={player}
            alt='player control'
            className='cursor-pointer transition-opacity ease-in-out duration-300 hover:opacity-70'
          />
          <p className='text-sm'>Click and Play</p>
        </div>
        <div>
          <img
            src='./device-image.jpg'
            alt='mockup'
            className='h-[35rem]'
          />
        </div>
      </div>
      <div className='bg-white pb-8 -mt-12 flex w-full justify-center items-center'>
        <button className='bg-plume hover:bg-accent border-2 border-plume font-light mono px-6 py-4 text-black text-sm transition-all ease-in duration-300'>
          Tap to Play
        </button>
      </div>
      <div className='bg-white text-black flex pr-96 py-20 gap-x-16'>
        <img
          src='./template.jpg'
          alt='banner'
        />
        <div className='pt-10 flex flex-col justify-between'>
          <div className='w-56 text-left space-y-10'>
            <p className='font-medium text-4xl'>
              Our 3-D AR
              <br /> Try On Kiosk Collection
            </p>
            <ul className='list-disc list-inside underline underline-offset-[5px] cursor-pointer space-y-1 text-xl mono'>
              <li className='hover:text-plume'>Museum Kiosk</li>
              <li className='hover:text-plume'>Sopping Mall</li>
              <li className='hover:text-plume'>E-Commerce</li>
              <li className='hover:text-plume'>Events & Games</li>
            </ul>
          </div>
          <div
            onMouseOver={() => setArrow('./long-line.svg')}
            onMouseLeave={() => setArrow('./return.svg')}
            className='flex gap-2 items-center w-fit justify-start cursor-pointer transition-transform ease-linear duration-300'
          >
            <img
              src={arrow}
              alt='directions'
              className='transform hover:scale-60'
            />
            <img
              src='./see-more.svg'
              alt='see more'
            />
          </div>
        </div>
      </div>
      <div className='pt-36 text-left px-20'>
        <p className='uppercase text-xs text-accent mono'>What we do</p>
        <div className='text-5xl py-10 '>
          <p className='leading-snug'>
            We offer an immersive, wide-ranging
            <br /> virtual try-on shopping experience
            <br /> with <span className='bg-accent text-main'>
              AR Kiosks
            </span>{' '}
            and <span className='bg-accent text-main'>3-D</span> interactive
            <br /> immersion, elevating your complete
            <br /> retail journey.
          </p>
        </div>
      </div>
      <div className='pb-28'>
        <div className='py-20 flex justify-evenly'>
          <img
            src='./line-mockup.svg'
            alt='beyond-reality'
            className='w-64'
          />
          <img
            src='./device-image.jpg'
            alt='web-ar'
            className='h-72 rounded-xl mt-20'
          />
          <img
            src='./line-mockup.svg'
            alt='beyond-reality'
            className='w-64'
          />
          <img
            src='./device-image.jpg'
            alt='web-xr'
            className='h-72 mt-20 rounded-xl'
          />
          <img
            src='./line-mockup.svg'
            alt='beyond-reality'
            className='w-64'
          />
        </div>
        <div className='flex justify-center items-center w-full'>
          <button className='bg-plume hover:bg-accent font-light mono px-6 py-4 text-black text-sm transition-all ease-in duration-300'>
            Book a Demo
          </button>
        </div>
      </div>
      <div className='h-screen bg-white text-black flex justify-center items-center'>
        <div>
          <img
            src='./gitex.jpg'
            alt='Achievements'
            className='aspect-auto max-h-96'
          />
          <div className='w-full border-black py-2'>
            <div className='w-1/2 text-center'>
              <h1 className='font-semibold text-xl'>
                Supernova YouthX Award Winner!
              </h1>
              <p className='mono'>2022 Dubai&apos; Gitex Global 2022</p>
            </div>
          </div>
        </div>
        <div className='absolute backdrop-blur-lg -left-80 mt-44'>
          <img
            src='./gitex.jpg'
            alt='Achievements'
            className='aspect-auto max-h-72 blur-sm rounded-lg'
          />
        </div>
      </div>
      <div className='px-20 flex justify-between h-screen bg-white text-black'>
        <div className='h-full text-left'>
          <p className='uppercase text-md text-plume mono'>Latest News</p>
          <div className='text-5xl py-4 '>
            <p className='leading-snug font-medium'>
              Learn how 3-D AR
              <br /> technology is moving
              <br /> the world forward.
            </p>
          </div>
        </div>
        <div className='h-full pb-4 flex flex-col gap-y-8 overflow-y-scroll news-article'>
          <img
            src='./news-a.jpg'
            alt='news-article'
            className='h-54'
          />
          <img
            src='./news-b.jpg'
            alt='news-article'
            className='h-54'
          />
          <img
            src='./news-c.jpg'
            alt='news-article'
            className='h-54'
          />
        </div>
      </div>
    </>
  );
};
export default Services;
