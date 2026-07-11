import { useState } from "react";

interface ServiceCardProps {
  nome: string;
  modelo: string;
  defeito: string;
  status: boolean;
}

export function ServiceCard({ nome, modelo, defeito, status: statusInicial }: ServiceCardProps) {
  const [status, setStatus] = useState(statusInicial);

  function mudaStatus() {
    setStatus(!status);
  }

  return (
    <button 
      onClick={mudaStatus}
      className={`${status ? "bg-green-500" : "bg-red-600"} h-36 w-72 border-3 rounded-2xl border-gray-500 grid cursor-pointer hover:opacity-90`}>
      <p className="justify-self-start">Nome do Cliente: {nome}</p>
      <p className="justify-self-start">Modelo do Aparelho: {modelo}</p>
      <p className="justify-self-start">Defeito: {defeito}</p>
      <p className="justify-self-start">Status: {status ? "Finalizado" : "Aberto"}</p>
    </button>
  );
}