export interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  tags?: string[];
}
