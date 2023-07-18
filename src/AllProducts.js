import React from 'react';

import Product from './Product';

const AllProducts = (props)=>{
  const {products}=props;
  return (
    <div className="cart">
      {
          products.map((product)=>{
              return (
                  <Product 
                      product={product}
                      key={product.id}
                  />
              );
          })
      }
    </div>
  );
}

export default AllProducts;