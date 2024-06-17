import { useState, useEffect, Suspense } from 'react';
import Layout from './layout';
import Loading from './loading';
import Services from '../pages/Services';
import './App.css';

function App() {
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowLayout(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {showLayout ? (
        <Layout>
          <Services />
        </Layout>
      ) : (
        <Loading />
      )}
    </Suspense>
  );
}

export default App;
