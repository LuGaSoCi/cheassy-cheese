import { ICheeseRepository } from "../../domain/icheese.repository";
import { Cheese } from "../../domain/cheese";

export class create {
  constructor(private cheeseRepository: ICheeseRepository) {}

  async run(
    batch: string,
    quantity: number,
    state: string,
    startDate: Date,
    endDate: Date,
    userId: string
  ): Promise<Cheese> {
    const cheese = new Cheese(
      "",
      batch,
      quantity,
      state,
      startDate,
      endDate,
      userId
    );
    return this.cheeseRepository.create(cheese);
  }
}
