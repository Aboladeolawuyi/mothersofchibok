"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Route = {
  name: string;
  path: string;
};

const routes: Route[] = [
  { name: "About the Film", path: "/#film" },
  { name: "About the Impact", path: "/#impact" },
  { name: "Explore the Products", path: "/#products" },
  { name: "Awards", path: "/#awards" },
  { name: "Support", path: "/#support" },
  { name: "Contact", path: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleHashChange = () => setHash(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (!mounted) {
    return (
      <header className="w-full border-b border-white/10 p-10 lg:p-14">
        <div className="font-guthenBloots text-5xl leading-none text-gray-200 lg:text-[70px]" />
      </header>
    );
  }

  const fullPath = `${pathname}${hash}`;
  const route = routes.find((r) => r.path === fullPath || r.path === pathname);

  return (
    <header className="w-full border-b border-white/10 p-10 lg:p-14">
      <div className="font-guthenBloots text-5xl leading-none text-gray-200 lg:text-[70px]">
        {route?.name || ""}
      </div>
    </header>
  );
}
