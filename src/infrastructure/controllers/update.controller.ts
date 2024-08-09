import { Request, Response } from "express";
import { update } from "../../application/use-cases/update";

export class updateController {
  constructor(private updateCase: update) {}

  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { batch, quantity, state, startDate, endDate, userId } = req.body;
      const updatedCheese = await this.updateCase.run(
        id,
        batch,
        quantity,
        state,
        new Date(startDate),
        new Date(endDate),
        userId
      );
      if (updatedCheese) {
        res.json(updatedCheese);
      } else {
        res.status(404).json({ message: "Cheese not found" });
      }
    } catch (error: any) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}
