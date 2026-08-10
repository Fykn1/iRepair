import type { ServiceOrder } from "./serviceOrderModel";

export interface Client {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: string;
  serviceOrders?: ServiceOrder[];
}