import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Group, Mesh, SkinnedMesh } from "three";

export interface LittleMonsterProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
}

export const LittleMonster = ({
  position,
  rotation,
  scale,
}: LittleMonsterProps) => {
  const group = useRef<Group>(null);
  const { nodes, materials, animations } = useGLTF(
    "/models/little-monster-with-bones.glb"
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
        <group name="Armature">
          <skinnedMesh
            castShadow
            name="Corps"
            geometry={(nodes.Corps as Mesh).geometry}
            material={materials.peau}
            skeleton={(nodes.Corps as SkinnedMesh).skeleton}
          />
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone011} />
          <primitive object={nodes.Bone014} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/little-monster-with-bones.glb");
