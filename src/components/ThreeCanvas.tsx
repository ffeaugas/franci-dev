import { Canvas } from "@react-three/fiber";
import { TVModel } from "./models/TVmodel";

const ThreeCanvas = () => {
  return (
    <div className="w-full h-dvh">
      <Canvas>
        <ambientLight intensity={0.8} />
        <directionalLight position={[4, 0, 7]} intensity={2} />
        {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh> */}

        <TVModel position={[0.4, -3, -2]} rotation={[0, Math.PI / 6, 0]} />
        <TVModel
          position={[0.4, -0.27, -2.3]}
          rotation={[0, -Math.PI / 12, 0]}
        />
        {/* Floor */}
        <mesh
          receiveShadow
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, -3.5, -2]}
        >
          <planeGeometry args={[50, 50]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0.05}
            metalness={0.2}
            clearcoat={0.7}
            clearcoatRoughness={0.04}
            reflectivity={0.9}
          />
        </mesh>
        <mesh receiveShadow castShadow position={[4, -3.2, -1]}>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
};

export default ThreeCanvas;
