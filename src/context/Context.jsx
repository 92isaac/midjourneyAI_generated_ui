import { createContext,  useContext, useReducer, useEffect } from 'react';
import { products } from '../data/data';
import reducer from '../reducer/reducer';
import { products_url as url } from '../data/Contant';
import axios from 'axios'


export const AppContext = createContext(null)



const initialState ={
  products:[],
  cart:products,
  toggle:false,
  data:{name:'', email:'', password1:'',password2:''},
  total:0,
  amount:0,
  loading:true,
  products_error: false,
  featured_products: [],
  single_product_error: false,

}

export const AppProvider =({children})=>{
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({ type: "GET_PRODUCTS_BEGIN" });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products });
    } catch (e) {
      dispatch({ type: "GET_PRODUCTS_ERROR", payload:e.message});
    }
  };

  const fetchSingleProducts = async (s_url) => {
    try {
      const response = await axios.get(s_url);
      const single_product = response.data;
      console.log(single_product)
      dispatch({ type: 'GET_SINGLE_PRODUCT_SUCCESS', payload: single_product });
    } catch (e) {
      dispatch({ type: 'GET_SINGLE_PRODUCT_ERROR', payload:e.message });
    }
  };

  const clearCart =()=>{
    dispatch({type:'CLEAR_CART'})
  }
  const removeOneItem =(id)=>{
    dispatch({type:'REMOVE_ONE_ITEM', payload:id})
  }

  const increase = (id)=>{
    dispatch({type:'INCREASE', payload:id})
  }

  const decrease = (id)=>{
    dispatch({type:'DECREASE', payload:id})
  };

  const setToggle=()=>{
dispatch({type: "TOGGLE"})
  }

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const globalData ={
    ...state, 
    clearCart, 
    removeOneItem,
    increase, 
    decrease,
    fetchSingleProducts,
    setToggle
  }
  
    
    return <AppContext.Provider value={globalData} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  