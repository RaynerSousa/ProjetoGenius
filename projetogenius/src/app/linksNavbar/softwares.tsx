"use client";
import { useLayoutEffect, useRef } from "react";
import { Card } from "../Componentes/Cards";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Softwares() {
  const el = useRef(null);
  const tl = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".modal-itens",
            scrub: true,
            // markers: true,
            start: "top 80%",
            end: "bottom 75%",
          },
        })
        .from(".modal-itens", {
          opacity: 0,
          y: 100,
          stagger: 0.4,
          duration: 1.2,
        });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <div className="mt-30 w-full text-white scroll-mt-20" id="Softwares">
      <div className="flex justify-center text-4xl m-4 pt-10">
        <h2>Sistema que Disponibiliza</h2>
      </div>
      <div
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        ref={el} // ✅ referência aqui
      >
        <div className="modal-itens" id="modal1">
          <Card
            title="Genius"
            description="É um sistema que ajuda a automatizar comércios"
            img="/genius.png"
            link="https://tailwindcss.com/docs/colors"
          />
        </div>
        <div className="modal-itens" id="modal2">
          <Card
            title="Genius"
            description="É um sistema que ajuda a automatizar comércios"
            img="/genius.png"
            link="https://tailwindcss.com/docs/colors"
          />
        </div>
        <div className="modal-itens" id="modal3">
          <Card
            title="Genius"
            description="É um sistema que ajuda a automatizar comércios"
            img="/genius.png"
            link="https://tailwindcss.com/docs/colors"
          />
        </div>
      </div>
    </div>
  );
}
