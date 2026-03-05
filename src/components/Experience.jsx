import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
   const meshRef = useRef();
   const scroll = useScroll();

   useFrame(() => {
      const offset = scroll.offset;

      meshRef.current.rotation.x = offset * Math.PI * 2;
      meshRef.current.rotation.y = offset * Math.PI * 2;

      meshRef.current.position.y = -offset * 3;
   });

   return (
      <mesh ref={meshRef} position={[0, 0, 0]} scale={0.6}>
         <boxGeometry />
         <meshNormalMaterial />
      </mesh>
   );
}
