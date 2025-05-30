export interface PaystackConfig {
  email: string;
  amount: number;
  currency: string;
  publicKey: string;
  secretKey?: string;
  reference: string;
  metadata?: {
    custom_fields: Array<{
      display_name: string;
      variable_name: string;
      value: string;
    }>;
  };
}
