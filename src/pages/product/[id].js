import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";


const productData = [
  {
    id: 1,
    name: "Classic Tailored Trousers",
    price: "$1,350.00 USD",
    images: ["/images/trouser1.jpg", "/images/trouser2.jpg"],
  },
  {
    id: 2,
    name: "Luxury Suit",
    price: "$2,500.00 USD",
    images: ["/images/suit1.jpg", "/images/suit2.jpg"],
  },
];

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedProduct = productData.find((p) => p.id === Number(id));
      setProduct(selectedProduct || null);
    }
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Layout>
        <div className="flex justify-between items-center text-sm mb-6 px-2">
        <div></div>
        <nav className="flex space-x-4">
                  <Link href="/account" className="hover:underline">Account</Link>
        <Link href="/cart" className="hover:underline">Bag (1)</Link>
      </nav>
      </div>
      <div className="min-h-screen p-8 flex">
        {/* Product Details */}
        <div className="flex-1 flex">
          {/* Product Image */}
          <div className="w-1/2">
            <div className="bg-gray-300 w-full h-96 mb-4"></div>
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <div key={index} className="bg-gray-300 w-16 h-16"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="w-1/2 pl-10">
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="text-lg text-gray-700 mt-2">{product.price}</p>

            {/* Size Guide */}
            <div className="mt-6">
              <p className="text-sm text-gray-600">SIZE GUIDE</p>
              <div className="flex space-x-2 mt-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="border border-black px-3 py-1 text-sm hover:bg-gray-200"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Bag */}
            <button className="mt-6 bg-black text-white py-2 px-6 hover:bg-gray-800">
              ADD TO BAG
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
