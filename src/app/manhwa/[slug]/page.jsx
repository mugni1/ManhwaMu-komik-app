import Container from "@/components/Container";

async function getMangaDetail(slug) {
  try {
    const res = await fetch(
      "https://kurokami.vercel.app/api/manhwa-detail/" + slug
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ({ params }) {
  const { slug } = await params;
  const mangaDetails = await getMangaDetail(slug);
  return (
    <main className="w-full">
      <Container>
        <img
          src={mangaDetails.imageSrc}
          alt="image"
          className="w-1/2 mx-auto my-5 rounded-xl shadow-lg"
        />
        <h1 className="font-semibold text-xl">{mangaDetails.title}</h1>
        <section className=" w-full grid grid-cols-2 gap-3 my-2">
          <div className="flex p-2 justify-between columns-1 border rounded-lg">
            <span>Tipe</span>
            <span>{mangaDetails.type}</span>
          </div>
          <div className="flex p-2 justify-between columns-1 border rounded-lg ">
            <span>Status</span>
            <span>{mangaDetails.status}</span>
          </div>
        </section>

        <section className="w-full flex flex-col gap-2">
          <h2 className="font-semibold text-xl">Sinopsis</h2>
          <p className="text-justify">{mangaDetails.synopsis}</p>
        </section>
      </Container>
    </main>
  );
}
