export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  author: string;
  keywords?: string[];
  image?: string;
  body: string;
}
