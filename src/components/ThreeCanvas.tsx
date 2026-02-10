import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { TVModel } from "./models/TVmodel";
import { Suspense, useEffect, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { TVModel2 } from "./models/TVModel2";
import { TVModel3 } from "./models/TVmodel3";
import { LittleMonster } from "./models/LittleMonster";
import { LittleMonster2 } from "./models/LittleMonster2";
import { TVModel4 } from "./models/TVModel4";

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
  const [webglTsScreenMap, projectManagerScreenMap, lueurScreenMap] =
    useTexture([
      "webgl-ts-screen-1.jpg",
      "project-manager-screen-2.jpg",
      "/lueur-screenshot.jpg",
    ]);

  return (
    <>
      <CameraController />
      <ambientLight intensity={4} />
      <directionalLight position={[4, 3, 7]} intensity={7} castShadow />
      <TVModel
        position={[6.7, -3, -2.7]}
        rotation={[0, -Math.PI / 5, 0]}
        texture={projectManagerScreenMap}
      />
      <TVModel4
        position={[6.7, -0.37, -3]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={[1.1, 1.1, 1.1]}
        texture={lueurScreenMap}
      />
      <TVModel2
        position={[1.5, -3, -1.3]}
        rotation={[0, Math.PI / 10, 0]}
        texture={webglTsScreenMap}
      />
      <TVModel3
        position={[3.5, -3, -5.3]}
        rotation={[0, Math.PI * 1.2, 0]}
        scale={[1.4, 1.4, 1.4]}
      />
      <LittleMonster
        position={[4.5, -2.25, -1.5]}
        rotation={[0, -Math.PI / 12, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <LittleMonster2
        position={[6, 2.1, -2]}
        rotation={[0, -Math.PI / 12, 0]}
        scale={[0.2, 0.2, 0.2]}
      />
      <Floor />
    </>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  const [mouseX, setMouseX] = useState(0);
  const targetPosition = useRef(0);
  const currentPosition = useRef(0);
  const initialX = useRef(camera.position.x);

  useEffect(() => {
    initialX.current = camera.position.x;

    const handleMouseMove = (e: MouseEvent) => {
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 2;
      const maxOffset = 0.3;
      setMouseX(normalizedX * maxOffset);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [camera]);

  useFrame(() => {
    targetPosition.current = mouseX;
    currentPosition.current +=
      (targetPosition.current - currentPosition.current) * 0.05;

    camera.position.x = initialX.current + currentPosition.current;
  });

  return null;
};

const Floor = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, -2]}>
      <planeGeometry args={[50, 50]} />
      <meshPhysicalMaterial
        color="#c7c5af"
        clearcoat={1}
        clearcoatRoughness={0}
        metalness={0.7}
        roughness={0.15}
        iridescence={0.8}
        iridescenceIOR={1.3}
        sheen={1}
        sheenColor="#cfd1e3"
        sheenRoughness={0.2}
      ></meshPhysicalMaterial>
    </mesh>
  );
};
