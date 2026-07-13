export class CareCategories {
  public id!: number;
  public metaTitle!: string;
  public metaDescription!: string;
  public title!: string;
  public description!: string;
  public displayImage!: string;
  public bgImage!: string;
  public images!: any[];
  public content!: string;
  public url_desc!: string;

  deserializer(input: any) {
    this.id = input.id;
    this.metaTitle = input.meta_title;
    this.metaDescription = input.meta_description;
    this.title = input.title;
    this.description = input.description;
    this.displayImage = input.display_image;
    this.bgImage = input.bg_image;
    this.images = input.images;
    this.content = input.content;
    this.url_desc = input.url_desc;

    return this;
  }
}
