import { useEffect, useState } from 'react';
import { api } from '../services/api';
import ServiceCard from '../components/ServiceCard';

interface Service {
  id: number,
  client_id: string,
  device: string,
  issue: string,
  status: boolean,
  created_at: string
}

const DashboardPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/service-orders');
        setServices(response.data);
      } catch (e) {
        console.error(e);
        setError('Não foi possível carregar as ordens de serviço.');
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
      <p>Dashboard</p>
      {services.map((service) => (
        <ServiceCard
          id={service.id}
          client_id={service.client_id}
          device={service.device}
          issue={service.issue}
          status={service.status}
          created_at={service.created_at}
        />
      ))}
    </>
  );
};

export default DashboardPage;