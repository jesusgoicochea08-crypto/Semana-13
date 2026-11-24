import { useEffect, useState } from 'react'
import { obtenerProductos } from '../services/ProductoServices.js'
import CardProducto from './CardProducto.jsx'

export default function CatalogoProductos() {
    const [productos, setProductos] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        async function listar() {
            try {
                const resultado = await obtenerProductos();
                setProductos(resultado.data);
            } catch (errorListado) {
                setError(errorListado.message);
            }
        }

        listar();
    }, []);

    if (error) {
        return <p role="alert">No se pudieron cargar los productos: {error}</p>;
    }

    return (
        <section className="catalogo-productos" aria-label="Catálogo de productos">
            {productos.map(producto => (
                    <CardProducto
                        key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        category={producto.category}
                        price={producto.price}
                        rating={producto.rating}
                        stock={producto.stock}
                        brand={producto.brand}
                        thumbnail={producto.thumbnail}
                        reviews={producto.reviews}
                    />
                ))}
        </section>
    );
}