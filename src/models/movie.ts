export type Movie = {
  id: number;
  title: string;
  posterUrl: string;
  releaseDate?: Date;
  rating?: number;
  duration: number;
  description: string;
  genres: string[];
};
