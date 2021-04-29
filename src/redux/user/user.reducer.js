import { UserActionType } from './user.types';
//no jsx cause it doesn't contains jsx
const INITIAL_STATE = {
    currentUser: null
}
const userReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case UserActionType.SET_CURRENT_USER:
            return{
                ...state ,
                currentUser: action.payload
            }

        default:
            return state;
    }
}
export default userReducer;