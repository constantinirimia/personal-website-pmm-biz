export interface FeaturedItem {
  type: "video" | "article" | "post";
  title: string;
  link: string;
  thumbnail: string;
  platform: string;
}
