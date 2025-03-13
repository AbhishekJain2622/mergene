import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "../components/Layout"; // Import Layout
import Link from "next/link";

const collections = [
  { id: 1, src: "/images/image1.png", title: "Collection 1" },
  { id: 2, src: "/images/image2.png", title: "Collection 2" },
  { id: 3, src: "/images/image3.png", title: "Collection 3" },
  { id: 4, src: "/images/image4.png", title: "Collection 4" },
  { id: 1, src: "/images/image1.png", title: "Collection 1" },
  { id: 2, src: "/images/image2.png", title: "Collection 2" },
  { id: 3, src: "/images/image3.png", title: "Collection 3" },
  { id: 4, src: "/images/image4.png", title: "Collection 4" },
];

export default function Collection() {
  const router = useRouter();

  return (
    <Layout>
      {/* Fixed Navigation Bar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Our Collections</h2>
        <nav className="flex space-x-6">
          <Link href="/account" className="hover:underline">
            Account
          </Link>
          <Link href="/cart" className="hover:underline">
            Bag (1)
          </Link>
        </nav>
      </div>

      {/* Scrollable Collection Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="pt-20 h-screen overflow-y-auto bg-white px-6" // Added padding-top to prevent content overlap
      >
        {/* Grid Layout for Collections */}
        <div className="grid grid-cols-2 gap-4">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
              onClick={() => router.push(`/collection/${collection.id}`)}
            >
              {/* Image */}
              <Image
                src={collection.src}
                alt={collection.title}
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
              />
              {/* Overlay & Text */}
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
              <p className="absolute bottom-4 left-4 text-white text-lg font-bold">
                {collection.title}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Layout>
  );
}
