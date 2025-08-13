// import Image from "next/image";
// export function Introdutorio() {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-center p-8 lg:gap-30 xl:gap-35 text-white">
//       <div className="p-4 rounded-sm w-full md:w-85 flex flex-col items-center">
//         <Image
//           src="/computadores.png"
//           alt="varios computadores"
//           width={500}
//           height={500}
//           className="w-full max-w-sm h-auto"
//         />
//       </div>
//       <div>
//         <p>
//           Você esta procurando um sistema de gestão e automação comercial? Se
//           sim, você esta no lugar certo.
//         </p>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export function Introdutorio() {
  return (
    <div className="container pt-16" id="inicio">
      <div
        className="flex flex-col-reverse md:flex-row items-center justify-center lg:gap-10 xl:gap-16 text-white mt-20"
      >
        {/* TEXTO - vai pra esquerda em telas grandes, fica abaixo da imagem em mobile */}
        <div className="w-full md:w-1/2">
          <p>
            Você está procurando um sistema de gestão e automação comercial? Se
            sim, você está no lugar certo.
          </p>
        </div>

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
      </div>
    </div>
  );
}
