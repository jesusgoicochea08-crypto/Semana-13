export default function ReviewsProducto({ reviews }) {
    if (!reviews?.length) {
        return null;
    }

    return (
        <ul className="reviews-producto" aria-label="Reseñas del producto">
            {reviews.map((review, index) => (
                <li className="reviews-producto__item" key={`${review.email}-${index}`}>
                    <p className="reviews-producto__email">{review.email}</p>
                    <p className="reviews-producto__comentario">{review.comment}</p>
                </li>
            ))}
        </ul>
    );
}
