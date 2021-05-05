import { createSelector } from 'reselect';

const selectCart = state => state.cart; 


export const selectCartItems = createSelector(

    [selectCart], //our data
    cart => cart.cartItems //function here
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce((accumulatedQuantity, cartItem) => 
    accumulatedQuantity + cartItem.quantity, 
    0)
)