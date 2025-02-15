import Container from "@/components/Container";
import Image from "next/image";
import Link from "next/link";

async function getChapterDetail(slug) {
  try {
    const res = await fetch("https://kurokami.vercel.app/api/chapter/" + slug, {
      method: "get",
      cache: "force-cache",
      next: { revalidate: 60 * 60 },
    });
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export default async function ChapterDetailPage({ params }) {
  const { slug } = await params;
  const chapters = await getChapterDetail(slug);
  return (
    <main className="w-full py-5">
      <Container>
        <h1 className="w-full text-center font-semibold text-xl mb-5">
          {chapters.title}
        </h1>
      </Container>
      <Container>
        <section className="w-full grid grid-cols-2 gap-5 mb-5">
          {chapters.prevChapter != null && (
            <Link
              href={`/chapter/${chapters.prevChapter
                .split("/")
                .filter(Boolean)
                .pop()}`}
              className="bg-black shadow-md active:scale-95 transition-all ease-in-out text-white rounded-xl py-2 font-semibold text-center"
            >
              Prev
            </Link>
          )}
          {chapters.nextChapter != null && (
            <Link
              href={`/chapter/${chapters.nextChapter
                .split("/")
                .filter(Boolean)
                .pop()}`}
              className="bg-black shadow-md active:scale-95 transition-all ease-in-out text-white rounded-xl py-2 font-semibold text-center"
            >
              Next
            </Link>
          )}
        </section>
      </Container>
      <Container>
        <section className="w-full flex flex-col">
          {chapters.images.map((img, index) => (
            <img key={index} src={img} alt="" className="border" />
          ))}
        </section>
      </Container>
    </main>
  );
}
