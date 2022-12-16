export type Options= {
  endpoint?: string,
  apiKey: string,
  category?: string,
}

export interface Article {
  source: Source;
  author: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface getRespParam {
  endpoint: string;
  options: {};
}

export type Res = {
  ok: boolean;
  status: number;
  statusText: string;
}

export interface Source {
  id: string;
  name: string;
  }
  
  export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  }

// export interface NewsResponse {
//   status: string;
//   totalResults: number;
//   articles: Article[];
//   }
  
//   export interface SourcesResponse {
//   status: string;
//   sources: Source[];
//   }
  
//   export interface NewsParams {
//   source: string;
//   sortBy: string;
//   }