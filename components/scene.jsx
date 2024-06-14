import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  MeshTransmissionMaterial,
  ContactShadows,
} from '@react-three/drei';
import { easing } from 'maath';
import { useStore } from '../lib/utils';

export default function Scene({ children }) {
  return (
    <Canvas
      eventSource={document.getElementById('root')}
      eventPrefix='client'
      camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <ambientLight intensity={1} />
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.9}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <hemisphereLight intensity={0.7} />
      <hemisphereLight intensity={0.7} />
      <hemisphereLight intensity={0.7} />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      {children}
    </Canvas>
  );
}

export function Selector({ children }) {
  const ref = useRef();
  const store = useStore();
  useFrame(({ viewport, camera, pointer }, delta) => {
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, 3]);
    easing.damp3(
      ref.current.position,
      [(pointer.x * width) / 2, (pointer.y * height) / 2, 3],
      store.open ? 0 : 0.1,
      delta
    );
    easing.damp3(
      ref.current.scale,
      store.open ? 4 : 0.01,
      store.open ? 0.5 : 0.2,
      delta
    );
    easing.dampC(
      ref.current.material.color,
      store.open ? '#121212' : '#ccc',
      0.1,
      delta
    );
  });
  return (
    <>
      <mesh ref={ref}>
        <MeshTransmissionMaterial
          samples={16}
          resolution={512}
          anisotropicBlur={0.1}
          thickness={0.1}
          roughness={0.4}
          toneMapped={true}
        />
      </mesh>
      <group
        onPointerOver={() => (store.open = true)}
        onPointerOut={() => (store.open = false)}
        onPointerDown={() => (store.open = true)}
        onPointerUp={() => (store.open = false)}
      >
        {children}
      </group>
    </>
  );
}
