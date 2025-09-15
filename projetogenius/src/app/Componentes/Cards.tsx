import { title } from "process";

interface cardPorps {
  title: string;
  description: string;
  img?: string;
  link?: string;
  className?: Text;
}

export function Card({ title, description, img, link, className }: cardPorps) {
  return (
    <div
      className="
        bg-[#314675] 
        p-4 m-6
        cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-2 duration-600 place-content-center h-70"
    >
      <a href={link} target="_blank">
        <div
          className={`flex md:flex-row lg:flex-row sm:flex-row flex-col justify-center items-center`}
        >
          <img src={img} alt={title} className="max-w-50 " />

          <div>
            <h3
              className="
            text-xl font-semibold mb-2"
            >
              {title}
            </h3>
            <div>{description}</div>
          </div>
        </div>
      </a>
    </div>
  );
}

interface cardPorp {
  title: string;
  description: string;
}

export function CardComentario({ title, description }: cardPorp) {
  return (
    <div
      className=" bg-[#041548]  border to-black p-5 cursor-pointer
            rounded-md m-5 "
    >
      <div>
        <p className="italic text-lg leading-relaxed">{description}</p>
      </div>
      <div className="text-right font-bold flex flex-row-reverse mt-4">{title}</div>
    </div>
  );
}
