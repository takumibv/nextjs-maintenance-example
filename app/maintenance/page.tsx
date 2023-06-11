import Image from "next/image";
import Link from "next/link";
import logo from "@/public/next.svg";

export const metadata = {
  title: "Maintenance",
  robots: "noindex",
};

export default function Maintenance() {
  return (
    <main className="p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert w-20"
        src={logo}
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <h1 className="text-2xl font-bold mt-2">Maintenance</h1>

      <div className="mt-2">
        <Link href="/" className="underline">
          Top
        </Link>
      </div>
    </main>
  );
}
