"use client";
import Image from "next/image";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function Introdutorio() {
  useLayoutEffect(() => {
    // Animação da imagem
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

    const split = new SplitText(".text", { type: "words,chars" });

    gsap.from(split.chars, {
      x: 100,
      autoAlpha: 0,
      stagger: 0.08,
      // scrollTrigger: {
      //   trigger: ".texto",
      //   markers: true,
      //   start: "top: 350px",
      //   end: "button: 170px",
      //   scrub: true
      // },
    });
  }, []);

  return (
    <div className="container pt-40 pb-20" id="inicio">
      <section className="">
        <div className="texto flex xl:flex-row-reverse md:flex-row-reverse sm:flex-col flex-col justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
          {/* IMAGEM */}
          <div className="compu opacity-0 translate-x-20 flex justify-center max-w-sm mx-auto ">
            <Image
              src="/computadores.png"
              alt="vários computadores"
              width={700}
              height={700}
            />
          </div>

          {/* TEXTO */}
          <div className="w-full md:w-1/2 m-4 ">
            <p className="text-4xl text">
              Você está procurando um sistema de gestão e automação comercial?
            </p>
            <p className="pt-10 text-3xl text">
              Se Sim <br /> você está no lugar certo
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
