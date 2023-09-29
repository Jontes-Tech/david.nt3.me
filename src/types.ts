export interface Project {
  name: string;
  description: string;
  url: string;
}
export interface OdyseeResponse {
  result: {
    items: ItemsEntity[];
  };
}
export interface Blocked {
  channels?: null[] | null;
  total: number;
}
export interface ItemsEntity {
  address: string;
  amount: string;
  canonical_url: string;
  claim_id: string;
  claim_op: string;
  confirmations: number;
  height: number;
  is_channel_signature_valid: boolean;
  meta: Meta;
  name: string;
  normalized_name: string;
  nout: number;
  permanent_url: string;
  short_url: string;
  signing_channel: SigningChannel;
  timestamp: number;
  txid: string;
  type: string;
  value: Value;
  value_type: string;
}
export interface Meta {
  activation_height: number;
  creation_height: number;
  creation_timestamp: number;
  effective_amount: string;
  expiration_height: number;
  is_controlling: boolean;
  reposted: number;
  support_amount: string;
  take_over_height: number;
}
export interface SigningChannel {
  address: string;
  amount: string;
  canonical_url: string;
  claim_id: string;
  claim_op: string;
  confirmations: number;
  has_signing_key: boolean;
  height: number;
  meta: Meta1;
  name: string;
  normalized_name: string;
  nout: number;
  permanent_url: string;
  short_url: string;
  timestamp: number;
  txid: string;
  type: string;
  value: Value1;
  value_type: string;
}
export interface Meta1 {
  activation_height: number;
  claims_in_channel: number;
  creation_height: number;
  creation_timestamp: number;
  effective_amount: string;
  expiration_height: number;
  is_controlling: boolean;
  reposted: number;
  support_amount: string;
  take_over_height: number;
}
export interface Value1 {
  description: string;
  languages?: string[] | null;
  public_key: string;
  public_key_id: string;
  tags?: string[] | null;
  thumbnail: Thumbnail;
  title: string;
  website_url: string;
}
export interface Thumbnail {
  url: string;
}
export interface Value {
  description: string;
  languages?: string[] | null;
  license: string;
  license_url?: string | null;
  release_time: string;
  source: Source;
  stream_type: string;
  thumbnail: Thumbnail;
  title: string;
  video: Video;
  tags?: string[] | null;
}
export interface Source {
  hash: string;
  media_type: string;
  name: string;
  sd_hash: string;
  size: string;
}
export interface Video {
  duration: number;
  height: number;
  width: number;
}
