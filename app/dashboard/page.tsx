import Link from "next/link";

export default function Dashboard() {
  return (
    <main className="p-24">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-2">
        <Link href="/" className="underline">
          Top
        </Link>
      </div>
    </main>
  );
}
