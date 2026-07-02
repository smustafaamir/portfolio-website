"use client";

import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useId, useRef, useState } from "react";

export type MediaItem = {
  id: string;
  label: string;
  src?: string;
  alt?: string;
  type?: "image" | "video";
};

type ExperienceMediaProps = {
  items: readonly MediaItem[];
  className?: string;
};

function isVideoItem(item: Pick<MediaItem, "src" | "type">) {
  if (item.type === "video") return true;
  if (item.type === "image") return false;
  return Boolean(item.src?.match(/\.(mp4|webm|mov)$/i));
}

function mediaSrc(src: string) {
  return encodeURI(src);
}

export function ExperienceMedia({ items, className }: ExperienceMediaProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = useId();
  const [activeItem, setActiveItem] = useState<MediaItem | null>(null);

  function openItem(item: MediaItem) {
    setActiveItem(item);
    dialogRef.current?.showModal();
  }

  function closeDialog() {
    videoRef.current?.pause();
    dialogRef.current?.close();
    setActiveItem(null);
  }

  return (
    <>
      <ul className={cn("grid grid-cols-2 gap-3 sm:grid-cols-3", className)}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => openItem(item)}
              className={cn(
                "group relative flex aspect-[4/3] w-full overflow-hidden text-center transition-[border-color,opacity] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy",
                item.src
                  ? "border border-hairline bg-surface hover:opacity-90"
                  : "flex-col items-center justify-center border border-dashed border-hairline bg-surface/60 p-3 hover:border-foreground/25 hover:bg-surface"
              )}
            >
              {item.src && isVideoItem(item) ? (
                <>
                  <video
                    src={mediaSrc(item.src)}
                    muted
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 size-full object-cover"
                    aria-hidden="true"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-ink/20 transition-colors group-hover:bg-ink/30">
                    <Play
                      className="size-8 text-surface drop-shadow-sm"
                      aria-hidden="true"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  </span>
                </>
              ) : item.src ? (
                <Image
                  src={item.src}
                  alt={item.alt ?? item.label}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 1100px) 20vw, 220px"
                  className="object-cover"
                />
              ) : (
                <span className="font-mono text-[0.625rem] uppercase tracking-[0.1em] text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.label}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => {
          videoRef.current?.pause();
          setActiveItem(null);
        }}
        className="fixed top-1/2 left-1/2 w-[min(92vw,48rem)] -translate-x-1/2 -translate-y-1/2 border border-hairline bg-surface p-0 text-ink shadow-none backdrop:bg-ink/40 open:flex open:flex-col"
      >
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <p
            id={titleId}
            className="font-sans text-sm font-medium text-foreground"
          >
            {activeItem?.label ?? "Media"}
          </p>
          <button
            type="button"
            onClick={closeDialog}
            className="inline-flex size-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-navy"
            aria-label="Close"
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </div>
        <div className="relative aspect-[4/3] bg-paper">
          {activeItem?.src && isVideoItem(activeItem) ? (
            <video
              ref={videoRef}
              src={mediaSrc(activeItem.src)}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 size-full object-contain"
              aria-label={activeItem.alt ?? activeItem.label}
            />
          ) : activeItem?.src ? (
            <Image
              src={activeItem.src}
              alt={activeItem.alt ?? activeItem.label}
              fill
              sizes="(max-width: 768px) 92vw, 48rem"
              className="object-contain"
            />
          ) : (
            <div className="flex size-full items-center justify-center p-6">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
                Media placeholder — replace with photo
              </span>
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
