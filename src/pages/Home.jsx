export default function Home() {
   return (
      <div className="w-screen">
         {/* Hero — transparent so cube shows through */}
         <section className="h-screen flex items-start justify-center pt-24">
            <h1 className="text-6xl font-bold text-white mix-blend-difference">Hero Section</h1>
         </section>

         {/* These sections are solid — they cover the cube as you scroll */}
         <section className="relative h-screen flex items-center justify-center bg-purple-400 z-10">
            <h1 className="text-6xl font-bold text-white">About Section</h1>
         </section>

         <section className="relative h-screen flex items-center justify-center bg-rose-400 z-10">
            <h1 className="text-6xl font-bold text-white">Projects Section</h1>
         </section>

         <section className="relative h-screen flex items-center justify-center bg-teal-400 z-10">
            <h1 className="text-6xl font-bold text-white">Contact Section</h1>
         </section>
      </div>
   );
}
