"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";

interface Screenshot {
  url: string;
  alt: string;
}

interface ImageGalleryProps {
  screenshots: Screenshot[];
  title?: string;
}

export default function ImageGallery({ screenshots, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Limpar overflow quando o componente desmontar
  useEffect(() => {
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  // Gerenciar teclas quando o modal está aberto
  useEffect(() => {
    if (selectedImage === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      }
      if (e.key === "ArrowLeft" && selectedImage > 0) {
        setSelectedImage(selectedImage - 1);
      }
      if (e.key === "ArrowRight" && selectedImage < screenshots.length - 1) {
        setSelectedImage(selectedImage + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, screenshots.length]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    // Prevenir scroll do body quando o modal está aberto
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  if (screenshots.length === 0) {
    return (
      <div className="text-slate-400 font-[var(--font-inter)]">
        <p>Screenshots em breve...</p>
      </div>
    );
  }

  return (
    <>
      <div>
        {title && (
          <h2 className="text-4xl font-bold tracking-wider text-white mb-10 text-center font-[var(--font-orbitron)]">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {screenshots.map((screenshot, index) => (
            <motion.div
              key={index}
              layoutId={`screenshot-${index}`}
              className="relative aspect-video rounded-lg overflow-hidden bg-slate-900/50 backdrop-blur-md border border-white/10 group cursor-pointer"
              onClick={() => openLightbox(index)}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={screenshot.url}
                alt={screenshot.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50"
              onClick={handleBackdropClick}
            />

            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              onClick={closeLightbox}
              className="fixed top-4 right-4 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
              aria-label="Fechar lightbox"
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Container */}
            <div
              className="fixed inset-0 z-[55] flex items-center justify-center p-4"
              onClick={handleBackdropClick}
            >
              <motion.div
                layoutId={`screenshot-${selectedImage}`}
                className="relative max-w-7xl max-h-[90vh] w-full h-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={screenshots[selectedImage].url}
                  alt={screenshots[selectedImage].alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {/* Navigation Arrows */}
              {screenshots.length > 1 && (
                <>
                  {selectedImage > 0 && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage - 1);
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                      aria-label="Imagem anterior"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </motion.button>
                  )}

                  {selectedImage < screenshots.length - 1 && (
                    <motion.button
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(selectedImage + 1);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300"
                      aria-label="Próxima imagem"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  )}

                  {/* Image Counter */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[60] px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-[var(--font-inter)]"
                  >
                    {selectedImage + 1} / {screenshots.length}
                  </motion.div>
                </>
              )}
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
