import { createContext,  useContext, useReducer } from 'react';
import { products } from '../data/data';
import reducer from '../reducer/reducer';


export const AppContext = createContext(null)

const initialState ={
  cart:products,
  toggle:false,
  data:{name:'', email:'', password1:'',password2:''},
  total:0,
  amount:0,
  loading:false,
}

export const AppProvider =({children})=>{
  const [state, dispatch] = useReducer(reducer, initialState)

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
  