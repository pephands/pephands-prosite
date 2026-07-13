import { Advertisement } from './ads';

export class Blog {
  public id!: number;
  public title!: string;
  public date!: Date;
  public image!: string;
  public story!: string;
  public for_foundation!: boolean;
  public for_crowdfunding!: boolean;
  public url_desc!: string;
  public redirect_url!: string;
  public tags!: string[];
  public shorts_code!: string;
  public vertical_ad!: Advertisement;
  public meta_title!: string;
  public meta_description!: string;
  public seo_keywords!: string;
  public canonical_url!: string;
  public source!: string;
  public view_counts!: number;

  deserializer(input: any) {
    this.id = input.id;
    this.title = input.title;
    this.date = input.date;
    this.image = input.image;
    this.story = input.story;
    this.for_crowdfunding = input.for_crowdfunding;
    this.for_foundation = input.for_foundation;
    this.url_desc = input.url_desc;
    this.redirect_url = input.redirect_url;
    this.tags = input.tags;
    this.shorts_code = input.shots_code;
    this.vertical_ad = input.vertical_ad;
    this.meta_title = input.meta_title;
    this.meta_description = input.meta_description;
    this.seo_keywords = input.seo_keywords;
    this.canonical_url = input.canonical_url;
    this.source = input.source;
    this.view_counts = input.view_counts;

    return this;
  }
}
