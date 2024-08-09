import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class update {
  constructor(private cheeseRepository: ICheeseRepository) {}

  async run(
    id: string,
    batch: string,
    quantity: number,
    state: string,
    startDate: Date,
    endDate: Date,
    userId: string
  ): Promise<Cheese | null> {
    const updatedCheese = new Cheese(
      id,
      batch,
      quantity,
      state,
      startDate,
      endDate,
      userId
    );
    return this.cheeseRepository.update(updatedCheese);
  }
}
