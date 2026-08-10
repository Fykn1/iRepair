import type { ServiceOrder } from "./serviceOrderModel";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  serviceOrders?: ServiceOrder[]
}