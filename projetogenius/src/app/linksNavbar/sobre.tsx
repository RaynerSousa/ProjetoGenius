"use client";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export function Sobre() {
  useLayoutEffect(() => {
    gsap.to(".empresario", {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".empresario",
        // markers: true,
        start: "top 80%",
        end: "bottom 80%",
        scrub: true
      },
    });
    return()=>{ 
      gsap.killTweensOf(".empresario")
    }
  }, []);

  return (
    <div className="w-screen scroll-mt-20 md:h-screen" id="sobre">
      <div className="flex xl:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-center lg:gap-10 xl:gap-16 text-white md:m-12 sm:m-7">
        {/* TEXTO */}
        <div className=" md:translate-x-40 md:w-1/2 m-4">
          <h2 className="text-3xl">Sobre nós</h2>
          <p>Somos uma empresa com mais de 5 anos no mercado da tecnologia.</p>
        </div>

        {/* IMAGEM */}
        <div className="empresario opacity-0 -translate-x-45 flex justify-center items-center ">
          <Image
            src="/empresarios.jpeg"
            alt="Empresarios"
            width={300}
            height={300}
            className="w-full max-w-sm h-auto"
          />
        </div>
      </div>
    </div>
  );
}
