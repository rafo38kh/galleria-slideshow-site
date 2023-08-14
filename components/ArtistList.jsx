import Link from "next/link";
import Image from "next/image";

export default async function ArtistList({ artists }) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6">
      {artists.map((artist, index) => (
        <li key={index} className="grid gap-6">
          <Link
            href={`/artist/${artist.name.toLowerCase().replaceAll(" ", "-")}`}
            className="relative bg-gradient-to-t from-black"
          >
            <Image
              height={1000}
              width={1000}
              src={artist.images.thumbnail}
              alt={artist.name}
              className=" w-full"
            />
            <div className="absolute flex flex-col gap-2 text-primary left-8 bottom-8">
              <span className="text-2xl">{artist.name}</span>
              <span className="text-sm opacity-70">{artist.artist.name}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
