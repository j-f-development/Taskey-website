"use client";

import type { Room } from "@/lib/data/floorplan";
import { Box, Cylinder } from "./SceneParts";

function Ring({ at, radius, color, rotation = [0,0,0] }: { at:[number,number,number]; radius:number; color:string; rotation?:[number,number,number] }) {
  return <mesh position={at} rotation={rotation} castShadow><torusGeometry args={[radius,.025,8,24]} /><meshStandardMaterial color={color} metalness={.35} roughness={.45} /></mesh>;
}
export function StairCore({ compact=false }: { compact?:boolean }) {
  return <group position={[-13.35,0,-1.7]}>
    <Box at={[0,-.13,0]} size={[2.6,.25,4.9]} color="#c6cec6" />
    <Box at={[-1.25,.8,0]} size={[.12,1.6,4.9]} />
    {Array.from({length:12},(_,i)=><Box key={i} at={[0,.1+i*.16,-1.95+i*.32]} size={[2,.16,.34]} color="#c7c6bc" />)}
    {[-1.02,1.02].map(x=><group key={x}>
      {[0,3,6,9,11].map(i=><Cylinder key={i} at={[x,.55+i*.16,-1.95+i*.32]} radius={.025} height={.9} color="#5d7475" />)}
      <group position={[x,1.4,-.15]} rotation={[-.46,0,0]}><Box at={[0,0,0]} size={[.045,.045,4]} color="#4b6769" /></group>
    </group>)}
    {!compact && <><Box at={[0,2.14,2.15]} size={[2.4,.2,.7]} color="#d3d4ca" /><Box at={[-1.3,1.2,0]} size={[.045,2.4,4.8]} color="#a9d4dc" glass /></>}
  </group>;
}
export function InteriorDetails({ room, w, d }: { room:Room; w:number; d:number }) {
  const name=room.name.toLowerCase();
  return <group>
    {/* Skirting, a room sign, a switch and a framed wall graphic. */}
    <Box at={[-w/2+.025,.1,0]} size={[.04,.14,d]} color="#a5ada6" />
    <Box at={[0,.1,-d/2+.03]} size={[w,.14,.04]} color="#a5ada6" />
    <Box at={[-w/2+.08,.72,d/2-.25]} size={[.04,.1,.07]} color="#fdfcf4" />
    {!name.includes("wc") && w>3 && <><Box at={[0,.83,-d/2+.07]} size={[.95,.57,.045]} color="#8a9e93" /><Box at={[0,.83,-d/2+.1]} size={[.84,.46,.025]} color="#d6dfd0" /><Box at={[-.14,.83,-d/2+.12]} size={[.22,.3,.01]} color="#9cb6a7" /></>}
    {name.includes("wc") && <>
      {Array.from({length:Math.max(1,Math.floor(w/.85))},(_,i)=><group key={i} position={[-w/2+.48+i*.85,0,-d/2+.65]}>
        <Box at={[.22,.82,-.31]} size={[.12,.18,.07]} color="#b3c2c3" />
        <Box at={[-.3,.53,.15]} size={[.09,.11,.16]} color="#eeeee5" />
        <group position={[-.36,0,.48]} rotation={[0,-.4,0]}><Box at={[.28,.57,0]} size={[.56,.91,.035]} color="#d4ddd5" /><Box at={[.46,.56,.025]} size={[.035,.04,.04]} color="#586e6a" /></group>
      </group>)}
      {[-w*.19,w*.19].map(x=><group key={x} position={[x,.83,d/2-.32]}>
        <mesh rotation={[-Math.PI/2,0,0]} scale={[1,.65,1]}><torusGeometry args={[.12,.025,8,20]} /><meshStandardMaterial color="#e8edef" /></mesh>
        <Cylinder at={[0,.1,.1]} radius={.018} height={.18} color="#869b9d" /><Box at={[0,.19,.05]} size={[.035,.035,.14]} color="#a8b9b9" />
      </group>)}
      <Box at={[w/2-.18,.93,d/2-.17]} size={[.17,.26,.14]} color="#667d7a" />
      <Cylinder at={[w/2-.25,.24,d/2-.4]} radius={.13} height={.45} color="#adbbb6" />
    </>}
    {/küche/.test(name) && <>
      <Cylinder at={[-w/4,1.04,-d/2+.18]} radius={.025} height={.27} color="#83989b" />
      <Box at={[-w/4,1.18,-d/2+.3]} size={[.045,.04,.27]} color="#a2b1b3" />
      {[.3,.6].map(dx=><group key={dx} position={[dx,.947,-d/2+.4]}><Box at={[0,0,0]} size={[.25,.02,.43]} color="#34474d" />{[-.11,.11].map(z=><Ring key={z} at={[0,.015,z]} radius={.075} color="#89999c" rotation={[-Math.PI/2,0,0]} />)}</group>)}
      <Box at={[w/4,.95,-d/2+.28]} size={[.19,.04,.12]} color="#b3c2c2" />
      <Cylinder at={[w/4,1.02,-d/2+.08]} radius={.055} height={.12} color="#ffffff" />
    </>}
    {/archiv|bibliothek|lager/.test(name) && [-1,1].map(side=><group key={side} position={[side*(w/2-.35),0,0]}>
      {[.48,.83,1.18].map(y=>Array.from({length:Math.max(1,Math.floor(d*.6/.15))},(_,i)=><Box key={`${y}${i}`} at={[-side*.255,y,-d*.3+i*.15]} size={[.06,.22,.1]} color={["#8a9f95","#bfa58a","#80929f","#d0c7af"][i%4]} />))}
    </group>)}
    {/server|technik/.test(name) && [-1,1].map(side=><group key={side} position={[side*(w/2-.35),0,0]}>
      {[.35,.6,.85,1.1,1.35].map(y=><group key={y}><Box at={[-side*.26,y,0]} size={[.02,.14,d*.57]} color="#293f4c" />{[-.3,0,.3].map(z=><Box key={z} at={[-side*.28,y,z]} size={[.015,.025,.05]} color="#68ccbb" />)}</group>)}
    </group>)}
    {room.status === "progress" && <group position={[w/2-.45,0,0]}>
      <Box at={[0,.35,0]} size={[.48,.5,.65]} color="#617b85" />
      <Box at={[0,.63,0]} size={[.52,.07,.69]} color="#a0b2b5" />
      {[-.18,.18].flatMap(x=>[-.25,.25].map(z=><Cylinder key={`${x}${z}`} at={[x,.09,z]} radius={.065} height={.08} color="#344e54" />))}
      <Cylinder at={[-.1,.77,0]} radius={.075} height={.24} color="#e6bf56" />
      <Cylinder at={[.1,.74,.12]} radius={.065} height={.18} color="#8ed5ca" />
      <Cylinder at={[.24,.7,-.2]} radius={.017} height={1.3} color="#9aabaa" />
      <Box at={[.24,.06,-.2]} size={[.3,.035,.18]} color="#dad8c5" />
    </group>}
  </group>;
}
