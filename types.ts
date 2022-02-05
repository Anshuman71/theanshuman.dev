export type LinkInformationType = {
  name: string;
  url: string;
  sameTab?: boolean;
};

export interface Blog {
  title: string;
  id: number;
  slug: string;
}
