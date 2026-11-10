"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrthographicCamera, Vector3 } from "three";
import { BuildingTower } from "@/components/FloorPlan/BuildingTower";
import { FLOORS, type FloorKey } from "@/lib/data/floorplan";

/**
 * Autonome 3D-Demo: Gebäudemodell rotiert langsam um die eigene Achse,
 * öffnet und schließt die Etagen zyklisch. Keine Nutzerinteraktion —
 * reine visuelle Aktivität.
 */
function AutoCamera() {
  const { size, invalidate } = useThree();
  const t = useRef(0);

  useFrame(({ camera }, delta) => {
    t.current += delta;
    const radius = 34;
    const height = 20;
    const angle = t.current * 0.18; // ~2 Minuten pro Umdrehung
    const x = Math.sin(angle) * radius;
    const z = Math.cos(angle) * radius;
    camera.position.set(x, height, z);
    camera.lookAt(new Vector3(0, 0, 0));
    const fit = Math.min(size.width / 38, (size.height - 60) / 28);
    (camera as OrthographicCamera).zoom = fit;
    camera.updateProjectionMatrix();
    invalidate();
  });

  return null;
}

export default function BuildingAutoDemo() {
  const [open, setOpen] = useState(false);
  const [activeFloor, setActiveFloor] = useState<FloorKey>(FLOORS[0].id);

  // Zyklus: 6s zusammen, 6s geöffnet; Etage springt alle 2s weiter wenn geöffnet.
  useEffect(() => {
    const t = setInterval(() => setOpen((v) => !v), 6000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    let i = FLOORS.findIndex((f) => f.id === activeFloor);
    const t = setInterval(() => {
      i = (i + 1) % FLOORS.length;
      setActiveFloor(FLOORS[i].id);
    }, 2000);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas
        orthographic
        dpr={[1, 1.5]}
        frameloop="always"
        camera={{ position: [18, 16, 24], near: 0.1, far: 200, zoom: 20 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <color attach="background" args={["#F2F6FA"]} />
        <ambientLight intensity={0.75} />
        <hemisphereLight args={["#ffffff", "#a5b6af", 1.1]} />
        <directionalLight
          position={[-8, 18, 7]}
          intensity={2}
          shadow-mapSize={[1024, 1024]}
        />
        <BuildingTower
          open={open}
          activeFloor={activeFloor}
          onOpen={() => {}}
          onSelectFloor={() => {}}
        />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -12, 0]}>
          <planeGeometry args={[200, 200]} />
          <meshStandardMaterial color="#F2F6FA" roughness={1} />
        </mesh>
        <AutoCamera />
      </Canvas>
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(60% 50% at 50% 100%, rgba(16, 35, 60, 0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
