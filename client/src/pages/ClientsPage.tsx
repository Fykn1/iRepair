import { useEffect, useState } from 'react';
import { getAllClients, deleteClient } from '../services/clientService';
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
    <ul>
      {clients.map(client => (
        <li key={client.id}>
          {client.name}
          <button onClick={() => handleDelete(client.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ClientsPage;