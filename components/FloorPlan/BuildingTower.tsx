"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { useReducedMotion } from "motion/react";
import type { Group } from "three";
import { FLOORS, type Floor, type FloorKey } from "@/lib/data/floorplan";
import { ROOM_RECTS } from "./FloorSVG";
import { StairCore } from "./InteriorDetails";
import { Box, Cylinder } from "./SceneParts";
import { DEMO_STATUS } from "./status";
import styles from "./Floor3D.module.css";

export type BuildingView = "building" | "exploded" | "floor";


function Lift({ y, children }: { y:number; children:ReactNode }) {
  const group=useRef<Group>(null), reduced=useReducedMotion();
  const { invalidate }=useThree();
  useEffect(()=>invalidate(),[y,invalidate]);
  useFrame((_,delta)=>{
    if(!group.current)return;
    const gap=y-group.current.position.y;
    if(Math.abs(gap)>.002){group.current.position.y+=gap*(reduced?1:1-Math.exp(-delta*4.5));invalidate();}
  });
  return <group ref={group}>{children}</group>;
}
function FloorShell({ floor, open, active, onClick, english }: { english?:boolean; floor:Floor; open:boolean; active:boolean; onClick:()=>void }) {
  return <group onClick={e=>{e.stopPropagation(); if(e.delta<5)onClick();}}>
    <StairCore compact />
    <Box at={[0,-.12,0]} size={[24.6,.24,9.6]} color={active&&open?"#799e8a":"#d5d8d1"} />
    <Box at={[0,.01,0]} size={[24,.06,9]} color="#eff0e7" />
    {Object.entries(ROOM_RECTS).map(([id,r])=> <group key={id} position={[(r.x+r.w/2-700)/50,0,(r.y+r.h/2-330)/50]}>
      <mesh position={[0,.06,0]}><boxGeometry args={[r.w/50-.12,.06,r.h/50-.12]} /><meshStandardMaterial color={DEMO_STATUS[floor.rooms[id as keyof typeof floor.rooms].status].floor} toneMapped={false} /></mesh>
      {open && <><Box at={[-r.w/100,.35,0]} size={[.09,.7,r.h/50]} /><Box at={[0,.35,-r.h/100]} size={[r.w/50,.7,.09]} /></>}
    </group>)}
    {[-1,1].map(side=><group key={side} position={[0,0,side*4.52]}>
      <Box at={[0,.3,0]} size={[24.2,.6,.13]} color="#e3e1d8" />
      {!open && <>
        <Box at={[0,1.44,0]} size={[24,1.7,.06]} color="#75a2ae" glass />
        <Box at={[0,2.43,0]} size={[24.5,.3,.22]} color="#e8e6de" />
        {Array.from({length:17},(_,i)=><group key={i} position={[-12+i*1.5,0,0]}>
          <Box at={[0,1.46,0]} size={[.07,1.85,.13]} color="#3b535b" />
          {i%2===0 && <Box at={[.18,1.5,side*.17]} size={[.12,2.1,.4]} color="#b7b5a8" />}
        </group>)}
        <Box at={[0,1.2,0]} size={[24,.045,.12]} color="#54727b" />
      </>}
    </group>)}
    {[-1,1].map(side=><group key={side} position={[side*12.05,0,0]}><Box at={[0,open?.36:1.22,0]} size={[.18,open?.72:2.44,9]} color="#d8d7cb" />{!open && [-3,-1.5,0,1.5,3].map(z=><Box key={z} at={[side*.12,1.35,z]} size={[.06,1.5,.85]} color="#74949c" />)}</group>)}
    {open && <Html position={[12.3,.3,0]} center zIndexRange={[15,2]}><button className={styles.floorPin} onClick={onClick} aria-label={`${floor.label} ${english ? "explore" : "erkunden"}`}><strong>{floor.label}</strong><span>{floor.done}/{floor.total} {english ? "cleaned" : "gereinigt"}</span><b>↗</b></button></Html>}
  </group>;
}
function Roof() {
  return <group>
    <Box at={[0,0,0]} size={[24.6,.3,9.6]} color="#cdd4ce" />
    <Box at={[0,.17,0]} size={[23.7,.05,8.7]} color="#aab4a4" />
    {[-4.65,4.65].map(z=><Box key={z} at={[0,.35,z]} size={[24.6,.6,.15]} />)}
    {[-12.2,12.2].map(x=><Box key={x} at={[x,.35,0]} size={[.15,.6,9.4]} />)}
    {[-8,-5,-2,1].map(x=>[-2,1].map(z=><group key={`${x}${z}`} position={[x,.44,z]} rotation={[-.18,0,0]}>
      <Box at={[0,0,0]} size={[2.6,.1,1.8]} color="#344c68" />
      {[-.85,0,.85].map(dx=><Box key={dx} at={[dx,.055,0]} size={[.02,.01,1.75]} color="#99bccd" />)}
      <Box at={[0,.055,0]} size={[2.55,.01,.025]} color="#99bccd" />
    </group>))}
    {[5,8].map(x=><group key={x} position={[x,.6,0]}><Box at={[0,0,0]} size={[1.8,.9,2.1]} color="#d8dddb" />{[-.55,0,.55].map(z=><Box key={z} at={[.91,0,z]} size={[.03,.52,.08]} color="#667d7e" />)}<Cylinder at={[0,.52,0]} radius={.55} height={.12} color="#536967" /></group>)}
    <Box at={[9,.6,-3]} size={[3.3,1.2,1.7]} color="#e6e5dc" />
    <Box at={[9,1.23,-3]} size={[3.5,.1,1.9]} color="#6e8589" />
  </group>;
}
function Campus() {
  return <group position={[0,-3.78,0]}>
    <Box at={[0,-.2,0]} size={[32,.35,17]} color="#c6cec3" />
    <Box at={[0,0,0]} size={[29,.08,14]} color="#e1dfd4" />
    {Array.from({length:22},(_,i)=><Box key={i} at={[-14+i*1.3,.045,6.2]} size={[.012,.01,2.8]} color="#b9c0b7" />)}
    <Box at={[-6,.02,7]} size={[6,.05,2.5]} color="#758f6c" />
    <Box at={[7,.02,7]} size={[5,.05,2.5]} color="#758f6c" />
    {[-7,7].map(x=><group key={x} position={[x,0,5.9]}><Box at={[0,.43,0]} size={[2.3,.12,.65]} color="#9d815e" /><Box at={[0,.7,-.26]} size={[2.3,.4,.1]} color="#ac906c" />{[-.8,.8].map(a=><Box key={a} at={[a,.2,0]} size={[.08,.4,.5]} color="#475855" />)}</group>)}
    {[-3,3].map(x=><group key={x} position={[x,0,7.4]}><Cylinder at={[0,.45,0]} radius={.075} height={.9} color="#485957" /><Cylinder at={[0,.91,0]} radius={.09} height={.08} color="#fff4ce" /></group>)}
    <Box at={[0,.18,5.1]} size={[4,.25,1.8]} color="#e6e4dc" />
    <Box at={[0,2.5,5.1]} size={[5,.16,2.1]} color="#5c787d" glass />
    {[-2.2,2.2].map(x=><Box key={x} at={[x,1.3,5.85]} size={[.08,2.5,.08]} color="#475e61" />)}
    <Box at={[0,1.35,4.62]} size={[2.4,2.35,.06]} color="#395761" glass />
    {[-1.2,0,1.2].map(x=><Box key={x} at={[x,1.35,4.7]} size={[.07,2.35,.09]} color="#395761" />)}
    <Box at={[0,2.72,4.65]} size={[4.6,.45,.17]} color="#e6e8df" />
  </group>;
}
export function BuildingTower({ open, activeFloor, onOpen, onSelectFloor, floors=FLOORS, english }: { floors?:Floor[]; english?:boolean; open:boolean; activeFloor:FloorKey; onOpen:()=>void; onSelectFloor:(floor:FloorKey)=>void }) {
  const LEVELS=[...floors].reverse();
  return <group>
    {!open && <Campus />}
    {LEVELS.map((floor,index)=><Lift key={floor.id} y={open ? index*4.5-9 : (index-1)*2.7-3.5}>
      {(open || floor.id!=="ug") && <FloorShell english={english} floor={floor} open={open} active={floor.id===activeFloor} onClick={()=>open?onSelectFloor(floor.id):onOpen()} />}
    </Lift>)}
    <Lift y={open ? 14 : 7.3}><group onClick={e=>{e.stopPropagation();if(e.delta<5)onOpen();}}><Roof /></group></Lift>
    {!open && <Html position={[0,-1,5.5]} center zIndexRange={[15,2]}><button className={styles.enterPin} onClick={onOpen}><span>↗</span>{english ? "Open building" : "Gebäude öffnen"}<small>{english ? "5 floors · 40 rooms" : "5 Ebenen · 40 Räume"}</small></button></Html>}
  </group>;
}
