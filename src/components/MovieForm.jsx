import { useState } from 'react';

export default function MovieForm({ onAddMovie }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(5);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAddMovie({
      id: Date.now(),
      title: title.trim(),
      rating: Number(rating),
      review: review.trim()
    });

    setTitle('');
    setRating(5);
    setReview('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.formGroup}>
        <label>Movie Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="e.g. The Dark Knight"
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Rating (1-5):</label>
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          style={styles.input}
        >
          <option value={1}>1 ⭐</option>
          <option value={2}>2 ⭐⭐</option>
          <option value={3}>3 ⭐⭐⭐</option>
          <option value={4}>4 ⭐⭐⭐⭐</option>
          <option value={5}>5 ⭐⭐⭐⭐⭐</option>
        </select>
      </div>

      <div style={styles.formGroup}>
        <label>Comment / Review:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          placeholder="Write your thoughts..."
          style={{ ...styles.input, height: '60px' }}
        />
      </div>

      <button type="submit" style={styles.addBtn}>
        Add Movie
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    paddingBottom: '20px',
    borderBottom: '1px solid #eee'
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '14px'
  },
  addBtn: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold'
  }
};