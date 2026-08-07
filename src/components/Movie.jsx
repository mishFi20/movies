function Movie ({ movie }) {
  return (
    <div className="rounded-lg shadow-md relative h-96 overflow-hidden">
        <img 
          src={movie?.image_url} 
          alt={movie?.title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-xl"><strong>{movie?.title}</strong></p>
          <p className="line-clamp-2" title={movie?.description}>
            {movie?.description}
          </p>
        </div>
    </div>
  );
}

export default Movie;