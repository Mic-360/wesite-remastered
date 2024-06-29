import { useState, useEffect, Suspense } from 'react';
import Layout from './layout';
import Loading from './loading';
import Services from '../pages/Services';
import './App.css';

function App() {
  const [showLayout, setShowLayout] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLayout(true);
    }, 1000);

    return () => {
      clearTimeout(timeout);
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
