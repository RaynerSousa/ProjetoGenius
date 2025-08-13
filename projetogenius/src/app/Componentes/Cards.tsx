interface cardPorps {
  title: string;
  description: string;
  img: string;
}

export function Card({ title, description, img }: cardPorps) {
  return (
    <div
      className="
        bg-[#314675] 
        p-6 rounded-xl 
        hover:shadow-md transition duration-300
        w-auto"
    >
      <div className="flex justify-center items-center">
        
          <img
            src={img}
            alt={title}
            className="w-auto h-48 object-cover mb-4"
          />
        
        <div>
          <h3
            className="
            text-xl font-semibold mb-2"
          >
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}
