import { useEffect, useState } from 'react';
import { getAllServiceOrders, deleteServiceOrder } from '../services/serviceOrderService';
import type { ServiceOrder } from '../types';

const ServiceOrdersPage = () => {
  const [serviceOrders, setServiceOrders] = useState<ServiceOrder[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAllServiceOrders();
      setServiceOrders(data);
    }
    load();
  }, []);

  async function handleDelete(id: number) {
    await deleteServiceOrder(id);
    setServiceOrders(prev => prev.filter(so => so.id !== id));
  }

  return (
    <ul>
      {serviceOrders.map(serviceOrder => (
        <li key={serviceOrder.id}>
          {serviceOrder.device} - {serviceOrder.issue} - {serviceOrder.status}
          <button onClick={() => handleDelete(serviceOrder.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ServiceOrdersPage;