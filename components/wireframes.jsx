/* eslint-disable react/no-unknown-property */
import { ContactShadows, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Wireframe = () => {
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
          {/* asset */}
          <Kiosk />
    </Canvas>
  );
};

export default Wireframe;

function Kiosk(props) {
  const ref = useRef();
  const { scene } = useGLTF('./wireframe.glb');

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

useGLTF.preload('./wireframe.glb');