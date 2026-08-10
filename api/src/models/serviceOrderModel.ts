import type { Client } from './clientModel';
import type { User } from './userModel';

export interface ServiceOrder {
  id: number;
  device: string;
  issue: string;
  status: boolean;
  createdAt: string;

  userId: string;
  user?: Omit<User, "password">;

  clientId: string;
  client?: Client;
}