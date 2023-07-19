import React from "react";
import Card from 'react-bootstrap/Card';

const CartItem = (props)=> {
     
    const {price,title,qty}=props.product;
    const {product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct}=props;
    return (
      <Card>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div style={{color:'#777'}}>Rs. {price}</div>
            <div style={{color:'#777'}}>Qty: {qty}</div>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className="cart-item-actions">
                <img alt='increase' className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={()=>onIncreaseQuantity(product)}></img>
                <img alt='decrease' className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={()=>onDecreaseQuantity(product)}></img>
                <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" onClick={()=>onDeleteProduct(product.id)}></img>
            </div>
        </Card.Footer>
      </Card>
    );
}

export default CartItem;