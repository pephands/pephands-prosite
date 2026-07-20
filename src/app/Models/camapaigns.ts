export class CauseCategory {
  public id!: number;
  public title!: string;
  public slug!: string;
  public description!: string;
  public icon!: string;
  public image?: string;
  public isActive!: boolean;

  deserializer(input: any) {
    this.id = input.id;
    this.title = input.category_title;
    this.slug = input.category_slug;
    this.description = input.category_description;
    this.icon = input.category_icon;
    this.image = input.category_image;
    this.isActive = input.is_active;
    return this;
  }
}

export class Campaign {
  public id!: number;
  public categoryId!: number;
  public categoryIds?: number[];
  public image!: string;
  public title!: string;
  public slug!: string;
  public description!: string;
  public story!: string;
  public amountCollected!: number;
  public goalAmount!: number;
  public remainingDays!: number;
  public donationCount!: number;
  public percentageRaised!: number;
  public status!: string;
  public isTaxBenefited!: boolean;
  public isEmergency!: boolean;
  public order!: number;

  deserializer(input: any) {
    this.id = input.id;
    this.categoryId = input.category_id;
    this.categoryIds = input.category_ids;
    this.image = input.image;
    this.title = input.title;
    this.slug = input.slug;
    this.description = input.description;
    this.story = input.story;
    this.amountCollected = input.amount_collected;
    this.goalAmount = input.goal_amount;
    this.remainingDays = input.remaining_days;
    this.donationCount = input.donation_count;
    this.percentageRaised = input.percentage_raised;
    this.status = input.status;
    this.isTaxBenefited = input.is_tax_benefited;
    this.isEmergency = input.is_emergency;
    this.order = input.order;
    return this;
  }
}
