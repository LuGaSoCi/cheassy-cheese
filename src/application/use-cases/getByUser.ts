import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class getByUser {
  constructor(private cheeseRepository: ICheeseRepository) {}
  
  async run(id: string): Promise<Cheese[]> {
    return this.cheeseRepository.getByUser(id);
  }
}