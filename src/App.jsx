import { useState, useEffect } from 'react';
import Layout from './layout';
import Loading from './loading';
import './App.css';
import Services from '../pages/Services';

function App() {
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const onLoad = () => {
      const hrElement = document.querySelector('hr');
      hrElement.classList.add('line');
    };

    onLoad();

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowLayout(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <hr className='border-none fixed top-0 z-10' />
      {showLayout ? (
        <Layout>
          <Services />
        </Layout>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
