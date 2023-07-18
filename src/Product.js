import React from "react";

const Product = (props)=> {
     
    const {price,title}=props.product;
    const {product}=props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src={product.img}></img>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs. {price}</div>
            </div>
        </div>
    );
    
}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
};
export default Product;