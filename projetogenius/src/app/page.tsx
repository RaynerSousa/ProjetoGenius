import Image from "next/image";
import NavBar from "./Componentes/NavBar";
import Contato from "./contato/pages";
import { Rodaper } from "./contato/footer";
import { WhatsAppButton } from "./contato/footer";
import { Introdutorio } from "./linksNavbar/introdução";
import Softwares from "./linksNavbar/serviços";
import { Card } from "./Componentes/Cards";

export default function Home() {
  const links = [
    { label: "Inicio", href: "#inicio" },
    { label: "Sobre", href: "/" },
    { label: "Softwares", href: "#Softwares" },
    { label: "Contato", href: "#contato" }, // <- Vai abrir a página /contato
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar links={links} />
      {/* Conteúdo da página */}
      <main className="flex-1 p-2 pt-16 text-white">
        <Introdutorio />
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-5 pt-20 text-white">
          <Card
            title="Genius"
            description="E um sistema que ajuda a automotizar comercios"
            img="/genius.png"
          />
          <Card
            title="Genius"
            description="E um sistema que ajuda a automotizar comercios"
            img="/genius.png"
          />
          <Card
            title="Genius"
            description="E um sistema que ajuda a automotizar comercios"
            img="/genius.png"
          />
        </div>
        <Contato />
        <WhatsAppButton />
      </main>
      <footer className="text-left">
        <Rodaper />
      </footer>
    </div>
  );
}
