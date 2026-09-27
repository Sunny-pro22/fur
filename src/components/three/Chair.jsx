import React from 'react';

export default function Chair({ fabricColor, woodColor }) {
  return (
    <group position={[0, -0.5, 0]}>
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.18, 1.35]} />
        <meshStandardMaterial color={fabricColor} roughness={0.85} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.09, 0]}>
        <boxGeometry args={[1.52, 0.02, 1.37]} />
        <meshStandardMaterial color={woodColor} roughness={0.4} metalness={0.5} />
      </mesh>
      <mesh castShadow receiveShadow position={[0, 0.95, -0.6]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.5, 1.7, 0.18]} />
        <meshStandardMaterial color={fabricColor} roughness={0.85} metalness={0.05} />
      </mesh>
      <mesh position={[0, 0.95, -0.71]} rotation={[-0.08, 0, 0]}>
        <boxGeometry args={[1.54, 1.74, 0.04]} />
        <meshStandardMaterial color={woodColor} roughness={0.35} metalness={0.55} />
      </mesh>
      {[-1, 1].map((s) => (
        <group key={s}>
          <mesh castShadow position={[s * 0.83, 0.55, -0.05]}>
            <boxGeometry args={[0.12, 0.1, 1.3]} />
            <meshStandardMaterial color={woodColor} roughness={0.35} metalness={0.55} />
          </mesh>
          <mesh castShadow position={[s * 0.83, 0.25, 0.55]}>
            <cylinderGeometry args={[0.045, 0.045, 0.6, 12]} />
            <meshStandardMaterial color={woodColor} roughness={0.35} metalness={0.55} />
          </mesh>
        </group>
      ))}
      {[[-0.62, -0.55], [0.62, -0.55], [-0.62, 0.55], [0.62, 0.55]].map(([x, z], i) => (
        <mesh key={`leg-${i}`} castShadow position={[x, -0.55, z]}>
          <cylinderGeometry args={[0.05, 0.05, 0.98, 16]} />
          <meshStandardMaterial color={woodColor} roughness={0.3} metalness={0.7} />
        </mesh>
      ))}
    </group>
  );
}