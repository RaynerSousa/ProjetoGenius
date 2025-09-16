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
            start: "top 100%",
            end: "bottom 100%",
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
    <div className="mt-30 w-screen h-screen grid justify-center items-center text-white modal-itens" id="Softwares">
        {/* <div className="font-bold text-4xl m-4 grid justify-center"> */}
        <h2 className="font-bold text-4xl grid justify-center">Sistema que Disponibiliza</h2>
      {/* </div> */}
      <div
        className="w-full md:-mt-60 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        ref={el}
      >
        <div id="modal1">
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
