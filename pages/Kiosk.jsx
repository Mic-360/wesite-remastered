import { Suspense } from 'react';
import Loading from '../src/loading';
import Scene, { Selector } from '../src/scene';
import { Kiosk } from '../components/sceneAssets';

const KioskAR = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Scene>
        <Selector>
          <Kiosk />
        </Selector>
      </Scene>
    </Suspense>
  );
};
export default KioskAR;
