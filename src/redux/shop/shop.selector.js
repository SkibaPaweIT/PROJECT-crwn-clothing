import { createSelector} from 'reselect';

const seelectShop = state => state.shop;

export const selectCollections = createSelector(
    [seelectShop],
    shop => shop.collections
)