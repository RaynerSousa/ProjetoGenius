import { CardComentario } from "../Componentes/Cards";

export default function Comentarios() {
  return (
    <div className="bg-[#1a2d66] h-120 grid justify-center text-white mt-24">
      <div className="flex justify-center font-bold text-4xl m-4 mt-20">
        <h2>Comentarios sobre a Empresa</h2>
      </div>
      <div className="">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-24   gap-4">
          <CardComentario
            description=" “A Genius transformou nossa experiência com atendimento ao cliente. Profissionais dedicados e resultados incríveis!” "
            title="— Nayara Emilly"
          />
          <CardComentario
            description=" “Serviço excepcional e equipe muito atenciosa. Recomendo a todos que buscam qualidade e confiança.”"
            title="— João Silva"
          />
          <CardComentario
            description="“Profissionalismo e dedicação que fazem toda a diferença. Estou muito satisfeito com os resultados.”"
            title="— Maria Oliveira"
          />
        </div>
      </div>
    </div>
  );
}
