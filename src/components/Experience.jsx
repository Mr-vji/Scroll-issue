import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
   const meshRef = useRef();
   const scroll = useScroll();

   useFrame(() => {
      const offset = scroll.offset; // 0 to 1

      // Rotate based on scroll
      meshRef.current.rotation.x = offset * Math.PI * 2;
      meshRef.current.rotation.y = offset * Math.PI * 2;

      // Move across Y axis as you scroll down
      meshRef.current.position.y = -offset * 3;
   });

   return (
      <mesh ref={meshRef} position={[0, 0, 0]}>
         <boxGeometry />
         <meshNormalMaterial />
      </mesh>
   );
}
