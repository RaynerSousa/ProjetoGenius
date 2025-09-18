"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Introdutorio() {
  useLayoutEffect(() => {
    gsap.to(".compu", {
      x: 0,
      opacity: 1,
      duration: 2,
    });

    return () => {
      gsap.killTweensOf(".compu");
    };
  }, []);

  useLayoutEffect(() => {
    const split = new SplitText(".text", { type: "words,chars" });
    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: ".text",
        toggleActions: "restart pause play none",
      },
      y: 100,
      autoAlpha: 0,
      stagger: 0.08,
    });
  }, []);

  return (
    <div className="w-screen scroll-mt-60 mt-50 md:h-screen " id="inicio">
      <div className="texto flex xl:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
        {/* IMAGEM */}
        <div className="compu opacity-0 translate-x-20  flex justify-center">
          <Image
            src="/computadores.png"
            alt="vários computadores"
            width={500}
            height={400}
            className="w-screen max-w-sm h-screen "
          />
        </div>

        {/* TEXTO */}
        <div className="w-full md:w-1/2 m-4">
          <p className="text-4xl text">
            Você está procurando um sistema de gestão e automação comercial?
          </p>
          <p className="pt-10 text-3xl text">
            Se Sim <br /> você está no lugar certo
          </p>
        </div>
      </div>
    </div>
  );
}
