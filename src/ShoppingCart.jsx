import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
    
    state = {products: [
        { id:1, productName: "iPhone", price: 1200, quantity: 0 },
        { id:2, productName: "Thinkpad", price: 3600, quantity: 0 },
        { id:3, productName: "Samsung QLED TV", price: 899, quantity: 0 },
        { id:4, productName: "Xbox", price: 799, quantity: 0 },
        { id:5, productName: "Dell Monitor", price: 2000, quantity: 0 },
        { id:6, productName: "Chromebook", price: 399, quantity: 0 },
    ],
};
    render() {
        return (
        <div className="container-fluid">
            <h4>Shopping Cart</h4>

            <div className="row">
                {this.state.products.map((prod) => {
                    return ( 
                        <Product 
                        key={prod.id} 
                        product={prod} 
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        >
                        <button className="btn btn-primary">Buy Now</button>
                        </Product>
                        );
                })}
            </div>
        </div>
        );
    }


    handleIncrement = (product, maxValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity < maxValue){
        allProducts[index].quantity++;

        this.setState({ products: allProducts});
        }
    };

    handleDecrement = (product, minValue) => {
        let allProducts = [...this.state.products];
        let index = allProducts.indexOf(product);

        if(allProducts[index].quantity > minValue) {
        allProducts[index].quantity--;
        this.setState({ products: allProducts});
        }
    };
}