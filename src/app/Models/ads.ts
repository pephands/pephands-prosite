export class Advertisement {
  public ad_name!: string;
  public ad_image!: string;
  public url!: string;
  public ad_text!: string;

  deserializer(input: any) {
    this.ad_name = input.ad_name;
    this.ad_image = input.ad_image;
    this.url = input.url;
    this.ad_text = input.ad_text;

    return this;
  }
}
