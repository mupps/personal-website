import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";
import React from "react";

const navItems = {
  // "/blog": { name: "Blog" },
  "/": { name: "Home" },
  "/about": { name: "About" },
  "/projects": { name: "Projects" },
  // "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="relative px-2 py-1 text-sm font-medium transition-colors hover:text-[var(--accent-color)] dark:hover:text-[var(--accent-color)]"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
