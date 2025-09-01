"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Introdutorio() {
  useLayoutEffect(() => {
    gsap.to(".compu", {
      x: 0,
      opacity: 1,
      duration: 2,
      scrollTrigger: {
        trigger: ".compu",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <div className="container pt-20" id="inicio">
      <div className="flex xl:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
        {/* IMAGEM - vai pra direita em telas grandes, fica no topo em mobile */}
        <div className="compu opacity-0 translate-x-20 flex justify-center max-w-sm mx-auto">
          <Image
            src="/computadores.png"
            alt="vários computadores"
            width={400}
            height={400}
            className="w-full h-auto"
          />
        </div>
        {/* TEXTO - vai pra esquerda em telas grandes, fica abaixo da imagem em mobile */}
        <div className="w-full md:w-1/2 m-4">
          <p>
            Você está procurando um sistema de gestão e automação comercial? Se
            sim, você está no lugar certo.
          </p>
        </div>
      </div>
    </div>
  );
}
