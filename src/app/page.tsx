import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-24">
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />

      <p className="mt-6">この画面はメンテナンスモードを適用しない</p>

      <ul className="mt-2">
        <li>
          <Link href="/dashboard" className="underline">
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/maintenance" className="underline">
            Maintenance
          </Link>
        </li>
      </ul>
    </main>
  );
}
