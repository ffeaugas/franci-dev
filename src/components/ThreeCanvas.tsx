import { Canvas } from "@react-three/fiber";
import { TVModel } from "./models/TVmodel";
import { Suspense } from "react";
import { useTexture } from "@react-three/drei";

const ThreeCanvas = () => {
  return (
    <div className="w-full h-dvh">
      <Canvas shadows>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;

const Scene = () => {
  const [webglTsScreenMap, projectManagerScreenMap] = useTexture([
    "webgl-ts-screen-1.jpg",
    "project-manager-screen-2.jpg",
  ]);
  return (
    <>
      <ambientLight intensity={1.8} />
      <directionalLight position={[4, 3, 7]} intensity={10} castShadow />
      <TVModel
        position={[3.7, -3, -1.7]}
        rotation={[0, Math.PI / 10, 0]}
        texture={webglTsScreenMap}
      />
      <TVModel
        position={[3.7, -0.27, -2]}
        rotation={[0, -Math.PI / 12, 0]}
        texture={projectManagerScreenMap}
      />
      <Floor />
    </>
  );
};

const Floor = () => {
  return (
    <mesh
      receiveShadow
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -3.5, -2]}
    >
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial color="#ffffff" />
    </mesh>
  );
};
