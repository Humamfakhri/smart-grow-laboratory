"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export default function Navbar() {
  const menuItems = [
    { href: "/", label: "Beranda", urlPathname: "" },
    { href: "/tentang", label: "Tentang", urlPathname: "tentang" },
    { href: "/proyek", label: "Proyek", urlPathname: "proyek" },
    { href: "/publikasi", label: "Publikasi", urlPathname: "publikasi" },
    { href: "/berita-dan-kegiatan", label: "Berita & Kegiatan", urlPathname: "berita-dan-kegiatan" },
    { href: "/kontak", label: "Kontak", urlPathname: "kontak" },
  ];

  const pathname = usePathname();

  return (
    <nav className="sticky top-0 flex items-center justify-between bg-white px-16 py-4">
      <div className="flex items-center gap-2">
        <Image src="/logo_darkblue.png" alt="logo" width={32} height={32} />
        <h1 className="text-lg font-extrabold text-primary tracking-tighter">Smart Grow Lab</h1>
      </div>
      <ul className="flex gap-5">
        {menuItems.map(({ href, label, urlPathname }) => {
          const isActive = pathname.split('/')[1] === urlPathname;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`block font-semibold text-center w-full px-4 py-3 rounded-md ${isActive ? "" : "text-muted-foreground"}`}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button className="rounded-full px-6 font-semibold">Gabung</Button>
    </nav>
  )
}
