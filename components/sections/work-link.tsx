'use client';

import Image from 'next/image';
import type { PointerEvent } from 'react';

type WorkLinkProps = {
  title: string;
  image: string;
  href: string;
  priority: boolean;
};

export function WorkLink({ title, image, href, priority }: WorkLinkProps) {
  function followPointer(event: PointerEvent<HTMLAnchorElement>) {
    if (event.pointerType !== 'mouse') return;

    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty('--cursor-x', `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty('--cursor-y', `${event.clientY - bounds.top}px`);
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Apri il sito di ${title} in una nuova scheda`}
      onPointerMove={followPointer}
      className="group absolute inset-0 block cursor-none overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white"
    >
      <Image
        src={image}
        alt={`${title} – sito web realizzato da Studio Kobalto`}
        fill
        sizes="(min-width: 2200px) 1752px, (min-width: 1200px) calc(100vw - 423px), calc(100vw - 32px)"
        quality={95}
        className="object-cover transition-[filter] duration-300 group-hover:brightness-[0.86] group-focus-visible:brightness-[0.86]"
        priority={priority}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      <span
        aria-hidden="true"
        style={{
          left: 'var(--cursor-x, 50%)',
          top: 'var(--cursor-y, 50%)',
        }}
        className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-medium text-ink opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
      >
        Apri sito
      </span>
    </a>
  );
}
