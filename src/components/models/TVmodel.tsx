import { useGLTF } from "@react-three/drei";
import { useState } from "react";
import { Mesh, Texture } from "three";

interface TVModelProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  texture?: Texture;
}

export const TVModel = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  texture,
}: TVModelProps) => {
  const [isButtoPushed, setIsButtonPushed] = useState(false);
  const { nodes, materials } = useGLTF("/models/tv1.glb");
  const buttonSound = new Audio("/audio/button-click.mp3");

  return (
    <group position={position} dispose={null} scale={scale} rotation={rotation}>
      <group position={[0, 0.261, 0]} scale={[2.034, 1, 1.293]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane as Mesh).geometry}
          material={materials.chassis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_1 as Mesh).geometry}
          material={materials.ecran}
        >
          {texture && !isButtoPushed && <meshBasicMaterial map={texture} />}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_2 as Mesh).geometry}
          material={materials.panel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Plane_3 as Mesh).geometry}
          material={materials.sideSection}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Molette as Mesh).geometry}
        material={materials.molette}
        position={[1.621, 2.168, 0.967]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.206}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Bouton as Mesh).geometry}
        material={materials.bouton}
        position={[1.638, 0.678, isButtoPushed ? 0.8 : 0.95]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.121}
        onClick={(e) => {
          e.stopPropagation();
          buttonSound.play();
          setIsButtonPushed(!isButtoPushed);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(e) => {
          e.stopPropagation();
          document.body.style.cursor = "default";
        }}
      />
    </group>
  );
};

useGLTF.preload("/models/tv1.glb");
