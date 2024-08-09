import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class updateState {
  constructor(private cheeseRepository: ICheeseRepository) {}

  async run(id: string, state: string): Promise<Cheese | null> {
    console.log(id, state);
    return this.cheeseRepository.updateState(id, state);
  }
}
