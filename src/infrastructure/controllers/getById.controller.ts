import { Request, Response } from "express";
import { getById } from "../../application/use-cases/getById";

export class getByIdController {
  constructor(private getByIdCase: getById) {}
  
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cheese = await this.getByIdCase.run(id);
      if (cheese) {
        res.json(cheese);
      } else {
        res.status(404).json({ message: "Cheese not found" });
      }
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}