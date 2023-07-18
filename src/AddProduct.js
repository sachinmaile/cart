import React, { useState } from "react";
import 'firebase/compat/database'

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
        <div className="contact-rightside col-12 col-lg-7">
            <form method="POST">
            <div className="row">
                <div className="col-12 col-lg-6 contact-input-feild">
                <input
                    type="text"
                    name="img"
                    id=""
                    className="form-control"
                    placeholder="Image"
                    value={productData.img}
                    onChange={postProductData}
                />
                </div>
                <div className="col-12 col-lg-6 contact-input-feild">
                <input
                    type="number"
                    name="price"
                    id=""
                    className="form-control"
                    placeholder="Price"
                    value={productData.price}
                    onChange={postProductData}
                />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-6 contact-input-feild">
                <input
                    type="number"
                    name="qty"
                    id=""
                    className="form-control"
                    placeholder="Quantity"
                    value={productData.qty}
                    onChange={postProductData}
                />
                </div>
                <div className="col-12 col-lg-6 contact-input-feild">
                <input
                    type="text"
                    name="title"
                    id=""
                    className="form-control"
                    placeholder="Name of the product"
                    value={productData.title}
                    onChange={postProductData}
                />
                </div>
            </div>
            
            <button
                type="submit"
                className="btn btn-style w-100"
                onClick={submitData}>
                Submit
            </button>
            </form>
        </div>
    </>
  );
};

export default AddProduct;