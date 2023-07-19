import React, { useState } from "react";
import 'firebase/compat/database'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const AddProduct = () => {
  const [productData, setProductData] = useState({
    img: "",
    price: "",
    qty: "",
    title: ""
  });

  let name, value;
  const postProductData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setProductData({ ...productData, [name]: value });
  };

  // connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { img, price, qty, title } = productData;

    if (img && price && qty && title) {
      const res = fetch(
        "http://cart-44475-default-rtdb.firebaseio.com/productDataRecords.json",
        {
          mode: 'no-cors',
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS'
          },
          body: JSON.stringify({
            img, price, qty, title
          }),
        }
      );
      

      if (res) {
        setProductData({
            img: "",
            price: "",
            qty: "",
            title: ""
        });
        console.log(res);
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
     <Form method="post">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Image
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Img URL" value={productData.img} onChange={postProductData} name="img"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Price
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" name="price" placeholder="Price" value={productData.price} onChange={postProductData} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Quantity
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="number" name="qty" placeholder="Quantity" value={productData.qty} onChange={postProductData} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Title
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Name of the Product" value={productData.title} onChange={postProductData} name="title"/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit" onClick={submitData}>Submit</Button>
        </Col>
      </Form.Group>
    </Form>
    </>
  );
};

export default AddProduct;