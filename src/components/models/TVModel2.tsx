import { useGLTF } from "@react-three/drei";
import { TVModelProps } from "./TVmodel";
import { Mesh } from "three";
import { useState } from "react";

export const TVModel2 = (props: TVModelProps) => {
  const [isButtoPushed, setIsButtonPushed] = useState(false);
  const { nodes, materials } = useGLTF("/models/tv2.glb");

  const buttonSound = new Audio("/audio/button-click.mp3");
  const buttonSound2 = new Audio("/audio/button-click2.mp3");

  return (
    <group {...props} dispose={null}>
      <group position={[0.009, 1.307, -0.001]}>
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
          material={materials.contourEcran}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_2 as Mesh).geometry}
          material={materials.ecran}
          onClick={(e) => {
            e.stopPropagation();
            if (props.link) {
              window.open(props.link, "_blank");
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
          {props.texture && !isButtoPushed && (
            <meshBasicMaterial map={props.texture} />
          )}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_3 as Mesh).geometry}
          material={materials.chassis2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Aeration as Mesh).geometry}
        material={materials.aeration}
        position={[-0.949, 0.782, -0.464]}
        rotation={[0, 0, 0.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Pieds as Mesh).geometry}
        material={materials.pieds}
        position={[-0.704, 0.166, 0.488]}
        rotation={[0, -Math.PI / 4, 0]}
        scale={0.139}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Bouton as Mesh).geometry}
        material={materials.bouton}
        position={[-0.849, 0.73, isButtoPushed ? 0.579 : 0.68]}
        scale={[0.175, 0.072, 0.067]}
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
        geometry={(nodes.PetitBoutons as Mesh).geometry}
        material={materials.petitBoutons}
        position={[-0.935, 0.919, 0.699]}
        scale={[0.067, 0.04, 0.083]}
        onClick={(e) => {
          e.stopPropagation();
          buttonSound2.play();
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

useGLTF.preload("/models/tv2.glb");
