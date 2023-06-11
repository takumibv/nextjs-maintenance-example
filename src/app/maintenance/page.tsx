import Link from "next/link";

export default function Maintenance() {
  return (
    <main className="p-24">
      <h1 className="text-2xl font-bold">Maintenance</h1>

      <div className="mt-2">
        <Link href="/" className="underline">
          Top
        </Link>
      </div>
    </main>
  )
}
