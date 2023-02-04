const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }


  if(action.type === "ADD_TO_CART") {
    return{ ...state, cart:[]}
  }

  // const addToCart = (itemId) => {
  //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  // };




  if(action.type === "TOGGLE"){
      return { ...state, toggle: !state.toggle };
  }
  

  if (action.type === "GET_PRODUCTS_SUCCESS") {
    const featured_products = action.payload.filter(
      (product) => product.featured === true
    );
    return {
      ...state,
      loading: false,
      products: action.payload,
      featured_products,
      product_error:false,

    };
  }



  if (action.type === "GET_PRODUCTS_ERROR") {
    return {
      ...state,
      loading: false,
      product_error:true,

    };
  }

  // if (action.type === "GET_SINGLE_PRODUCT_BEGIN") {
  //   return {
  //     ...state,
  //     single_product_loading: true,
  //     single_product_error: false,
  //   };
  // }

  if (action.type === "GET_SINGLE_PRODUCT_SUCCESS") {
    return {
      ...state,
      single_product_loading: false,
      single_product: action.payload,
  single_product_error: false,

    };
  }



  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_loading: false,
      single_product_error: true,
    };
  }



  if (action.type === "REMOVE_ONE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }



  if (action.type === "INCREASE") {
    let increasePrice = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload) {
        // cartItem.price += cartItem.price
        return { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: increasePrice };
  }



  if (action.type === "DECREASE") {
    let increasePrice = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload) {
          // cartItem.price += cartItem.price
          return { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.amount !== 0);
    return { ...state, cart: increasePrice };
  }



  return state;
};
export default reducer;
