import type { Metadata } from "next";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from "./components/navBar";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "The Meat Emporium SmithField",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --header: 200px;
            --tabs: 60px;
          }

          html, body {
            margin: 0;
            padding: 0;
            width: 100%;
            overflow-x: hidden;
            background: var(--bodyBackground, #fff);
            color: var(--textColour, #212529);
          }

          * {
            box-sizing: border-box;
            border-color: var(--bodyBackgroundBorder, #dee2e6);
          }

          a {
            color: var(--linkColour, #0d6efd);
            text-decoration: none;
          }
        `}</style>
      </head>

      <body>
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <header
            style={{
              width: "100%",
              height: "200px",
              background: "var(--headerBackground, #000)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/images/GoldLogoTheMeatEmporiumBanner.png"
              alt="The Meat Emporium Smithfield"
              width={1200}
              height={320}
              priority
              style={{
                maxHeight: "190px",
                width: "auto",
                maxWidth: "90%",
                objectFit: "contain",
              }}
            />
          </header>

          <NavBar />

          <ClientLayout>
            <main
              style={{
                flexGrow: 1,
                width: "100%",
                padding: "20px 20px 0",
              }}
            >
              {children}
            </main>
          </ClientLayout>

          <footer
            style={{
              width: "100%",
              padding: "1.5rem 0",
              backgroundColor: "#000000",
              color: "#fff",
              textAlign: "center",
            }}
          >
            © {currentYear} The Meat Emporium Smithfield
          </footer>
        </div>
      </body>
    </html>
  );
}
