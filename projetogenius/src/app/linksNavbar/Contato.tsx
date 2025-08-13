export default function Contato() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-8 mt-50 lg:gap-30 xl:gap-70 2x1:gap-3000 text-white" id="contato">
      {/* Texto à esquerda */}
      <div className="text-3xl leading-relaxed text-center lg:text-4xl md:text-left">
        Vamos
        <br />
        conversar um
        <br />
        pouco ?
      </div>

      {/* Formulário à direita */}
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
// "use client";
// import React, { useState } from "react";
// import emailjs from "@emailjs/browser";

// export default function Contato() {
//   const [nome, setNome] = useState("");
//   const [email, setEmail] = useState("");
//   const [telefone, setTelefone] = useState("");
//   const [status, setStatus] = useState("");

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     const templateParams = {
//       from_name: nome,
//       from_email: email,
//       phone: telefone,
//     };

//     emailjs
//       .send(
//         "service_789bg04",
//         "template_8rnbsuy",
//         templateParams,
//         "1WBe3WQzPLBtLQKkt"
//       )
//       .then(() => {
//         setStatus("✅ Mensagem enviada com sucesso!");
//         setNome("");
//         setEmail("");
//         setTelefone("");
//       })
//       .catch((err) => {
//         console.error("Erro completo:", err);
//         console.error("Erro JSON:", JSON.stringify(err));
//         if (err.text) {
//           console.error("Mensagem de erro:", err.text);
//         }
//         setStatus("❌ Erro ao enviar mensagem. Tente novamente.");
//       });
//       };

//   return (
//     <div className="flex items-center p-6 text-white font-sans">
//       <div className="flex-1 text-lg leading-relaxed">
//         Vamos
//         <br />
//         conversar um
//         <br />
//         pouco ?
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-[#314675] p-5 rounded-sm w-64 flex flex-col"
//       >
//         <label className="font-bold mt-2">Nome</label>
//         <input
//           type="text"
//           placeholder="Nome"
//           value={nome}
//           onChange={(e) => setNome(e.target.value)}
//           className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none placeholder:text-gray-200"
//           required
//         />

//         <label className="font-bold mt-4">Email</label>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none placeholder:text-gray-200"
//           required
//         />

//         <label className="font-bold mt-4">Telefone</label>
//         <input
//           type="tel"
//           placeholder="Telefone"
//           value={telefone}
//           onChange={(e) => setTelefone(e.target.value)}
//           className="bg-[#668bcd] p-2 mt-1 text-white text-sm outline-none placeholder:text-gray-200"
//           required
//         />

//         <button
//           type="submit"
//           className="mt-5 bg-green-500 hover:bg-green-600 p-2 rounded text-white font-bold"
//         >
//           Enviar
//         </button>

//         {status && <p className="mt-3 text-sm">{status}</p>}
//       </form>
//     </div>
//   );
// }
