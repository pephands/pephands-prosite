export class FundRaiser {
  public id!: number;
  public images!: string[];
  public title!: string;
  public status!: number;
  public documents: string[] = [];
  public categoryId!: number;
  private remaining_days!: number;
  private initiate_date!: Date;
  private end_date!: Date;
  private is_tax_benefited: boolean = false;
  private display_image!: string;
  private short_description!: string;
  private goal_amount!: number;
  private amount_collected!: number;
  private created_by!: string;
  private unique_code!: string;
  public story!: string;
  public beneficiary_name!: string;
  public age!: number;
  private hospital_name!: string;
  public city!: string;
  public donation_count!: number;
  private created_at!: Date;
  private updated_at!: Date;
  public url_desc!: string;
  public is_ngo: boolean = false;

  deserializer(input: any) {
    this.remaining_days = input.remaining_days;
    this.initiate_date = new Date(input.created_at);
    this.end_date = new Date(input.end_date);
    this.is_tax_benefited = input.is_tax_benefit;
    this.display_image = input.display_image;
    this.images = input.images;
    this.title = input.title;
    this.short_description = input.short_description;
    this.goal_amount = input.funds_required;
    this.amount_collected = input.amount_collected;
    this.id = input.id;
    this.unique_code = input.unique_code;
    this.story = input.story;
    this.beneficiary_name = input.beneficiary_name;
    this.age = input.age;
    this.hospital_name = input.hospital_name;
    this.created_at = new Date(input.created_at);
    this.updated_at = new Date(input.updated_at);
    this.id = input.id;
    this.city = input.city;
    this.url_desc = input.url_desc;
    this.documents = input.documents;
    this.is_ngo = input.is_ngo;
    this.created_by = input.created_by;
    this.categoryId = input.pep_category;
    this.donation_count = input.donation_count;
    this.status = input.status;

    return this;
  }

  get remainingDays() {
    const date1 = new Date();
    const date2 = this.end_date;

    // Calculate the difference in milliseconds
    const diffInMs = date2.getTime() - date1.getTime();

    // Convert milliseconds to days
    let diffInDays = diffInMs / (1000 * 60 * 60 * 24);

    // Check if the difference is negative
    diffInDays = diffInDays < 0 ? 0 : diffInDays;

    return Math.round(diffInDays);
  }

  get isTaxBenefited(): boolean {
    return this.is_ngo;
  }

  get isEmeregency(): boolean {
    return +this.remainingDays <= 15 && this.status == 6;
  }

  get displayImage(): string {
    return this.display_image;
  }

  get shortDescription(): string {
    return this.short_description;
  }

  get amountRequired(): number {
    return this.goal_amount - this.amount_collected;
  }

  set setAmountCollected(value: number) {
    this.amount_collected = value;
  }

  get amountCollected(): number {
    return this.amount_collected;
  }

  get percentCollected(): number {
    let percent = (this.amountCollected / this.goal_amount) * 100;
    return percent ? percent : 0;
  }

  get createdBy(): string {
    return this.created_by;
  }

  get uniqueCode(): string {
    return this.unique_code;
  }

  get is80g(): boolean {
    return this.is_ngo;
  }

  get goalAmount(): number {
    return this.goal_amount;
  }

  get isCompleted(): boolean {
    return this.status == 5;
  }
}
