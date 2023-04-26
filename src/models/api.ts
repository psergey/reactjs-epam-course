export type PageResponse<T> = {
  data: T[];
  limit: number;
  offset: number;
  totalAmount: number;
};

export type SortOrder = 'asc' | 'desc';
export type SearchBy = 'title' | 'genres';
export type SortBy = 'title' | 'releaseDate';
