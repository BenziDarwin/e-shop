import React from 'react';
import {Formik,ErrorMessage,Field, Form} from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FormLabel, Row, Col } from 'react-bootstrap';
import Uploader from './uploader';
import {useSelector} from 'react-redux'

function Additem() {
    const profileImage = useSelector((state) => state.image.image)

    const submitHandler = (data) => {
        data.image = profileImage
        axios.post("https://localhost:5000/items/newitem",{})
        .then(item => console.log(item))
        .catch(err => console.log(err))
    };

    const initialValues = {
        name:"",
        price:null,
        description:"",
        category:"",
        image:null,
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().required(),
        price:Yup.number().required(),
        description: Yup.string().required(),
        category: Yup.string().required(),
    })
    return (
        <div>
            <Row>
                <Col sm={false} lg={true}>
                    <Uploader/>
                </Col>
                <Col sm={false} lg={true}>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submitHandler}>
                <Form>
                    <div className="newitem w-50 me-auto">
                        <FormLabel>ItemName</FormLabel>
                        <Field name="name" className="form-control" placeholder="Which item is needed"/>
                        <ErrorMessage name="name" component="small"/>
                        <FormLabel>Price</FormLabel>
                        <Field name="price" className="form-control" placeholder="Price for the item"/>
                        <ErrorMessage name="price" component="small"/>
                        <FormLabel>Description</FormLabel>
                        <Field name="description" className="form-control" placeholder="What does this item do"/>
                        <ErrorMessage name="description" component="small"/>
                        <FormLabel>Category</FormLabel>
                        <Field name="category" className="form-control" placeholder="Which category does it fall.."/>
                        <ErrorMessage name="category" component="small"/><br/>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </div>
                </Form>
            </Formik>

                </Col>
            </Row>
        </div>
    )
}

export default Additem
