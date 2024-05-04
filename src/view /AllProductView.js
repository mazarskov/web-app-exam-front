import {useEffect, useState} from "react";
import {Card, Col, Container, Row, Spinner} from "react-bootstrap";
import ProductCard from "../component/ProductCard/ProductCard";
import {useNavigate} from "react-router-dom";
import {deleteProductById, getAllProducts} from "../client/ProductApiClient";

function AllProductView() {

    const [products, setProducts] = useState();

    const navigate = useNavigate();

    const handleProductEdit = (id) => {
        navigate(`/product/${id}/edit`);
    }

    const handleProductDelete = async (id) => {
        await deleteProductById(id)
        setProducts((prev) => {
            return  prev.filter(product => product.id !== id)
        })
    }

    const loadProducts = async () => {
        setProducts(await getAllProducts())
    }

    useEffect(() => {
        loadProducts()
    }, [])

    return (
        <Row className="justify-content-center">
            {products ?
                (<>{products.map(product => {
                    return (
                        <Col key={`product-card-${product.id}`} sm={12} md={4}
                             className="d-flex justify-content-center">
                            <div className="mt-4">
                                <ProductCard handleOnEdit={handleProductEdit} handleOnDelete={handleProductDelete}
                                             product={product}/>
                            </div>
                        </Col>
                    )
                })}
                </>)
                : (<Spinner animation="border"/>)}

        </Row>
    );
}

export default AllProductView;
