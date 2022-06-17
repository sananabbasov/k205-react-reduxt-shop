import { LOGIN_USER, LOGOUT_USER } from "../Constants/UserConstants";

export const UserReducer = (state = { userInfo: [] }, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                userInfo: action.payload
            }
        case LOGOUT_USER:
        return{
            ...state,
            userInfo: []
        }
        default:
           return state
    }
}