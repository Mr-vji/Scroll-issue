import { Link } from "react-router-dom";

export default function Navbar() {
   return (
      <nav className="fixed top-0 left-0 w-full p-6 flex gap-6 z-10">
         <Link to="/" className="hover:text-indigo-400">
            Home
         </Link>
         <Link to="/about" className="hover:text-indigo-400">
            About
         </Link>
      </nav>
   );
}
