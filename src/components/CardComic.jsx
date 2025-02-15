import Link from "next/link";

export default function CardComic({ src, title, chapter, rating, link }) {
  const slug = link.split("/").pop();
  console.log(slug);
  return (
    <Link
      href={`${link}`}
      className="columns-1 border rounded-xl shadow-md flex flex-col overflow-hidden"
    >
      <div className="w-full h-48">
        <img
          src={src}
          alt=""
          className="object-cover object-center h-full w-full"
        />
      </div>
      <div className="p-3 flex flex-col ">
        <h3 className="font-semibold mb-2 line-clamp-1">{title}</h3>
        <span className="text-xs">Chapter: {chapter}</span>
        <span className="text-xs">Ratting : {rating}</span>
      </div>
    </Link>
  );
}
