import { createSelector } from 'reselect';

const selectUser = state => state.user;
//const selectCart = state => state.cart;

export const selectCurrentUser = createSelector(

    [selectUser /*,selectCart*/ ], //we can pass ass multiple parameters to function
    (user, /*cart*/) => user.currentUser
);