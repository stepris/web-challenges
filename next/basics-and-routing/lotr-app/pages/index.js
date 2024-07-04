import { introduction, volumes } from "@/data";
import Link from "next/link";

// console.log(volumes);

const tfotr = volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring");
const ttt = volumes.find(({ slug }) => slug === "the-two-towers");
const trotk = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function HomePage() {
  return (
    <>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring" volume={tfotr}>
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers" volume={ttt}>
            The Two Towers
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king" volume={trotk}>
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
