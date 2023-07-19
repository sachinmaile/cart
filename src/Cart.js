import React from "react";
import CartItem from "./CartItem";
import CardGroup from 'react-bootstrap/CardGroup';

const Cart = (props)=>{
    const {products,total}=props;
    return(
        <CardGroup>
            {
                products.map((product)=>{
                    return (
                        <CartItem 
                            product={product}
                            key={product.id}
                            onIncreaseQuantity={props.onIncreaseQuantity}
                            onDecreaseQuantity={props.onDecreaseQuantity}
                            onDeleteProduct={props.onDeleteProduct}
                        />
                    );
                })
            }
            <div style={{padding:10,fontSize:20}}>TOTAL:{total}</div>
        </CardGroup>
    )
}

export default Cart;