import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useRequest from '../hooks/useRequest';
import { getMovies } from '../services/getMovies';

import Loading from '../components/Loading';
import Error from '../components/Error';
import Movie from '../components/Movie';

function Movies() {
  const { showData, data, loading, error } = useRequest(getMovies);
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get('genres');

  useEffect(() => {
    showData();
  }, []);

  if (error) return <Error />;
  if (loading) return <Loading />;

  const filteredMovies = data?.filter((movie) => {
    if (!selectedGenre) return true;
    return movie.genre?.some(
      (genre) => genre === selectedGenre
    );
  }) || [];

  return (
    <div className='container mx-auto p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6'>
      {filteredMovies.map((movie) => (
        <Movie key={movie?.id} movie={movie} />
      ))}
    </div>
  );
}

export default Movies;