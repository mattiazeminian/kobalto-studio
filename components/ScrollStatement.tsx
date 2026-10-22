"use client";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { manifesto } from "@/src/content/site";

function StatementLine({
  text,
  index,
  progress,
}: {
  text: string;
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduced = useReducedMotion();
  const opacity = useTransform(
    progress,
    [
      index / manifesto.length,
      (index + 0.45) / manifesto.length,
      (index + 1) / manifesto.length,
    ],
    [0, 1, 0],
  );
  return (
    <p className="statement-line">
      <span>{text}</span>
      <motion.span
        aria-hidden="true"
        className="statement-active"
        style={reduced ? undefined : { opacity }}
      >
        {text}
      </motion.span>
    </p>
  );
}

export function ScrollStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return (
    <section
      className="scroll-statement"
      ref={ref}
      aria-label="Il nostro approccio"
    >
      <div>
        {manifesto.map((line, index) => (
          <StatementLine
            key={line}
            text={line}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
