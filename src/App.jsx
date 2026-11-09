import { useState } from 'react';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';

export default function App() {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Inception', rating: 5, review: 'Mind-bending masterpiece!' },
    { id: 2, title: 'Interstellar', rating: 4, review: 'Great visuals and soundtrack.' }
  ]);

  const handleAddMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>🎬 Movies Watchlist</h2>
      <MovieForm onAddMovie={handleAddMovie} />
      <MovieList movies={movies} onDelete={handleDeleteMovie} />
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '30px auto',
    padding: '20px',
    fontFamily: 'sans-serif',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
  }
};