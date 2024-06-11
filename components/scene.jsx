/* eslint-disable react/no-unknown-property */
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  useGLTF,
  MeshTransmissionMaterial,
  ContactShadows,
} from '@react-three/drei';
import { easing } from 'maath';
import { useStore } from '../lib/utils';

export default function LogoCreate() {
  return (
    <Canvas
      eventSource={document.getElementById('root')}
      eventPrefix='client'
      camera={{ position: [0, 0, 4], fov: 40 }}
    >
      <ambientLight intensity={0.7} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, -5]}
        castShadow
      />
      <ContactShadows
        resolution={512}
        position={[0, -0.8, 0]}
        opacity={1}
        scale={10}
        blur={2}
        far={0.8}
      />
      <Selector>
        <Logo rotation={[0.3, Math.PI / 1.6, 0]} />
      </Selector>
    </Canvas>
  );
}

function Selector({ children }) {
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

function Logo(props) {
  const ref = useRef();
  const { scene } = useGLTF('./logo.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.rotation.z = Math.sin(t / 2) / 4;
      ref.current.position.y = (0.5 + Math.cos(t / 2)) / 7;
      ref.current.rotation.x = Math.PI / 8;
      ref.current.rotation.y = Math.PI / 3;
  });

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        scale={[0.1, 0.1, 0.1]}
        {...props}
      />
    </group>
  );
}

useGLTF.preload('./logo.glb');
