"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/player", label: "Browse" },
  { href: "/episodes", label: "Episodes" },
  { href: "/movies", label: "Movies" },
  { href: "/shorts", label: "Shorts" },
  { href: "/pricing", label: "Pricing" },
  { href: "/dashboard", label: "Creator" },
  { href: "/profile", label: "Profile" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <>
      <button
        className={`mobile-nav-toggle${open ? " open" : ""}`}
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`top-nav${open ? " open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={isActive(item.href) ? "top-tab active" : "top-tab"}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
