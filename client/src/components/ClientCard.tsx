interface ClientCardProps {
  id: string,
  name: string,
  phone: string,
  email: string,
  created_at: string
}

const ClientCard = ({ id, name, phone, email, created_at }: ClientCardProps) => {
  return (
    <div 
      className={'bg-gray-300 h-36 w-72 border-3 rounded-2xl border-gray-500 grid'}>
      <p className="justify-self-start">Id: {id}</p>
      <p className="justify-self-start">Nome: {name}</p>    
      <p className="justify-self-start">Telefone: {phone}</p>
      <p className="justify-self-start">E-mail: {email}</p>
      <p className="justify-self-start">Data de Criação: {created_at}</p>
    </div>
  );
}

export default ClientCard;