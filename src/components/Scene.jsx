import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Home from "../pages/Home";
import Experience from "./Experience";

export default function Scene() {
   return (
      <div className="fixed inset-0">
         <Canvas
            camera={{ position: [0, 0, 5], fov: 30 }}
            gl={{ alpha: true, pointerEvents: "none" }}
         >
            <ScrollControls pages={4} damping={0.2}>
               {/* HTML layer — z-index LOW */}
               <Scroll html style={{ width: "100%", zIndex: -1000 }}>
                  <Home />
               </Scroll>

               <Experience />
            </ScrollControls>
         </Canvas>
      </div>
   );
}
