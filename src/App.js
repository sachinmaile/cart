import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarMenu from './Navbar';
import Cart from './Cart';
import {firebaseApp, db,auth, cartDB} from './Firebase'
import AllProducts from './AllProducts';
import AddProduct from './AddProduct';

class App extends React.Component {
  constructor(){
    super();
    this.state={products:[],loading:true};
  }

  componentDidMount(){
    cartDB.on('value',
      (snapshot)=>{
        console.log(snapshot);
        let products=snapshot.val();
        let newState=[];
        for(let key in products){
          newState.push({
            id:key,
            img:products[key].img,
            price:products[key].price,
            qty:products[key].qty,
            title:products[key].title
          });
        }
        
        // snapshot.docs.map((doc)=>{console.log(doc.data())});
        // const products=snapshot.docs.map((doc)=>{
        //   const data=doc.data();
        //   data['id']=doc.id;
        //   return data;
        // });
        this.setState({products:newState,loading:false});
      }
    );
  }

  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      const docRef=cartDB.child(products[index].id);
      docRef.update({qty:parseInt(products[index].qty)+1})
      .then(()=>{console.log('Quantity Increased Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  handleDecreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty===0){return;}
      const docRef=cartDB.child(products[index].id);
      docRef.update({qty:parseInt(products[index].qty)-1})
      .then(()=>{console.log('Quantity Decreased Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const docRef=cartDB.child(id);
      docRef.remove()
      .then(()=>{console.log('Product Deleted Successfully')})
      .catch((error)=>{console.log('Error:',error)});
  }

  getCartCount=()=>{
    const {products}=this.state;
    let count=0;
    products.forEach((product)=>{
      count+=parseInt(product.qty);
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
        <BrowserRouter>
          <NavbarMenu count={this.getCartCount()}/>
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
            <Route exact path='/AddProduct' element={<AddProduct/>}> 
            </Route>
          </Routes>          
        </BrowserRouter>
        {loading && <h1>Loading products ...</h1>}
      </div>
    );
  }
  
}

export default App;
