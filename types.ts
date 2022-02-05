export type LinkInformationType = {
  name: string;
  url: string;
  sameTab?: boolean;
};

export interface Article {
  title: string;
  id: number;
  slug: string;
  body_markdown: string;
  published_at: string;
  description: string;
  cover_image: string;
  tags: string | string[];
  tag_list: string | string[];
  canonical_url: string[];
  reading_time_minutes: number;
}
