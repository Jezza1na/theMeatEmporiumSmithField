"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { CSSProperties } from "react";

export default function Home() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreenSize("mobile");
      } else if (window.innerWidth <= 1024) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          ...styles.heroWrap,
          transform: heroVisible
            ? "translateY(0) scale(1)"
            : "translateY(200px) scale(1.05)",
          opacity: heroVisible ? 1 : 0,
          transition:
            "transform 1.2s cubic-bezier(.16,1,.3,1), opacity 1s ease",
        }}
      >
        <Image
          src="/images/photo1.png"
          alt="Butcher hero"
          fill
          sizes="100vw"
          priority
          style={styles.heroImage}
        />
      </div>

      <section style={styles.titleSection}>
        <h1 style={styles.bigTitle}>The Meat Emporium SmithField</h1>
      </section>

      <section
        style={{
          ...styles.fourGrid,
          gridTemplateColumns:
            screenSize === "desktop"
              ? "repeat(4, minmax(0, 1fr))"
              : "repeat(2, minmax(0, 1fr))",
          justifyItems: "stretch",
          padding:
            screenSize === "mobile"
              ? "2rem 1rem"
              : screenSize === "tablet"
                ? "3rem 2rem"
                : "5rem 5rem",
          gap: screenSize === "mobile" ? "1.5rem" : "3rem",
        }}
      >
        {[
          {
            title: "Local",
            text: "Add text about locally sourced meats here.",
          },
          {
            title: "Specialty",
            text: "Add text about rare cuts or specialty items.",
          },
          { title: "Quality", text: "Add text about your quality standards." },
          { title: "Availability", text: "Add text about stock & supply." },
        ].map((item, idx) => (
          <div
            key={idx}
            style={{
              ...styles.card,
              width: "100%",
            }}
          >
            <h2 style={styles.cardTitle}>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section style={styles.parallaxSection}>
        {["Fresh Daily", "Premium Cuts", "Wholesale Ready"].map(
          (heading, idx) => (
            <>
              <div key={idx} style={styles.overlayBlock}>
                <h2>{heading}</h2>
                <p>Put more writing here</p>
              </div>
              {idx < 2 && <div style={styles.spacer} />}
            </>
          ),
        )}
      </section>

      <section style={styles.linkSection}>
        <div
          style={{
            ...styles.linkGrid,
            gridTemplateColumns:
              screenSize === "mobile"
                ? "1fr"
                : screenSize === "tablet"
                  ? "repeat(2, 1fr)"
                  : "repeat(3, 1fr)",
          }}
        >
          {[
            { href: "/specialtyMeats", title: "Specialty Meats" },
            { href: "/retail", title: "Retail" },
            { href: "/wholesale", title: "Wholesale" },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              style={{
                ...styles.linkCard,
                ...(screenSize === "tablet" && idx === 2
                  ? {
                      gridColumn: "1 / -1",
                      justifySelf: "center",
                      width: "min(100%, 420px)",
                    }
                  : {}),
                height:
                  screenSize === "mobile"
                    ? "260px"
                    : screenSize === "tablet"
                      ? "320px"
                      : "420px",
              }}
            >
              <Image
                src="/images/photo1.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={styles.linkImage}
              />
              <div style={styles.linkOverlay}>
                <h2>{item.title}</h2>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="contact" style={styles.contactSection}>
        <div style={styles.contactRow}>
          <div
            style={{
              ...styles.sideImage,
              width: screenSize === "tablet" ? "180px" : styles.sideImage.width,
              height:
                screenSize === "tablet" ? "180px" : styles.sideImage.height,
            }}
          >
            <a
              href="https://specialtymeatssmithfield.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.sideImageLink}
            >
              <Image
                src="/images/specialtyMeatsLittleLogo.png"
                alt="Left"
                fill
                sizes="250px"
                style={{ ...styles.sideImageImg, cursor: "pointer" }}
              />
            </a>
          </div>

          <div style={styles.contactContent}>
            <h2 style={styles.contactTitle}>Get in Touch</h2>
            <ul style={styles.contactList}>
              <li style={styles.contactItem}>
                <strong>Phone:</strong>{" "}
                <a href="tel:+61740481124" style={styles.contactLink}>
                  (07) 4048 1124
                </a>
              </li>
              <li style={styles.contactItem}>
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:Shawn.pynaker@gmail.com"
                  style={styles.contactLink}
                >
                  Shawn.pynaker@gmail.com
                </a>
              </li>
              <li style={styles.contactItem}>
                <strong>Address:</strong> 2 Mac Peak Cres, Smithfield QLD 4878
              </li>
              <li style={styles.contactItem}>
                <strong>Hours:</strong>
                <div>Mon - Fri, 9:00am - 5:30pm</div>
                <div>Sat & Sun, 9:00am - 4:00pm</div>
              </li>
            </ul>
          </div>

          <div
            style={{
              ...styles.sideImage,
              width: screenSize === "tablet" ? "180px" : styles.sideImage.width,
              height:
                screenSize === "tablet" ? "180px" : styles.sideImage.height,
            }}
          >
            <a
              href="https://themeatemporiumsmithfield.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.sideImageLink}
            >
              <Image
                src="/images/meatEmporiumLittleLogo.png"
                alt="Right"
                fill
                sizes="250px"
                style={{ ...styles.sideImageImg, cursor: "pointer" }}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const styles: Record<string, CSSProperties> = {
  heroWrap: {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
  },
  heroImage: { objectFit: "cover" },

  titleSection: {
    height: "40vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 1rem",
  },
  bigTitle: {
    fontSize: "clamp(2rem, 6vw, 5rem)",
    fontWeight: 900,
    textAlign: "center",
  },

  fourGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "3rem",
    padding: "5rem 5rem",
  },
  card: {
    padding: "2rem",
    border: "1px solid gold",
    textAlign: "center" as const,
    boxSizing: "border-box" as const,
    overflow: "hidden",
    overflowWrap: "anywhere" as const,
    wordBreak: "break-word" as const,
  },
  cardTitle: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 800,
    marginBottom: "1rem",
  },

  parallaxSection: {
    backgroundImage: "url(/images/photo1.png)",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "6rem 2rem",
  },
  overlayBlock: {
    background: "rgba(0,0,0,0.7)",
    color: "white",
    padding: "2rem",
    maxWidth: "500px",
    margin: "0 auto 6rem",
    textAlign: "center",
  },
  spacer: { height: "300px" },

  linkSection: { padding: "6rem 2rem" },
  linkGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "2rem",
  },
  linkCard: {
    position: "relative",
    width: "100%",
    borderRadius: "10px",
    overflow: "hidden",
    textDecoration: "none",
  },
  linkImage: { objectFit: "cover" },
  linkOverlay: {
    position: "absolute",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontWeight: 200,
  },

  contactSection: {
    position: "relative",
    left: "50%",
    right: "50%",
    marginLeft: "-50vw",
    marginRight: "-50vw",
    width: "100vw",
    padding: "4rem",
    backgroundColor: "#000",
    color: "#fff",
    boxSizing: "border-box",
  },
  contactRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap",
  },
  sideImage: {
    position: "relative",
    width: "250px",
    height: "250px",
    borderRadius: "12px",
    overflow: "hidden",
  },
  sideImageLink: {
    position: "relative",
    display: "block",
    width: "100%",
    height: "100%",
  },
  sideImageImg: { objectFit: "cover" },
  contactContent: { maxWidth: "600px", textAlign: "center" },
  contactTitle: {
    fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
    marginBottom: "2rem",
  },
  contactList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
    lineHeight: 1.8,
  },
  contactItem: { marginBottom: "12px" },
  contactLink: { color: "#6ab0ff", textDecoration: "none" },
};
