import Container from "@/components/Container";

export default function Loading() {
  return (
    <main className="w-full">
      <Container>
        <div className="w-1/2 bg-slate-400  h-60 mx-auto rounded-xl my-5"></div>
        <div className="h-10 bg-slate-400  mx-auto rounded-xl"></div>
        <section className=" w-full grid grid-cols-2 gap-3 my-2">
          <div className="bg-slate-400 flex p-2 h-10 justify-between columns-1 border rounded-lg"></div>
          <div className="bg-slate-400 flex p-2 h-10 justify-between columns-1 border rounded-lg "></div>
        </section>
        <section className="w-full flex flex-col mb-2">
          <h2 className="font-semibold text-lg flex gap-1 h-10 w-1/2 bg-slate-400 mb-2 rounded-lg"></h2>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
        </section>
        <section className="w-full flex flex-col mb-2">
          <h2 className="font-semibold text-lg flex gap-1 h-10 w-1/2 bg-slate-400 mb-2 rounded-lg"></h2>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
        </section>
        <section className="w-full flex flex-col mb-2">
          <h2 className="font-semibold text-lg flex gap-1 h-10 w-1/2 bg-slate-400 mb-2 rounded-lg"></h2>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
        </section>
        <section className="w-full flex flex-col mb-2">
          <h2 className="font-semibold text-lg flex gap-1 h-10 w-1/2 bg-slate-400 mb-2 rounded-lg"></h2>
          <p className="text-justify w-full h-5 bg-slate-400 rounded-lg mb-1"></p>
        </section>
        <section className="w-full flex flex-wrap mb-2 gap-3">
          <h2 className="font-semibold text-lg flex gap-1 h-10 w-1/2 bg-slate-400 mb-2 rounded-lg"></h2>
          <button className=" rounded-lg h-8 w-7/12 bg-slate-400"></button>
          <button className=" rounded-lg h-8 w-2/12 bg-slate-400"></button>
          <button className=" rounded-lg h-8 w-4/12 bg-slate-400"></button>
          <button className=" rounded-lg h-8 w-3/12 bg-slate-400"></button>
          <button className=" rounded-lg h-8 w-3/12 bg-slate-400"></button>
        </section>
      </Container>
    </main>
  );
}
