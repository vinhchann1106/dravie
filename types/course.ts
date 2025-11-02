export interface Course {
  id: string;
  title: string;
  avatar?: string;
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  students?: number | string;
  hours?: number | string;
  topics?: number | string;
  lessons?: number | string;
  exercises?: number | string;
  duration?: string;
  tag?: string;
  description?: string[];
}
