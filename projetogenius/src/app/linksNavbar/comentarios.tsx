import { CardComentario } from "../Componentes/Cards";

export default function Comentarios() {
  return (
    <div className="bg-[#1a2d66]  text-white mt-30">
      <div className="flex justify-center text-4xl ">
        <h2>Comentarios sobre a Empresa</h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CardComentario
          description="❝ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quis laudantium neque aliquam fugit quidem facere tenetur debitis sunt, accusamus nisi ea perspiciatis exercitationem autem odio eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
        <CardComentario
          description="❝ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quis laudantium neque aliquam fugit quidem facere tenetur debitis sunt, accusamus nisi ea perspiciatis exercitationem autem odio eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
        <CardComentario
          description="❝ Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quis laudantium neque aliquam fugit quidem facere tenetur debitis sunt, accusamus nisi ea perspiciatis exercitationem autem odio eligendi sed. Sed, dolorem. ❞"
          title="Nayara Emilly"
        />
      </div>
    </div>
  );
}
