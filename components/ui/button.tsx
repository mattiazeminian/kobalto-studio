"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2 focus-visible:ring-offset-ink motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-foreground text-ink hover:bg-foreground",
        outline: "border border-foreground bg-transparent text-foreground hover:bg-foreground/5",
        subtle: "bg-transparent text-muted hover:bg-cobalt-light/10 hover:text-foreground focus-visible:bg-cobalt-light/10 focus-visible:text-foreground",
        brand: "bg-cobalt text-foreground hover:bg-cobalt-hover",
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
