export type LinkInformationType = {
  name: string;
  url: string;
  sameTab?: boolean;
};

export interface Article {
  title: string;
  id?: number;
  slug: string;
  body_markdown?: string;
  body_html?: string;
  published_at: string;
  description?: string;
  cover_image: string;
  canonical_url: string;
  reading_time_minutes: number;
  page_views_count: number;
  positive_reactions_count: number;
}

export type ArticleInList = Article & { tag_list: string[] };
