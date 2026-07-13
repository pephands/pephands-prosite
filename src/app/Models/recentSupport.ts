export class RecentSupport {
  public name!: string;
  public amount!: number;
  public date!: string;
  public avatar!: string;

  deserialize(input: any) {
    this.name = input.donor_name || 'Anonymous';
    this.amount = parseFloat(input.amount) || 0;
    
    const dateObj = new Date(input.donated_date);
    this.date = !isNaN(dateObj.getTime()) 
      ? dateObj.toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true }) 
      : input.donated_date;
      
    this.avatar = input.donor_name ? input.donor_name.substring(0, 2).toUpperCase() : 'AN';

    return this;
  }
}
