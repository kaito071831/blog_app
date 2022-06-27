export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body?: string | null;
  image?: string | null;
}

export type Context = {
  params: {
    id: string;
  }
}
