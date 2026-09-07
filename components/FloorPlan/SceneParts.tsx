"use client";

export type Vec = [number, number, number];
export function Box({
  at,
  size,
  color = "#f4f1e9",
  glass = false,
}: {
  at: Vec;
  size: Vec;
  color?: string;
  glass?: boolean;
}) {
  return (
    <mesh position={at} castShadow={!glass} receiveShadow>
      <boxGeometry args={size} />
      <meshStandardMaterial
        color={color}
        roughness={glass ? 0.12 : 0.72}
        metalness={glass ? 0.2 : 0.04}
        transparent={glass}
        opacity={glass ? 0.24 : 1}
        depthWrite={!glass}
      />
    </mesh>
  );
}
export function Cylinder({
  at,
  radius,
  height,
  color,
}: {
  at: Vec;
  radius: number;
  height: number;
  color: string;
}) {
  return (
    <mesh position={at} castShadow receiveShadow>
      <cylinderGeometry args={[radius, radius * 0.88, height, 16]} />
      <meshStandardMaterial color={color} roughness={0.7} />
    </mesh>
  );
}
