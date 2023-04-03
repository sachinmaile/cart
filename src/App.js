import React from 'react';
import Navbar from './Navbar';
import Cart from './Cart';

class App extends React.Component {
  constructor(){
    super();
    this.state={products:[
        {
            price:99,title:'Watch',qty:1,img:'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQDY3ref_VW_34FR+watch-49-titanium-ultra_VW_34FR_WF_CO+watch-face-49-alpine-ultra_VW_34FR_WF_CO_GEO_IN?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1660713659063%2C1660927566964%2C1661371890735',id:1
        },
        {
            price:999,title:'Mobile Phone',qty:4,img:'https://cdn.shopify.com/s/files/1/0615/1631/6729/products/Vivo-Y15C-Available_d7417ee8-23f6-48fb-b11d-b928d891a430.jpg?v=1662215915&width=360',id:2
        },
        {
            price:1760,title:'Laptop',qty:10,img:'https://images.hindustantimes.com/tech/img/2021/09/14/1600x900/WhatsApp_Image_2021-09-14_at_5.13.31_PM_1631623490905_1631623503195.jpeg',id:3
        }
    ]
    }
  };
  handleIncreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      products[index].qty+=1;
      this.setState({products:products});
  }

  handleDecreaseQuantity=(product)=>{
      const {products}=this.state;
      const index=products.indexOf(product);
      if(products[index].qty===0){return;}
      products[index].qty-=1;
      this.setState({products:products});
  }

  handleDeleteProduct=(id)=>{
      const {products}=this.state;
      const items=products.filter((item)=>item.id!==id)
      this.setState({products:items});
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
    const {products}=this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
            products={products}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity}
            onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
      </div>
    );
  }
  
}

export default App;
