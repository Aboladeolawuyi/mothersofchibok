"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "@/components/common/Loader";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (pathname !== "/") {
      // Skip loader for non-index pages
      setLoading(false);
    }
  }, [pathname]);

  // Prevent hydration mismatch - show empty div until mounted
  if (!mounted) {
    return <div className="fade-in">{children}</div>;
  }

  if (loading && pathname === "/") {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return <div className="fade-in">{children}</div>;
}
