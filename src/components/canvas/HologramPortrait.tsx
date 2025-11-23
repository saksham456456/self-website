"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function AnimatedSphere() {
  const meshRef = useRef<any>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Sphere args={[1, 100, 200]} scale={2.4} ref={meshRef}>
      <MeshDistortMaterial
        color="#39a7ff"
        attach="material"
        distort={0.4} // Strength, 0 disables the effect (default=1)
        speed={2} // Speed (default=1)
        roughness={0}
        transparent
        opacity={0.8}
        wireframe
      />
    </Sphere>
  );
}

export default function HologramPortrait() {
  return (
    <div className="w-full h-[400px] md:h-[500px] relative flex items-center justify-center">
        <div className="absolute inset-0 bg-neon-blue/10 rounded-full blur-3xl transform scale-75"></div>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
}
