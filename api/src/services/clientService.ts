import { prisma } from '../config/prismaClient';
import type { Client } from '../models/clientModel';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

class ClientService {
  async create({ name, phone, email }: Omit<Client, 'id' | 'createdAt' | 'serviceOrders'>) {
    if (!name || !phone || !email) {
      throw new Error("Cliente deve ter nome, telefone e email");
    }

    const newClient = await prisma.client.create({
      data: {
        name,
        phone,
        email
      }
    });

    return newClient;
  }

  async getAll() {
    return await prisma.client.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        createdAt: true,
        serviceOrders: true
      }
    });
  }

  async getById(id: string) {
    const client = await prisma.client.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        name: true,
        phone: true,
        createdAt: true,
        serviceOrders: true
      }
    });

    if (!client) {
      throw new Error("404: Client not found");
    }

    return client;
  }

  async update(id: string, data: Partial<Omit<Client, 'id' | 'createdAt' | 'serviceOrders'>>) {
    try {
      const client = await prisma.client.update({
        where: { id },
        data
      });

      return client;
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: Client not found');
      }

      throw error;
    }
  }

  async delete(id: string) {
    try {
      await prisma.client.delete({ where: { id } });
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: Client not found');
      }
      throw error;
    } 
  }
}

export { ClientService };