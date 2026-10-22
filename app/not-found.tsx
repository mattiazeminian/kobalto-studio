import Link from "next/link";
import { Subpage } from "@/components/Subpage";
export default function NotFound() {
  return (
    <Subpage
      title="Pagina non trovata"
      intro="Il link non porta a una pagina disponibile."
    >
      <Link href="/">Torna alla pagina iniziale</Link>
    </Subpage>
  );
}
