import Link from "next/link";
import Image from "next/image";

import getArtist from "@/lib/getArtist";
import getArtists from "@/lib/getArtists";

import ProgressBar from "@/components/ProgressBar";
import ProgressButton from "@/components/ProgressButton";

import { ProgressContextProvider } from "@/app/contexts/ProgressProvider";

import viewImage from "../../../public/assets/shared/icon-view-image.svg";

export default async function Art({ params, searchParams }) {
  const isModalOpen = searchParams?.modal;
  const artists = await getArtists();
  const artist = await getArtist(params.slug);

  const itemIndex = artists
    ?.map((el) => el?.name)
    .findIndex((el) => el === artist?.name);

  const lastIndex = artists.length - 1;

  const nextItem =
    itemIndex >= 0 && itemIndex < lastIndex
      ? artists[itemIndex + 1]?.name.toLowerCase().replaceAll(" ", "-")
      : artists[lastIndex]?.name.toLowerCase().replaceAll(" ", "-");

  const prevItem =
    itemIndex > 0
      ? artists[itemIndex - 1]?.name.toLowerCase().replaceAll(" ", "-")
      : artists[0]?.name.toLowerCase().replaceAll(" ", "-");

  return (
    <ProgressContextProvider currentItemIndex={itemIndex}>
      <div className="px-6 lg:grid lg:grid-cols-3 lg:py-20">
        <div className=" relative md:flex md:w-full">
          <Image
            width={500}
            height={500}
            alt={artist?.name}
            src={artist?.images.hero.small}
          />
          <Link
            href="?modal=true"
            className="absolute top-4 lg:top-[calc(100%-4rem)] h-max left-10 flex flex-row gap-3 font-bold tracking-[0.2rem] text-primary text-[10px] uppercase bg-black p-4 opacity-70 z-50"
          >
            <Image src={viewImage} alt="viewImage" height={15} width={15} />
            View image
          </Link>
          <div className="text-nameColor md:w-full left-6 -bottom-40 absolute md:top-0 md:left-0 md:flex md:flex-col  md:items-end lg:left-[30rem] lg:items-start lg:gap-40">
            <div className="flex flex-col h-[133px] gap-2 bg-primary w-[280px]  p-6 md:w-[445px] md:h-auto md:p-0 md:pl-16 md:pb-16">
              <span className="inline-block text-2xl md:text-6xl ">
                {artist?.name}
              </span>
              <span className="text-textColor inline-block text-sm opacity-70">
                {artist?.artist.name}
              </span>
            </div>
            <Image
              width={100}
              height={100}
              className="ml-6 md:mr-[20%] lg:ml-16"
              alt={artist?.artist.name}
              src={artist?.artist.image}
            />
          </div>
        </div>
        <div className="px-6 pt-28 pb-36 lg:col-start-3 lg:col-end-4 lg:w-full lg:flex lg:flex-col lg:p-0">
          <span className="inline-block w-full text-right text-display text-[100px]  text-lightWhite md:text-[200px] md:text-left md:pl-16 ">
            {artist?.year}
          </span>
          <p className="text-textColor text-sm leading-7  -mt-14 mb-10 md:px-40 lg:px-0 lg:max-w-sm">
            {artist?.description}
          </p>
          <Link
            className="text-textColor uppercase underline  tracking-[0.2rem] text-[9px] md:pl-40 lg:p-0 hover:text-black"
            href={artist?.source}
          >
            {"go to source"}
          </Link>
        </div>
      </div>

      <div className="fixed bottom-0 w-full bg-white">
        <ProgressBar />

        <div className="flex justify-between p-6">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-bold lg:text-lg">{artist?.name}</span>
            <span className="text-[10px] lg:text-sm">
              {artist?.artist.name}
            </span>
          </div>

          <div className="flex gap-2 items-center justify-center ">
            <ProgressButton disabled={itemIndex === 0} method="subtract">
              <Link href={`${prevItem}`} className="p-1">
                <svg
                  className="scale-75 hover:opacity-50"
                  width="26"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#000" fill="none" fillRule="evenodd">
                    <path
                      d="M24.166 1.843L3.627 12.113l20.539 10.269V1.843z"
                      strokeWidth="2"
                    />
                    <path fill="#D8D8D8" d="M.986.5h-1v22.775h1z" />
                  </g>
                </svg>
              </Link>
            </ProgressButton>

            <ProgressButton disabled={itemIndex === lastIndex} method="add">
              <Link href={`${nextItem}`}>
                <svg
                  className="scale-75 hover:opacity-50"
                  width="26"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g stroke="#000" fill="none" fillRule="evenodd">
                    <path
                      d="M1.528 1.843l20.538 10.27L1.528 22.382V1.843z"
                      strokeWidth="2"
                    />
                    <path fill="#D8D8D8" d="M24.708.5h1v22.775h-1z" />
                  </g>
                </svg>
              </Link>
            </ProgressButton>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed px-4 w-full h-screen bg-black/90 z-50 top-0 flex items-center justify-center flex-col">
          <Link
            href={params.slug}
            className="text-right text-primary w-full text-lg"
          >
            Close
          </Link>
          <div className="w-full">
            <Image
              width={1000}
              height={1000}
              className="w-full"
              src={artist?.images.gallery}
            />
          </div>
        </div>
      )}
    </ProgressContextProvider>
  );
}
