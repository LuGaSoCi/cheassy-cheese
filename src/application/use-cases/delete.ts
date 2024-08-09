import { ICheeseRepository } from "../../domain/icheese.repository";

export class Delete {
  constructor(private cheeseRepository: ICheeseRepository) {}
  
  async run(id: string): Promise<void> {
    await this.cheeseRepository.delete(id);
  }
}