import type { ServiceOrder } from "../serviceOrder/serviceOrder.model";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  serviceOrders?: ServiceOrder[]
}