import CardComic from "@/components/CardComic";
import Container from "@/components/Container";
import Title from "@/components/Title";

export const metadata = {
  title: "ManwaMu",
  description: "Tempat baca manhwa dan manhua gratis",
};

async function getManhwaPopular() {
  try {
    const res = await fetch("https://kurokami.vercel.app/api/manhwa-popular", {
      method: "GET",
      cache: "force-cache",
      next: {
        revalidate: 60 * 60,
      },
    });
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Home() {
  const manhwas = await getManhwaPopular();
  return (
    <main className=" w-full">
      <Container>
        <Title title="Trending">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </Title>
      </Container>
      <hr className="mb-5" />
      <Container>
        <section className="w-full gap-5 grid grid-cols-2">
          {manhwas.map((manhwa) => (
            <CardComic
              key={manhwa.title}
              src={manhwa.imageSrc}
              title={manhwa.title}
              rating={manhwa.rating}
              chapter={manhwa.chapter}
              link={`/manhwa/${manhwa.link.split("/").filter(Boolean).pop()}`}
            />
          ))}
        </section>
      </Container>
    </main>
  );
}
