import Container from "@/components/Container";
export default function LoadingChapter() {
  return (
    <main className="py-5 w-full">
      <Container>
        <h1 className="w-full text-center font-semibold text-xl mb-5 h-8 bg-slate-400 rounded-xl"></h1>
      </Container>
      <Container>
        <section className="w-full grid grid-cols-2 gap-5 mb-5">
          <button className="columns-1 h-10 bg-slate-400 rounded-lg"></button>
          <button className="columns-1 h-10 bg-slate-400 rounded-lg"></button>
        </section>
      </Container>
      <Container>
        <div className="w-full h-96 bg-slate-400 mb-1"></div>
        <div className="w-full h-96 bg-slate-400 mb-1"></div>
        <div className="w-full h-96 bg-slate-400 mb-1"></div>
        <div className="w-full h-96 bg-slate-400 mb-1"></div>
      </Container>
    </main>
  );
}
