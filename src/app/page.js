import CardComic from "@/components/CardComic";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Image from "next/image";

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

async function getManhwaRekomendasi() {
  try {
    const res = await fetch(
      "https://kurokami.vercel.app/api/manhwa-recommendation",
      {
        method: "GET",
        cache: "force-cache",
        next: {
          revalidate: 60 * 60,
        },
      }
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function Home() {
  const manhwaTrendings = await getManhwaPopular();
  const manhwaRecomendations = await getManhwaRekomendasi();

  return (
    <main className=" w-full">
      <Container>
        <section className="flex w-full flex-col gap-2 mt-5">
          <h1 className="text-5xl">
            <span className="font-bold">WELCOME</span>
          </h1>
          <h1 className="text-3xl">
            <span>ENJOY READS MANGA</span>
          </h1>
          <Image
            src="/panel.png"
            alt=""
            className="rounded-xl w-full"
            height={200}
            width={500}
          />
        </section>
      </Container>
      <Container>
        <Title title="Rekomendasi">
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
              d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
            />
          </svg>
        </Title>
      </Container>
      <hr />
      <Container>
        <section className="w-full gap-5 grid grid-cols-2  py-5">
          {manhwaRecomendations.map((manhwa) => (
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
      <hr />
      <Container>
        <section className="w-full gap-5 grid grid-cols-2  py-5">
          {manhwaTrendings.map((manhwa) => (
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
      <Footer />
    </main>
  );
}
