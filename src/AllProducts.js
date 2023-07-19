import React from 'react';
import Button from 'react-bootstrap/Button';
import Product from './Product';

const AllProducts = (props)=>{
  const {products}=props;
  return (
    <>
    <div style={{display:'flex', justifyContent:'flex-end', marginTop:5}}>
      <Button variant="warning" onClick={props.sortProducts}>Sort by Price</Button>
    </div>
    
    <div className="cart">
      
      {
          products.map((product)=>{
              return (
                  <Product 
                      product={product}
                      onDeleteProduct={props.onDeleteProduct}
                      key={product.id}
                  />
              );
          })
      }
    </div>
    </>
  );
}

export default AllProducts;