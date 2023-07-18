import React from "react";
import { Link } from "react-router-dom";
const Navbar = (props)=>{
    return  (
        <div style={styles.nav}>
            <h1>eCommerce</h1>
            <Link to='/AllProducts' style={{fontSize:20}}>Products</Link>
            <Link to='/AddProduct' style={{fontSize:20}}>Add Product</Link>
            <div style={styles.cartIconContainer}>
                <Link to='/cart'><img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/128/3144/3144456.png'></img></Link>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}
const styles= {
    cartIcon:{
        height:32,
        marginRight:20
    },
    nav:{
        height:70,
        background:'#4267b2',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
    cartIconContainer:{
        position:'relative'
    },
    cartCount:{
        background:'yellow',
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:0,
        top:-9
    }
}

export default Navbar; 