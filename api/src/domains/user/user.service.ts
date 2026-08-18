import { prisma } from '../../config/prismaClient';
import type { User } from './user.model'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/client';

class UserService {
  async create({ email, password }: Omit<User, 'id' | 'createdAt' | 'serviceOrders'>) {
    if (!email || !password) {
      throw new Error("Usuário deve ter email e senha");
    }

    const newUser = await prisma.user.create({
      data: { 
        email, 
        password,
      }
    });

    return newUser;
  }

  async getAll() {
    return await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        createdAt: true,
        serviceOrders: true
      }
    });
  }

  async getById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        email: true,
        createdAt: true,
        serviceOrders: true
      }
    });

    if (!user) {
      throw new Error("404: User not found");
    }

    return user;
  }

  async update(id: string, data: Partial<Omit<User, 'id' | 'createdAt' | 'serviceOrders'>>) {
    try {
      const user = await prisma.user.update({
        where: { id },
        data
      });

      return user;
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: User not found');
      }

      throw error;
    }
  }

  async delete(id: string) {
    try {
      await prisma.user.delete({ where: { id } });
    
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        throw new Error('404: User not found');
      }
      throw error;
    } 
  }
}

export { UserService };