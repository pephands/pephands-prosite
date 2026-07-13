export class SDGGoals {
  public id!: number;
  public name!: string;
  public number!: number;
  public bgImageWeb!: string;
  public bgImageMob!: string;
  public displayImage!: string;
  public bgColor!: string;
  public font_color!: string;
  public images!: string[];
  public description!: string;
  public content!: string;
  public urlDesc!: string;

  deserializer(input: any) {
    this.id = input.id;
    this.name = input.goal_name;
    this.number = input.goal_number;
    this.bgImageWeb = input.goal_bg_image_web;
    this.bgImageMob = input.goal_bg_image_mob;
    this.displayImage = input.goal_display_image;
    this.bgColor = input.goal_bg_color;
    this.font_color = input.goal_font_color;
    this.description = input.goal_description;
    this.content = input.goal_content;
    this.urlDesc = input.url_desc;

    return this;
  }
}
