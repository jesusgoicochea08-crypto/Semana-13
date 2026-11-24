import ReviewsProducto from './ReviewsProducto.jsx'

export default function CardProducto({
    id,
    name,
    category,
    price,
    rating,
    stock,
    brand,
    thumbnail,
    reviews,
}) {
    return (
        <article className="card-producto" data-product-id={id}>
            <img
                className="card-producto__imagen"
                src={thumbnail}
                alt={name}
            />
            <div className="card-producto__contenido">
                <span className="card-producto__categoria">{category}</span>
                <h2>{name}</h2>
                <p className="card-producto__precio">Precio: ${price}</p>
                <div className="card-producto__detalles">
                    {brand && <span>{brand}</span>}
                    <span>★ {rating}</span>
                    <span>{stock} disponibles</span>
                </div>
            </div>
            <ReviewsProducto reviews={reviews} />
        </article>
    );
}
