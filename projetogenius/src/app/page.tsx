import Image from "next/image";
import NavBar from "./Componentes/NavBar";
import Contato from "./contato/pages";
import { Rodaper } from "./contato/footer";
import { WhatsAppButton } from "./contato/footer";
import { Introdutorio } from "./Historia/introdução";


export default function Home() {
  const links = [
    { label: "Inicio", href: "/" },
    { label: "Sobre", href: "/" },
    { label:"Serviços", href: "/"},
    { label: "Contato", href: "/" }, // <- Vai abrir a página /contato
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar links={links} />
      {/* Conteúdo da página */}
      <main className="flex-1 p-2 text-white">
        <Introdutorio />
        <Contato />
        <WhatsAppButton />
      </main>
      <footer className="text-left">
        <Rodaper />
      </footer>
    </div>
  );
}
