"use client";

import Link from "next/link";

export default function ManhwaError({ error }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">
        {error.status} {error.statusText}
      </h1>
      <p className="text-xl text-center">{error.message}</p>
      <Link
        className="mt-5 px-5 py-2 bg-black active:scale-95 transition-all ease-in-out text-white font-bold rounded-lg"
        href={"/"}
      >
        Back To Home
      </Link>
    </div>
  );
}
