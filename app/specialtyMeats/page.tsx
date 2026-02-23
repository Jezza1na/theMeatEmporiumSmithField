'use client';

import { useState, useEffect } from 'react';
import ClientLayout from '@/app/ClientLayout';
import Image from 'next/image';

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

  // Disable scroll + hide layout when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedImage]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <ClientLayout>
        <section className="w-full overflow-hidden py-16 bg-transparent">
          
          <h1 className="text-4xl font-bold text-center mb-12">
            Specialty Meats
          </h1>

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

        </section>
      </ClientLayout>

      {/* FULLSCREEN MODAL — OUTSIDE ClientLayout */}
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
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
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