import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Environment, Float } from '@react-three/drei';
import Chair from './Chair.jsx';

function RotatingChair({ fabricColor, woodColor }) {
  const group = useRef();
  useFrame(() => {
    if (group.current) group.current.rotation.y += 0.0018;
  });
  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.06} floatIntensity={0.25}>
        <Chair fabricColor={fabricColor} woodColor={woodColor} />
      </Float>
    </group>
  );
}

export default function ChairScene({ fabricColor, woodColor, theme = 'dark' }) {
  return (
    <Canvas shadows camera={{ position: [4, 2.2, 5], fov: 38 }} dpr={[1, 2]}>
      <ambientLight intensity={theme === 'dark' ? 0.6 : 0.9} />
      <spotLight position={[5, 8, 5]} angle={0.35} penumbra={0.6} intensity={theme === 'dark' ? 1.6 : 1.1} castShadow />
      <spotLight position={[-5, 5, -4]} angle={0.4} penumbra={0.7} intensity={0.8} color="#C9A961" />
      <directionalLight position={[0, 4, 6]} intensity={0.5} />

      <RotatingChair fabricColor={fabricColor} woodColor={woodColor} />

      <ContactShadows
        position={[0, -1.4, 0]}
        opacity={theme === 'dark' ? 0.55 : 0.3}
        scale={8}
        blur={2.6}
        far={4}
        color={theme === 'dark' ? '#000000' : '#5c4a2a'}
      />
      <Environment preset={theme === 'dark' ? 'apartment' : 'studio'} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={3.5}
        maxDistance={8}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2.05}
        enableDamping
        dampingFactor={0.06}
      />
    </Canvas>
  );
}