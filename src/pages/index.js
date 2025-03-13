import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/Background1.png"
          alt="Margene Hero Image"
          fill
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* 🔹 Top Right Navigation (Mobile-friendly) */}
      <nav className="absolute top-6 right-4 md:right-10 flex items-center space-x-4 md:space-x-6 text-black text-xs md:text-sm uppercase z-20">
        <Link href="/account" className="hover:underline">Account</Link>
        <Link href="/cart" className="hover:underline">Bag (1)</Link>
      </nav>

      {/* 🔹 Centered Navigation with Logo */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm md:text-lg uppercase">
          <Link href="/store" className="hover:italic transition-all">Shop</Link>
          <Link href="/alter" className="hover:italic transition-all">Alter</Link>

          {/* ✅ Responsive Logo */}
          <h1 className="text-4xl md:text-6xl font-light tracking-[0.2em] text-center">
            MARGÉNE
          </h1>

          <Link href="/collections" className="hover:italic transition-all">Collection</Link>
          <Link href="/about" className="hover:italic transition-all">About</Link>
          <Link href="/stories" className="hover:italic transition-all">Stories</Link>
        </div>
      </div>

      {/* 🔹 Footer Navigation (Responsive) */}
      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-center space-x-4 md:space-x-8 text-white text-xs uppercase z-10">
        <Link href="/terms" className="hover:italic transition-all">Terms of Use</Link>
        <Link href="/faq" className="hover:italic transition-all">FAQ</Link>
        <Link href="/contact" className="hover:italic transition-all">Contact</Link>
      </footer>
    </div>
  );
}
