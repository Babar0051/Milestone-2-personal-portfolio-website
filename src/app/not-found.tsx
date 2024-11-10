// src/app/NotFound/page.tsx
import Link from 'next/link';
// import Navbar from './components/Navbar';
// import Header from "./components/Header"
// import Footer from "./components/Footer";

export default function NotFound () {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      
      {/* <Header />
      <Navbar/> */}
      <h1 className="text-6xl font-bold text-gray-800 mb-4">Oops!</h1>
      <p className="text-2xl text-gray-600 mb-8">This page doesn't exist.</p>
      <Link href="/" className="mt-4 text-blue-500 underline">
        Go to Home
      </Link>
      {/* <Footer/> */}
    </div>
  );
}
