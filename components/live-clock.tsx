"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const formatter = new Intl.DateTimeFormat("it-IT", {
  timeZone: "Europe/Rome",
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

function format(date: Date) {
  const parts = formatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("weekday")} ${value("day")} ${value("month")}, ${value("hour")}:${value(
    "minute",
  )}:${value("second")}`;
}

/**
 * Verona clock in the hero rail, formatted in Italian.
 */
export function LiveClock({ className }: { className?: string }) {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const tick = () => setNow(new Date());
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className={cn("flex flex-col gap-1 overflow-hidden", className)}>
      <p className="font-clock text-[14px] leading-[16.8px] tracking-[0.14px] text-white/50">
        Verona, Italia
      </p>
      <p
        className="font-clock text-[14px] leading-[16.8px] tracking-[0.14px] text-white/50"
        suppressHydrationWarning
      >
        {format(now)}
      </p>
    </div>
  );
}
