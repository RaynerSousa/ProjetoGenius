"use client";
import { Card } from "../Componentes/Cards";

export default function Softwares() {
  return (
    <div className="mt-30 w-full text-white" id="Softwares">
      <div className="flex justify-center text-4xl m-4 pt-10"><h2>Sistema que Disponibiliza</h2></div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios"
          img="/genius.png"
          link="https://tailwindcss.com/docs/colors"
        />
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios "
          img="/genius.png"
          link="https://tailwindcss.com/docs/colors"
        />
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios"
          img="/genius.png"
          link="https://tailwindcss.com/docs/colors"
        />
      </div>
    </div>
  );
}
