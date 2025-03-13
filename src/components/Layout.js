import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Layout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Function to check screen size
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize(); // Run on initial load
    window.addEventListener("resize", checkScreenSize); // Listen for window resize

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col md:flex-row bg-white">
      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="flex justify-between items-center p-4 border-b border-gray-300 w-full md:hidden">
          <h1 className="text-2xl font-serif">MARGÉNE</h1>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-xl focus:outline-none"
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      )}

     {/* Sidebar */}
<motion.aside
  initial={{ x: isMobile ? -300 : 0 }}
  animate={{ x: menuOpen || !isMobile ? 0 : -300 }}
  transition={{ duration: 0.3 }}
  className={`${
    !isMobile || menuOpen ? "block" : "hidden"
  } fixed md:relative md:left-3 md:top-2 md:h-full w-64 md:w-1/6 bg-white z-[9999] p-7`}
>
  <h1 className="text-2xl font-serif font-bold">MARGÉNE</h1>
  <nav className="mt-8 space-y-4 text-lg">
  <Link href="/collections" className="block hover:italic">
    Collections
  </Link>
  <p
    className="cursor-pointer hover:italic"
    onClick={() => setStoreOpen(!storeOpen)}
  >
    Store {storeOpen ? "▲" : "▼"}
  </p>
  {storeOpen && (
    <div className="pl-4 space-y-2 text-sm">
      <Link href="/store/trouser" className="block hover:italic">
        Trouser
      </Link>
      <Link href="/store/accessories" className="block hover:italic">
        Accessories
      </Link>
      <Link href="/store/custom" className="block hover:italic">
        Custom
      </Link>
    </div>
  )}
  <Link href="/alter" className="block hover:italic">
    Alter
  </Link>
  <Link href="/stories" className="block hover:italic">
    Stories
  </Link>
  <Link href="/about" className="block hover:italic">
    About
  </Link>
</nav>

</motion.aside>


      {/* Main Content */}
      <main className="flex-1 px-6 md:px-12 py-6">{children}</main>
    </div>
  );
}


// {isStorePage && (
//   <>
//     <Image
//       src="/Artboard2.png"
//       alt="Background Image"
//       width={666}
//       height={571}
//       priority
//       className="fixed top-0 right-[55%] translate-x-1/2 w-[400px] h-[200px] opacity-100 z-[-1]"
//     />
//     <Image
//       src="/Artboard1.png"
//       alt="Background Image"
//       width={250}
//       height={250}
//       priority
//       className="fixed bottom-0 left-2 w-[250px] h-auto opacity-100 z-[-1]"
//     />
//     <Image
//       src="/Artboard3.png"
//       alt="Background Image"
//       width={300}
//       height={300}
//       priority
//       className="fixed bottom-0 right-0 w-[250px] h-auto opacity-100 z-[-1]"
//     />
//   </>
// )}
