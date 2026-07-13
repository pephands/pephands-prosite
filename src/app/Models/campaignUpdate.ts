export class CampaignUpdate {
  public title!: string;
  public date!: string;
  public content!: string;

  deserialize(input: any) {
    this.title = input.title || 'Campaign Update';
    this.date = input.created_at || input.date || input.donated_date;
    this.content = input.description || input.content;
    
    return this;
  }
}
