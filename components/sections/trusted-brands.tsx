import { brands } from "@/lib/content";

/**
 * Client logo wall: two columns (125px / 87px), 33px cells with a 16px gutter,
 * rendered at 40% opacity until hovered.
 */
export function TrustedBrands() {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <p className="mono-label text-white/40">Trusted by venture-backed startups</p>
      <div className="grid grid-cols-[125px_87px] gap-x-8 gap-y-4 pb-0.5">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.href}
            className="flex h-[33px] items-center overflow-hidden opacity-40 transition-opacity duration-300 hover:opacity-100"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={brand.image}
              alt={brand.name}
              width={brand.width}
              height={brand.height}
              className="block shrink-0 object-contain"
              style={{ width: brand.width, height: brand.height }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
