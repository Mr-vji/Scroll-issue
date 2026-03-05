import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Home from "../pages/Home";
import Experience from "./Experience";

export default function Scene() {
   return (
      <div className="fixed inset-0">
         <Canvas
            id="vji"
            camera={{ position: [0, 0, 8], fov: 30 }}
            gl={{ alpha: true }}
            style={{ background: "transparent" }}
         >
            <ScrollControls pages={4} damping={0.2}>
               <Scroll html>
                  <Home />
               </Scroll>
               <Experience />
            </ScrollControls>
         </Canvas>
      </div>
   );
}
