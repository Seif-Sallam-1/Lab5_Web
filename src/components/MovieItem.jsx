import StarRating from './StarRating';

export default function MovieItem({ movie, onDelete }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <h3 style={{ margin: 0 }}>{movie.title}</h3>
        <button onClick={() => onDelete(movie.id)} style={styles.deleteBtn}>
          Remove
        </button>
      </div>

      <p style={{ margin: '8px 0' }}>
        <strong>Rating:</strong> <StarRating rating={movie.rating} /> ({movie.rating}/5)
      </p>

      {movie.review && (
        <p style={{ margin: '4px 0', color: '#555' }}>
          <strong>Review:</strong> "{movie.review}"
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#f9f9f9',
    padding: '12px',
    borderRadius: '6px',
    marginBottom: '10px',
    border: '1px solid #e0e0e0'
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  deleteBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 10px',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};