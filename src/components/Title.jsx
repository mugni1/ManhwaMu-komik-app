export default function Title({ title = "Title", children }) {
  return (
    <h1 className="font-semibold text-xl flex py-3 items-center gap-1">
      {children}
      {title}
    </h1>
  );
}
