export class Banner {
  public web_image!: string;
  public sort_order!: number;
  public alt!: string;
  public mobile_image!: string;
  public link!: string;
  public redirectUrl!: string;

  deserialize(input: any) {
    this.web_image = input.web_image;
    this.mobile_image = input.mob_image;
    this.sort_order = input.sequence_no;
    this.alt = input.title;
    this.link = input.link;
    this.redirectUrl = input.redirect_url;

    return this;
  }

  get webImage() {
    return this.web_image;
  }

  get mobileImage() {
    return this.mobile_image;
  }
}
