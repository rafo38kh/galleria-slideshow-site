import getArtists from "@/lib/getArtists";
import ArtistList from "@/components/ArtistList";

export default async function Home() {
  const artists = await getArtists();

  return <ArtistList artists={artists} />;
}
