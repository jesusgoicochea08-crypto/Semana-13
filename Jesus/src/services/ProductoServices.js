const URL_API = "https://dummyjson.com/products";

export async function obtenerProductos() {
    const response = await fetch(URL_API);
    if (!response.ok) {
        throw new Error("Error al obtener los productos");
    }

    const resultado = await response.json();
    if (!Array.isArray(resultado.products)) {
        throw new Error("La respuesta de productos no tiene el formato esperado");
    }

    return {
        data: resultado.products.map((producto) => ({
            id: producto.id,
            name: producto.title,
            category: producto.category,
            price: producto.price,
            rating: producto.rating,
            stock: producto.stock,
            brand: producto.brand,
            thumbnail: producto.thumbnail,
            reviews: producto.reviews.map((review) => ({
                email: review.reviewerEmail,
                comment: review.comment,
            })),
        })),
    };
}