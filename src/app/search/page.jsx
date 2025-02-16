"use client";
import Container from "@/components/Container";
import CardComic from "@/components/CardComic";
import axios from "axios";
import { useState } from "react";

export default function Search() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  function handleSubmit() {
    event.preventDefault();
    setLoading(true);
    axios({
      method: "GET",
      url: "https://kurokami.vercel.app/api/search/" + search,
    })
      .then((res) => {
        setResult(res.data.seriesList);
        console.log(res.data.seriesList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  return (
    <main className="w-full py-5 flex flex-col">
      <Container>
        <h1 className="font-semibold text-2xl w-full text-center">
          Search Manga
        </h1>
      </Container>
      <Container>
        <form className="w-full py-5" onSubmit={() => handleSubmit()} action="">
          <input
            type="text"
            className="w-full rounded-full border drop-shadow-lg focus:outline-none p-2"
            placeholder="Search : Nano machine"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="mt-5 px-5 py-2 bg-black active:scale-95 transition-all ease-in-out text-white font-bold rounded-lg">
            {loading ? "Loading..." : "Search"}
          </button>
        </form>
      </Container>
      <Container>
        <section className="w-full gap-5 grid grid-cols-2  pb-20">
          {result != null &&
            result.map((manhwa) => (
              <CardComic
                key={manhwa.title}
                src={manhwa.image}
                title={manhwa.title}
                rating={manhwa.rating}
                chapter={manhwa.latestChapter}
                link={`/manhwa/${manhwa.url.split("/").filter(Boolean).pop()}`}
              />
            ))}
        </section>
      </Container>
    </main>
  );
}
