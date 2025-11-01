export interface Course {
  id: string;
  title: string;
  avatar?: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  students?: number;
  hours?: number;
  topics?: number;
  lessons?: number;
  exercises?: number;
  duration?: string;
  tag?: string;
  description?: string[];
}
