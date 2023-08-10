import { useState } from 'react';
import './Shop.css'
import { useEffect } from 'react';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';



const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('products.json')
        .then (res => res.json())
        .then (data => setProducts(data))
    } ,[])

    // useEffect ( () => {
    //     const storedCart = getShoppingCart();
        
    //     //get id
    //     for(const id in storedCart) {
    //         //get product using id   
    //         const savedProduct = products.find(product => product.id === id)
            

    //         //get quantity
    //         const quantity = storedCart[id];
    //         savedProduct.quantity = quantity;
    //         console.log(savedProduct)
    //     }
    // }, [products])

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step  1: get id of the addedProduct
        for ( const id in storedCart) {
            //step 2: get product from from state by using
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                // setp 3: add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //console.log('added product',addedProduct)
                // step 4: add the added product to the saved cart
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    } 
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart =  {handleAddToCart}
                        ></Product>)
                }
                
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Shop;