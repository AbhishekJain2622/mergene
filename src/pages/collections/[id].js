import { useRouter } from "next/router";
import Image from "next/image";

const randomImages = [
  "/images/random1.jpg",
  "/images/random2.jpg",
  "/images/random3.jpg",
  "/images/random4.jpg",
  "/images/random5.jpg",
];

export default function CollectionDetail() {
  const router = useRouter();
  const { id } = router.query; // Get the collection ID

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-serif mb-6">Collection {id}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {randomImages.map((src, index) => (
          <div key={index} className="overflow-hidden">
            <Image
              src={src}
              alt={`Random ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
