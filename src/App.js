import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Cart from './Cart';
import {db,auth} from './Firebase'
import AllProducts from './AllProducts';

class App extends React.Component {
  constructor(){
    super();
    this.state={products:[],loading:true};
  }

  componentDidMount(){
    db.collection('products').onSnapshot(
      (snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{console.log(doc.data())});
        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        });
        this.setState({products:products,loading:false});
      }
    );
  }

  addProduct=()=>{
    db.collection('products')
    .add({img:'',price:900,qty:3,title:'Washing Machine'})
    .then((docRef)=>{console.log('Product has been added',docRef)})
    .catch((error)=>{console.log('Error:',error);})
  }

  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      const docRef=db.collection('products').doc(products[index].id);
      docRef.update({qty:products[index].qty+1})
      .then(()=>{console.log('Quantity Increased Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  handleDecreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty===0){return;}
      const docRef=db.collection('products').doc(products[index].id);
      docRef.update({qty:products[index].qty-1})
      .then(()=>{console.log('Quantity Decreased Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const docRef=db.collection('products').doc(id);
      docRef.delete()
      .then(()=>{console.log('Product Deleted Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=product.qty;
    });
    return count;
  }

  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+(product.qty*product.price);
    });
    return cartTotal;
  }

  render() {
    const {products,loading}=this.state;
    return (
      <div className="App">
        
        {/* <button onClick={this.addProduct} style={{padding:20,fontSize:20}}>Add a Product</button> */}
        <BrowserRouter>
          <Navbar count={this.getCartCount()}/>
          <Routes>
            <Route exact path='/cart' element={<Cart
                  products={products}
                  onIncreaseQuantity={this.handleIncreaseQuantity}
                  onDecreaseQuantity={this.handleDecreaseQuantity}
                  onDeleteProduct={this.handleDeleteProduct}
                  total={this.getCartTotal()}
              />}>
            </Route>
            <Route exact path='/AllProducts' element={<AllProducts
                  products={products}
              />}> 
            </Route>
          </Routes>          
        </BrowserRouter>
        {loading && <h1>Loading products ...</h1>}
        {/* <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div> */}
      </div>
    );
  }
  
}

export default App;
