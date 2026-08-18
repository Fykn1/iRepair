import type { Client } from '../client/client.model';
import type { User } from '../user/user.model';

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