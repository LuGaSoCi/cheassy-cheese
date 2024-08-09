import { Request, Response } from "express";
import { Delete } from "../../application/use-cases/delete";

export class deleteController {
  constructor(private deleteCase: Delete) {}
  
  async run(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await this.deleteCase.run(id);
      res.status(204).send();
    } catch (error: any) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  }
}