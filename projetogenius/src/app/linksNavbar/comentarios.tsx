import { CardComentario } from "../Componentes/Cards";

export default function Comentarios() {
  return (
    <div className="bg-[#1a2d66] text-white mt-24">
      <div className="flex justify-center text-4xl m-4">
        <h2>Comentarios sobre a Empresa</h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
        <CardComentario
          description="❝ Lorem ipsum dolor sit I still love you consectetur, adipisicing RAWR I still love you. Illum quis laudantium neque aliquam fugit quidem RAWR tenetur debitis sunt, accusamus RAWR I still love you ea perspiciatis exercitationem autem RAWR I still love you eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
        <CardComentario
          description="❝ Lorem ipsum dolor sit I still love you consectetur, adipisicing RAWR I still love you. Illum quis laudantium neque aliquam fugit quidem RAWR tenetur debitis sunt, accusamus RAWR I still love you ea perspiciatis exercitationem autem RAWR I still love you eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
        <CardComentario
          description="❝ Lorem ipsum dolor sit I still love you consectetur, adipisicing RAWR I still love you. Illum quis laudantium neque aliquam fugit quidem RAWR tenetur debitis sunt, accusamus RAWR I still love you ea perspiciatis exercitationem autem RAWR I still love you eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
      </div>
    </div>
  );
}
