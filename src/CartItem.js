import React from "react";

class CartItem extends React.Component {
    constructor(){
        super();
        this.state={
            price:999,title:'Mobile Phone',qty:1,img:''
        }
    };
    increaseQuantity = () =>{
        this.setState((prevState)=>{
            return {qty:prevState.qty+1}
        })
    };
    decreaseQuantity = () =>{
        const {qty}=this.state;
        if(qty===0) {return;}
        this.setState((prevState)=>{
            return {qty:prevState.qty-1}
        });
    };
    render(){
        const {price,title,qty}=this.props;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}></img>
                </div>
                <div className="right-block">
                    <div style={{fontSize:25}}>{title}</div>
                    <div style={{color:'#777'}}>Rs. {price}</div>
                    <div style={{color:'#777'}}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        <img alt='increase' className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992651.png" onClick={this.increaseQuantity}></img>
                        <img alt='decrease' className="action-icons" src="https://cdn-icons-png.flaticon.com/128/992/992683.png" onClick={this.decreaseQuantity}></img>
                        <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png"></img>
                    </div>
                </div>
            </div>
        )
    }
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
};
export default CartItem;