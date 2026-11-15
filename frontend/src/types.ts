export interface MenuItem {
  name: string;
  description: string;
  price: number;
  imageUrl?: string | null;
}

export interface ReservationRequest {
  name: string;
  email: string;
  phone: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  guests: number;
}
