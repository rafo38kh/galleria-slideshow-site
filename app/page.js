import Image from "next/image";

export default async function Home() {
  const res = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/galleria-slideshow-site/main/data.json"
  );
  const artists = await res.json();

  console.log(artists);

  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {artists.map((artist) => (
        <li className="grid gap-4">
          {
            <>
              <Image
                height={50}
                width={50}
                src="/assets/starry-night/artist.jpg"
                alt={artist.name}
              />
              <span>{artist.name}</span>
              <span>{artist.artist.name}</span>
            </>
          }
        </li>
      ))}
    </ul>
  );
}
