import React from "react";
import CartItem from "./CartItem";

class Cart extends React.Component{
    render(){
        return(
            <div className="cart">
                <CartItem qty={1} price={99} title={"Watch"} img={''}/>
                <CartItem qty={4} price={999} title={"Mobile"} img={''}/>
                <CartItem qty={5} price={1780} title={"Laptop"} img={''}/>
            </div>
        )
    }
}

export default Cart;