import { useGLTF } from "@react-three/drei";
import { TVModelProps } from "./TVmodel";
import { Mesh } from "three";

export const TVModel3 = (props: TVModelProps) => {
  const { nodes, materials } = useGLTF("/models/tv3.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1, 0]}>
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
        />
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cube_2 as Mesh).geometry}
          material={materials.contoursEcran}
        />
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
        position={[-0.001, 2.013, -1.247]}
        rotation={[0.698, 0, 0]}
        scale={[0.554, 0.088, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Vis1 as Mesh).geometry}
        material={materials.vis}
        position={[0.589, 4.01, -1.166]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.038, 0.059, 0.038]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Vis2 as Mesh).geometry}
        material={materials.vis}
        position={[0.589, 1.743, -1.166]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.038, 0.059, 0.038]}
      />
    </group>
  );
};

useGLTF.preload("/models/tv3.glb");
