const reducer =(state, action)=>{
    if(action.type === 'CLEAR_CART'){
        return {...state, cart: []}
    }

    if (action.type === 'GET_PRODUCTS_BEGIN') {
        return { ...state, products_loading: true };
      }

    if (action.type === 'GET_PRODUCTS_SUCCESS') {
        const featured_products = action.payload.filter(
          (product) => product.featured === true
        );
        return {
          ...state,
          products_loading: false,
          products: action.payload,
          featured_products,
        };
      }
      if (action.type === 'GET_PRODUCTS_ERROR') {
        return {
          ...state,
          products_loading: false,
          GET_PRODUCTS_ERROR: true,
        };
      }


    if(action.type === 'REMOVE_ONE_ITEM'){
        return {...state, cart:state.cart.filter((cartItem)=>cartItem.id !== action.payload)}
    }

    if(action.type === 'INCREASE'){
        let increasePrice = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                // cartItem.price += cartItem.price
                return {...cartItem, amount:cartItem.amount + 1}
            }
            return cartItem
        })
        return {...state, cart:increasePrice}
    }
    if(action.type === 'DECREASE'){
        let increasePrice = state.cart.map((cartItem)=>{
            if(cartItem.id === action.payload){
                // cartItem.price += cartItem.price
                return {...cartItem, amount:cartItem.amount - 1}
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart:increasePrice}
    }
    return state
}
export default reducer
