import { createContext,  useContext, useState } from 'react';
import { products } from '../data/data';


export const AppContext = createContext(null)

const getDefaultCart=()=>{
    let cart={}
    for(let i=1; i <= products.length; i++){
        cart[i] =0
    }
    return cart
}
console.log(getDefaultCart())
export const AppProvider =({children})=>{
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const [data, setData] = useState('')
    const [toogle, setToogle] = useState(false)

    const updateData =(e)=>{
        setData(e.target.value)
    }

    const updateToogle =()=>{
        setToogle(!toogle)
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = products.find((product) => product.id === Number(item));
            totalAmount += cartItems[item] * itemInfo.price;
          }
        }
        return totalAmount;
      };

      const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
      };
    
      const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
      };
    
      const checkout = () => {
        setCartItems(getDefaultCart());
      };
  
    const globalData ={data, cartItems, updateData, updateToogle, getTotalCartAmount, addToCart, removeFromCart, updateCartItemCount, checkout}
    return <AppContext.Provider value={globalData} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  