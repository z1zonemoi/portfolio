import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styled from "styled-components";

export function Model() {
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group
      position={[1.2, -0.3, 0.7]}
      scale={[1.2, 1.2, 1.2]}
      dispose={null}
      rotation={[0.1, 0.35, 0]}
    >
      <group position={[-1.32, 0.74, -0.16]} scale={[0.67, 0.77, 0.77]}>
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.006"]}
        />
      </group>
      <group
        position={[-0.12, 0.05, 1.18]}
        rotation={[0, 0.04, 0]}
        scale={[0.12, 0.02, 0.2]}
      >
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Material.008"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <group
        position={[-0.18, 0.06, 1.18]}
        rotation={[0, -0.12, 0]}
        scale={[0.13, 0.02, 0.22]}
      >
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["Material.007"]}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["Material.009"]}
        />
      </group>
      <mesh
        geometry={nodes.Object_15.geometry}
        material={materials["Material.006"]}
        position={[-1.32, 0.74, -0.16]}
        scale={[0.67, 0.77, 0.77]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");

const Example = () => {
  return (
    <>
      <Contain>
        <Canvas>
          <Suspense fallback={null}>
            <directionalLight intensity={1} />
            <ambientLight intensity={0.7} />
            <spotLight
              intensity={0.7}
              angle={0.2}
              penumbra={2}
              position={[5, 2, 10]}
              castShadow
            />
            <Model />
            <OrbitControls
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
            />
          </Suspense>
        </Canvas>
      </Contain>
    </>
  );
};

export default Example;

const Contain = styled.div`
  width: 20rem;
  height: 20rem;
  /* border-radius: 0.2rem; */
  /* margin: 0 auto; */
  /* padding: 1rem; */
  background: #fbfafc;
  /* border: 1px solid red; */
  :hover {
    cursor: pointer;
  }
`;
