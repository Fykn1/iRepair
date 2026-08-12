import type { ServiceOrder } from "../../models/serviceOrderModel";

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: string;
  serviceOrders?: ServiceOrder[]
}