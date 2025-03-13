import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../components/Layout";
import Link from "next/link";

const products = [
  { id: 1, name: "Classic Tailored Trouser", price: "300" },
  { id: 2, name: "Classy Tailored Jacket", price: "300" },
  { id: 3, name: "Elegant Evening Gown", price: "300" },
  { id: 4, name: "Sophisticated Blazer", price: "300" },
  { id: 5, name: "Stylish Overcoat", price: "300" },
  { id: 6, name: "Chic Party Dress", price: "300" },
];

export default function Store() {
  const router = useRouter();
  const isStorePage = true;

  return (
    <Layout>
   {isStorePage && (
  <>
    <Image
      src="/images/3.png"
      alt="Background Image"
      width={666}
      height={571}
      priority
      className="hidden md:block fixed top-0 right-[55%] translate-x-1/2 w-[400px] h-[200px] opacity-100"
    />
    <Image
      src="/images/2.png"
      alt="Background Image"
      width={250}
      height={250}
      priority
      className="hidden md:block fixed bottom-0 left-2 w-[250px] h-auto opacity-100"
    />
    <Image
      src="/images/1.png"
      alt="Background Image"
      width={300}
      height={300}
      priority
      className="hidden md:block fixed bottom-0  right-[0px] top-[500px] w-[250px] h-auto opacity-70"
    />
  </>
)}


      {/* Top Section (Account & Cart) */}
      <div className="flex justify-between items-center text-sm mb-6 px-2">
        <div></div>
        <nav className="flex space-x-4">
                  <Link href="/account" className="hover:italic">Account</Link>
        <Link href="/cart" className="hover:italic">Bag (1)</Link>
      </nav>

      </div>

      {/* Filter Option */}
      <h3 className="text-right text-sm mb-6 cursor-pointer hover:underline transition-all">
        Filter
      </h3>

      {/* Product Grid - Responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: product.id * 0.1 }}
            className="cursor-pointer space-y-3 group"
            onClick={() => router.push(`/product/${product.id}`)}
          >
            <motion.div className="w-full h-[500px] bg-gray-300 transition-all duration-500 group-hover:rounded-[200px] group-hover:scale-105"></motion.div>
            <div className="flex justify-between text-sm">
              <p className="font-medium">{product.name}</p>
              <p className="font-semibold">${product.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  );
}











{/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {products.map((product) => (
    <motion.div
      key={product.id}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: product.id * 0.1 }}
      className="cursor-pointer space-y-3 group"
      onClick={() => router.push(`/product/${product.id}`)}
    >

      <div className="relative w-full h-[500px] transition-all duration-500 group-hover:rounded-[200px] group-hover:scale-105 overflow-hidden">
        
    
        <Image
          src={`/images/product-${product.id}-random1.png`} 
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-500 group-hover:opacity-0"
        />

        <Image
          src={`/images/product-${product.id}-random2.png`}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

      </div>

   
      <div className="flex justify-between text-sm">
        <p className="font-medium">{product.name}</p>
        <p className="font-semibold">${product.price}</p>
      </div>
    </motion.div>
  ))}
</div> */}