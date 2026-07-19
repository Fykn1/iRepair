import { useState } from "react";

interface ServiceCardProps {
  id: number,
  client_id: number,
  device: string,
  issue: string,
  status: boolean,
  created_at: string
}

const ServiceCard = ({ id, client_id, device, issue, status: inicialState, created_at }: ServiceCardProps) => {
  const [status, setStatus] = useState(inicialState);

  function changeState() {
    setStatus(!status);
  }

  return (
    <button 
      onClick={ changeState }
      className={`${status ? "bg-green-500" : "bg-red-600"} h-36 w-72 border-3 rounded-2xl border-gray-500 grid cursor-pointer hover:opacity-90`}>
      <p className="justify-self-start">Id: {id}</p>
      <p className="justify-self-start">Id do Cliente: {client_id}</p>    
      <p className="justify-self-start">Modelo: {device}</p>
      <p className="justify-self-start">Defeito: {issue}</p>
      <p className="justify-self-start">Status: {status ? "Finalizado" : "Aberto"}</p>
      <p className="justify-self-start">Data de Criação: {created_at}</p>
    </button>
  );
}

export default ServiceCard;