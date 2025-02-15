export default function Container({ children = "Your Content Here" }) {
  return (
    <section className=" mx-auto container px-5 overflow-x-auto">
      {children}
    </section>
  );
}
