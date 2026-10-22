import Link from "next/link";
import { TurboLogo } from "@/components/turbo-logo";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="w-[115px]">
        <TurboLogo />
      </div>
      <div className="flex flex-col gap-2">
        <p className="mono-label text-white/50">404</p>
        <h1 className="text-[32px] leading-[1.1] font-medium tracking-[-0.03em]">
          This page took a different flight
        </h1>
      </div>
      <Link
        href="/"
        className="flex h-10 items-center rounded-full bg-white px-6 text-[16px] leading-[19.2px] font-medium text-black transition-opacity hover:opacity-90"
      >
        Back to home
      </Link>
    </main>
  );
}
