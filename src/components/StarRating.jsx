export default function StarRating({ rating }) {
  const stars = '⭐'.repeat(rating);
  return <span>{stars}</span>;
}