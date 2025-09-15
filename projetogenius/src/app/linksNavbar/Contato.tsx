export default function Contato() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center p-8 mt-20 lg:gap-20 xl:gap-50  text-white ring-blue-400"
      id="contato"
      >
      {/* Texto da esquerda */}
      <div className="text-3xl leading-relaxed lg:text-4xl md:text-left mb-5">
        <p>
          Vamos
          <br />
          conversar um
          <br />
          pouco ?
        </p>
      </div>
      {/* Formulário da direita */}
      {/* <div className="bg-[#314675]p-4 rounded-sm w-full md:w-85 flex flex-col">
        <label className="font-bold text-white mt-4">Nome</label>
        <input
          type="text"
          placeholder="Nome"
          className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none shadow-md placeholder:text-gray-200"
        />

        <label className="font-bold text-white  mt-6">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none shadow-md placeholder:text-gray-200"
        />

        <label className="font-bold text-white mt-6">Telefone</label>
        <input
          type="tel"
          placeholder="telefone"
          className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none shadow-md placeholder:text-gray-200"
        />
        <button
          type="submit"
          className="mt-5 bg-green-500 hover:bg-green-600 p-2 rounded text-white font-bold"
        >
          Enviar
        </button>
      </div> */}
      <a
        href="https://wa.me/558896178334"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
        className="flex  flex-col justify-center items-center "
      >
        {/* <div className="pb-10 text-2xl">
          <p>Clique na logo do WhatsApp</p>
        </div> */}
        <div className=" text-white shadow-lg flex flex-row-reverse">
          <div className="bg-indigo-600 hover:bg-indigo-700 rounded-4xl w-50 h-40 flex items-center justify-center flex-col">
            {/* Ícone WhatsApp SVG */}
            <p className="pb-4">Click me!</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.35 11.35 0 0012 0C5.37 0 .01 5.37.01 12a11.25 11.25 0 001.87 6.04L0 24l5.97-1.87a11.27 11.27 0 006.03 1.87c6.63 0 12-5.37 12-12 0-3.2-1.25-6.2-3.48-8.52zm-8.6 16.23a9.14 9.14 0 01-4.6-1.26l-.33-.2-3.54 1.11 1.11-3.46-.21-.34a9.05 9.05 0 012.35-11.85 9 9 0 0112.9 0 9.03 9.03 0 01-6.67 15.8zm5.68-7.72c-.31-.15-1.84-.9-2.13-1-.29-.1-.5-.15-.71.15-.21.31-.81 1-.99 1.2-.18.21-.36.24-.67.08-.31-.15-1.31-.48-2.5-1.54-.92-.82-1.54-1.83-1.72-2.13-.18-.3-.02-.46.13-.61.13-.13.31-.35.47-.53.15-.18.2-.3.3-.5.1-.21.05-.39-.02-.54-.08-.15-.7-1.7-.96-2.32-.25-.61-.5-.53-.71-.54-.18 0-.39 0-.59 0-.2 0-.54.07-.82.39-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.21 2.11 3.22 5.11 4.52.71.31 1.26.5 1.69.64.71.23 1.36.2 1.87.12.57-.1 1.84-.75 2.1-1.48.26-.73.26-1.36.18-1.48-.08-.12-.29-.2-.6-.35z" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
