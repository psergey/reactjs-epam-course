export type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate?: string;
  rating?: number;
  duration: number;
  description: string;
  genres: string[];
};
