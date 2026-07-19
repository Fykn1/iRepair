import { useEffect, useState } from 'react';
import { api } from '../services/api';

interface Service {
  id: number,
  client_id: number,
  device: string,
  issue: string,
  status: boolean,
  created_at: string
}

const ServiceOrdersPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchServiceOrders() {
      try {
        const response = await api.get('/service-orders');
        setServices(response.data);
      } catch (e) {
        setError('Não foi possível carregar as ordens de serviço.');
      } finally {
        setIsLoading(false);
      }
    }

    fetchServiceOrders();
  }, []);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <>
      <p>OS Page</p>
      <ul>
        {services.map(service => (
          <li key={service.id}>{service.id}|{service.client_id}|{service.device}|{service.issue}|{service.status}|{service.created_at}</li>
        ))}
      </ul>
    </>
  );
};

export default ServiceOrdersPage