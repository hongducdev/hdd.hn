"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const types = [
  {
    name: "Top",
    path: "/",
  },
  {
    name: "New",
    path: "/new",
  },
  {
    name: "Best",
    path: "/best",
  },
  {
    name: "Ask",
    path: "/ask",
  },
  {
    name: "Show",
    path: "/show",
  },
  {
    name: "Jobs",
    path: "/jobs",
  },
];

const Header = () => {
  const pathName = usePathname();

  return (
    <div className="glass-effect-dark px-8 py-2 border-b border-zinc-800 sticky top-0 bg-zinc-950 z-10 w-full shadow-md flex items-center gap-10 justify-between">
      <Link href="/">
        <h1 className="text-2xl font-bold">
          hdd.hn
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        {types.map((type) => (
          <Link href={type.path} key={type.name}>
            <p
              className={`
              ${
                pathName === type.path
                  ? "text-zinc-100 font-medium"
                  : "text-zinc-500"
              }
              ml-4 cursor-pointer
            `}
            >
              {type.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
