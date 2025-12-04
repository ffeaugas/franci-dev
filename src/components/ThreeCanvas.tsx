import { Canvas } from "@react-three/fiber";
import { TVModel } from "./models/TVmodel";
import { Suspense } from "react";
import { useTexture } from "@react-three/drei";
import { TVModel2 } from "./models/TVModel2";
import { TVModel3 } from "./models/TVmodel3";
import { LittleMonster } from "./models/LittleMonster";

const ThreeCanvas = () => {
  return (
    <div className="w-full h-dvh md:block hidden">
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
      <ambientLight intensity={2.8} />
      <directionalLight position={[4, 3, 10]} intensity={5} castShadow />
      <TVModel
        position={[6.7, -3, -2.7]}
        rotation={[0, -Math.PI / 5, 0]}
        texture={projectManagerScreenMap}
      />
      <TVModel
        position={[6, -0.27, -3]}
        rotation={[0, -Math.PI / 12, 0]}
        scale={[0.8, 0.8, 0.8]}
        texture={webglTsScreenMap}
      />
      <TVModel2 position={[1.7, -3, -1.7]} rotation={[0, Math.PI / 10, 0]} />
      <TVModel3
        position={[3.5, -3, -5.3]}
        rotation={[0, Math.PI * 1.2, 0]}
        scale={[1.4, 1.4, 1.4]}
      />
      <LittleMonster
        position={[4, -2.1, -1]}
        rotation={[0, -Math.PI / 12, 0]}
        scale={[0.2, 0.2, 0.2]}
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
      <meshStandardMaterial color="#ceeaf2" />
    </mesh>
  );
};
