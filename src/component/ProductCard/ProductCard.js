import {Button, Card} from "react-bootstrap";

function ProductCard({product, handleOnEdit, handleOnDelete}) {

    return (
        <Card style={{width: '15rem'}}>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{product.description}</Card.Subtitle>
                <Card.Text>
                    Price: {product.price} $
                </Card.Text>
                <div className="d-flex justify-content-between">
                    <Button onClick={() => handleOnEdit(product.id)} >Edit</Button>
                    <Button variant="danger" onClick={() => handleOnDelete(product.id)} >Delete</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;
