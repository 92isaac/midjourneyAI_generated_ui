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
    
    return <AppContext.Provider value={{...state, clearCart, removeOneItem}} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
  }
  