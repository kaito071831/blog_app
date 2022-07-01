export type Category = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  category: string;
}

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body?: string;
  image?:{
    url: string;
    height: number;
    width: number;
  };
  category?: Category[];
}

export type Context = {
  params: {
    id: string;
  }
}
