import React from "react";
import CartItem from "./CartItem";

const Cart = (props)=>{
    const {products,total}=props;
    return(
        <div className="cart">
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
        </div>
    )
}

export default Cart;