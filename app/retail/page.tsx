"use client";

import { useState, useEffect } from "react";
import ClientLayout from "@/app/ClientLayout";
import Image from "next/image";

const imagesRow1 = [
  "/images/photo1.png",
  "/images/photo1.png",
  "/images/photo1.png",
  "/images/photo1.png",
];

const imagesRow2 = [
  "/images/photo1.png",
  "/images/photo1.png",
  "/images/photo1.png",
  "/images/photo1.png",
];

export default function Contact() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <ClientLayout>
        <section className="w-full overflow-hidden py-16 bg-transparent">
          <h1 className="text-4xl font-bold text-center mb-12">Retail</h1>

          {/* Row 1 */}
          <div className="relative overflow-hidden group">
            <div className="flex gap-10 animate-scroll-right group-hover:[animation-play-state:paused]">
              {[...imagesRow1, ...imagesRow1].map((src, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(src)}
                  className="cursor-pointer min-w-[300px] h-[220px] relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    alt="Specialty Meat"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 */}
          <div className="relative overflow-hidden mt-12">
            <div className="flex gap-10 animate-scroll-left">
              {[...imagesRow2, ...imagesRow2].map((src, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(src)}
                  className="cursor-pointer min-w-[300px] h-[220px] relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={src}
                    alt="Specialty Meat"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* IN-STORE ITEMS — BOXES WITH CENTERED TITLES */}
          <div className="max-w-6xl mx-auto mt-16 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Beef */}
              <div className="bg-[var(--rows)] border border-[var(--bodyBackgroundBorder)] rounded-xl p-6 shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Beef</h2>
                <ul className="list-disc list-inside text-left space-y-1">
                  <li>
                    <strong>Steaks:</strong> Scotch, T-Bone, Porterhouse, Eye
                    Fillet, Rump, Chuck
                  </li>
                  <li>
                    <strong>Roasts:</strong> Brisket, Topside
                  </li>
                  <li>
                    <strong>Other Cuts:</strong> Short Ribs, Flank, Skirt,
                    Shank, Oxtail, Beef Cheeks
                  </li>
                  <li>
                    <strong>Minced/Ground:</strong> Regular Ground Beef, Lean
                    Ground Beef, Mince for Burgers
                  </li>
                  <li>
                    <strong>Specialty:</strong> Corned Beef, Beef Bones
                  </li>
                </ul>
              </div>

              {/* Lamb */}
              <div className="bg-[var(--rows)] border border-[var(--bodyBackgroundBorder)] rounded-xl p-6 shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Lamb</h2>
                <ul className="list-disc list-inside text-left space-y-1">
                  <li>
                    <strong>Chops:</strong> Loin Chops, Shoulder Chops
                  </li>
                  <li>
                    <strong>Roasts:</strong> Leg of Lamb, Shoulder Roast, Rack
                    of Lamb
                  </li>
                  <li>
                    <strong>Other Cuts:</strong> Neck, Shank, Rump, Belly
                  </li>
                  <li>
                    <strong>Ground/Minced:</strong> Lamb Mince
                  </li>
                  <li>
                    <strong>Specialty:</strong> Lamb Bones (for stock), Brain,
                    Heart
                  </li>
                </ul>
              </div>

              {/* Pork */}
              <div className="bg-[var(--rows)] border border-[var(--bodyBackgroundBorder)] rounded-xl p-6 shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">Pork</h2>
                <ul className="list-disc list-inside text-left space-y-1">
                  <li>
                    <strong>Roasts:</strong> Shoulder, Pork Loin Roast, Pork
                    Belly, Ham
                  </li>
                  <li>
                    <strong>Chops:</strong> Loin Chop
                  </li>
                  <li>
                    <strong>Ribs:</strong> Spare Ribs, Baby Back Ribs
                  </li>
                  <li>
                    <strong>Tenderloin</strong>
                  </li>
                  <li>
                    <strong>Other Cuts:</strong> Pork Hock, Pork Neck/Collar,
                    Feet, Pork Bones
                  </li>
                  <li>
                    <strong>Mince/Ground:</strong> Plain ground pork, or mixed
                    for sausages, meatballs, dumplings
                  </li>
                  <li>
                    <strong>Smallgoods:</strong> Bacon, Sausages
                  </li>
                </ul>
              </div>

              {/* Chicken / Poultry */}
              <div className="bg-[var(--rows)] border border-[var(--bodyBackgroundBorder)] rounded-xl p-6 shadow-lg text-center">
                <h2 className="text-2xl font-semibold mb-4">
                  Chicken / Poultry
                </h2>
                <ul className="list-disc list-inside text-left space-y-1">
                  <li>
                    <strong>Whole Chicken</strong>
                  </li>
                  <li>
                    <strong>Parts:</strong> Breast, Thigh, Drumstick, Wing
                  </li>
                  <li>
                    <strong>Specialty Cuts:</strong> Tenderloins, Giblets
                    (liver, heart)
                  </li>
                  <li>
                    <strong>Ground/Mince:</strong> Chicken Mince
                  </li>
                  <li>
                    <strong>Other Poultry:</strong> Duck (breast, leg, whole)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </ClientLayout>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black z-[9999] flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[95vw] h-[95vh]">
            <Image
              src={selectedImage}
              alt="Full screen meat"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
      `}</style>
    </>
  );
}
