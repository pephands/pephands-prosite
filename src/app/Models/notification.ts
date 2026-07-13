export class SpecialNotification {
  public message!: string;

  deserialize(input: any) {
    this.message = input.message;

    return this;
  }
}
