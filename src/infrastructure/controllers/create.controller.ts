import { Request, Response } from "express";
import { create } from "../../application/use-cases/create";

export class createController {
  constructor(private createCase: create) {}
  
  async run(req: Request, res: Response) {
    try {
      const { batch, quantity, state, startDate, endDate, userId } = req.body;
      const newCheese = await this.createCase.run(
        batch,
        quantity,
        state,
        new Date(startDate),
        new Date(endDate),
        userId
      );
      res.status(201).json(newCheese);
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}