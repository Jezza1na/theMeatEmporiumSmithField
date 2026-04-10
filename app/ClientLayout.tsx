"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import CookieConsent from "./components/CookieConsent";
import Cookies from "js-cookie";

type Props = { children: React.ReactNode };

export default function ClientLayout({ children }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const consent = Cookies.get("cookie_consent");
    const last = Cookies.get("last_location");
    const redirected = sessionStorage.getItem("hasRedirected");

    if (
      consent === "true" &&
      last &&
      pathname === "/" &&
      last !== "/" &&
      !redirected
    ) {
      sessionStorage.setItem("hasRedirected", "true");
      router.replace(last);
    }
  }, [router, pathname]);

  useEffect(() => {
    if (Cookies.get("cookie_consent") === "true") {
      Cookies.set("last_location", pathname, { expires: 30 });
    }
  }, [pathname]);

  return (
    <>
      {children}
      <CookieConsent />
    </>
  );
}
