"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", group: "main" },
  { href: "/player", label: "Browse", group: "watch" },
  { href: "/episodes", label: "Episodes", group: "watch" },
  { href: "/shorts", label: "Shorts", group: "watch" },
  { href: "/dashboard", label: "Creator", group: "creator", badge: "New" },
  { href: "/pricing", label: "Pricing", group: "creator" },
];

const mobileExtraItems = [
  { href: "/movies", label: "Movies", group: "watch" },
  { href: "/profile", label: "Profile", group: "user" },
];

export default function TopNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const closeNav = () => setOpen(false);

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
            className={`top-tab${isActive(item.href) ? " active" : ""}${item.badge ? " with-badge" : ""}`}
            onClick={closeNav}
          >
            {item.label}
            {item.badge && <span className="tab-badge">{item.badge}</span>}
          </Link>
        ))}
      </nav>
      {open && (
        <div className="mobile-nav-extra">
          {mobileExtraItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`mobile-nav-item${isActive(item.href) ? " active" : ""}`}
              onClick={closeNav}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
