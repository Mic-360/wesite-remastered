import { useAnimations, useGLTF } from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { LineBasicMaterial } from 'three';
import { SkeletonUtils } from 'three/examples/jsm/Addons.js';

extend({ SkeletonUtils });

export function Logo(props) {
  const ref = useRef();
  const { scene } = useGLTF('./3Ddesign/logo.glb');

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    ref.current.position.x = (0.5 + Math.cos((t * 8) / 3)) / 7;
    ref.current.position.y = (0.5 + Math.cos((t * 4) / 3)) / 7;
    ref.current.rotation.x = Math.PI / 36;
    ref.current.rotation.y = Math.PI / 3;
  });

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        scale={[0.22, 0.2, 0.2]}
        {...props}
      />
    </group>
  );
}

useGLTF.preload('./3Ddesign/logo.glb');

export function Kiosk() {
  const ref = useRef();
  const { nodes } = useGLTF('./3Ddesign/wireframe.glb');

  console.log(nodes);
  const wireframeMaterial = new LineBasicMaterial({ color: 'black' });

  return (
    <group ref={ref}>
      <mesh
        rotation={[0, Math.PI / 2, -Math.PI / 2]}
        scale={[0.6, 1, 0.4]}
        geometry={nodes.Circle001.geometry}
        material={wireframeMaterial}
      ></mesh>
      <mesh
        rotation={[Math.PI / 2, 0, 0]}
        scale={[12, 12, 12]}
        geometry={nodes.Curve287.geometry}
        material={nodes.Curve287.material}
      ></mesh>
    </group>
  );
}

useGLTF.preload('./3Ddesign/wireframe.glb');

export function Designs(props) {
  const ref = useRef();
  const { scene, animations } = useGLTF(props.model);
  const clonedScene = SkeletonUtils.clone(scene);
  const { actions } = useAnimations(animations, ref);

  console.log(actions);

  useEffect(() => {
    if (actions[props.animation] && props.play) {
      actions[props.animation].play();
    }
  }, [actions, props.animation, props.play]);

  return (
    <group>
      <primitive
        ref={ref}
        object={clonedScene}
        {...props}
      />
    </group>
  );
}
