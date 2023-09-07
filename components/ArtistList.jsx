"use client";

import Link from "next/link";
import Image from "next/image";

import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function ArtistList({ artists }) {
  return (
    <ResponsiveMasonry
      className="p-10"
      columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}
    >
      <Masonry gutter="40px" columnsCount={1}>
        {artists.map((artist, index) => (
          <li key={index} className="relative list-none">
            <Link
              href={`/artist/${artist.name.toLowerCase().replaceAll(" ", "-")}`}
            >
              <Image
                height={1000}
                width={1000}
                src={artist.images.gallery}
                alt={artist.name}
              />

              <div className="absolute p-8 bg-gradient-to-t  from-black w-full left-0 h-40 bottom-0 flex flex-col gap-2 justify-end text-primary">
                <span className="text-2xl">{artist.name}</span>
                <span className="text-sm opacity-70">{artist.artist.name}</span>
              </div>
            </Link>
          </li>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
