"use client";

import { domAnimation, LazyMotion, m } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { bookingUrl } from "@/lib/content";
import { cn } from "@/lib/utils";

type BookingContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside <BookingProvider>");
  }
  return context;
}

const scrimTransition = { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const };
const sheetIn = { duration: 1.5, ease: [0.2, 0.7, 0.2, 1] as const };
const sheetOut = { duration: 1.3, ease: [0.55, 0.06, 0.68, 0.19] as const };

/**
 * "Start a project" opens the Cal.com booker as a right-hand sheet: the page
 * dims to 43% black, scroll locks and the white panel eases in from 0 to full
 * opacity over ~1.5s. The iframe stays mounted after the first open so the
 * booker keeps its state, exactly like the reference build.
 */
export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpened, setHasOpened] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<Element | null>(null);

  const open = useCallback(() => {
    triggerRef.current = document.activeElement;
    setHasOpened(true);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    const timer = window.setTimeout(() => panelRef.current?.focus(), 0);

    return () => {
      root.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timer);
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    };
  }, [isOpen, close]);

  const value = useMemo(() => ({ isOpen, open, close }), [isOpen, open, close]);

  return (
    <BookingContext.Provider value={value}>
      <LazyMotion features={domAnimation} strict>
      {children}

      {hasOpened ? (
        <div
          className={cn("fixed inset-0 z-50", isOpen ? "" : "pointer-events-none")}
          aria-hidden={!isOpen}
        >
          <m.button
            type="button"
            aria-label="Chiudi la prenotazione"
            onClick={close}
            tabIndex={isOpen ? 0 : -1}
            className="absolute inset-0 h-full w-full cursor-default bg-[rgba(0,0,0,0.43)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={scrimTransition}
          />

          <m.div
            ref={panelRef}
            role="dialog"
            aria-modal={isOpen}
            aria-label="Prenota una chiamata conoscitiva con Turbo"
            tabIndex={-1}
            className="absolute inset-y-0 right-0 flex w-full flex-col overflow-y-auto bg-white outline-none desktop:w-[375px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={isOpen ? sheetIn : sheetOut}
          >
            <iframe
              src={bookingUrl}
              title="Prenota una chiamata di 30 minuti con Turbo"
              className="w-full"
              style={{ height: 999, border: 0 }}
            />
          </m.div>
        </div>
      ) : null}
      </LazyMotion>
    </BookingContext.Provider>
  );
}
