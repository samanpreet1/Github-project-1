import { useState } from "react";
import "./App.css";
import InventoryCard from "./InventoryCard.jsx";
import CartList from "./CartList.jsx";
import { products } from "./products.js";

export default function GroceriesApp() {
    //defining a variable cart and function setCart
    const [cart, setCart] = useState([]);

    // function to add product
    function addProduct(product) {
        setCart([...cart, product]);
    }

    //function to remove product
    function removeProduct(productId){
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
    }

    //function to empty cart
    function emptyCart(){
        setCart([]);
    }

    //calcultate total
    //function Total({cart}){
        //return cart.reduce((prevNum, curNum) => prevNum+ curNum, 0)}
       function Total ({ cart }) {
        const total = cart.reduce((prev, item) => {
            const price = parseFloat(item.price.replace("$",""));
            return prev + price;
        }, 0);
        return total;
    }
   
    //rendering
    return(
        <div className="GroceriesApp-Container">
            <InventoryCard products={ products } addProduct={addProduct} />
            <CartList 
            cart={cart} 
            removeProduct= {removeProduct} 
            emptyCart={emptyCart} 
            Total={Total}/>
        </div>
    );
}
