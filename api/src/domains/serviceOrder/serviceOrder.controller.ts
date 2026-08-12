import type { Request, Response } from 'express';
import {  ServiceOrderService } from './serviceOrder.service';

const service = new ServiceOrderService();

class ServiceOrderController {
  async create(req: Request, res: Response) {
    try {
      const { device, issue, userId, clientId } = req.body;
      const serviceOrder = await service.create({ device, issue, userId, clientId });

      return res.status(201).json(serviceOrder);

    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const serviceOrders = await service.getAll();

      return res.status(200).json(serviceOrders);
    
    } catch (error) {
      return res.status(400).json({ erro: (error as Error).message });
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      const serviceOrder = await service.getById(id);

      return res.json(serviceOrder);
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      const updatedServiceOrder = await service.update(id, req.body);

      return res.status(200).json(updatedServiceOrder);
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id) || id <= 0) {
        return res.status(400).json({ erro: 'Invalid id' });
      }
      await service.delete(id);
      
      return res.status(204).send();
    
    } catch (error) {
      return res.status(404).json({ erro: (error as Error).message });
    }
  }
}

export { ServiceOrderController };