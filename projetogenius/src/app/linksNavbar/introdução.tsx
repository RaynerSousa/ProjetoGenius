
import Image from "next/image";

export function Introdutorio() {
  return (
    <div className="container pt-20" id="inicio">
      <div
        className="flex xl:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7"
      >
        {/* IMAGEM - vai pra direita em telas grandes, fica no topo em mobile */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/computadores.png"
            alt="vários computadores"
            width={500}
            height={500}
            className="w-full max-w-sm h-auto"
          />
        </div>
        {/* TEXTO - vai pra esquerda em telas grandes, fica abaixo da imagem em mobile */}
        <div className="w-full md:w-1/2">
          <p>
            Você está procurando um sistema de gestão e automação comercial? Se
            sim, você está no lugar certo.
          </p>
        </div>

      </div>
    </div>
  );
}
