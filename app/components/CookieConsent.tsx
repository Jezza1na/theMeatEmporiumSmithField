"use client";
import { useState } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);
  const show = !accepted && Cookies.get("cookie_consent") !== "true";

  const acceptCookies = () => {
    Cookies.set("cookie_consent", "true", { expires: 30 });
    Cookies.set("last_location", window.location.pathname, { expires: 30 });
    setAccepted(true);
  };

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        zIndex: 9999,
        background: "var(--bodyBackground)",
        color: "var(--textColour)",
        borderTop: "1px solid var(--bodyBackgroundBorder)",
      }}
    >
      <div className="d-flex justify-content-between align-items-center px-3 py-2">
        <span className="ms-2">
          We use a cookie to remember your last location on the site.
        </span>
        <div className="d-flex gap-2">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={acceptCookies}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
