import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class getById {
  constructor(private cheeseRepository: ICheeseRepository) {}
  
  async run(id: string): Promise<Cheese> {
    return this.cheeseRepository.getById(id);
  }
}