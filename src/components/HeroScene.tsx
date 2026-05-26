// import { Canvas } from "@react-three/fiber";
// import {
//   Float,
//   RoundedBox,
//   Sphere,
//   Line,
// } from "@react-three/drei";

// import {
//   EffectComposer,
//   Bloom,
// } from "@react-three/postprocessing";

// function NeonFrame() {
//   return (
//     <group position={[1.8, 0, 0]}>
//       {/* OUTER FRAME */}

//       <RoundedBox
//         args={[4.6, 5.8, 0.05]}
//         radius={0.18}
//         smoothness={8}
//       >
//         <meshStandardMaterial
//           color="#070b14"
//           emissive="#6d28d9"
//           emissiveIntensity={0.45}
//           metalness={1}
//           roughness={0.25}
//         />
//       </RoundedBox>

//       {/* INNER PANEL */}

//       <mesh position={[0, 0, -0.04]}>
//         <planeGeometry args={[4.1, 5.3]} />

//         <meshBasicMaterial
//           color="#08111f"
//           transparent
//           opacity={0.98}
//         />
//       </mesh>

//       {/* EDGE LIGHT */}

//       <Line
//         points={[
//           [-2.05, -2.65, 0.02],
//           [-2.05, 2.65, 0.02],
//           [2.05, 2.65, 0.02],
//           [2.05, -2.65, 0.02],
//           [-2.05, -2.65, 0.02],
//         ]}
//         color="#00c2ff"
//         lineWidth={1.2}
//       />
//     </group>
//   );
// }

// function OrbitArc() {
//   const points = [];

//   for (let i = 0; i <= 120; i++) {
//     const angle = (i / 120) * Math.PI * 1.4;

//     points.push([
//       Math.cos(angle) * 5.4,
//       Math.sin(angle) * 5.4,
//       -1,
//     ]);
//   }

//   return (
//     <Line
//       points={points as any}
//       color="#8b5cf6"
//       lineWidth={0.8}
//       transparent
//       opacity={0.35}
//     />
//   );
// }

// function FloatingCube({
//   position,
//   scale,
// }: {
//   position: [number, number, number];
//   scale: number;
// }) {
//   return (
//     <Float
//       speed={2}
//       rotationIntensity={1}
//       floatIntensity={2}
//     >
//       <RoundedBox
//         position={position}
//         args={[scale, scale, scale]}
//         radius={0.08}
//       >
//         <meshStandardMaterial
//           color="#8b5cf6"
//           emissive="#8b5cf6"
//           emissiveIntensity={0.5}
//           transparent
//           opacity={0.4}
//         />
//       </RoundedBox>
//     </Float>
//   );
// }

// function EnergySphere({
//   position,
//   scale,
// }: {
//   position: [number, number, number];
//   scale: number;
// }) {
//   return (
//     <Float
//       speed={3}
//       rotationIntensity={1}
//       floatIntensity={3}
//     >
//       <Sphere
//         position={position}
//         scale={scale}
//       >
//         <meshStandardMaterial
//           color="#a855f7"
//           emissive="#a855f7"
//           emissiveIntensity={1.2}
//         />
//       </Sphere>
//     </Float>
//   );
// }

// function NeuralField() {
//   const lines = [];

//   for (let i = 0; i < 40; i++) {
//     lines.push({
//       start: [
//         (Math.random() - 0.5) * 10,
//         -4,
//         -2,
//       ],
//       end: [
//         (Math.random() - 0.5) * 10,
//         -1,
//         -2,
//       ],
//     });
//   }

//   return (
//     <>
//       {lines.map((line, i) => (
//         <Line
//           key={i}
//           points={[line.start, line.end] as any}
//           color="#3b82f6"
//           transparent
//           opacity={0.08}
//           lineWidth={0.3}
//         />
//       ))}
//     </>
//   );
// }

// function SceneParticles() {
//   const particles = new Array(140).fill(null);

//   return (
//     <>
//       {particles.map((_, i) => {
//         const x = (Math.random() - 0.5) * 20;
//         const y = (Math.random() - 0.5) * 12;
//         const z = (Math.random() - 0.5) * 10;

