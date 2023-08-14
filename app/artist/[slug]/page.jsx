import getArtist from "@/lib/getArtist";
import Image from "next/image";
import Link from "next/link";

import viewImage from "../../../public/assets/shared/icon-view-image.svg";
// import { useState } from "react";

export default async function Art({ params }) {
  const artist = await getArtist(params.slug);

  // const [isPictureOpen, setIsPictureOpen] = useState(false);

  return (
    <>
      <div className="px-6 relative">
        <Image
          width={500}
          height={500}
          alt={artist.name}
          src={artist.images.hero.small}
        />
        <button className="absolute top-4 left-10 flex flex-row gap-3 font-bold tracking-[0.2rem] text-primary text-[10px] uppercase bg-black p-4 opacity-70">
          <Image src={viewImage} alt="viewImage" height={15} width={15} />
          View image
        </button>
        <div className="text-nameColor  left-6 -bottom-40 absolute md:top-0 md:-left-40 md:flex md:items-end md:flex-col">
          <div className="flex flex-col h-[133px] gap-2 bg-primary w-[280px] p-6 ">
            <span className="inline-block text-2xl">{artist.name}</span>
            <span className="text-textColor inline-block text-sm opacity-70">
              {artist.artist.name}
            </span>
          </div>
          <Image
            width={100}
            height={100}
            className="ml-6"
            alt={artist.artist.name}
            src={artist.artist.image}
          />
        </div>
      </div>
      <div className="px-6 py-28">
        <span className="inline-block w-full text-right text-display text-[100px] text-lightWhite ">
          {artist.year}
        </span>
        <p className="text-textColor text-sm leading-7  -mt-14 mb-10">
          {artist.description}
        </p>
        <Link
          className="text-textColor uppercase underline  tracking-[0.2rem] text-[9px]"
          href={artist.source}
        >
          {" "}
          {"go to source"}
        </Link>
      </div>
    </>
  );
}
