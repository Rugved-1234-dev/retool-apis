export interface Contact {
  id: number;
  full_name?: string;
  email?: string;
  phone?: string;
  mobile_phone?: string;
  business_phone?: string;
  title?: string;
  mailing_street?: string;
  mailing_city?: string;
  mailing_state?: string;
  mailing_zip?: string;
  mailing_country?: string;
  mailing_geocode_accuracy?:
    | "Address"
    | "Near Address"
    | "Block"
    | "ExtendedZip"
    | "Zip"
    | "Neighbourhood"
    | "City"
    | "County"
    | "State"
    | "Unknown";

  account_id?: number;
  account_relation_sync_status?:
    | "Succesfully Synced"
    | "Waiting For Next Sync"
    | "Waiting For Update";
  department?: string;
  rank?: string;

  active_campaign_id?: string;
  active_campaign_tags?:
    | "Buyer"
    | "Commercial"
    | "Construction"
    | "General Brokerage"
    | "Residential"
    | "Investment/Asset Management"
    | "Just Closed"
    | "Land"
    | "Landlord"
    | "New Potential Client"
    | "Past Client"
    | "Past renter"
    | "Seller"
    | "Exclude";
  ranking?: "A" | "B" | "C";
  agent_id?: string;
  name?: string;
  created_on?: string;
  last_updated?: string;
}
