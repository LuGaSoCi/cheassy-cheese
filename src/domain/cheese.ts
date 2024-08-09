export class Cheese {
  constructor(
    public id: string,
    public batch: string,
    public quantity: number,
    public state: string,
    public startDate: Date,
    public endDate: Date,
    public userId: string
  ) {}
}
