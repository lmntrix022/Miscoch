import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader";




const Earth = () => {
  const earth = useGLTF("../planet/koreanphone.gltf");
  const texture1 = useTexture("../planet/textures/korean_public_payphone_01_diff_4k.jpg");
  
  return (
      <mesh>
        <primitive
          object={earth.scene}
          scale={5.45}
          position-y={-2}
          rotation-y={0}
        >
          <primitive object={earth.scene.children[0]} material={new THREE.MeshBasicMaterial({ map: texture1 })} />
        </primitive>
      </mesh>
  );
};


const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 0, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;