import { useSearchParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMovies } from '../services/getMovies';


import Movie from '../components/Movie';

function Movies() {
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genres');

  const { data: movies = [] } = useQuery({
    queryKey: ['movies'],
    queryFn: getMovies,

    select: (Allmovies) => {
      if (!selectedGenre) return Allmovies;
      return Allmovies.filter((movie) =>
         movie.genre?.some((genre) => genre === selectedGenre)
      );
    }
  });
  
  return (
    <div className='container mx-auto p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 h-[90vh]'>
      {movies.map((movie) => (
        <Movie key={movie?.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;