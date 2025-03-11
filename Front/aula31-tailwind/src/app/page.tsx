import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return(
  <>
    <div className="bg-lime-300 text-yellow-900 p-4 text-4xl font-bold">
      <h1>Olá, TAILWIND</h1>

      <Link href={"/layoutTailwind"}>Link tailwind</Link>

    </div>
  </>
  );
}