//         return (
//           <mesh
//             key={i}
//             position={[x, y, z]}
//           >
//             <sphereGeometry args={[0.015, 6, 6]} />

//             <meshBasicMaterial color="#8b5cf6" />
//           </mesh>
//         );
//       })}
//     </>
//   );
// }

// export default function HeroScene() {
//   return (
//     <div className="absolute inset-0 z-0 pointer-events-none">
//       <Canvas
//         camera={{
//           position: [0, 0, 8],
//           fov: 38,
//         }}
//         dpr={[1, 1.5]}
//         gl={{
//           alpha: true,
//           antialias: true,
//         }}
//       >
//         <color attach="background" args={["#000000"]} />

//         {/* FOG */}

//         <fog
//           attach="fog"
//           args={["#02050d", 10, 24]}
//         />

//         {/* LIGHTING */}

//         <ambientLight intensity={0.12} />

//         <pointLight
//           position={[2, 1, 2]}
//           intensity={2.2}
//           color="#8b5cf6"
//         />

//         <pointLight
//           position={[4, 0, 2]}
//           intensity={1.6}
//           color="#00c2ff"
//         />

//         {/* MAIN ORBIT */}

//         <OrbitArc />

//         {/* FRAME */}

//         <NeonFrame />

//         {/* FLOATING OBJECTS */}

//         <FloatingCube
//           position={[0.8, 1.6, 0.5]}
//           scale={0.4}
//         />

//         <FloatingCube
//           position={[-2.2, -2.4, 0.5]}
//           scale={0.55}
//         />

//         {/* ENERGY SPHERES */}

//         <EnergySphere
//           position={[3.9, 2.8, 0]}
//           scale={0.22}
//         />

//         <EnergySphere
//           position={[-3.4, 2.1, 0]}
//           scale={0.1}
//         />

//         <EnergySphere
//           position={[4.8, -0.2, 0]}
//           scale={0.08}
//         />

//         {/* PARTICLES */}

//         <SceneParticles />

//         {/* NEURAL FIELD */}

//         <NeuralField />

//         {/* POST PROCESSING */}

//         <EffectComposer>
//           <Bloom
//             intensity={0.8}
//             luminanceThreshold={0.25}
//             luminanceSmoothing={0.9}
//           />
//         </EffectComposer>
//       </Canvas>
//     </div>
//   );
// }



import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshTransmissionMaterial } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const Knot = () => {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={[1.6, 0.6, 0]} scale={0.55}>
        <torusKnotGeometry args={[1, 0.32, 180, 32]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.1}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.05}
          backside
          color="#7dd3fc"
          attenuationColor="#a78bfa"
          attenuationDistance={1.2}
        />
      </mesh>
    </Float>
  );
};

const Blob = () => {
  return (
    <Float speed={0.8} rotationIntensity={0.4} floatIntensity={1.6}>
      <mesh position={[-2, -1.2, -1]} scale={1.1}>
        <icosahedronGeometry args={[1, 24]} />
        <MeshDistortMaterial
          color="#6366f1"
          distort={0.45}
          speed={1.4}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.85}
        />
      </mesh>
    </Float>
  );
};

const Capsule = () => {
  return (
    <Float speed={1.4} rotationIntensity={0.8} floatIntensity={0.9}>
      <mesh position={[2.4, -1.6, -0.5]} rotation={[0.3, 0.5, 0.4]} scale={0.45}>
        <capsuleGeometry args={[0.6, 1.6, 8, 24]} />
        <meshStandardMaterial
          color="#f0abfc"
          metalness={0.7}
          roughness={0.15}
          emissive="#a855f7"
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
};

export const HeroScene = () => {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 4, 5]} intensity={1.2} color="#a5f3fc" />
      <pointLight position={[-3, -2, 2]} intensity={1.6} color="#c084fc" />
      <Suspense fallback={null}>
        <Knot />
        <Blob />
        <Capsule />
      </Suspense>
    </Canvas>
  );
};
