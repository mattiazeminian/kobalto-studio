import Image from "next/image";
import { PillButton } from "@/components/ui/pill-button";
import { footerNav } from "@/lib/content";

/**
 * Footer: link columns + recruiting block, then the full-bleed artwork that
 * fades to 10% and bleeds off the bottom of the page.
 */
export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2.5">
      <div className="px-6 py-6 desktop:px-0 desktop:py-12">
        <div className="mx-auto grid w-full grid-cols-2 gap-14 pb-2.5 desktop:flex desktop:pb-0 desktop:w-[1024px] desktop:justify-between desktop:gap-0">
          {footerNav.map((column) => (
            <nav
              key={column.title}
              aria-label={column.title}
              className="flex flex-col gap-2.5 desktop:gap-4"
            >
              <p className="mono-label text-white/50">{column.title}</p>
              <ul className="flex flex-col gap-2.5 desktop:gap-4">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[16px] leading-[32px] whitespace-nowrap text-white/71 transition-colors duration-300 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-2.5 desktop:gap-8">
            <p className="w-[305px] text-[16px] leading-[24px] text-[#6e6e6e] desktop:leading-[32px]">
              We wake up everyday doing what we love. We hope to help you do the same.
            </p>

            <div className="flex w-[266px] flex-col gap-2.5">
              <p className="text-[16px] leading-[32px] text-white">
                We&apos;re hiring a Senior Product Designer
              </p>
              <PillButton
                label="Join our team"
                hoverLabel="Apply"
                variant="outline"
                size="pillTall"
                href="https://turbodesign.co/contact"
              />
            </div>

            <h2 className="mono-label w-[305px] text-white/50">Turbo Creative LLC</h2>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        <Image
          src="/images/footer-art.png"
          alt=""
          width={1440}
          height={413}
          sizes="100vw"
          className="h-auto w-full opacity-10"
        />
      </div>
    </footer>
  );
}
