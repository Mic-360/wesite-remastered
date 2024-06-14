/* eslint-disable react/no-unknown-property */
import { ContactShadows, useGLTF } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { LineBasicMaterial } from 'three';
import { OrbitControls } from '@react-three/drei';

export function Logo(props) {
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

export function Kiosk() {
  const ref = useRef();
  const { nodes } = useGLTF('./wireframe.glb');

  console.log(nodes);
  const wireframeMaterial = new LineBasicMaterial({ color: 'black' });

  return (
    <group ref={ref}>
      <mesh
        rotation={[0, Math.PI / 2, -Math.PI / 2]}
        scale={[0.6, 1, 0.4]}
        geometry={nodes.Circle001.geometry}
        material={wireframeMaterial}
      >
      </mesh>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        scale={[12, 12, 12]}
        geometry={nodes.Curve287.geometry}
        material={nodes.Curve287.material}
      >
      </mesh>
    </group>
  );
}

useGLTF.preload('./wireframe.glb');
