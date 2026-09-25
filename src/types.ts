export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  industry: string;
  selectedTier: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: {
    notificationEmailId?: string;
    confirmationEmailId?: string;
  };
}
