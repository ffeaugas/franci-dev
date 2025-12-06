import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, Mesh, SkinnedMesh } from "three";

export interface LittleMonsterProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export const LittleMonster2 = ({
  position,
  rotation,
  scale,
}: LittleMonsterProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/little-monster2.glb"
  );
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    actions["ArmatureAction"]?.play();
  }, [actions]);

  return (
    <group
      ref={group}
      rotation={rotation}
      position={position}
      scale={scale}
      dispose={null}
    >
      <group name="Scene">
        <group name="Armature" position={[0, 2.472, 0]}>
          <skinnedMesh
            name="Cube"
            geometry={(nodes.Cube as Mesh).geometry}
            material={materials.peau}
            skeleton={(nodes.Cube as SkinnedMesh).skeleton}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone031} />
          <primitive object={nodes.Bone035} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/little-monster2.glb");
