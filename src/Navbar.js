import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarMenu = (props)=>{
  return (
    <>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/AllProducts">eCommerce</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/AllProducts">Products</Nav.Link>
            <Nav.Link href="/AddProduct">Add Product</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <div style={styles.cartIconContainer}>
                <Link to='/cart'><img style={styles.cartIcon} src='https://cdn-icons-png.flaticon.com/128/3144/3144456.png'></img></Link>
                <span style={styles.cartCount}>{props.count}</span>
            </div>
           </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
const styles= {
    cartIcon:{
        height:32,
        marginRight:20
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
export default NavbarMenu; 