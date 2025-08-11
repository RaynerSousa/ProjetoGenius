import Image from "next/image";
import NavBar from "./Componentes/NavBar";
import Contato from "./contato/pages";
import { Rodaper } from "./contato/footer";
import { WhatsAppButton } from "./contato/footer";
import { Introdutorio } from "./Historia/introdução";

export default function Home() {
  const links = [
    { label: "Home", href: "/" },
    { label: "Sobre", href: "/" },
    { label: "Contato", href: "/" }, // <- Vai abrir a página /contato
  ];

  return (
    <div>
      <NavBar links={links} />
      {/* Conteúdo da página */}
      <main className="p-4 text-white">
        <Introdutorio />
        <Contato />
        <WhatsAppButton />
      </main>
      <footer>
        <Rodaper />
      </footer>
    </div>
  );
}
