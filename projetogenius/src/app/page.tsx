import Image from "next/image";
import NavBar from "./Componentes/NavBar";
import Contato from "./linksNavbar/Contato";
import { Rodaper } from "./contato/footer";
// import { WhatsAppButton } from "./contato/footer";
import { Introdutorio } from "./linksNavbar/introdução";
import Softwares from "./linksNavbar/softwares";
import { Sobre } from "./linksNavbar/sobre";
import { InfiniteScrollHorizontal } from "./linksNavbar/InfinitScroll";
import Comentarios from "./linksNavbar/comentarios";

export default function Home() {
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Softwares", href: "#Softwares" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <div className="flex flex-col">
      <NavBar links={links} />
      {/* Conteúdo da página */}
      <main className="overflow-hidden">
        <Introdutorio />
        <Sobre />
        <InfiniteScrollHorizontal />
        <Softwares />
        <Comentarios/>
        <Contato />
        {/* <WhatsAppButton /> */}
      </main>
      <footer className="text-left">
        <Rodaper />
      </footer>
    </div>
  );
}
