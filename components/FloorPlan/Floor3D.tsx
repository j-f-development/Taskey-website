"use client";

import { Component, useEffect, useRef, useState, type ReactNode } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { OrthographicCamera, Vector3 } from "three";
import { useReducedMotion } from "motion/react";
import { InteriorDetails, StairCore } from "./InteriorDetails";
import { Box, Cylinder } from "./SceneParts";
import { BuildingTower, type BuildingView } from "./BuildingTower";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import { FLOORS, type Floor, type FloorKey, type Room, type RoomKey } from "@/lib/data/floorplan";
import { ROOM_RECTS } from "./FloorSVG";
import { DEMO_STATUS } from "./status";
import styles from "./Floor3D.module.css";

type Props = {
  english?: boolean;
  floors?: Floor[];
  view?: BuildingView;
  activeFloor?: FloorKey;
  onViewChange?: (view: BuildingView) => void;
  onSelectFloor?: (floor: FloorKey) => void;
  rooms: Record<RoomKey, Room>;
  selectedRoom: RoomKey | null;
  onSelectRoom: (id: RoomKey) => void;
  fallback: ReactNode;
};


function Chair({ x, z, turn = 0 }: { x: number; z: number; turn?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, turn, 0]}>
      <Box at={[0, 0.43, 0]} size={[0.43, 0.12, 0.43]} color="#526e6e" />
      <Box at={[0, 0.68, 0.19]} size={[0.43, 0.44, 0.075]} color="#526e6e" />
      {[-0.15, 0.15].flatMap((a) =>
        [-0.15, 0.15].map((b) => (
          <Box
            key={`${a}${b}`}
            at={[a, 0.2, b]}
            size={[0.035, 0.4, 0.035]}
            color="#424e52"
          />
        )),
      )}
    </group>
  );
}
function Table({
  x,
  z,
  office = false,
}: {
  x: number;
  z: number;
  office?: boolean;
}) {
  return (
    <group position={[x, 0, z]}>
      <Box at={[0, 0.77, 0]} size={[1.55, 0.1, 0.8]} color="#c5a782" />
      {[-0.62, 0.62].map((a) => (
        <Box
          key={a}
          at={[a, 0.38, 0]}
          size={[0.06, 0.72, 0.6]}
          color="#e9e7e0"
        />
      ))}
      <Chair x={0} z={0.75} />
      {office ? (
        <>
          <Box at={[0, 1.08, -0.14]} size={[0.64, 0.4, 0.04]} color="#34474b" />
          <Box
            at={[0, 0.84, -0.14]}
            size={[0.06, 0.14, 0.06]}
            color="#48585c"
          />
          <Box
            at={[0, 0.835, 0.18]}
            size={[0.45, 0.025, 0.18]}
            color="#e9e8e2"
          />
        </>
      ) : (
        <>
          <Chair x={0} z={-0.75} turn={Math.PI} />
          <Cylinder
            at={[0.48, 0.9, 0]}
            radius={0.07}
            height={0.16}
            color="#eceae4"
          />
        </>
      )}
    </group>
  );
}
function Sofa({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      <Box at={[0, 0.3, 0]} size={[1.8, 0.4, 0.72]} color="#b68860" />
      <Box at={[0, 0.63, -0.3]} size={[1.8, 0.45, 0.16]} color="#bc946f" />
      {[-0.84, 0.84].map((a) => (
        <Box
          key={a}
          at={[a, 0.5, 0]}
          size={[0.15, 0.35, 0.72]}
          color="#bc946f"
        />
      ))}
      {[-0.43, 0.43].map((a) => (
        <Box
          key={a}
          at={[a, 0.53, 0.02]}
          size={[0.78, 0.1, 0.5]}
          color="#c9a581"
        />
      ))}
    </group>
  );
}
function FitCamera({ top, zoom, reset, view, selectedRoom }: { top: boolean; zoom: number; reset: number; view: BuildingView; selectedRoom: RoomKey | null }) {
  const { size, invalidate } = useThree();
  const reduced = useReducedMotion();
  const controls = useRef<OrbitControlsImpl>(null);
  const destination = useRef({ position: new Vector3(18,16,24), target: new Vector3(), zoom: 20, moving: true });
  useEffect(() => {
    const target = new Vector3();
    let width = view === "floor" ? 29 : 36, height = view === "exploded" ? 38 : view === "floor" ? 19 : 27;
    if (view === "floor" && selectedRoom) {
      const r = ROOM_RECTS[selectedRoom];
      target.set((r.x+r.w/2-700)/50 + (size.width > 700 ? 2.5 : 0), 0, (r.y+r.h/2-330)/50);
      width = Math.max(r.w/50+6, 10); height = Math.max(r.h/50+6, 10);
    }
    destination.current = { target, position: target.clone().add(top ? new Vector3(0,30,.01) : view === "floor" ? new Vector3(12,19,23) : new Vector3(20,15,28)), zoom: Math.min(size.width/width, (size.height-100)/height)*zoom, moving:true };
    invalidate();
  }, [view, selectedRoom, top, zoom, reset, size, invalidate]);
  useFrame(({ camera }, delta) => {
    const goal=destination.current;
    if (!goal.moving || !controls.current) return;
    const alpha=reduced ? 1 : 1-Math.exp(-delta*6);
    camera.position.lerp(goal.position,alpha);
    controls.current.target.lerp(goal.target,alpha);
    // Three.js cameras are mutable scene objects updated by the render loop.
    (camera as OrthographicCamera).zoom += (goal.zoom-(camera as OrthographicCamera).zoom)*alpha;
    camera.updateProjectionMatrix(); controls.current.update();
    goal.moving=camera.position.distanceTo(goal.position)>.01 || Math.abs((camera as OrthographicCamera).zoom-goal.zoom)>.01;
    if(goal.moving) invalidate();
  });
  return <OrbitControls ref={controls} makeDefault enablePan={false} enableZoom={false} enableRotate={!top} minPolarAngle={.1} maxPolarAngle={Math.PI/2.15} onStart={()=>{destination.current.moving=false;}} />;
}
function Furniture({ room, w, d }: { room: Room; w: number; d: number }) {
  const name = room.name.toLowerCase();
  if (name.includes("wc"))
    return (
      <group>
        {Array.from({ length: Math.max(1, Math.floor(w / 0.85)) }, (_, i) => {
          const x = -w / 2 + 0.48 + i * 0.85;
          return (
            <group key={i} position={[x, 0, -d / 2 + 0.65]}>
              <Box
                at={[-0.4, 0.6, 0]}
                size={[0.055, 1.2, 1.05]}
                color="#d3dcd9"
              />
              <Box at={[0, 0.48, -0.32]} size={[0.38, 0.53, 0.19]} />
              <Cylinder
                at={[0, 0.28, 0]}
                radius={0.22}
                height={0.34}
                color="#ffffff"
              />
              <mesh position={[0, 0.47, 0.03]} rotation={[-Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.16, 0.05, 8, 20]} />
                <meshStandardMaterial color="#ffffff" />
              </mesh>
            </group>
          );
        })}
        <Box
          at={[0, 0.72, d / 2 - 0.32]}
          size={[w * 0.7, 0.12, 0.4]}
          color="#b9c8c5"
        />
        <Box
          at={[0, 0.8, d / 2 - 0.32]}
          size={[w * 0.55, 0.07, 0.28]}
          color="#ffffff"
        />
        <Box
          at={[0, 1.05, d / 2 - 0.12]}
          size={[w * 0.65, 0.42, 0.03]}
          color="#9bb4bc"
        />
      </group>
    );
  if (name.includes("küche"))
    return (
      <group>
        <Box
          at={[0, 0.43, -d / 2 + 0.4]}
          size={[w - 0.5, 0.86, 0.65]}
          color="#b7c6be"
        />
        <Box
          at={[0, 0.89, -d / 2 + 0.4]}
          size={[w - 0.4, 0.08, 0.73]}
          color="#f5f0e5"
        />
        {Array.from({ length: Math.floor(w / 0.65) }, (_, i) => (
          <Box
            key={i}
            at={[-w / 2 + 0.55 + i * 0.65, 0.45, -d / 2 + 0.74]}
            size={[0.58, 0.7, 0.02]}
            color="#c9d3cc"
          />
        ))}
        <Box
          at={[-w / 4, 0.95, -d / 2 + 0.4]}
          size={[0.75, 0.035, 0.48]}
          color="#687e83"
        />
        <Box
          at={[w / 4, 1.1, -d / 2 + 0.35]}
          size={[0.42, 0.4, 0.4]}
          color="#35484d"
        />
        <Box
          at={[w / 2 - 0.48, 0.85, d / 2 - 0.45]}
          size={[0.65, 1.7, 0.65]}
          color="#d2d9d7"
        />
      </group>
    );
  if (/archiv|bibliothek|lager|server|technik|müll|umkleide/.test(name))
    return (
      <group>
        {[-1, 1].map((side) => (
          <group key={side} position={[side * (w / 2 - 0.35), 0, 0]}>
            <Box
              at={[0, 0.8, 0]}
              size={[0.45, 1.6, d * 0.68]}
              color={name.includes("server") ? "#3e505a" : "#bdc9c4"}
            />
            {[0.35, 0.7, 1.05, 1.4].map((y) => (
              <Box
                key={y}
                at={[-side * 0.25, y, 0]}
                size={[0.04, 0.035, d * 0.65]}
                color="#efeee6"
              />
            ))}
          </group>
        ))}
      </group>
    );
  if (name.includes("garage") || name.includes("fahrrad"))
    return (
      <group>
        {[-1, 0, 1].map((i) => (
          <group key={i} position={[(i * w) / 3, 0, 0]}>
            <Box
              at={[0, 0.015, 0]}
              size={[0.035, 0.025, d * 0.8]}
              color="#faf5da"
            />
            <Box at={[0.45, 0.32, 0]} size={[0.7, 0.6, 1.3]} color="#6c8790" />
          </group>
        ))}
      </group>
    );
  if (/empfang|service|vorzimmer|portier/.test(name))
    return (
      <group>
        <Box at={[0, 0.51, 0]} size={[w * 0.64, 1.02, 0.72]} color="#c6a77f" />
        <Box at={[0, 1.04, 0]} size={[w * 0.69, 0.09, 0.83]} color="#fbf7ed" />
        <Box
          at={[0.18, 1.22, -0.1]}
          size={[0.55, 0.33, 0.045]}
          color="#384d52"
        />
        <Chair x={0} z={-0.85} turn={Math.PI} />
      </group>
    );
  if (/foyer|warte|aufenthalt|lounge|vorstand/.test(name))
    return (
      <group>
        <Box
          at={[0, 0.025, 0]}
          size={[w * 0.7, 0.025, d * 0.65]}
          color="#c6c9bc"
        />
        <Sofa x={-0.45} z={-d * 0.24} />
        <Cylinder
          at={[0, 0.32, 0.25]}
          radius={0.5}
          height={0.08}
          color="#d8c4a5"
        />
        <Cylinder
          at={[0, 0.15, 0.25]}
          radius={0.16}
          height={0.3}
          color="#576966"
        />
        <Chair x={1.05} z={0.65} />
      </group>
    );
  return (
    <group>
      {Array.from({ length: Math.max(1, Math.floor(w / 2.15)) }, (_, i) =>
        Array.from({ length: Math.max(1, Math.floor(d / 2.6)) }, (_, j) => (
          <Table
            key={`${i}-${j}`}
            x={-w / 2 + 1.15 + i * 2.15}
            z={-d / 2 + 1.3 + j * 2.6}
            office={name.includes("büro")}
          />
        )),
      )}
    </group>
  );
}
function DoorWall({ width, z }: { width: number; z: number }) {
  const opening = Math.min(0.85, width * 0.55),
    side = (width - opening) / 2;
  return (
    <group>
      {[-1, 1].map((sign) => (
        <Box
          key={sign}
          at={[sign * (opening / 2 + side / 2), 0.58, z]}
          size={[side, 1.16, 0.12]}
        />
      ))}
      <Box at={[0, 1.11, z]} size={[opening, 0.12, 0.12]} />
      <group position={[-opening / 2, 0, z]} rotation={[0, -0.75, 0]}>
        <Box
          at={[opening / 2, 0.49, 0]}
          size={[opening, 0.98, 0.045]}
          color="#bfa88b"
        />
        <Box
          at={[opening - 0.1, 0.48, 0.04]}
          size={[0.09, 0.025, 0.025]}
          color="#5e6f6a"
        />
      </group>
    </group>
  );
}
function Building({
  rooms,
  selectedRoom,
  onSelectRoom,
  labels,
  cutaway,
}: Pick<Props, "rooms" | "selectedRoom" | "onSelectRoom"> & { labels: boolean; cutaway: boolean }) {
  const [hover, setHover] = useState<RoomKey | null>(null);
  return (
    <group>
      <StairCore />
      <Box at={[0, -0.3, 0]} size={[24.5, 0.5, 9.3]} color="#c5d0cd" />
      <Box at={[0, -0.07, 0]} size={[24.1, 0.08, 8.9]} color="#eeeee5" />
      {Object.entries(ROOM_RECTS).map(([key, r]) => {
        const id = key as RoomKey,
          room = rooms[id],
          w = r.w / 50,
          d = r.h / 50;
        const active = selectedRoom === id || hover === id;
        return (
          <group
            key={id}
            position={[
              (r.x + r.w / 2 - 700) / 50,
              0,
              (r.y + r.h / 2 - 330) / 50,
            ]}
            onPointerOver={(e) => {
              e.stopPropagation();
              setHover(id);
            }}
            onPointerOut={() => setHover(null)}
            onClick={(e) => {
              e.stopPropagation();
              if (e.delta < 5) onSelectRoom(id);
            }}
          >
            <mesh position={[0, 0.005, 0]} receiveShadow>
              <boxGeometry args={[w - 0.04, 0.06, d - 0.04]} />
              <meshStandardMaterial
                color={DEMO_STATUS[room.status].floor}
                emissive={DEMO_STATUS[room.status].color}
                emissiveIntensity={active ? 0.3 : 0.12}
                toneMapped={false}
                roughness={0.85}
              />
            </mesh>
            <Box
              at={[0, 0.035, d / 2 - 0.1]}
              size={[w - 0.2, 0.025, 0.09]}
              color={DEMO_STATUS[room.status].color}
            />
            <Furniture room={room} w={w - 0.15} d={d - 0.15} />
            <InteriorDetails room={room} w={w-.15} d={d-.15} />
            {/* Doors face the original central circulation zone. */}
            {id === "cafeteria" ? (
              <group rotation={[0, Math.PI / 2, 0]}>
                <DoorWall width={d} z={-w / 2} />
              </group>
            ) : (
              <Box at={[-w / 2, 0.58, 0]} size={[0.12, 1.16, d]} />
            )}
            {r.y >= 341 ? (
              <DoorWall width={w} z={-d / 2} />
            ) : (
              <Box at={[0, 0.58, -d / 2]} size={[w, 1.16, 0.12]} />
            )}
            {r.y === 110 && <DoorWall width={w} z={d / 2} />}
            {/* Fine tile joints give the status surfaces a physical scale. */}
            {Array.from({ length: Math.floor(w / 0.6) }, (_, i) => (
              <Box
                key={`x${i}`}
                at={[-w / 2 + 0.6 + i * 0.6, 0.039, 0]}
                size={[0.009, 0.004, d - 0.12]}
                color="#b8c9c0"
              />
            ))}
            {Array.from({ length: Math.floor(d / 0.6) }, (_, i) => (
              <Box
                key={`z${i}`}
                at={[0, 0.039, -d / 2 + 0.6 + i * 0.6]}
                size={[w - 0.12, 0.004, 0.009]}
                color="#b8c9c0"
              />
            ))}
            {labels && (
              <Html
                center
                position={[0, 1.45, d * 0.15]}
                zIndexRange={[12, 1]}
                style={{ pointerEvents: "none" }}
              >
                <button
                  type="button"
                  style={{ pointerEvents: "auto", background: DEMO_STATUS[room.status].background, color: DEMO_STATUS[room.status].color, borderColor: DEMO_STATUS[room.status].color }}
                  className={`${styles.pin} ${active ? styles.pinActive : ""}`}
                  onClick={() => onSelectRoom(id)}
                  aria-label={`${room.name}: ${DEMO_STATUS[room.status].label}`}
                  aria-pressed={selectedRoom === id}
                >
                  <span className={styles.statusIcon} aria-hidden="true">{DEMO_STATUS[room.status].symbol}</span>
                  <span className={styles.pinText}>{room.name}<small>{DEMO_STATUS[room.status].label}</small></span>
                  {room.openTasks ? <b>{room.openTasks}</b> : null}
                </button>
              </Html>
            )}
          </group>
        );
      })}
      {/* Continuous exterior glazing, stone mullions and a low front cutaway. */}
      <Box at={[0, 0.42, -4.45]} size={[24.2, 0.84, 0.16]} color="#ebe9df" />
      {Array.from({ length: 16 }, (_, i) => (
        <group key={i} position={[-11.3 + i * 1.5, 0, -4.45]}>
          <Box
            at={[0, 1.2, 0]}
            size={[1.42, 0.85, 0.055]}
            color="#94bec6"
            glass
          />
          <Box at={[-0.75, 1.1, 0]} size={[0.065, 1.4, 0.12]} color="#5f7779" />
          <Box at={[0, 1.67, 0]} size={[1.5, 0.07, 0.12]} color="#5f7779" />
        </group>
      ))}
      <Box at={[-12.08, 0.83, 0]} size={[0.16, 1.66, 9]} />
      <Box at={[12.08, 0.45, 0]} size={[0.16, 0.9, 9]} />
      <Box
        at={[0, cutaway ? 0.12 : 0.83, 4.45]}
        size={[24.2, cutaway ? 0.24 : 1.66, 0.16]}
      />
      {!cutaway && (
        <Box
          at={[0, 1.3, 4.45]}
          size={[23.8, 0.6, 0.06]}
          color="#97bbc3"
          glass
        />
      )}
    </group>
  );
}
class SceneBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}
export default function Floor3D({ fallback, ...input }: Props) {
  const props = { ...input, view: input.view ?? "floor" as BuildingView, activeFloor: input.activeFloor ?? "eg" as FloorKey, onViewChange: input.onViewChange ?? (() => {}), onSelectFloor: input.onSelectFloor ?? (() => {}) };
  const [top, setTop] = useState(false),
    [zoom, setZoom] = useState(1),
    [reset, setReset] = useState(0),
    [labels, setLabels] = useState(() => window.innerWidth >= 640),
    [cutaway, setCutaway] = useState(true);
  const english=props.english;
  const floor=(props.floors ?? FLOORS).find(f=>f.id===props.activeFloor)!;
  const isFloor=props.view === "floor";
  return (
    <div className={styles.viewer}>
      <SceneBoundary fallback={fallback}>
        <Canvas
          orthographic
          shadows
          dpr={[1, 1.5]}
          frameloop="demand"
          camera={{ position: [12, 19, 23], near: 0.1, far: 150 }}
          gl={{ antialias: true, alpha: true }}
          fallback={fallback}
        >
          <color attach="background" args={["#edf1ed"]} />
          <ambientLight intensity={0.7} />
          <hemisphereLight args={["#ffffff", "#a5b6af", 1.1]} />
          <directionalLight
            position={[-8, 18, 7]}
            intensity={2}
            castShadow
            shadow-mapSize={[2048, 2048]}
            shadow-camera-left={-18}
            shadow-camera-right={18}
            shadow-camera-top={15}
            shadow-camera-bottom={-15}
            shadow-bias={-0.0005}
            shadow-normalBias={0.025}
          />
          {isFloor ? <Building rooms={props.rooms} selectedRoom={props.selectedRoom} onSelectRoom={props.onSelectRoom} labels={labels} cutaway={cutaway} /> : <BuildingTower english={english} floors={props.floors} open={props.view === "exploded"} activeFloor={props.activeFloor} onOpen={()=>props.onViewChange("exploded")} onSelectFloor={props.onSelectFloor} />}
          <mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, isFloor ? -.57 : -12, 0]}
            receiveShadow
          >
            <planeGeometry args={[200, 200]} />
            <meshStandardMaterial color="#edf1ed" roughness={1} />
          </mesh>
          <gridHelper
            args={[80, 80, "#d6dfd9", "#e1e7e2"]}
            position={[0, isFloor ? -.56 : -11.99, 0]}
          />
          <FitCamera top={top} zoom={zoom} reset={reset} view={props.view} selectedRoom={props.selectedRoom} />
        </Canvas>
      </SceneBoundary>
      {input.onViewChange && <div className={styles.sceneHeader}>
        <div><span className={styles.overline}>TASKEY CAMPUS / INTERAKTIVE DEMO</span><h3>{isFloor ? `${floor.label} · ${props.selectedRoom ? props.rooms[props.selectedRoom].name : (english ? "Rooms" : "Raumansicht")}` : props.view === "exploded" ? (english ? "Every floor. A closer look." : "Jede Etage. Ein eigener Einblick.") : (english ? "One building. All connected." : "Ein Haus. Alles verbunden.")}</h3></div>
        <nav className={styles.breadcrumbs} aria-label="Gebäudeansicht">
          <button aria-pressed={props.view === "building"} onClick={()=>props.onViewChange("building")}>{english ? "Building" : "Gebäude"}</button><span>›</span>
          <button aria-pressed={props.view === "exploded"} onClick={()=>props.onViewChange("exploded")}>{english ? "Floors" : "Etagen"}</button><span>›</span>
          <button aria-pressed={isFloor} onClick={()=>props.onViewChange("floor")}>{floor.label}</button>
        </nav>
      </div>}
      {!isFloor && <div className={styles.sceneSummary}><strong>05 <span>{english ? "floors" : "Ebenen"}</span></strong><strong>40 <span>{english ? "rooms" : "Räume"}</span></strong><span className={styles.exampleTag}>{english ? "Example building" : "Beispielgebäude"}</span></div>}
      <div className={styles.controls} aria-label="3D-Modell steuern">
        <button onClick={() => setTop(!top)} aria-pressed={top}>
          {top ? "◇ Perspektive" : "⊞ Draufsicht"}
        </button>
        <span />
        <button
          onClick={() => setZoom((z) => Math.max(0.7, z - 0.15))}
          aria-label="Verkleinern"
          disabled={zoom <= 0.7}
        >
          −
        </button>
        <button
          onClick={() => {
            setZoom(1);
            setTop(false);
            setReset((r) => r + 1);
          }}
          aria-label="Ansicht zurücksetzen"
        >
          ↺
        </button>
        <button
          onClick={() => setZoom((z) => Math.min(1.75, z + 0.15))}
          aria-label="Vergrößern"
          disabled={zoom >= 1.75}
        >
          +
        </button>
        <span />
        {isFloor && <><button
          onClick={() => setLabels(!labels)}
          aria-pressed={labels}
          aria-label="Raumnamen anzeigen"
        >
          Aa
        </button>
        <button onClick={() => setCutaway(!cutaway)} aria-pressed={cutaway}>
          Schnitt
        </button></>}
        {!isFloor && <button onClick={()=>props.onViewChange(props.view === "building" ? "exploded" : "building")}>{props.view === "building" ? (english ? "↗ Open building" : "↗ Aufklappen") : (english ? "↙ Close building" : "↙ Schließen")}</button>}
        {isFloor && props.selectedRoom && <button onClick={()=>{props.onViewChange("floor");setZoom(1);}}>Alle Räume</button>}
      </div>
      <div className={styles.compass} aria-hidden="true">
        N<span>↑</span>
      </div>
      <p className={styles.hint}>
        {top ? "Draufsicht" : "Ziehen zum Drehen"}
        <span>·</span>{isFloor ? "Raum anklicken und entdecken" : props.view === "exploded" ? "Etage auswählen" : "Gebäude anklicken und öffnen"}
      </p>
    </div>
  );
}
