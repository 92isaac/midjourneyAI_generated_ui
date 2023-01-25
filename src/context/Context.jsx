import { createContext,  useContext, useReducer, useEffect } from 'react';
import { products } from '../data/data';
import reducer from '../reducer/reducer';
import { products_url as url } from '../data/Contant';
import axios from 'axios'


export const AppContext = createContext(null)



const initialState ={
  testproducts:[],
  cart:products,
  toggle:false,
  data:{name:'', email:'', password1:'',password2:''},
  total:0,
  amount:0,
  loading:false,
  products_loading: false,
  products_error: false,
  featured_products: [],

}

export const AppProvider =({children})=>{
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchProducts = async (url) => {
    dispatch({ type: 'GET_PRODUCTS_BEGIN' });
    try {
      const response = await axios.get(url);
      const products = response.data;
      dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: products });
    } catch (e) {
      dispatch({ type: "GET_PRODUCTS_ERROR" });
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

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const globalData ={
    ...state, 
    clearCart, 
    removeOneItem,
    increase, 
    decrease,
  }
  
    
    return <AppContext.Provider value={globalData} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  