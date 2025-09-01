"use client";
import { useLayoutEffect,} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

export function Sobre() {

  useLayoutEffect (()=> {
    gsap.to(".empresario",{
      x: 0,
      opacity: 1,
      start: "top 80%",
      duration: 2
      // scrollTrigger:{
      //   trigger:"#sobre",
      //   markers: true,
      //   start: "top 200px",
      //   end:"bottom 600px",
      //   scrub:true
      // }
    })

    // return()=> {
    //   gsap.killTweensOf('.empresario')
    // }
  },[])

  return (
    <div className="md:pt-6 sm:pt-20" id="sobre">
      <div className="flex xl:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
        {/* TEXTO */}
        <div className=" md:translate-x-40 md:w-1/2 m-4">
          <h2 className="text-3xl">Sobre nós</h2>
          <p>
            Somos uma empresa com mais de 5 anos no mercado da tecnologia.
          </p>
        </div>

        {/* IMAGEM */}
        <div className="empresario opacity-0 -translate-x-20 flex justify-center ">
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

// "use client";
// import { useLayoutEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export function Sobre() {
//   const imgRef = useRef(null);

//   useLayoutEffect(() => {
//     let ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       mm.add(
//         {
//           // breakpoints
//           isDesktop: "(min-width: 1024px)",
//           isTablet: "(min-width: 768px) and (max-width: 1023px)",
//           isMobile: "(max-width: 767px)",
//         },
//         (context) => {
//           let { isDesktop, isTablet, isMobile } = context.conditions!;

//           gsap.to(imgRef.current, {
//             x: isDesktop ? 100 : isTablet ? 50 : 0,
//             opacity: 1,
//             duration: 1.2,
//             scrollTrigger: {
//               trigger: "#sobre",
//               start: "top 80%",
//               toggleActions: "play none none reverse",
//             },
//           });
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="md:pt-6 sm:pt-20" id="sobre">
//       <div className="flex xl:flex-row-reverse md:flex-row-reverse flex-col-reverse justify-center lg:gap-10 xl:gap-16 text-white mt-20 lg:m-25 md:m-12 sm:m-7">
//         {/* TEXTO */}
//         <div className="md:translate-x-40 md:w-1/2">
//           <h2 className="text-3xl">Sobre nós</h2>
//           <p>Somos uma empresa com mais de 5 anos no mercado da tecnologia.</p>
//         </div>

//         {/* IMAGEM */}
//         <div
//           ref={imgRef}
//           className="opacity-0 -translate-x-20 flex justify-center"
//         >
//           <Image
//             src="/empresarios.jpeg"
//             alt="Empresarios"
//             width={300}
//             height={300}
//             className="w-full max-w-sm h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
