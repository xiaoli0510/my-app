import Link from "next/link";

export default async function About() {
  return (
    <div className="h-50">
      <div>about</div>
      <Link scroll={false} replace prefetch={false} className="text-blue-300 block mt-60" href="/about/me">
        Me
      </Link>
      <Link
        className="text-blue-300 block"
        href={{ pathname: "/about/me2", query: { id: 222 } }}
      >
        Me2
      </Link>
    </div>
  );
}
