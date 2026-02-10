export interface Query {
  type?: string;
  page: number;
  limit: number;
}

export interface SearchQuery {
  s: string;
}
