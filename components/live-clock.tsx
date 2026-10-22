"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const formatter = new Intl.DateTimeFormat("en-US", {
  timeZone: "America/New_York",
  weekday: "long",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  hour12: true,
});

function format(date: Date) {
  // "Thursday, October 22 at 3:22:34 AM EST"
  const parts = formatter.formatToParts(date);
  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return `${value("weekday")}, ${value("month")} ${value("day")} at ${value("hour")}:${value(
    "minute",
  )}:${value("second")} ${value("dayPeriod")} EST`;
}

/**
 * Brooklyn clock in the hero rail. The reference artwork always renders the
 * zone suffix as "EST", so the label is appended literally.
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
      <p className="text-[14px] leading-[16.8px] tracking-[0.14px] text-white/50 font-clock">
        Brooklyn, NY
      </p>
      <p
        className="text-[14px] leading-[16.8px] tracking-[0.14px] text-white/50 font-clock"
        suppressHydrationWarning
      >
        {format(now)}
      </p>
    </div>
  );
}
