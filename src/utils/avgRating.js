const calculateAvgRating = (reviews) => {
  // Asegúrate de que 'reviews' siempre sea un array
  const safeReviews = Array.isArray(reviews) ? reviews : [];

  // Suma las calificaciones
  const totalRating = safeReviews.reduce((acc, item) => acc + (item.rating || 0), 0);

  // Calcula el promedio de calificaciones
  const avgRating = safeReviews.length === 0 
    ? "N/A" // Si no hay reseñas, devuelve "N/A" o cualquier valor predeterminado
    : (totalRating / safeReviews.length).toFixed(1);

  return {
    totalRating,
    avgRating,
  };
};

export default calculateAvgRating;
