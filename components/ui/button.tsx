"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-[color,background-color,transform] duration-200 outline-none hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none motion-reduce:hover:translate-y-0 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-white text-black hover:bg-white",
        outline: "border border-white bg-transparent text-white hover:bg-white/5",
        subtle: "bg-white/4 text-white hover:bg-white/8",
        brand: "bg-cobalt text-white hover:bg-cobalt-hover",
        secondary: "border border-white/25 bg-transparent text-white/80 hover:border-cobalt-pale hover:bg-cobalt-pale hover:text-ink focus-visible:border-cobalt-pale focus-visible:bg-cobalt-pale focus-visible:text-ink",
      },
      size: {
        /** 40px pill used by the hero nav + primary CTA. */
        pill: "h-10 w-[131px] justify-center overflow-hidden px-9 text-[16px] leading-[19.2px]",
        /** 48px pill used by the footer "Join our team" button. */
        pillTall: "h-12 w-[131px] justify-center overflow-hidden px-9 text-[16px] leading-[19.2px]",
        /** 40px compact pill used by "About". */
        compact: "h-10 px-4 text-[15px] leading-[21px]",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "pill",
    },
  },
);

export type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
