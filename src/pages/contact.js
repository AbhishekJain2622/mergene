import Layout from "../components/Layout";
import Link from "next/link";

export default function Contact() {
  return (
    <Layout>

         {/* 🔹 Top Right Navigation (Mobile-friendly) */}
         <nav className="flex space-x-4">
                  <Link href="/account" className="hover:underline">Account</Link>
        <Link href="/cart" className="hover:underline">Bag (1)</Link>
      </nav>
      {/* Page Title */}
      <div className="mt-10">
        <h1 className="text-xl md:text-2xl font-serif">Contact us</h1>
        <p className="text-base md:text-lg text-gray-600">Let's Connect!</p>
      </div>

      {/* Contact Section */}
      <div className="mt-12 flex justify items-start relative">
        {/* Contact Form */}
        <div className="bg-gray-100 w-full max-w-xl p-10 rounded-lg shadow-md text-base">
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
              <input
                type="text"
                placeholder="Fullname"
                className="flex-1 p-2 border-b border-gray-500 bg-transparent focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="flex-1 p-2 border-b border-gray-500 bg-transparent focus:outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none"
            />
            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-2 border-b border-gray-500 bg-transparent focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-gray-300 text-black uppercase font-medium hover:bg-gray-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right-side Info */}
        <div className="ml-15 md:ml-20 text-lg space-y-4 hidden md:block">
          <p className="hover:underline cursor-pointer">Our location</p>
          <p className="hover:underline cursor-pointer">Social network</p>
          <p className="hover:underline cursor-pointer">Email</p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="text-center mt-16 text-sm">
        <p className="max-w-xl mx-auto">
          Subscribe to the seasonal newsletter for invitations to new releases & additions to the collection.
        </p>
        <input
          type="email"
          placeholder="Enter email"
          className="mt-3 p-2 border-b border-gray-500 bg-transparent focus:outline-none w-full max-w-md"
        />
        <button className="block mx-auto mt-3 px-6 py-2 bg-gray-300 hover:bg-gray-400 transition">
          Subscribe
        </button>
      </footer>
    </Layout>
  );
}
