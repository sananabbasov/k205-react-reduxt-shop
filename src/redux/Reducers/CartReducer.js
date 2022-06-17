import { ADD_TO_CART, GET_CART_ITEMS } from "../Constants/CartConstants";


export const CartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            let item = action.payload;
            let myCart = state.cartItems.find(c => c.id === item.id);
            if (myCart) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((a) => a.id === myCart.id ? item : a)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }

        case GET_CART_ITEMS:
            return {
                ...state,
                cart: action.payload
            }
        default:
            return state
    }
}