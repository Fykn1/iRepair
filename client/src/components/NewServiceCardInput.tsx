import { useState } from "react";

interface NewServiceCardInputProps {
  onSalvar: (dados: { nome: string; modelo: string; defeito: string; status: boolean }) => void;
}

export function NewServiceCardInput({ onSalvar }: NewServiceCardInputProps) {
  const [nome, setNome] = useState("");
  const [modelo, setModelo] = useState("");
  const [defeito, setDefeito] = useState("");

  function salvarBtn() {
    if(nome === "" || modelo === "" || defeito === "") {
      return;
    }

    onSalvar({nome, modelo, defeito, status: false});
    console.log({ nome, modelo, defeito, status: false })

    setNome("");
    setModelo("");
    setDefeito("");
  }

  return (
    <div className="bg-gray-300 h-36 w-72 border-3 rounded-2xl border-gray-500 grid grid-rows-4">
      <input 
        type="text" placeholder="Nome do Cliente" className="border" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)}>
      </input>
      <input 
        type="text" placeholder="Modelo do Aparelho" className="border"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}>
      </input>
      <input 
        type="text" placeholder="Defeito" className="border"
        value={defeito}
        onChange={(e) => setDefeito(e.target.value)}>
      </input>
      <button onClick={salvarBtn} className="bg-blue-950 text-white rounded-xs p-1 cursor-pointer hover:opacity-90">Salvar</button>
    </div>
  );
}