import { prisma } from '../../config/prismaClient';
import type { ServiceOrder } from './serviceOrder.model';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

class ServiceOrderService {
  async create({ device, issue, userId, clientId }: Omit<ServiceOrder, 'id' | 'createdAt' | 'status' | 'user' | 'client'>) {
    if (!device || !issue || !userId || !clientId) {
      throw new Error("Falta informações: dispositivo, problema, id de usuário ou id de cliente");
    }

    const newServiceOrder = await prisma.serviceOrder.create({
      data: {
        device,
        issue,
        status: false,
        userId,
        clientId
      },
      include: {
        client: true,
        user: {
          select: {
            id: true,
            email: true
          }
        }
      }
    });

    return newServiceOrder;
  }

  async getAll() {
    return await prisma.serviceOrder.findMany({
      select: {
        id: true,
        device: true,
        issue: true,
        status: true,
        createdAt: true,
        client: true
      }
    });
  }

  async getById(id: number) {
    const serviceOrder = await prisma.serviceOrder.findUnique({
      where: { id },
      select: {
        id: true,
        device: true,
        issue: true,
        status: true,
        createdAt: true,
        client: true
      }
    });

    if (!serviceOrder) {
      throw new Error("404: Service Order not found");
    }

    return serviceOrder;
  }

  async update(id: number, data: Partial<Omit<ServiceOrder, 'id' | 'createdAt' | 'user' | 'client'>>) {
    try {
      const serviceOrder = await prisma.serviceOrder.update({
        where: { id },
        data,
        include: {
          client: true,
          user: {
            select: {
              id: true,
              email: true
            }
          }
        }
      });

      return serviceOrder;
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: Service Order not found');
      }

      throw error;
    }
  }

  async delete(id: number) {
    try {
      await prisma.serviceOrder.delete({ where: { id } });
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: Service Order not found');
      }
      throw error;
    } 
  }
}

export { ServiceOrderService };