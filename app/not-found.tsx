import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      <div className="w-[115px]">
        <Image
          src="/logo.png"
          alt="Kobalto Studio"
          width={1620}
          height={368}
          className="block h-auto w-full"
        />
      </div>
      <div className="flex flex-col gap-2">
        <p className="section-label text-muted">404</p>
        <h1 className="font-display text-[40px] leading-[1.1] font-normal tracking-[-0.03em] text-foreground">
          Questa pagina ha preso un&apos;altra strada.
        </h1>
      </div>
      <Link
        href="/"
        className="flex h-10 items-center rounded-full bg-cobalt px-6 text-[16px] leading-[19.2px] font-medium text-foreground transition-colors duration-200 hover:bg-cobalt-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt motion-reduce:transition-none"
      >
        Torna alla home
      </Link>
    </main>
  );
}
