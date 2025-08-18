export default function Contato() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 mt-50 lg:gap-30 xl:gap-70 2x1:gap-3000 text-white" id="contato">
      {/* Texto da esquerda */}
      <div className="text-3xl leading-relaxed text-center lg:text-4xl md:text-left">
        Vamos
        <br />
        conversar um
        <br />
        pouco ?
      </div>

      {/* Formulário da direita */}
      <div className="bg-[#314675]p-4 rounded-sm w-full md:w-85 flex flex-col">
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
      </div>
    </div>
  );
}
