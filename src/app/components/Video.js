"use client"
import React, { useState } from 'react';

export default function VideoModal({ thumbnailUrl, videoUrl, title, objectPosition }) {
  const [isOpen, setIsOpen] = useState(false);

  // Convert YouTube URL to embed format with autoplay
  const getEmbedUrl = (url) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/watch\?.+&v=))([\w-]{11})/);
    return videoId ? `https://www.youtube.com/embed/${videoId[1]}?autoplay=1` : url;
  };

  return (
    <div className="relative">
      {/* Thumbnail */}
      <div 
        className="relative overflow-hidden cursor-pointer aspect-[3/2] rounded-3xl"
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className={`object-cover w-full h-full ${objectPosition ? `object-${objectPosition}` : 'object-center'}`}
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center transition-colors bg-black/20 hover:bg-black/30">
          <div className="flex items-center justify-center w-20 h-20 transition-colors rounded-full bg-white/30 hover:bg-white/40">
            <div className="w-0 h-0 ml-2 border-t-[16px] border-b-[16px] border-t-transparent border-l-[24px] border-l-white border-b-transparent" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 rounded-3xl">
          <div className="relative w-full max-w-4xl aspect-[3/2] rounded-3xl overflow-hidden">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute right-0 p-2 text-xl text-white -top-10"
            >
              ✕
            </button>
            <iframe
              src={getEmbedUrl(videoUrl)}
              title={title}
              className="w-full h-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  );
}