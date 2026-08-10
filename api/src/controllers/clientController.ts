import type { Request, Response } from 'express';
import { ClientService } from '../services/clientService';

const service = new ClientService();

class ClientController {
  async create(req: Request, res: Response) {
    try {
      const { name, phone, email } = req.body;
      const client = await service.create({ name, phone, email });

      return res.status(201).json(client);

    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const clients = await service.getAll();

      return res.status(200).json(clients);
    
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
      const client = await service.getById(id);

      return res.json(client);
    
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
      const updatedClient = await service.update(id, req.body);

      return res.status(200).json(updatedClient);
    
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

export { ClientController };