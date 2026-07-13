export class DonationRequest {
  public amount!: number;
  public campaign_id!: string | number;
  public donor_name!: string;
  public donor_email?: string;
  public donor_phone!: string;
  public success_url!: string;
  public failed_url!: string;
}
