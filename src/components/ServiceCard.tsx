interface ServiceCardProps {
  nome: string;
  modelo: string;
  defeito: string;
  status: boolean;
}

export function ServiceCard({ nome, modelo, defeito, status }: ServiceCardProps) {
  return (
    <div className="bg-gray-300 h-72 w-72 border-3 rounded-2xl border-gray-500">
      <p>Nome do Cliente: {nome}</p>
      <p>Modelo do Aparelho: {modelo}</p>
      <p>Defeito: {defeito}</p>
      <p>Status: {status ? "Aberto" : "Fechado"}</p>
    </div>
  );
}