import { Request, Response } from "express";
import { getByUser } from "../../application/use-cases/getByUser";

export class getController {
  constructor(private getByUserUseCase: getByUser) {}
  
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const cheese = await this.getByUserUseCase.run(id);
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