import MovieItem from './MovieItem';

export default function MovieList({ movies, onDelete }) {
  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Your Saved Movies ({movies.length})</h3>
      {movies.length === 0 ? (
        <p style={{ color: '#888' }}>No movies added yet.</p>
      ) : (
        movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}