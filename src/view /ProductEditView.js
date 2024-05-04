import {useEffect, useState} from "react";
import { Spinner, Toast, ToastContainer} from "react-bootstrap";
import {useParams} from "react-router-dom";
import ProductForm from "../component/ProductForm/ProductForm";
import {getProductById, updateProduct} from "../client/ProductApiClient";

function ProductEditView() {

    const [product, setProduct] = useState({});
    const [showToast, setShowToast] = useState(false);
    const {productId} = useParams();

    const getProduct = async () => {
        setProduct(await getProductById(productId));
    }

    useEffect(() => {
        console.log("Product id")
        console.log(productId)
        setProduct(getProduct());
    }, [])

    const handelProductUpdate = async (product) => {
        console.log('call the api');
        const updated = (await updateProduct(product)).data
        console.log(updated);
        setShowToast(true);
    }


    return (
        <div className="text-center">
            <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                <Toast bg={"success"}
                       onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>Product was created successfully</Toast.Body>
                </Toast>
            </ToastContainer>

            {product.name ?
                (<ProductForm handleProductUpdate={(values) => handelProductUpdate(values)} product={product}/>)
                : (<Spinner animation="border" />)}
        </div>

    );
}

export default ProductEditView;
