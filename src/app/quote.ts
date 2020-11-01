export class Quote {
  showDescription: boolean;
  downvote: number;
  upvote: number;

  constructor(
    public id: number,
    public quote: string,
    public author: string,
    public publisher: string,
    public completeDate: Date,
  ) {
    this.showDescription = false;
  }
}
