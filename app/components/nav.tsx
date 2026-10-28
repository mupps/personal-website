"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/library", label: "Library" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <Link
        href="/"
        className="site-name"
        aria-label={`${metaData.title} home`}
      >
        {metaData.title}
      </Link>
      <nav aria-label="Main navigation">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={
              pathname === href || pathname.startsWith(`${href}/`)
                ? "page"
                : undefined
            }
          >
            {label}
          </Link>
        ))}
        <ThemeSwitch />
      </nav>
    </header>
  );
}
