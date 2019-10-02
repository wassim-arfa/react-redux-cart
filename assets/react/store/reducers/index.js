import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export default function cartReducer(state, action){
console.log(state, action)

    switch(action.type){
        case ADD_TO_CART: {
            return {
                ...state,
                cart: [
                    ...state.cart,
                    {
                        product: action.productInfo,
                        quantity: action.quantity
                    }
                ]
            }
        }
        case REMOVE_FROM_CART: {
            console.log(action.product.id, 'deleted')
            const newCart = state.cart.filter(cartItem=>cartItem.product.id != action.product.id)
            // console.log(newCart)
            return {
                ...state,
                cart: newCart
            }
        }
        default:
            return state;
    }
}
