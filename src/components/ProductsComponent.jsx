import { useSelector } from "react-redux";

const ProductsComponent = () => {

    const products = useSelector((state) => state.allProducts.products)

    const renderedListOfProducts = products.map((product) =>{
        return (
            <div className="col-6 col-md-4" key={product.id}>
                <div className="card" styles="width: 18rem;">
                    <div className="card-body">
                        <h5 className="card-title">Nombre: {product.nombreProducto}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Precio: ${product.precio}</h6>
                        <p className="card-text">Cantidad disponible: {product.cantidad}</p>
                        <button type="button" className="btn btn-info">Editar</button>
                        <button type="button" className="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            </div>
        )
    })

    return ( 
        <div>
            <div>
                {
                    Object.keys(products).length === 0 ? (
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <div>
                            {renderedListOfProducts}
                        </div>
                    )
                }
            </div>
        </div>
    );
}
 
export default ProductsComponent;