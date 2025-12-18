
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}

export interface QuoteRequest {
  name: string;
  phone: string;
  email: string;
  description: string;
  insuranceInfo?: string;
  preferredContact: 'call' | 'text' | 'email';
  photos: File[];
}
