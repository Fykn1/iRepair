import type { ServiceOrder } from "../serviceOrder/serviceOrder.model";

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  serviceOrders?: ServiceOrder[];
}