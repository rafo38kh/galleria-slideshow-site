export default async function getArtist(slug) {
  const res = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/galleria-slideshow-site/main/data.json",
    { cache: "no-store" }
  );
  const artists = await res.json();

  const artistsWithSlugs = artists.map((artist) => ({
    ...artist,
    slug: artist.name.toLowerCase().replaceAll(" ", "-"),
  }));

  return artistsWithSlugs.find((artist) => artist.slug === slug);
}
