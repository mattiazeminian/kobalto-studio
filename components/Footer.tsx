import Link from "next/link";
import { navigation } from "@/src/content/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <p>
          Kobalto Studio
          <br />
          <span>Web Design Agency — Verona, Italia</span>
        </p>
        <p>
          Un progetto da iniziare?
          <br />
          <Link href="/contatti">Parliamone</Link>
        </p>
      </div>
      <nav aria-label="Navigazione a piè di pagina">
        {navigation.map((item) => (
          <Link href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Kobalto Studio</span>
        <span>Verona, Italia</span>
      </div>
      <strong aria-hidden="true" className="footer-wordmark">
        kobalto
      </strong>
    </footer>
  );
}
