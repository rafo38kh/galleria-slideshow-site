export default async function getArtists() {
  const res = await fetch(
    "https://raw.githubusercontent.com/rafo38kh/galleria-slideshow-site/main/data.json",
    { cache: "no-store" }
  );
  return res.json();
}
