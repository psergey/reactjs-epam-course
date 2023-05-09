import { ParsedUrlQueryInput } from 'querystring';
import MovieInformation from '../components/root/MovieInformation';
import { Movie } from '../models/movie';
import { FC, useEffect } from 'react';
import { getMovie } from '../services/movieService';

type PostProps = {
  movie: Movie;
};

const MovieDetails: FC<PostProps> = ({ movie }) => {
  // useEffect(() => {

  //   const fetchData = async () => {
  //     const data = await getMovie(params.movieId + '');
  //   }

  // }, []);

  return (
    <>
      <MovieInformation {...movie}></MovieInformation>
    </>
  );
};

export default MovieDetails;

type staticProps = {
  params: ParsedUrlQueryInput;
};

export const getServerSideProps = async (props: staticProps) => {
  const { params } = props;
  const data = await getMovie(params.movieId + '');
  return {
    props: {
      movie: data
    }
  };
  // try {
  //   //console.log(props);

  //   const data = await getMovie(params.movieId + '');
  //   return {
  //     props: {
  //       movie: data
  //     }
  //   };
  // } catch (err) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       statusCode: 307
  //     }
  //   };
  // }
};
