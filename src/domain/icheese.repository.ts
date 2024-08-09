import { Cheese } from "./cheese";

export interface ICheeseRepository {
  getByUser(id: string): Promise<Cheese[]>;
  getById(id: string): Promise<Cheese>;
  create(cheese: Cheese): Promise<Cheese>;
  update(cheese: Cheese): Promise<Cheese>;
  updateState(id: string, state: string): Promise<Cheese>;
  delete(id: string): Promise<void>;
}