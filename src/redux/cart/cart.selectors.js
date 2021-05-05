import { createSelector } from 'reselect';

const selectCart = state => state.cart;  //takes cart from state

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItems = createSelector(

    [selectCart], //our data cart <-
    cart => cart.cartItems //function here -< we get cart items from cart
);

export const selectCartItemsCount = createSelector(
    [selectCartItems], // we get cart items -<
    cartItems => 
    cartItems.reduce((accumulatedQuantity, cartItem) => 
    accumulatedQuantity + cartItem.quantity,  //<-our functions for counting elements in shop
    0)
);

export const selectCartTotal = createSelector(

    [selectCartItems],
    cartItems => 
    cartItems.reduce((accumulatedQuantity, cartItem) => 
    accumulatedQuantity + cartItem.quantity * cartItem.price,  //<-our functions for counting elements in shop
    0)
);