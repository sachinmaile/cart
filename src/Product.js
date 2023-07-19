import React from "react";

const Product = (props)=> {
     
    const {price,title}=props.product;
    const {product,onDeleteProduct}=props;
    return (
        <div className="cart-item" style={styles.cartItem}>
            <div className="left-block">
                <img style={styles.image} src={product.img} alt="Product"></img>
            </div>
            <div className="right-block">
                <div style={{fontSize:25}}>{title}</div>
                <div style={{color:'#777'}}>Rs. {price}</div>
            </div>
            <div>
                <img alt="delete" className="action-icons" src="https://cdn-icons-png.flaticon.com/128/3096/3096687.png" onClick={()=>onDeleteProduct(product.id)}></img>
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