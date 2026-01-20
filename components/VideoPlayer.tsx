"use client";

import { useMemo } from "react";

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export default function VideoPlayer({ url, title }: VideoPlayerProps) {
  // Função para converter URL do YouTube/Vimeo para embed
  const embedUrl = useMemo(() => {
    if (!url) return null;

    // YouTube
    const youtubeRegex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const youtubeMatch = url.match(youtubeRegex);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}`;
    }

    // Vimeo
    const vimeoRegex = /(?:vimeo\.com\/)(?:.*\/)?(\d+)/;
    const vimeoMatch = url.match(vimeoRegex);
    if (vimeoMatch) {
      return `https://player.vimeo.com/video/${vimeoMatch[1]}`;
    }

    // Se já for uma URL de embed, retorna como está
    if (url.includes("youtube.com/embed") || url.includes("player.vimeo.com")) {
      return url;
    }

    return null;
  }, [url]);

  if (!embedUrl) {
    return (
      <div className="rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 p-6">
        <p className="text-slate-400 text-sm font-[var(--font-inter)] text-center">
          URL de vídeo inválida. Por favor, use um link do YouTube ou Vimeo.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-slate-900/50 backdrop-blur-md border border-white/10 overflow-hidden">
      <div className="relative aspect-video w-full">
        <iframe
          src={embedUrl}
          title={title || "Trailer do jogo"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    </div>
  );
}
