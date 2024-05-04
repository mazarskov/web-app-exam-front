import {Field, Form, Formik} from "formik";
import * as Yup from 'yup';
import "./ProductForm.css"
import {Button, Col, Row} from "react-bootstrap";

function ProductForm({handleProductUpdate, product}) {


    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required product name'),
        description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required description name'),
        price: Yup.number()
            .min(0, "Cannot be negative")
            .required('Required'),
    });

    const handleSubmit = (values) => {
        handleProductUpdate({...product, ...values});
    }


    return (
        <div className="mt-4">
            <h1>Edit product</h1>
            <Formik
                initialValues={{
                    name: product.name,
                    description: product.description,
                    price: product.price,
                }}
                validationSchema={SignupSchema}
                onSubmit={handleSubmit}
            >
                {({errors, touched}) => (
                    <Form className={"form-group"}>
                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="Name" name="name"/>
                            {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                            ) : null}
                        </div>

                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="Description" name="description"/>
                            {errors.manufacturer && touched.manufacturer ? (
                                <div>{errors.manufacturer}</div>
                            ) : null}
                        </div>

                        <div className="input-wrapper">
                            <Field className="form-control" placeholder="100" name="price" type="number"/>
                            {errors.price && touched.price ? <div>{errors.price}</div> : null}
                        </div>
                        <Button type="submit">Submit</Button>

                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default ProductForm;
