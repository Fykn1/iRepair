import { useEffect, useState } from 'react';
import { getAllClients, deleteClient } from '../services/clientService';
import ClientCard from '../components/ClientCard';
import type { Client } from '../types';

const ClientsPage = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAllClients();
      setClients(data);
    }
    load();
  }, []);

  async function handleDelete(id: string) {
    await deleteClient(id);
    setClients(prev => prev.filter(c => c.id !== id));
  }

  return (
    <>
      <p>Dashboard</p>
      {clients.map((client) => (
        <ClientCard
          id={client.id}
          name={client.name}
          phone={client.phone}
          email={client.email}
          created_at={client.created_at}
          onDelete={handleDelete}
        />
      ))}
    </>
  );
};

export default ClientsPage;