import { title } from "process";

interface cardPorps {
  title: string;
  description: string;
  img?: string;
  link?: string;
}

export function Card({ title, description, img, link }: cardPorps) {
  return (
    <div className="
        bg-[#314675] 
        p-4 m-6
        cursor-pointer
            rounded-md hover:shadow-2xl hover:-translate-y-2 duration-600 place-content-center h-70">
      <a href={link} target="_blank">
        
          <div className={`flex md:flex-row lg:flex-row sm:flex-row flex-col justify-center items-center`}>
            <img
              src={img}
              alt={title}
              className="max-w-50 "
            />

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
            rounded-md hover:shadow-2xl hover:-translate-y-1 duration-300 space-y-3
            sm:m-4 md:m-4 lg:m-4 "
    >
        <div>
        <p>{description}</p>
      </div>
      <div className="flex flex-row-reverse mt-4">{title}</div>
    
    </div>
  );
}
