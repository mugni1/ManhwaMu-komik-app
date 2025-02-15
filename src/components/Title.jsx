export default function Title({ title = "Title", children }) {
  return (
    <h1 className="font-semibold text-xl flex py-3 items-center">
      {children}
      {title}
    </h1>
  );
}
