import { useEffect, useState } from 'react';
import { api } from '../services/api';
import ClientCard from '../components/ClientCard';

interface Client {
  id: number,
  name: string,
  phone: string,
  email: string,
  created_at: string
}

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/api/clients');
        setClients(response.data);
      } catch (e) {
        setError('Não foi possível carregar os clientes.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <p>Client Page</p>
      {clients.map((client) => (
        <ClientCard
          id={client.id}
          name={client.name}
          phone={client.phone}
          email={client.email}
          created_at={client.created_at}
        />
      ))}
    </>
  );
};

export default ClientsPage;