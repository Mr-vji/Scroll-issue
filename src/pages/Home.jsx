export default function Home() {
   return (
      <div className="w-screen">
         <section className="h-screen flex items-center bg-amber-300 justify-center -z-50">
            <h1 className="text-6xl font-bold">Hero Section</h1>
         </section>

         <section className="h-screen flex items-center justify-center">
            <h1 className="text-6xl font-bold">About Section</h1>
         </section>

         <section className="h-screen flex items-center justify-center bg-blue-300">
            <h1 className="text-6xl font-bold">Projects Section</h1>
         </section>

         <section className="h-screen flex items-center justify-center bg-green-300">
            <h1 className="text-6xl font-bold">Contact Section</h1>
         </section>
      </div>
   );
}
