import { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { TVModelProps } from "./TVmodel";
import { Mesh } from "three";

export function TVModel4({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  texture,
  link,
}: TVModelProps) {
  const [isButtoPushed, setIsButtonPushed] = useState(false);
  const { nodes, materials } = useGLTF("/models/tv4.glb");
  const buttonSound = new Audio("/audio/button-click.mp3");

  return (
    <group position={position} dispose={null} scale={scale} rotation={rotation}>
      <group position={[-0.155, 1.323, 0.182]} rotation={[0, -1.571, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube as Mesh).geometry}
          material={materials.chassis}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_1 as Mesh).geometry}
          material={materials.ecran}
          onClick={(e) => {
            e.stopPropagation();
            if (link) {
              window.open(link, "_blank");
            }
          }}
          onPointerOver={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={(e) => {
            e.stopPropagation();
            document.body.style.cursor = "default";
          }}
        >
          {texture && !isButtoPushed && <meshBasicMaterial map={texture} />}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_2 as Mesh).geometry}
          material={materials.contours}
        />
      </group>
      <group
        position={[0.55, 0.461, 1.068]}
        rotation={[0, -1.571, 0]}
        scale={[0.102, 0.033, 0.34]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001 as Mesh).geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube001_1 as Mesh).geometry}
          material={materials.contours}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Bouton as Mesh).geometry}
        material={materials.bouton}
        position={[0.754, 0.506, isButtoPushed ? 1 : 1.17]}
        rotation={[0, -1.571, 0]}
        scale={[0.073, 0.073, 0.119]}
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
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Boutons as Mesh).geometry}
        material={materials.boutons}
        position={[-0.083, 0.55, 1.05]}
        rotation={[0, -1.571, 0]}
        scale={0.041}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aeration as Mesh).geometry}
        material={materials.boutons}
        position={[-0.891, 0.509, 1.011]}
        rotation={[0, -1.571, 0]}
        scale={[0.052, 0.123, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Boutons2 as Mesh).geometry}
        material={materials["Material.001"]}
        position={[-0.507, 0.517, 1.039]}
        rotation={[0, -1.571, 0]}
        scale={[0.027, 0.1, 0.1]}
      />
    </group>
  );
}

useGLTF.preload("/models/tv4.glb");
