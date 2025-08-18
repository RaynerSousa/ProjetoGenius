"use client";
import Image from "next/image";
export function Sobre() {
  return (
    <div className="md:pt-6 sm:pt-20" id="sobre">
      <div className="flex xl:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
        {/* TEXTO - vai pra esquerda em telas grandes, fica abaixo da imagem em mobile */}
        <div className="w-full md:w-1/2">
        <h2 className="text-3xl" >Sobre nós</h2>
          <p>
            Somos uma empressa com mais de 5 anos no mercado da tecnologia.
          </p>
        </div>
        {/* IMAGEM - vai pra direita em telas grandes, fica no topo em mobile */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/empresarios.jpeg"
            alt="vários computadores"
            width={500}
            height={500}
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
}
