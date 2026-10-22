import Link from "next/link";
import { Footer } from "./Footer";
import { navigation } from "@/src/content/site";

export function Subpage({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="subpage">
      <a className="skip-link" href="#contenuto">
        Vai ai contenuti
      </a>
      <div className="subpage-shell" id="contenuto">
        <header className="subpage-top">
          <Link href="/" className="subpage-brand">
            Kobalto Studio
            <br />
            (Web Design Agency — Verona, Italia)
          </Link>
          <nav className="subpage-nav" aria-label="Navigazione principale">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </header>
        <div className="subpage-heading">
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        <div className="subpage-content">{children}</div>
      </div>
      <Footer />
    </main>
  );
}
