import type { Request, Response } from 'express';
import { UserService } from './user.service';

const service = new UserService();

class UserController {
  async create(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await service.create({ email, password });
      
      const { password: _, ...userWithoutPassword } = user;

      return res.status(201).json(userWithoutPassword);
      
    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const users = await service.getAll();

      return res.status(200).json(users);
    
    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id || Array.isArray(id)) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      const user = await service.getById(id);

      return res.json(user);
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id || Array.isArray(id)) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      const updatedUser = await service.update(id, req.body);

      const { password: _, ...userWithoutPassword } = updatedUser;
      
      return res.status(200).json(userWithoutPassword);
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = req.params.id;
      if (!id || Array.isArray(id)) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      await service.delete(id);
      
      return res.status(204).send();
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }
}

export { UserController };