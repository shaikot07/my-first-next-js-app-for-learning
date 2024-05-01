import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto h-1/2 mt-5">
      <h1 className="text-4xl text-green-800 font-bold text-center">This is a home pages 😁😆😅😂 </h1>
    <h2 className="text-purple-500 font-bold text-center text-2xl">Explore navigate</h2>
      <div className="max-w-[200px] mx-auto">
      <Link href='/about'>
        <button className="btn btn-primary text-center">Go to about  pages</button>
      </Link>

      </div>
    </div>
  );
}
