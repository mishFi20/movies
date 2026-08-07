import { NavLink, useSearchParams } from 'react-router-dom';

function Header() {
  const [searchParams] = useSearchParams();
  const currentGenre = searchParams.get('genres');

  const genres = [
    'Fantasy',
    'Adventure',
    'Drama',
    'Crime',
    'Family',
    'Sci-Fi',
    'Action',
    'Animation',
    'History',
    'Comedy'
  ];

  return (
    <nav className="bg-sky-950 text-white p-4 text-center font-bold flex gap-4 justify-evenly">
      <NavLink 
        className={!currentGenre ? 'text-yellow-500' : 'text-white'
        }
        to="/">
        All
      </NavLink>
      {genres.map((genre) => (
        <NavLink
          className={currentGenre === genre ? 'text-yellow-500' : 'text-white'
          }
          key={genre}
          to={`/?genres=${genre}`}
        >
          {genre}
        </NavLink>
      ))}
    </nav>
  );
}

export default Header;