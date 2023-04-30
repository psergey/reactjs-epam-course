const SORT_BY = ['title', 'releaseDate'] as const;

export type PageResponse<T> = {
  data: T[];
  limit: number;
  offset: number;
  totalAmount: number;
};

export type SortOrder = 'asc' | 'desc';
export type SearchBy = 'title' | 'genres';
export type SortBy = (typeof SORT_BY)[number];

export const isSortBy = (value: string): value is SortBy => SORT_BY.includes(value as SortBy);
