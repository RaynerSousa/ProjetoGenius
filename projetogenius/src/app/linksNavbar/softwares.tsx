"use client";
import { Card } from "../Componentes/Cards";

export default function Softwares() {
  return (
    <div className="" id="Softwares">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-10 pt-30 text-white">
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios"
          img="/genius.png"
        />
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios"
          img="/genius.png"
        />
        <Card
          title="Genius"
          description="E um sistema que ajuda a automotizar comercios"
          img="/genius.png"
        />
      </div>
    </div>
  );
}
