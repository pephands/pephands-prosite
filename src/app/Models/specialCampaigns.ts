export class SpecialCampaigns {
  public id!: number;
  public title!: string;
  public meta_title!: string;
  public meta_description!: string;
  public amount!: number;
  public images!: string[];
  public displayImage!: string;
  public description!: string;
  public content!: string;
  public urlDesc!: string;
  public minCount!: number;
  public fieldName!: string;
  // public campaign_images!: string;

  deserializer(input: any) {
    this.id = input.id;
    this.title = input.campaign_title;
    this.meta_title = input.meta_title;
    this.meta_description = input.meta_description;
    this.amount = input.campaign_amount;
    this.images = input.campaign_images;
    this.displayImage = input.campaign_display_image;
    this.description = input.campaign_description;
    this.content = input.campaign_content;
    // this.campaign_images = input.campaign_images;
    this.urlDesc = input.url_desc;
    this.minCount = input.minimum_count;
    this.fieldName = input.field_name;

    return this;
  }
}
