interface ClientCardProps {
  id: string,
  name: string,
  phone: string,
  email: string,
  created_at: string
  onDelete?: (id: string) => void;
}

const ClientCard = ({ id, name, phone, email, created_at, onDelete }: ClientCardProps) => {
  return (
    <div 
      className={'bg-gray-300 h-36 w-72 border-3 rounded-2xl border-gray-500 grid'}>
      <p className="justify-self-start">Id: {id}</p>
      <p className="justify-self-start">Nome: {name}</p>    
      <p className="justify-self-start">Telefone: {phone}</p>
      <p className="justify-self-start">E-mail: {email}</p>
      <p className="justify-self-start">Data de Criação: {created_at}</p>
      {onDelete && (
        <button 
          onClick={() => onDelete(id)} 
          className="bg-gray-500 text-white py-2 px-4 rounded">
            Excluir
        </button>
      )}
    </div>
  );
}

export default ClientCard;